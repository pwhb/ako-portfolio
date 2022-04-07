// import { SmallSocialLinks } from "./contact";
// import socialLinks from "../constants/social-links.json";

import Link from "next/link";
import { SocialLinks } from "./common";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-4xl mx-auto px-3 md:px-0 py-2">
      <div className="flex flex-col md:flex-row md:justify-between my-20">
        <div className="rounded-lg hover:-rotate-3 text-center">
          <a
            href="#"
            className="font-semibold hover:font-bold hover:text-cyan-600"
          >
            Aung Ko Oo
          </a>
        </div>
        <div className="text-center mt-3">
          <small>&copy; Copyright {year}</small>
          <p>
            Powered by{" "}
            <a
              className="font-bold hover:underline"
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>{" "}
          </p>
        </div>
        <div className="text-center mx-auto md:mx-0 mt-3 md:mt-0">
          <Link href="/#contact">
            <a>
              <h4 className="font-medium">Contact</h4>
            </a>
          </Link>
          <SocialLinks footer={true} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
