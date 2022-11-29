import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";
import whitePlasticLogo from "../public/white-plastic-logo-2.png";
import localFont from "@next/font/local";

const fontDigitalDream = localFont({ src: "../public/Digitaldream.ttf" });

export default function Intro() {
  return (
    <section
      className={`px-10 py-10 flex  text-base md:text-3xl tracking-tighter  ${fontDigitalDream.className}`}
    >
      <p>
        Welcome to <span className="text-gray-300 bg-black">GIRLY</span> / We're
        a small team that builds software and explores a future of work that's
        radically softer and sweeter / Connect with us to learn more about our
        first project and how to get involved /{" "}
        <a
          href="https://twitter.com/GirlyDAO"
          className="text-gray-500 hover:text-blue-700 duration-200 transition-colors"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          href="https://app.commonground.cg/community/NCTwbWjKE5"
          className="text-gray-500 hover:text-blue-700 duration-200 transition-colors"
        >
          Common Ground
        </a>{" "}
        (Team + community chat. Referral link{" "}
        <a
          href="https://alpha.commonground.cg/?ref=hpYWNFp7"
          className="text-gray-500 hover:text-blue-700 duration-200 transition-colors"
        >
          HERE
        </a>{" "}
        if you need one) /{" "}
        <a
          href="https://app.wonderverse.xyz/invite/8eXyL8MQALoTYw"
          className="text-gray-500 hover:text-blue-700 duration-200 transition-colors"
        >
          Wonder
        </a>{" "}
        (Public team tasks) /{" "}
        <a
          href="https://github.com/GIRLYDAO"
          className="text-gray-500 hover:text-blue-700 duration-200 transition-colors"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
