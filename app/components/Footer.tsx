import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col justify-betweenmd:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect With Me!
            </h2>
            <p className="text-gray-600">
              I try. Dm me for any feedbacks.
              Thank you! All Love, <br />
              Shridhant
            </p>
          </div>
          <div className="flex flex-col justify-between md:flex-row items-center gap-8 md:w-2/3">
            <a
              href="https://www.linkedin.com/in/shridhantjaiswal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            >
              <Linkedin className="w-24 h-24 text-blue-600" />
            </a>
            <Link
              href="https://x.com/JShridhant"
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 bg-sky-100 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            >
              <Twitter className="w-24 h-24 text-sky-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
