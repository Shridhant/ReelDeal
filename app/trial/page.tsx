"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Copy } from "lucide-react";
import Link from "next/link";

interface ContentGenerationRequest {
  productName: string;
  contentType: "caption" | "script" | "comment" | "reply";
  platform?: string;
  relationship: string;
  tone: string;
  wordCount?: number;
  duration?: number;
  style?: string;
  userMessage?: string;
  brokenMessage?: string;
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
    userMessage: "",
    relationship: "",
    brokenMessage: "",
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
      const response = await fetch("/api/try", {
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
      console.error(err);
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
      className="max-w-4xl mx-auto mt-8 py-12 px-4 sm:px-6 lg:px-8"
    >
      <form onSubmit={handleSubmit} className=" space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <label
              htmlFor="contentType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Content Type
            </label>
            <select
              id="contentType"
              name="contentType"
              value={formData.contentType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="caption">Caption</option>
              <option value="script">Script</option>
              <option value="comment">Comment</option>
              <option value="reply">Message Reply</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="tone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tone
            </label>
            <input
              type="text"
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleInputChange}
              required
              placeholder="e.g., Enthusiastic, Polite"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {formData.contentType === "caption" && (
            <>
              <div>
                <label
                  htmlFor="platform"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  placeholder="e.g., Instagram, Facebook"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="wordCount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Word Count
                </label>
                <input
                  type="number"
                  id="wordCount"
                  name="wordCount"
                  value={formData.wordCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  placeholder="e.g., Savana Summer Dress"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </>
          )}
          {formData.contentType === "script" && (
            <>
              <div>
                <label
                  htmlFor="platform"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  placeholder="e.g., YouTube, Instagram"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Duration
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  placeholder="e.g., Vibrant Fitness Shoes, Stunning Mountain View"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="style"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Style
                </label>
                <input
                  type="text"
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Promotional, Advertise"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </>
          )}
          {formData.contentType === "comment" && (
            <>
              <div>
                <label
                  htmlFor="platform"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  placeholder="e.g., Instagram, Facebook"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="wordCount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Word Count
                </label>
                <input
                  type="number"
                  id="wordCount"
                  name="wordCount"
                  value={formData.wordCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Photo or Video Desc.
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Sister with her dog"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="style"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Comment Style
                </label>
                <input
                  type="text"
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Friendly, Excited"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </>
          )}
          {formData.contentType === "reply" && (
            <>
              <div>
                <label
                  htmlFor="relationship"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Relationship
                </label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Friends, Work"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="wordCount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Word Count
                </label>
                <input
                  type="number"
                  id="wordCount"
                  name="wordCount"
                  value={formData.wordCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="userMessage"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Senders Message
                </label>
                <textarea
                  id="userMessage"
                  name="userMessage"
                  value={formData.userMessage}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., How are you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="brokenMessage"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Unclear Message (Optional)
                </label>
                <textarea
                  id="brokenMessage"
                  name="brokenMessage"
                  value={formData.brokenMessage}
                  onChange={handleInputChange}
                  placeholder="Add a message you want to clarify or improve"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="style"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message Style
                </label>
                <input
                  type="text"
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g.,Cheerful, Gen-z"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" /> Generating...
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
          className="mt-6 p-4 bg-red-500 text-white rounded-lg text-center"
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
          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Generated Content
              </h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
              >
                <Copy className="mr-2" size={18} /> Copy
              </button>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
              <p className="whitespace-pre-wrap text-gray-800">
                {generatedContent}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
