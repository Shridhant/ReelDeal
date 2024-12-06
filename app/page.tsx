"use client";
import { Instagram, Youtube, BookOpen } from "lucide-react";

import Hero from "./components/Hero";

import TestimonialCard from "./components/TestimonialCard";

import FeatureCard from "./components/FeatureCard";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4">
        <Hero />

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Generate Content for Any Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Instagram className="w-12 h-12" />}
              title="Instagram Captions"
              description="Create engaging captions that boost your Instagram engagement"
            />
            <FeatureCard
              icon={<Youtube className="w-12 h-12" />}
              title="YouTube Scripts"
              description="Generate compelling scripts for your YouTube videos"
            />
            <FeatureCard
              icon={<BookOpen className="w-12 h-12" />}
              title="Blog Posts"
              description="Craft SEO-optimized blog posts that rank higher"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="ReelDeal has transformed our content creation process. We're now producing high-quality content in half the time!"
              author="Sarah J., Marketing Manager"
            />
            <TestimonialCard
              quote="The AI-generated scripts for our YouTube channel have significantly improved our viewer engagement. Highly recommended!"
              author="Mike T., Content Creator"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
