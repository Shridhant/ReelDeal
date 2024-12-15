import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center f">
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li className="hover:underline">
                <Link href="https://x.com/JShridhant">Twitter</Link>
              </li>
              <li className="hover:underline">
                <Link href="https://www.linkedin.com/in/shridhantjaiswal/">
                  LinkedIn
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="mailto:shridhantjaiswal@gmail.com" passHref>
                  Mail
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2024 Reel-Deal. All rights reserved.</p>
          <p>All love, Shridhant.</p>
        </div>
      </div>
    </footer>
  );
}
