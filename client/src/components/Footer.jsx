import React from "react";
import { Footer } from "flowbite-react";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-4 border-indigo-500/50">
      <div className="w-full max-w-7xl mx-auto">
        <Footer.LinkGroup col className="text-sky-600 ">
          <Footer.Link
            href="/"
            target="_blanc"
            rel="noopener noreferrer"
            className=" hover:text-sky-800 no-underline hover:underline"
          >
            Home
          </Footer.Link>
          <Footer.Link
            href="/contact"
            target="_blanc"
            rel="noopener noreferrer"
            className=" hover:text-sky-800 no-underline hover:underline"
          >
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
        <Footer.Divider />
        <div>
          <Footer.Copyright by="FMS blog" year={new Date().getFullYear()} />
        </div>
      </div>
    </Footer>
  );
}
