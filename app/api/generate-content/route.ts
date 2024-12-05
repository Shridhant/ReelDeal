import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

interface ContentGenerationRequest {
  productName: string;
  contentType: "caption" | "script" | "comment"; // Added "comment" to the type
  platform: string;
  tone: string;
  wordCount?: number;
  duration?: number;
  style?: string;
}

export function GET() {
  return NextResponse.json({
    msg: "Hello brother!",
  });
}

// Handle the POST request
export async function POST(req: NextRequest) {
  try {
    // Ensure the API key is set
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Server configuration error: Missing Google Generative AI API key.",
        },
        { status: 500 }
      );
    }

    // Initialize the AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Parse and validate request body
    const body: ContentGenerationRequest = await req.json();

    const {
      productName,
      contentType,
      platform,
      tone,
      wordCount,
      duration,
      style,
    } = body;

    // Validate required fields
    if (!productName || !contentType || !platform || !tone) {
      return NextResponse.json(
        {
          error:
            "Validation error: Missing required fields (productName, contentType, platform, tone).",
        },
        { status: 400 }
      );
    }

    // Select the model
    const model = await genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // You can add a fallback or allow dynamic selection
    });

    // Construct the prompt based on content type
    let prompt = "";
    if (contentType === "caption") {
      prompt = `Role:
      You are a creative and experienced social media strategist specializing in crafting engaging and platform-specific captions that resonate with the target audience.
      
      Goals:
      
      Create captivating captions tailored for the specific platform (${platform}).
      Highlight the product, service, or theme (${productName}) in a way that aligns with the brand's voice and goals.
      Ensure the tone matches the intended mood (${tone}), whether professional, witty, casual, or inspirational.
      Keep the caption concise, within the desired word count (${
        wordCount || 50
      }).`;
    } else if (contentType === "script") {
      prompt = `Role:
      You are a creative video scriptwriter skilled in crafting engaging, platform-optimized scripts that effectively highlight product features and captivate the target audience.
      
      Goals:
      
      Write a concise, platform-specific (${platform}) video script.
      Showcase the product (${productName}) by describing its features, benefits, and unique selling points.
      Use a ${tone} tone to connect with the audience while maintaining the platform's style.
      Ensure the script fits within the specified duration (${
        duration || 60
      } seconds).
      Adopt a ${
        style || "storytelling approach"
      } to make the content relatable and memorable.`;
    } else if (contentType === "comment") {
      prompt = `Role:
      You are a social media expert skilled in crafting engaging comments tailored to the platform and content type.
      
      Goals:
      
      Write a thoughtful and engaging comment on the picture or video provided.
      Describe the content based on the following description: ${productName}.
      Ensure the comment aligns with the tone of the content and platform (${platform}).
      The tone of the comment should be ${tone} (e.g., positive, funny, sarcastic, supportive).
      Make sure the comment is appropriate for the content type (image or video) and resonates with the target audience.
      
      Content description: ${productName} (This could be the description of the image or video).
      Type of comment: ${
        style || "engaging"
      } (e.g., witty, motivational, casual, or formal).`;
    } else {
      return NextResponse.json(
        { error: "Invalid content type specified." },
        { status: 400 }
      );
    }

    // Generate content using the model
    const result = await model.generateContent(prompt);
    const generatedContent = result.response.text();

    // Respond with the generated content
    return NextResponse.json({
      content: generatedContent,
    });
  } catch (error: any) {
    console.error("Error in content generation:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error: Unable to generate content.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
