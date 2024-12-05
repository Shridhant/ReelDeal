"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Copy } from "lucide-react";

interface ContentGenerationRequest {
  productName: string;
  contentType: "caption" | "script" | "comment"; // Added "comment" to the type
  platform: string;
  tone: string;
  wordCount?: number;
  duration?: number;
  style?: string;
}

export default function ProductPage() {
  const [formData, setFormData] = useState<ContentGenerationRequest>({
    productName: "",
    contentType: "caption",
    platform: "",
    tone: "",
    wordCount: 50,
    duration: 60,
    style: "",
  });
  const [generatedContent, setGeneratedContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("An error occurred while generating content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedContent)
      .then(() => {
        alert("Content copied to clipboard!");
      })
      .catch(() => {
        console.error("Failed to copy text: ");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto mt-3 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8">Generate AI Content</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium mb-1"
            >
              Product Name (or Photo Desc.)
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="contentType"
              className="block text-sm font-medium mb-1"
            >
              Content Type
            </label>
            <select
              id="contentType"
              name="contentType"
              value={formData.contentType}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="caption">Caption</option>
              <option value="script">Script</option>
              <option value="comment">Comment</option>{" "}
              {/* Added Comment Option */}
            </select>
          </div>
          <div>
            <label
              htmlFor="platform"
              className="block text-sm font-medium mb-1"
            >
              Platform
            </label>
            <input
              type="text"
              id="platform"
              name="platform"
              value={formData.platform}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="tone" className="block text-sm font-medium mb-1">
              Tone
            </label>
            <input
              type="text"
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          {formData.contentType === "caption" && (
            <div>
              <label
                htmlFor="wordCount"
                className="block text-sm font-medium mb-1"
              >
                Word Count
              </label>
              <input
                type="number"
                id="wordCount"
                name="wordCount"
                value={formData.wordCount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          )}
          {formData.contentType === "script" && (
            <>
              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium mb-1"
                >
                  Duration (seconds)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="style"
                  className="block text-sm font-medium mb-1"
                >
                  Style
                </label>
                <input
                  type="text"
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </>
          )}
          {formData.contentType === "comment" && (
            <div>
              <label htmlFor="style" className="block text-sm font-medium mb-1">
                Comment Style (e.g., witty, supportive)
              </label>
              <input
                type="text"
                id="style"
                name="style"
                value={formData.style}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-neutral-800 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          )}
        </div>
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Generating...
            </>
          ) : (
            "Generate Content"
          )}
        </motion.button>
      </form>
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-red-500 text-white rounded-md"
        >
          {error}
        </motion.div>
      )}
      {generatedContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
              <h2 className="text-2xl font-bold">Generated Content</h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
              >
                <Copy className="mr-2" size={18} />
                Copy
              </button>
            </div>
            <div className="bg-neutral-700 p-4 rounded-md">
              <p className="whitespace-pre-wrap">{generatedContent}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
