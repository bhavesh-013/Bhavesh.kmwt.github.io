import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Tape from './Tape';
import Doodle from './Doodle';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative pt-12 pb-16 px-4 bg-[#242424] text-[#F3F0E8] overflow-hidden">
      {/* Torn Paper Top Border Effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#F3F0E8] torn-divider-bottom" />

      <div className="max-w-5xl mx-auto pt-10">
        {/* Editorial Heading */}
        <div className="relative mb-12 sm:mb-16">
          <Tape width="90px" rotation="-2deg" className="-top-4 left-0 bg-white/20" />
          <span className="font-display font-extrabold text-xs tracking-widest px-2.5 py-1 bg-[#82A775] text-[#242424] inline-block uppercase mb-3">
            BACK COVER / GET IN TOUCH
          </span>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-black text-[#F3F0E8] tracking-tight leading-none uppercase">
            LET'S MAKE <br />
            <span className="text-[#82A775] italic font-normal">SOMETHING.</span>
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="font-handwriting text-2xl text-[#82A775] font-semibold">
              Open for frontend developer roles & creative collaborations
            </span>
            <Doodle type="arrow-curved" size={36} color="#82A775" />
          </div>
        </div>

        {/* Contact Information Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-700">
          {/* Main Direct Contact Details (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#F3F0E8]">
                {PERSONAL_INFO.name}
              </h3>
              <p className="font-handwriting text-xl text-[#82A775]">
                {PERSONAL_INFO.role} • Computer Science Undergraduate
              </p>
            </div>

            {/* Email Box with Copy */}
            <div className="p-4 bg-[#2D2D2D] border border-gray-700 rounded-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#82A775] text-[#242424] rounded-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base font-bold text-[#F3F0E8] hover:text-[#82A775] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 text-xs font-display font-bold border border-[#82A775] text-[#82A775] hover:bg-[#82A775] hover:text-[#242424] transition-colors rounded-xs flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-gray-300">
              <div className="p-3 bg-[#2D2D2D] border border-gray-700 rounded-xs flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#82A775]" />
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block">PHONE</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#82A775] font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-3 bg-[#2D2D2D] border border-gray-700 rounded-xs flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#82A775]" />
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block">LOCATION</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Studio Stamp (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-gray-400 block uppercase mb-3">
                SOCIAL PROFILES
              </span>

              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2D2D2D] border border-gray-700 hover:border-[#82A775] text-[#F3F0E8] hover:text-[#82A775] transition-colors rounded-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 font-display text-sm font-bold">
                    <Linkedin className="w-4 h-4 text-[#82A775]" />
                    <span>LINKEDIN</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#82A775] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2D2D2D] border border-gray-700 hover:border-[#82A775] text-[#F3F0E8] hover:text-[#82A775] transition-colors rounded-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 font-display text-sm font-bold">
                    <Github className="w-4 h-4 text-[#82A775]" />
                    <span>GITHUB</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#82A775] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Handwritten Closing Studio Stamp */}
            <div className="p-4 border-2 border-dashed border-[#82A775] rounded-xs text-center relative rotate-p1">
              <span className="font-handwriting text-2xl text-[#82A775] font-bold block">
                "Thanks for flipping through."
              </span>
              <span className="text-[10px] font-mono text-gray-400 block mt-1">
                Handcrafted for Bhavesh Kumawat • 2026 Edition
              </span>
            </div>
          </div>
        </div>

        {/* Copyright Footer Line */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-2">
          <span>© {new Date().getFullYear()} Bhavesh Kumawat. All rights reserved.</span>
          <span>Designed with paper textures & clean code</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
