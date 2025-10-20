'use client'
// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-tr from-indigo-500 to-pink-500 shadow-lg">
              <Image src="/imgs/logo.jpg" alt="Logo" fill sizes="40px" className="object-cover" />
            </div>
            <span className="text-lg font-extrabold text-black">
              Yassin Behi
            </span>
          </Link>

          {/* Navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              ["/", "Home"],
              ["/projects", "Projects"],
              ["/presentations", "Presentations"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={String(href)}
                href={String(href)}
                className="relative text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <span className="pb-1">{String(label)}</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Open menu"
              className="p-2 rounded-md text-gray-800 bg-white/60 hover:bg-white/80 shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/60 backdrop-blur-md border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
            {[
              ["/", "Home"],
              ["/projects", "Projects"],
              ["/presentations", "Presentations"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={String(href)} href={String(href)} className="py-2 text-gray-700">
                {String(label)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
