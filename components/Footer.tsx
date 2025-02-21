import { Facebook, Instagram, MailIcon, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const socials = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/eventstudios_",
      icon: <Instagram className="w-6 h-6 text-black" />,
    },
  ];
  return (
    <footer className="flex flex-col items-center p-4 justify-around py-8 md:py-12 lg:py-20 space-y-6 md:space-y-8 lg:space-y-10">
      <h3 className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl w-full text-center px-4">
        Connect with us on social media platforms!
      </h3>

      <div className="w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:justify-around lg:justify-center lg:space-x-16">
        <div className="flex flex-row items-center  space-x-6 md:space-x-16">
          {socials.map((social, index) => (
            <Link
              target="_blank"
              href={social.link}
              key={index}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              {social.icon}
              <h3 className="text-lg md:text-xl lg:text-2xl text-slate-500 font-bold hidden lg:flex">
                {social.name}
              </h3>
            </Link>
          ))}
        </div>

        <Link
          href={"tel:+233267618532"}
          className="flex items-center space-x-3 "
        >
          <Phone className="w-6 h-6 text-black" />
          <h3 className="text-lg md:text-xl lg:text-2xl text-slate-500 font-bold">
            +233 26 761 8532
          </h3>
        </Link>

        <Link
          href={"mailto: eventstudiosgh12@gmail.com"}
          className="flex items-center space-x-3 "
        >
          <MailIcon className="w-6 h-6 text-black" />
          <h3 className="text-lg md:text-xl lg:text-2xl text-slate-500 font-bold">
            eventstudiosgh12@gmail.com
          </h3>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
