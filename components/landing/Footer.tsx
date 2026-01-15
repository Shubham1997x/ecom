"use client";

import { Logo } from "../Logo";
import { useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationMessage = validateEmail(email);
    if (validationMessage) {
      setEmailError(validationMessage);
      toast.error(validationMessage);
      return;
    } else {
      setEmailError("");
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setEmail("");
      setEmailError("");
      setIsFocused(false);
      toast.success("Successfully subscribed to our newsletter!");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");
      if (process.env.NODE_ENV === "development") {
        console.error("Newsletter subscription error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gray-50"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="mb-7 flex items-center gap-3">
              <Logo className="w-auto h-10" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                  {siteConfig.logoText}
                </span>
                <span className="text-xs text-gray-500 leading-tight">
                  by Wantace
                </span>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-600 mt-7 font-normal">
              {siteConfig.footer.description}
            </p>
            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Twitter"
                  aria-label="Follow us on Twitter (opens in new tab)"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Facebook"
                  aria-label="Follow us on Facebook (opens in new tab)"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Instagram"
                  aria-label="Follow us on Instagram (opens in new tab)"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View our GitHub"
                  aria-label="View our GitHub repository (opens in new tab)"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Solutions
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleSmoothScroll(e, "#solutions")}
                  title="View our solutions"
                  className="flex text-base text-black transition-all duration-200 hover:text-primary-cta focus:text-primary-cta focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 rounded px-1"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                  title="Learn how it works"
                  className="flex text-base text-black transition-all duration-200 hover:text-primary-cta focus:text-primary-cta focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 rounded px-1"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  onClick={(e) => handleSmoothScroll(e, "#case-studies")}
                  title="View case studies"
                  className="flex text-base text-black transition-all duration-200 hover:text-primary-cta focus:text-primary-cta focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 rounded px-1"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Support
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  title="Contact us"
                  className="flex text-base text-black transition-all duration-200 hover:text-primary-cta focus:text-primary-cta focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 rounded px-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, "#faq")}
                  title="Frequently asked questions"
                  className="flex text-base text-black transition-all duration-200 hover:text-primary-cta focus:text-primary-cta focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 rounded px-1"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleSmoothScroll(e, "#reviews")}
                  title="Read testimonials"
                  className="flex text-base text-black transition-all duration-200 hover:text-primary-cta focus:text-primary-cta focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 rounded px-1"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(validateEmail(e.target.value));
                    }}
                    onFocus={() => {
                      setIsFocused(true);
                      setEmailError("");
                    }}
                    onBlur={() => setIsFocused(false)}
                    required
                    className="block w-full p-4 pt-6 pb-2 text-black transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-cta focus:border-primary-cta caret-gray-600"
                    aria-required="true"
                    aria-invalid={emailError ? "true" : "false"}
                    aria-describedby="email-helper"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 text-sm transition-all duration-200 pointer-events-none ${
                      email || isFocused
                        ? `top-2 text-xs ${emailError ? "text-red-500" : "text-primary-cta"}`
                        : "top-1/2 -translate-y-1/2 text-gray-500"
                    }`}
                  >
                    Enter your email
                  </label>
                </div>
                <p
                  id="email-helper"
                  className={`mt-1 text-sm ${emailError ? "text-red-500" : "text-gray-500"}`}
                >
                  {emailError ? emailError : "We'll send only important updates. No spam."}
                </p>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center px-4 py-2 mt-3 text-base font-medium text-white bg-primary-cta hover:bg-primary-cta-hover rounded-md focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-cta transition-all duration-200 cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          {siteConfig.footer.copyright} by {siteConfig.siteName}
        </p>
      </div>
    </section>
  );
};

