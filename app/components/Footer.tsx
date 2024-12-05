import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2024 ReelDeal. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
