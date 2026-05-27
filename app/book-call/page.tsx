"use client";

import Link from "next/link";

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-[#f1f1ef] text-black overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f1f1ef]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[1050px] items-center justify-between px-8 py-5">

          <Link
            href="/"
            className="text-[1.1rem] font-medium tracking-tight"
          >
            Omni.visualss
          </Link>

          <Link
            href="/"
            className="rounded-full border border-black/10 px-6 py-2.5 text-[14px] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Back Home
          </Link>

        </div>

      </header>

      {/* MAIN SECTION */}

<section className="mx-auto max-w-[1180px] px-6 pb-16 pt-28">

  <div className="overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.035)]">

  <iframe
    src="https://cal.com/chiranjib-hati-ge4i6k/30min?theme=light&layout=month_view"
    width="100%"
    height="720"
    frameBorder="0"
    className="w-full"
  />

</div>

</section>
    </main>
  );
}