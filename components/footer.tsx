import React from "react";
import Socials from "./socials";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const Footer = async () => {
  const services: {
    serviceName: string;
    slug: { current: string; _type: string };
  }[] = await client.fetch(`*[_type == "services"]{serviceName, slug}`);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-8 ">
          <div className="flex flex-col gap-3 border-b border-gray-700 pb-8 md:border-b-0 md:border-r md:pr-8">
            <h2 className="text-xl font-bold text-orange-500">Who we are</h2>
            <Link
              href="/about"
              className="hover:text-orange-400 transition-colors duration-500"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-400 transition-colors duration-500"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-3 border-b border-gray-700 pb-8 md:border-b-0 md:border-r md:pr-8">
            <h2 className="text-xl font-bold text-orange-500">Insights</h2>
            <Link
              href="/projects"
              className="hover:text-orange-400 transition-colors duration-500"
            >
              Our Cases
            </Link>
          </div>
          <div className="flex flex-col gap-3 border-b border-gray-700 pb-8 md:border-b-0 md:border-r md:pr-8">
            <h2 className="text-xl font-bold text-orange-500">Services</h2>
            {services.map((service) => (
              <Link
                key={service.slug.current}
                href={`/services/${service.slug.current}`}
                className="hover:text-orange-400 capitalize transition-colors duration-500"
              >
                {service.serviceName}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-orange-500">Follow us On</h2>
            <Socials />
          </div>
        </div>
        <div className="mt-8 text-center flex sm:flex-row flex-col items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-8">
          <p>© {new Date().getFullYear()} Fiducia Net. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/muhammadahmad1857"
              target="_blank"
              className="hover:text-orange-400 transition-colors duration-500 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-orange-500 before:transition-all before:duration-500 before:hover:w-full font-semibold mb-4 relative group"
            >
              Muhammad Ahmad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
