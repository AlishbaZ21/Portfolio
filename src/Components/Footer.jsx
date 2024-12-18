import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const FooterPage = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/AlishbaZ21",
      label: "Github",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/alishba-shahid-137399313/",
      label: "LinkedIn",
    },
    {
      Icon: FaEnvelope,
      href: "mailto:lishayshahid.bahrian@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div>
      <footer className="bg-purple-500 text-white py-10">
        <div className="container mx-auto">
          {/* Divider */}
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"></div>

          {/* Call to Action */}
          <p className="text-lg mb-6">
            Ready to collaborate? Let's create something amazing together!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                className="text-white hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-6 text-sm">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white">
            &copy; {new Date().getFullYear()} Lishay Creates. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
