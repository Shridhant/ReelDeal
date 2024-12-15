import {
  ArrowRight,
  CheckCircle,
  Instagram,
  Youtube,
  BookOpen,
  Sparkles,
  MessageSquare,
  Zap,
  BarChart3,
} from "lucide-react";

import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
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
              description="Create engaging captions that boost your Instagram engagement and reach your target audience effectively."
            />
            <FeatureCard
              icon={<Youtube className="w-12 h-12" />}
              title="YouTube Scripts"
              description="Generate compelling video scripts that keep viewers engaged and help grow your channel."
            />
            <FeatureCard
              icon={<MessageSquare className="w-12 h-12" />}
              title="Social Comments"
              description="Create authentic, engaging comments that foster meaningful interactions with your community."
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Reel-Deal?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform helps you create better content faster,
              letting you focus on what matters most - growing your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Generate high-quality content in seconds, not hours. Save time
                without compromising on quality.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                Leverage advanced AI technology to create content that resonates
                with your audience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5">
              <BarChart3 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-gray-400">
                Get insights and recommendations based on what works best for
                your platform and audience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10" />
            <div className="relative z-10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Content?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already using ContentAI to
                create better content faster.
              </p>
              <Link href="/trial">
                <button className="px-8 py-4 bg-indigo-500 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
