"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-4 md:py-5">

        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
          Omni.visualss
        </h1>

        <nav className="hidden gap-10 text-xs md:text-sm text-gray-300 md:flex">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/work" className="hover:text-white transition">
            Portfolio
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

        </nav>

        <button className="rounded-full bg-[#7c3aed] px-4 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium transition hover:scale-105 hover:bg-[#8b5cf6]">
          Schedule a Call
        </button>

      </div>
    </header>
  );
}