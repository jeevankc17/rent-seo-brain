"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
  };

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-40 py-8 md:py-16 bg-neutral-950 flex flex-col items-start gap-2.5">
      {/* Main Content */}
      <div className="w-full max-w-[1128px] mx-auto flex flex-col items-start gap-6 md:gap-9">
        {/* Newsletter Section */}
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2.5 max-w-md">
              <h2 className="text-white text-lg md:text-xl font-bold font-urbanist leading-7">
                Join Our Newsletter
              </h2>
              <p className="text-neutral-400 text-base md:text-lg font-medium font-urbanist leading-normal">
                Be the first to know about our updates and offers.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
            >
              <div className="w-full sm:w-80">
                <div className="p-3 rounded-lg border border-zinc-700">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-zinc-400 text-sm font-medium font-urbanist leading-tight outline-none placeholder:text-zinc-400"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-5 py-3 bg-blue-500 rounded-lg flex justify-center items-center hover:bg-blue-600 transition-colors"
              >
                <span className="text-white text-sm font-semibold font-urbanist">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
          <hr />
        </div>

        {/* Navigation Links */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
          {/* Logo */}
          <div className="w-28 h-16 relative">
            <Image
              src="/logo.png"
              alt="Rent SEO Brain Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Links Container */}
          <div className="w-full lg:w-[752px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            {/* Services Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-xl font-semibold font-urbanist">
                Services
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="#"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  SEO Optimization
                </a>
                <a
                  href="#"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  Google Ads
                </a>
                <a
                  href="#"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  Content Marketing
                </a>
                <a
                  href="#"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  Landing Page Design
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-xl font-semibold font-urbanist">
                Company
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="#"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-xl font-semibold font-urbanist">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+9779843308816"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  +977 9843308816
                </a>
                <a
                  href="mailto:solutionwithnabin@gmail.com"
                  className="text-neutral-400 text-lg font-medium font-['Urbanist'] leading-none hover:text-white transition-colors"
                >
                  solutionwithnabin@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col gap-6">
          <hr />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-zinc-500 text-sm font-normal font-urbanist order-2 md:order-1">
              © 2024 Rent SEO Brain. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 order-1 md:order-2">
              <a
                href="#"
                className="text-zinc-500 text-sm font-normal font-['Urbanist'] leading-none hover:text-zinc-300 transition-colors"
              >
                English
              </a>
              <a
                href="#"
                className="text-zinc-500 text-sm font-normal font-['Urbanist'] leading-none hover:text-zinc-300 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-zinc-500 text-sm font-normal font-['Urbanist'] leading-none hover:text-zinc-300 transition-colors"
              >
                Legal
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 order-3">
              <a
                href="#"
                className="w-6 h-6 text-zinc-500 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="w-6 h-6 text-zinc-500 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="w-6 h-6 text-zinc-500 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="w-6 h-6 text-zinc-500 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects - Made responsive */}
      <div className="absolute w-full h-96 bottom-0 left-0 opacity-30 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          {/* Grid Pattern using CSS Grid */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(148, 163, 184, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          >
            {/* Highlighted cells overlay */}
            <div className="absolute inset-0">
              {/* Add some highlighted cells at specific positions */}
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "400px",
                  top: "80px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "720px",
                  top: "80px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "240px",
                  top: "160px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "560px",
                  top: "160px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "880px",
                  top: "160px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "160px",
                  top: "240px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "640px",
                  top: "240px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "320px",
                  top: "320px",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div
                className="absolute bg-slate-700/50"
                style={{
                  left: "800px",
                  top: "320px",
                  width: "80px",
                  height: "80px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Gradient Overlays - Adjusted for mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_52.19%_at_50%_0%,_black_0%,_rgba(0,0,0,0)_95%)]" />
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent z-10" />
      </div>

      {/* Blur Effects - Made responsive with relative positioning */}
      <div className="absolute w-48 md:w-64 h-40 md:h-56 bg-blue-500/60 rounded-full blur-[100px] md:blur-[209.73px] top-[20%] right-[5%]" />
      <div className="absolute w-48 md:w-64 h-40 md:h-56 bg-blue-500/60 rounded-full blur-[100px] md:blur-[205.79px] top-[-5%] left-[-5%]" />
      <div className="absolute w-48 md:w-64 h-40 md:h-56 bg-blue-500/60 rounded-full blur-[100px] md:blur-[205.79px] bottom-[10%] left-1/2 transform -translate-x-1/2" />
    </div>
  );
};

export default Footer;
