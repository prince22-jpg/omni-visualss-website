"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">

          <h1 className="text-[1.15rem] font-medium tracking-tight">
            Omni.visualss
          </h1>

          <nav className="hidden items-center gap-10 text-[14px] text-black/55 md:flex">

           <Link
  href="/portfolio"
  className="transition hover:text-blue-500"
>
  Work
</Link>
            <a
  href="#about"
  className="transition hover:text-blue-500"
>
  About
</a>
            <Link
  href="/contact"
  className="transition hover:text-blue-500"
>
  Contact
</Link>

          </nav>

          <Link
  href="/book-call"
  className="rounded-full border border-black/10 px-6 py-2.5 text-[14px] transition-all duration-300 hover:bg-blue-500 hover:text-white"
>
  Book Call ↗
</Link>

        </div>

      </header>
{/* HERO */}

<section className="relative mx-auto max-w-[1440px] overflow-hidden bg-white px-4 pt-28 pb-20 md:px-8 md:pt-36 md:pb-24">

  {/* GRID */}

  <div className="absolute inset-0 z-0 opacity-[0.07]">

    <div className="h-full w-full bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:110px_110px]" />

  </div>

  {/* BLUE SOFT GLOW */}

  

  {/* SIDE DETAILS */}

  <div className="absolute left-[1.2%] bottom-[140px] hidden xl:block">

    <div className="flex items-center gap-4 rotate-[-90deg] origin-left scale-[0.82]">

      <div className="h-[2px] w-[120px] bg-blue-500" />

      <p className="text-[11px] uppercase tracking-[0.45em] text-black/50">

        Visual Storytelling

      </p>

    </div>

  </div>

  <div className="absolute right-[1.2%] bottom-[190px] hidden xl:block">

    <div className="flex items-center gap-4 rotate-90 origin-right scale-[0.82]">

      <div className="h-[2px] w-[120px] bg-blue-500" />

      <p className="text-[11px] uppercase tracking-[0.45em] text-black/50">

        Frame By Frame

      </p>

    </div>

  </div>

  {/* BIG BACKGROUND TEXT */}

  <h2 className="pointer-events-none absolute bottom-[40px] left-1/2 z-[1] hidden -translate-x-1/2 text-[90px] font-black uppercase leading-none tracking-[-0.08em] text-blue-500/[0.04] lg:block md:text-[240px]">

    CREATE

  </h2>

  <div className="relative z-10 grid grid-cols-1 gap-14 px-0 lg:grid-cols-2">

    {/* LEFT */}

    <div className="relative pt-4 md:pt-16">

      {/* SMALL LABEL */}

      <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-5">

        <p className="text-[9px] font-medium uppercase tracking-[0.42em] text-black/60 md:text-[11px]">

          Cinematic Editing • Motion Design

        </p>

        <div className="h-[2px] w-[140px] bg-blue-500" />

      </div>

      {/* MAIN HEADING */}

      <h1 className="max-w-[650px] text-[2.15rem] leading-[0.92] font-semibold tracking-[-0.07em] sm:text-[2.5rem] md:text-[5.2rem]">

  <span className="bg-gradient-to-b from-[#2563eb] via-[#60a5fa] to-[#f5f9ff] bg-clip-text text-transparent">
    Premium visuals
  </span>

  <br />

  <span className="bg-gradient-to-b from-[#2563eb] via-[#60a5fa] to-[#f5f9ff] bg-clip-text text-transparent">
    for brands,
  </span>

  <br />

 <span className="bg-gradient-to-b from-[#2563eb] via-[#60a5fa] to-[#f5f9ff] bg-clip-text text-transparent">
    creators &
  </span>

  <br />

 <span className="bg-gradient-to-b from-[#2563eb] via-[#60a5fa] to-[#f5f9ff] bg-clip-text text-transparent">
    modern media.
  </span>

</h1>
      {/* DESCRIPTION */}

      <p className="mt-5 max-w-[500px] text-[13px] leading-relaxed text-black/60 md:mt-10 md:text-[18px]">

        Cinematic storytelling, premium editing and
        motion design crafted for retention and
        modern visual identity.

      </p>

      {/* BUTTONS */}

      <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-12">

        {/* VIEW PROJECTS */}

        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-medium text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition duration-300 hover:scale-[1.03] hover:bg-blue-500"
        >
          View Projects ↗
        </Link>

        {/* CONTACT */}

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-blue-500/60 bg-white px-7 py-3 text-[13px] font-medium text-blue-600 shadow-[0_0_18px_rgba(59,130,246,0.18)] transition hover:bg-blue-600 hover:text-white sm:px-9 sm:py-4 sm:text-[15px]"
        >

          Contact ↗

        </Link>

      </div>

      {/* BOTTOM MINI TEXT */}

      <div className="mt-10 ml-[10px] flex items-center gap-5">

        <div className="h-[2px] w-[58px] bg-blue-500" />

        <p className="text-[11px] uppercase tracking-[0.18em] text-black/60">

          Edits That Connect.

        </p>

      </div>

    </div>

    {/* RIGHT */}

    <div className="relative h-[430px] md:h-[860px]">

      {/* MAIN CARD */}

      <div className="absolute right-[8%] top-0 z-[5]">

        <div className="relative">

          {/* SOFT BLUE GLOW */}

          <div className="absolute -inset-[18px] rounded-[8px] bg-blue-400/10 blur-[22px] opacity-70 pointer-events-none" />

          {/* SECONDARY GLOW */}

          <div className="absolute -inset-[14px] rounded-[6px] border-[4px] border-blue-300/40 blur-[14px] opacity-100 pointer-events-none" />

          {/* MAIN FRAME */}

          <div className="absolute inset-0 rounded-[2px] border-[3px] border-white pointer-events-none shadow-[0_0_25px_rgba(59,130,246,0.25)]" />

          {/* INNER LIGHT */}

          <div className="absolute inset-[10px] rounded-[2px] border border-blue-200/30 pointer-events-none" />

          {/* OUTER GLOW */}

          <div className="absolute -inset-[8px] border-[3px] border-blue-300/40 blur-[10px] opacity-100 pointer-events-none" />

          {/* CORNERS */}

          <div className="absolute left-5 top-5 h-7 w-7 border-l-[3px] border-t-[3px] border-blue-300" />

          <div className="absolute right-5 top-5 h-7 w-7 border-r-[3px] border-t-[3px] border-blue-300" />

          <div className="absolute bottom-5 left-5 h-7 w-7 border-b-[3px] border-l-[3px] border-blue-300" />

          <div className="absolute bottom-5 right-5 h-7 w-7 border-b-[3px] border-r-[3px] border-blue-300" />

          <img
            src="images/portfolio-4..jpg"
            className="h-[340px] w-[270px] object-cover brightness-100 contrast-100 saturate-90 md:h-[640px] md:w-[520px]"
          />

        </div>

      </div>

      {/* FLOATING CARD */}

      <div className="absolute right-0 top-[150px] z-[10] w-[180px] md:top-[240px] md:w-[320px]">

        <div className="relative overflow-hidden border border-blue-300/40 bg-white/95 shadow-[0_0_18px_rgba(59,130,246,0.15)] backdrop-blur-xl">

          {/* BLUE GLOW */}

          <div className="absolute -inset-[12px] bg-blue-400/10 blur-[18px] opacity-60 pointer-events-none" />

          {/* OUTER FRAME */}

          <div className="absolute -inset-[8px] border-[3px] border-blue-300/40 blur-[10px] opacity-100 pointer-events-none" />

          {/* MAIN FRAME */}

          <div className="absolute inset-0 border-[3px] border-white shadow-[0_0_22px_rgba(59,130,246,0.25)] pointer-events-none" />

          {/* INNER LIGHT */}

          <div className="absolute inset-[8px] border border-blue-200/30 pointer-events-none" />

          {/* CORNERS */}

          <div className="absolute left-4 top-4 z-20 h-6 w-6 border-l-[3px] border-t-[3px] border-blue-300" />

          <div className="absolute right-4 top-4 z-20 h-6 w-6 border-r-[3px] border-t-[3px] border-blue-300" />

          <div className="absolute bottom-4 left-4 z-20 h-6 w-6 border-b-[3px] border-l-[3px] border-blue-300" />

          <div className="absolute bottom-4 right-4 z-20 h-6 w-6 border-b-[3px] border-r-[3px] border-blue-300" />

          <img
            src="images/portfolio-6.jpeg"
            className="h-[220px] w-full object-cover brightness-100 contrast-100 saturate-100 md:h-[420px]"
          />

        </div>

      </div>

      {/* CIRCLE IMAGE */}

      <div className="absolute bottom-[-14px] right-[10px] z-[8] md:bottom-[10px] md:right-[40px]">

        <div className="relative">

          {/* BLUE GLOW */}

          <div className="absolute -inset-[10px] rounded-full bg-blue-400/10 blur-[18px] opacity-60 pointer-events-none" />

          {/* OUTER RING */}

          <div className="absolute -inset-[8px] rounded-full border-[4px] border-blue-300/40 blur-[10px] pointer-events-none" />

          {/* MAIN RING */}

          <div className="absolute inset-0 rounded-full border-[4px] border-white shadow-[0_0_25px_rgba(59,130,246,0.22)] pointer-events-none" />

          <img
            src="images/portfolio-7.jpeg"
            className="h-[120px] w-[120px] rounded-full object-cover brightness-100 contrast-100 saturate-100 md:h-[260px] md:w-[260px]"
          />

        </div>

      </div>

    </div>

  </div>

</section>

{/* DARK SHOWCASE */}

<section className="relative overflow-hidden bg-white pt-0 pb-16 md:pb-32">

  {/* WHITE GRID */}

<div className="absolute inset-0 z-0">

  <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:80px_80px]" />

</div>

  <div className="relative z-10 mx-auto overflow-hidden bg-black px-4 py-8 shadow-[0_0_120px_rgba(0,0,0,0.35)] md:h-[1650px] md:max-w-[1440px] md:px-10 md:py-16">
   {/* CLEAN PREMIUM GRID */}

<div className="absolute inset-0 z-[1]">

  <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.45)_1.6px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.45)_1.6px,transparent_1px)] bg-[size:110px_110px]" />

</div>

  {/* DESIGN DETAILS */}

<div className="absolute inset-0 z-[2] overflow-hidden">

  
  {/* BIG TYPO */}

  <h2 className="absolute left-[-1%] top-[180px] text-[260px] font-extrabold uppercase leading-none tracking-[-0.08em] bg-gradient-to-b from-[#2563eb]/85 via-[#3b82f6]/45 to-white/[0.14] bg-clip-text text-transparent">
  speed
</h2>

<h2 className="absolute left-[12%] top-[980px] text-[180px] font-extrabold uppercase leading-none tracking-[-0.08em] bg-gradient-to-b from-[#3b82f6]/85 via-[#60a5fa]/42 to-white/[0.14] bg-clip-text text-transparent">
  Trend
</h2>

<h2 className="absolute left-[14%] top-[1120px] text-[140px] font-extrabold uppercase leading-none tracking-[-0.08em] bg-gradient-to-b from-[#60a5fa]/80 via-[#93c5fd]/38 to-white/[0.12] bg-clip-text text-transparent">
  Cuts
</h2>

  {/* GLOW ORBS */}

  <div className="absolute right-[10%] top-[280px] h-[260px] w-[260px] rounded-full bg-white/10 blur-[140px]" />
  {/* MINI BLOCKS */}

  <div className="absolute left-[28%] top-[1240px] flex items-center gap-4">

    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-white text-[18px] font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.18)]">

      hot

    </div>

    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] border border-black/10 bg-blue-500/20 text-[22px] text-white shadow-[0_0_40px_rgba(255,200,0,0.22)]">

      &

    </div>

    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-white text-[18px] font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.18)]">

      sweet

    </div>

    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-orange-400 text-[18px] italic text-white shadow-[0_0_40px_rgba(255,140,0,0.28)]">

      loops

    </div>

  </div>

  {/* DARK GRADIENT AREAS */}

  <div className="absolute left-0 top-0 h-[400px] w-full bg-gradient-to-b from-black via-black/40 to-transparent" />

  <div className="absolute bottom-0 left-0 h-[500px] w-full bg-gradient-to-t from-black via-black/70 to-transparent" />

</div>
  {/* CARD 1 */}

  <div className="absolute hidden md:block left-[10%] top-[120px] z-[5]">

    <div className="relative rounded-[22px]">

      <div className="absolute -inset-2 bg-white/20 blur-xl opacity-40" />
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[3.5px] border-white pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-[5px] border-white/80 opacity-90 blur-[10px] pointer-events-none" />



{/* INNER PREMIUM LINE */}


{/*Card 1 */}

      <img
  src="/images/portfolio-5.jpeg"
  alt="Landscape"
   className="relative h-[240px] w-[430px] object-cover border-[1.5px] border-white/20"
/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* CARD 2 */}

  <div className="absolute hidden md:block left-[44%] top-[60px] z-[5]">

    <div className="group relative rounded-[0px]">
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[2px] border-white/95 pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-2 border-white/60 opacity-90 blur-[10px] pointer-events-none" />



{/* INNER PREMIUM LINE */}

      <div className="absolute -inset-2 rounded-[0px] bg-white/20 blur-xl opacity-40" />

      <img
  src="/images/portfolio-15.jpeg"
  alt="Landscape"
  className="relative h-[360px] w-[620px] rounded-[0px] object-cover border border-white/20"
/>

      <div className="absolute inset-0 rounded-[0px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* CARD 3 */}

  <div className="absolute hidden md:block left-[12%] top-[520px] z-[5]">

    <div className="relative rounded-[0px]">
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[2px] border-white/95 pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-2 border-white/60 opacity-90 blur-[10px] pointer-events-none" />


{/* INNER PREMIUM LINE */}

      <div className="absolute -inset-2 rounded-[0px] bg-white/20 blur-xl opacity-40" />

      <img
  src="/images/portfolio-8.jpeg"
  alt="Portrait"
  className="relative h-[520px] w-[260px] rounded-[0px] object-cover border border-white/20"
/>

      <div className="absolute inset-0 rounded-[0px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* CARD 4 */}

  <div className="absolute hidden md:block left-[39%] top-[500px] z-[5]">

    <div className="relative rounded-[0px]">
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[2px] border-white/95 pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-2 border-white/60 opacity-90 blur-[10px] pointer-events-none" />


{/* INNER PREMIUM LINE */}

      <div className="absolute -inset-2 rounded-[0px] bg-white/20 blur-xl opacity-40" />

      <img
  src="/images/portfolio-9.jpeg"
  alt="Portrait"
  className="relative h-[520px] w-[260px] rounded-[0px] object-cover border border-white/20"
/>
      <div className="absolute inset-0 rounded-[0px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* CARD 5 */}

  <div className="absolute hidden md:block right-[10%] top-[560px] z-[5]">

    <div className="relative rounded-[0px]">
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[2px] border-white/95 pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-2 border-white/60 opacity-90 blur-[10px] pointer-events-none" />


{/* INNER PREMIUM LINE */}

      <div className="absolute -inset-2 rounded-[0px] bg-white/20 blur-xl opacity-40" />

      <img
  src="/images/portfolio-10.jpeg"
  alt="Portrait"
  className="relative h-[520px] w-[260px] rounded-[0px] object-cover border border-white/20"
/>

      <div className="absolute inset-0 rounded-[0px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* CARD 6 */}

  <div className="absolute hidden md:block left-[14%] bottom-[90px] z-[5]">

    <div className="relative rounded-[0px]">
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[2px] border-white/95 pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-2 border-white/60 opacity-90 blur-[10px] pointer-events-none" />



{/* INNER PREMIUM LINE */}

      <div className="absolute -inset-2 rounded-[0px] bg-white/20 blur-xl opacity-40" />

       <img
  src="/images/portfolio-2.jpeg"
  alt="Landscape"
  className="relative h-[360px] w-[520px] rounded-[0px] object-cover border border-white/20"
/>


      <div className="absolute inset-0 rounded-[0px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* CARD 7 */}

  <div className="absolute hidden md:block left-[60%] bottom-[120px] z-[5]">

    <div className="relative rounded-[0px]">
      {/* MAIN BRIGHT FRAME */}

<div className="absolute inset-0 z-[25] border-[2px] border-white/95 pointer-events-none" />

{/* OUTER GLOW */}

<div className="absolute -inset-[6px] z-[24] rounded-[2px] border-2 border-white/60 opacity-90 blur-[10px] pointer-events-none" />



{/* INNER PREMIUM LINE */}

      <div className="absolute -inset-2 rounded-[0px] bg-white/20 blur-xl opacity-40" />

      <img
  src="/images/portfolio-3.jpeg"
  alt="Landscape"
 className="relative h-[280px] w-[420px] rounded-[0px] object-cover border border-white/20"
/>


      <div className="absolute inset-0 rounded-[0px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </div>

  </div>

  {/* MOBILE DARK SHOWCASE */}

<div className="relative z-10 md:hidden">

  {/* BIG TYPO */}

  <h2 className="absolute left-[-6px] top-[18px] text-[52px] font-black uppercase tracking-[-0.08em] text-white/[0.05]">
  Speed
</h2>

  <h2 className="absolute right-0 top-[620px] text-[58px] font-black uppercase tracking-[-0.08em] text-white/[0.08]">
    Trend
  </h2>

  {/* GRID LAYOUT */}

  <div className="relative flex flex-col gap-6 pt-24">

    {/* ROW 1 */}

    <div className="grid grid-cols-2 gap-3">

     <img
  src="/images/portfolio-5.jpeg"
  alt="Landscape"
   className="h-[150px] w-full object-cover border border-white/20"
/>

      <img
  src="/images/portfolio-15.jpeg"
  alt="Landscape"
  className="h-[150px] w-full object-cover border border-white/20"
/>

    </div>

    {/* ROW 2 */}

    <div className="grid grid-cols-2 gap-3">

      <img
  src="/images/portfolio-8.jpeg"
  alt="Portrait"
  className="relative h-[240px] w-[430px] object-cover border-[1.5px] border-white/20"
/>
      <img
  src="/images/portfolio-9.jpeg"
  alt="Portrait"
  className="h-[240px] w-full object-cover border border-white/20"
/>
    </div>

    {/* ROW 3 */}

    <div className="grid grid-cols-3 gap-2">

     <img
  src="/images/portfolio-2.jpeg"
  alt="Landscape"
  className="h-[120px] w-full object-cover border border-white/20"
/>

      <img
  src="images/portfolio-6.jpeg"
  alt="Landscape"
 className="h-[120px] w-full object-cover border border-white/20"
/>
      <img
  src="/images/portfolio-10.jpeg"
  alt="Landscape"
 className="h-[120px] w-full object-cover border border-white/20"
/>

        </div>

  </div>

</div>

</div>



{/* SHOWCASE SECTION */}

<section className="relative mx-auto overflow-hidden bg-white px-4 py-20 lg:max-w-[1440px] lg:px-10 lg:py-32">

  {/* GRID */}

  {/* EDITORIAL DESIGN ELEMENTS */}

{/* BIG TYPO LEFT */}

<h2 className="pointer-events-none absolute left-[-2%] top-[120px] hidden md:block text-[220px] font-black uppercase leading-none tracking-[-0.08em] text-blue-500/[0.06]">

  CREATE

</h2>

{/* BIG TYPO RIGHT */}

<h2 className="pointer-events-none absolute right-[-2%] bottom-[120px] hidden md:block text-[180px] font-black uppercase leading-none tracking-[-0.08em] text-blue-500/[0.06]">

  VISUAL

</h2>

{/* YELLOW OUTLINE CIRCLE */}

<div className="absolute left-[6%] top-[38%] h-[320px] w-[320px] rounded-full border border-blue-400/20" />

{/* SOFT GLOW */}

{/* THIN EDITORIAL LINES */}

<div className="absolute left-[12%] top-[52%] h-[1px] w-[180px] bg-blue-400/15" />

<div className="absolute right-[14%] top-[24%] h-[140px] w-[1px] bg-blue-400/15" />
bg-blue-400/15
{/* FLOATING LABEL */}

<div className="absolute right-[18%] top-[14%] rotate-90">

  <p className="text-[10px] uppercase tracking-[0.5em] text-black/35">

    Modern Visual Identity

  </p>

</div>

{/* MINI SQUARE */}

<div className="absolute left-[48%] bottom-[14%] h-[24px] w-[24px] border border-blue-400/40 bg-black/[0.03] backdrop-blur-xl" />

  <div className="absolute inset-0 opacity-[0.05]">

    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(59,130,246,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.22)_1px,transparent_1px)] bg-[size:100px_100px]" />

  </div>

  {/* TOP LABEL */}

  <div className="relative z-10 mb-24 flex items-center gap-5">

    <div className="h-[2px] w-[90px] bg-blue-500" />

    <p className="text-[11px] uppercase tracking-[0.42em] text-black/50">

      Featured Designs

    </p>

  </div>

  {/* GIANT OUTLINED TYPO */}

<h2 className="pointer-events-none absolute left-[18%] top-[34%] hidden md:block text-[160px] font-black uppercase leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(59,130,246,0.18)]">

  OMNI

</h2>

{/* FLOATING YELLOW BAR */}

<div className="absolute left-[46%] top-[48%] h-[180px] w-[10px] bg-blue-500/25 blur-[1px]" />

{/* SMALL FLOATING TEXT */}

<div className="absolute left-[8%] bottom-[24%]">

  <p className="text-[10px] uppercase tracking-[0.55em] text-black/35">

    Motion • Posters • Branding

  </p>

</div>

{/* GLASS SQUARE */}

<div className="absolute right-[22%] bottom-[18%] h-[90px] w-[90px] border border-white/60 bg-white/20 backdrop-blur-xl" />

{/* SOFT WHITE GLOW */}

<div className="absolute left-[36%] top-[58%] h-[180px] w-[180px] rounded-full bg-white/30 blur-[100px]" />

{/* THIN FRAME */}

<div className="absolute left-[14%] top-[22%] h-[520px] w-[1px] bg-blue-400/12" />

<div className="absolute right-[12%] bottom-[16%] h-[1px] w-[180px] bg-blue-400/12" />

{/* MINI TYPO */}

<div className="absolute left-[72%] top-[62%]">

  <p className="text-[42px] font-black uppercase tracking-[-0.08em] text-blue-500/[0.08]">

    2026

  </p>

</div>

{/* FLOATING BLUR ORB */}

{/* TOP LEFT TECH PANEL */}

<div className="absolute left-[20%] top-[10%] z-[2]">

  <div className="flex items-start gap-5">

    <div className="mt-[8px] h-[1px] w-[90px] bg-blue-500/50" />

    <div className="max-w-[320px]">

      <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">

  Featured Design Projects

</p>

      <p className="mt-5 text-[14px] leading-[2] text-black/35">

        Experimental poster systems and modern visual compositions.

      </p>

    </div>

  </div>

</div>

{/* RIGHT SIDE NUMBER SYSTEM */}

<div className="absolute right-[5%] top-[18%] z-[2]">

  <div className="flex flex-col items-end gap-3">

    <p className="text-[11px] tracking-[0.4em] text-black/25">

      01

    </p>

    <div className="h-[120px] w-[1px] bg-blue-400/15" />

    <p className="text-[11px] tracking-[0.4em] text-black/25">

      05

    </p>

  </div>

</div>


{/* THIN TECH LINES */}

<div className="absolute left-[28%] top-[24%] h-[1px] w-[240px] bg-blue-400/15" />

<div className="absolute right-[18%] bottom-[24%] h-[1px] w-[180px] bg-blue-400/15" />

<div className="absolute left-[52%] top-[58%] h-[180px] w-[1px] bg-blue-400/15" />

{/* MODULAR BOX */}

<div className="absolute right-[14%] top-[58%] z-[1] grid grid-cols-2 gap-[6px]">

  <div className="h-[26px] w-[26px] bg-blue-600" />

  <div className="h-[26px] w-[26px] border border-black/20" />

  <div className="h-[26px] w-[26px] border border-black/20" />

  <div className="h-[26px] w-[26px] bg-blue-500/25" />

</div>

{/* LARGE SOFT PANEL */}

<div className="absolute left-[34%] top-[46%] z-[0] h-[260px] w-[420px] border border-white/50 bg-white/20 backdrop-blur-xl" />

{/* MINI FLOATING LABEL */}

<div className="absolute left-[64%] top-[22%] z-[2] border border-black/10 bg-white px-5 py-3 backdrop-blur-xl">

  <p className="text-[10px] uppercase tracking-[0.45em] text-black/40">

    Archive 2026

  </p>

</div>

{/* FLOATING INFO BLOCK */}

<div className="absolute left-[12%] top-[72%] z-[2]">

  <div className="border border-black/10 bg-white/40 px-7 py-6 backdrop-blur-xl">

    <p className="text-[10px] uppercase tracking-[0.55em] text-black/30">

      Creative Direction

    </p>

    <div className="mt-5 space-y-3">

      <div className="flex items-center gap-3">

        <div className="h-[5px] w-[5px] rounded-full bg-blue-500" />

        <p className="text-[11px] tracking-[0.25em] text-black/35">

          Typography

        </p>

      </div>

      <div className="flex items-center gap-3">

        <div className="h-[5px] w-[5px] rounded-full bg-black/40" />

        <p className="text-[11px] tracking-[0.25em] text-black/35">

          Motion System

        </p>

      </div>

    </div>

  </div>

</div>

{/* BOTTOM TECH INFO */}

<div className="absolute right-[10%] bottom-[10%] z-[2]">

  <div className="flex items-center gap-5">

    <div className="h-[1px] w-[100px] bg-blue-400/18" />

    <p className="text-[10px] uppercase tracking-[0.55em] text-black/30">

      Motion Identity

    </p>

  </div>

</div>

{/* EDITORIAL COLUMN LINES */}

<div className="absolute left-[32%] top-[12%] h-[78%] w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent" />

<div className="absolute left-[68%] top-[8%] h-[84%] w-[1px] bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />

<div className="absolute left-[50%] top-[30%] h-[40%] w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent" />

{/* RANDOM MICRO DOT */}

<div className="absolute left-[46%] top-[18%] h-[8px] w-[8px] rounded-full bg-blue-500" />

<div className="absolute left-[74%] top-[72%] h-[8px] w-[8px] rounded-full bg-blue-500/25" />

{/* RANDOM MICRO DOT */}

<div className="absolute left-[46%] top-[18%] h-[8px] w-[8px] rounded-full bg-blue-500" />

<div className="absolute left-[74%] top-[72%] h-[8px] w-[8px] rounded-full bg-blue-500/25" />




{/* CROPPED BACKGROUND TYPO */}

<div className="absolute left-[-4%] top-[58%] rotate-[-90deg]">

  <h2 className="text-[240px] font-black uppercase tracking-[-0.12em] text-blue-500/[0.05]">

    STUDIO

  </h2>

</div>

{/* COORDINATE SYSTEM */}

<div className="absolute left-[6%] top-[62%] z-[2]">

  <div className="flex items-center gap-6">

    <div className="h-[1px] w-[120px] bg-blue-400/18" />

    <p className="text-[10px] uppercase tracking-[0.6em] text-black/30">

      X:204 • Y:392

    </p>

  </div>

</div>

{/* SERIAL CODE */}

<div className="absolute left-[92%] top-[34%] rotate-90">

  <p className="text-[11px] tracking-[0.7em] text-black/20">

    OV-2026-ARCHIVE

  </p>

</div>

{/* GIANT NUMBER */}

<h2 className="pointer-events-none absolute right-[6%] top-[44%] text-[72px] lg:text-[220px] font-black leading-none tracking-[-0.1em] text-blue-500/[0.05]">

  02

</h2>

{/* DIAGONAL TECH LINE */}

<div className="absolute left-[18%] top-[72%] h-[1px] w-[260px] rotate-[32deg] bg-blue-500/20" />

<div className="absolute left-[22%] top-[74%] h-[1px] w-[180px] rotate-[32deg] bg-blue-400/15" />

{/* DATA PANEL */}

<div className="absolute right-[18%] top-[36%] border border-black/10 bg-white/40 px-6 py-5 backdrop-blur-xl">

  <p className="text-[10px] uppercase tracking-[0.5em] text-black/30">

    Visual System

  </p>

  <div className="mt-4 space-y-2">

    <div className="flex items-center gap-4">

      <div className="h-[6px] w-[6px] rounded-full bg-blue-500" />

      <p className="text-[11px] tracking-[0.25em] text-black/30">

        Motion

      </p>

    </div>

    <div className="flex items-center gap-4">

      <div className="h-[6px] w-[6px] rounded-full bg-black" />

      <p className="text-[11px] tracking-[0.25em] text-black/30">

        Identity

      </p>

    </div>

  </div>

</div>

{/* CROPPED TYPO BACKGROUND */}

<div className="absolute left-[-8%] bottom-[-12%] pointer-events-none">

  <h2 className="text-[420px] font-black uppercase leading-none tracking-[-0.12em] text-blue-500/[0.06]">

    DESIGN

  </h2>

</div>

{/* HUGE WATERMARK */}

<h2 className="pointer-events-none absolute left-[54%] top-[72%] text-[280px] font-black uppercase tracking-[-0.12em] text-black/[0.02]">

  OV

</h2>

{/* YELLOW FRAME */}

{/* LARGE TECH FRAME */}

<div className="absolute right-[8%] bottom-[14%] h-[240px] w-[340px] border border-blue-500/20" />

<div className="absolute right-[10%] bottom-[16%] h-[240px] w-[340px] border border-white/20" />

<div className="absolute left-[58%] top-[18%] h-[140px] w-[140px] border border-black/10" />

<div className="hidden md:block"></div>

  {/* TOP ROW */}

  {/* TOP ROW */}

<div className="relative z-10 flex flex-wrap justify-center gap-4 md:flex-nowrap md:justify-center md:gap-10">

    {/* CARD 1 */}

    <div className="group relative mt-4 w-[46%] md:w-auto">

      <div className="absolute -inset-3 bg-white/40 blur-2xl opacity-70" />

      <div className="relative overflow-hidden border border-white/70 bg-white/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl">

        <div className="absolute inset-[10px] border border-black/10 pointer-events-none" />

        <img
          src="/images/portfolio-1.jpeg"
          className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[350px] md:w-[270px]"
        />

      </div>

    </div>

    {/* CARD 2 */}

    <div className="group relative w-[46%] md:w-auto">

      <div className="relative overflow-hidden border border-white/70 bg-white/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl">

        <div className="absolute inset-[10px] border border-black/10 pointer-events-none" />

        <img
          src="/images/portfolio-12.jpg"
          className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[390px] md:w-[290px]"
        />

        {/* FLOAT TAG */}

        <div className="absolute left-5 top-5 bg-black px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white">

          Visual Design

        </div>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="group relative mt-0 w-[46%] md:mt-10 md:w-auto">

      <div className="absolute -inset-3 bg-white/40 blur-2xl opacity-70" />

      <div className="relative overflow-hidden border border-white/70 bg-white/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl">

        <div className="absolute inset-[10px] border border-black/10 pointer-events-none" />

        <img
          src="/images/portfolio-11.jpeg"
          className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[350px] md:w-[270px]"
        />

      </div>

    </div>

  </div>

  {/* BOTTOM ROW */}

  <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 md:mt-24 md:flex md:justify-center md:gap-12">

    {/* LEFT */}

    <div className="group relative">

      <div className="absolute -inset-3 bg-white/40 blur-2xl opacity-70" />

      <div className="relative overflow-hidden border border-white/70 bg-white/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl">

        <div className="absolute inset-[10px] border border-black/10 pointer-events-none" />

        <img
          src="images/portfolio-13.jpeg"
          className="h-[180px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[300px] md:w-[340px]"
        />

      </div>

    </div>

    {/* RIGHT */}

    <div className="group relative mt-12">

      <div className="relative overflow-hidden border border-white/70 bg-white/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl">

        <div className="absolute inset-[10px] border border-black/10 pointer-events-none" />

        <img
          src="images/portfolio-14.jpeg"
          className="h-[180px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[300px] md:w-[380px]"
        />

      </div>

    </div>

  </div>

</section>

{/* PREMIUM MINIMAL CONTACT SECTION */}

<section className="relative mx-auto max-w-[1440px] overflow-hidden bg-black text-white">

  {/* GRID */}

  <div className="absolute inset-0 opacity-[0.08]">

    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:120px_120px]" />

  </div>

  {/* ATMOSPHERE */}

  {/* BACKGROUND LANDSCAPE IMAGE */}

<div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden">

  <img
    src="/images/portfolio-5.jpeg"
    alt=""
    className="
      absolute
      left-1/2
      top-1/2
      w-[900px] md:w-[1400px]
      max-w-none
      -translate-x-1/2
      -translate-y-1/2
      object-cover
      opacity-[0.60]
      mix-blend-screen
      blur-[0.5px]
      saturate-[1.25]
    "
  />

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/35" />

</div>
 

  <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-16 md:py-16">

    {/* TOP NAV LINE */}

    <div className="absolute left-0 top-[120px] h-[1px] w-full bg-white/5" />

    {/* LEFT VERTICAL */}

    <div className="absolute left-[-80px] top-[405px] hidden rotate-[-90deg] md:block">

      <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.5em] text-white/40">

        Open For Projects

      </p>

    </div>

    {/* RIGHT DETAILS */}

    <div className="absolute right-[80px] top-[200px] hidden flex-col items-center gap-10 md:flex">

      <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] tracking-[0.45em] text-white/45">

        01

      </p>

      <div className="h-[110px] w-[1px] bg-blue-500" />

      <p className="text-[9px] md:text-[9px] md:text-[12px] tracking-[0.45em] text-white/45">

        05

      </p>

      <div className="h-[140px] w-[1px] bg-white/10" />

      <div className="h-[140px] w-[16px] bg-[linear-gradient(to_bottom,transparent,white,transparent)] opacity-30" />

    </div>

    {/* MAIN GRID */}

    <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

      {/* LONG TECH LINE */}

<div className="absolute left-[120px] top-[355px] h-[1px] w-[260px] bg-white/10" />

{/* FLOATING MICRO TEXT */}

<div className="absolute left-[420px] top-[330px]">

  <p className="text-[10px] uppercase tracking-[0.45em] text-white/20">

    Creative System

  </p>

</div>

{/* TOP MICRO BAR SYSTEM */}

<div className="absolute left-[430px] top-[360px] flex items-center gap-[6px]">

  <div className="h-[24px] w-[2px] bg-blue-500" />

  <div className="h-[14px] w-[2px] bg-white/20" />

  <div className="h-[30px] w-[2px] bg-white/10" />

  <div className="h-[18px] w-[2px] bg-blue-500/40" />

</div>

{/* MICRO DOT SYSTEM */}

<div className="absolute left-[390px] top-[520px] h-[5px] w-[5px] rounded-full bg-blue-500" />

<div className="absolute left-[420px] top-[520px] h-[5px] w-[5px] rounded-full bg-white/30" />

<div className="absolute left-[450px] top-[520px] h-[5px] w-[5px] rounded-full bg-white/15" />

{/* MINI TECH FRAME */}

<div className="absolute left-[500px] top-[470px] h-[90px] w-[90px] border border-white/10">

  <div className="absolute left-0 top-0 h-[14px] w-[14px] border-l border-t border-blue-500/70" />

  <div className="absolute right-0 bottom-0 h-[14px] w-[14px] border-r border-b border-white/30" />

</div>

{/* FLOATING TECH CIRCLE */}

<div className="absolute left-[720px] top-[520px]">

  <div className="relative h-[42px] w-[42px] rounded-full border border-white/[0.08]">

    <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500" />

    <div className="absolute left-[6px] top-1/2 h-[1px] w-[10px] -translate-y-1/2 bg-white/15" />

    <div className="absolute right-[6px] top-1/2 h-[1px] w-[10px] -translate-y-1/2 bg-white/15" />

  </div>

</div>

{/* GIANT TYPO */}

<h2 className="pointer-events-none absolute left-[180px] top-[420px] text-[180px] font-black uppercase tracking-[-0.1em] text-white/[0.02]">

  OV

</h2>

{/* MINI VERTICAL BAR */}

<div className="absolute left-[620px] top-[380px] h-[120px] w-[1px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

{/* FLOATING SERIAL */}

<div className="absolute left-[700px] top-[600px] rotate-90">

  <p className="text-[10px] tracking-[0.6em] text-white/15">

    OV-2046

  </p>

</div>

      {/* LEFT SIDE */}

      <div className="pt-6 md:pt-24">

        {/* LABEL */}

        <div className="flex items-center gap-6">

          <div className="h-[6px] w-[6px] rounded-full bg-blue-500" />

          <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.45em] text-white/45">

            Contact

          </p>

        </div>

        {/* DESCRIPTION */}

        <div className="mt-10 max-w-full space-y-5 md:mt-20 md:max-w-[360px] md:space-y-8">

          <p className="text-[17px] leading-[1.7] text-white/75 md:text-[24px] md:leading-[1.9]">

            Have a project in mind or just want to say hello?

          </p>

          <p className="text-[17px] leading-[1.7] text-white/55 md:text-[24px] md:leading-[1.9]">

            I’m always open to discussing new ideas, creative collaborations and opportunities.

          </p>

        </div>

        {/* EMAIL */}

        <div className="mt-14 md:mt-28">

          <div className="flex items-center gap-4">

            <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.45em] text-white/45">

              Email

            </p>

            <div className="h-[1px] w-[40px] bg-blue-500" />

          </div>

          <h3 className="mt-4 text-[15px] font-light tracking-[-0.03em] text-white/90 md:mt-5 md:text-[22px]">

            chiranjib333@gmail.com

          </h3>

        </div>

        {/* RESPONSE */}

        <div className="mt-12 md:mt-20">

          <div className="flex items-center gap-4">

            <p className="text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.45em] text-white/45">

              Response Time

            </p>

            <div className="h-[1px] w-[40px] bg-blue-500" />

          </div>

          <p className="mt-4 text-[16px] text-white/60 md:mt-6 md:text-[24px]">

            I’ll get back to you within 24 hours.

          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="relative mt-8 hidden h-[900px] md:block">

        {/* MAIN FRAME */}

        <div className="absolute right-[120px] top-[140px] h-[520px] w-[420px] border border-white/10">

          {/* CORNERS */}

          <div className="absolute left-0 top-0 h-[18px] w-[18px] border-l border-t border-white/50" />

          <div className="absolute right-0 top-0 h-[18px] w-[18px] border-r border-t border-white/50" />

          <div className="absolute bottom-0 left-0 h-[18px] w-[18px] border-b border-l border-white/50" />

          <div className="absolute bottom-0 right-0 h-[18px] w-[18px] border-b border-r border-white/50" />

        </div>

        {/* INNER FRAME */}

        <div className="absolute right-[90px] top-[180px] h-[460px] w-[360px] border border-white/5" />

        {/* CENTER CROSS */}

        <div className="absolute right-[250px] top-[420px]">

          <div className="absolute left-1/2 top-0 h-[32px] w-[1px] -translate-x-1/2 bg-blue-500" />

          <div className="absolute left-0 top-1/2 h-[1px] w-[32px] -translate-y-1/2 bg-blue-500" />

        </div>

        {/* SMALL DETAILS */}

        <div className="absolute left-[40px] bottom-[180px] h-[80px] w-[1px] bg-white/10" />

        <div className="absolute left-[40px] bottom-[180px] h-[1px] w-[120px] bg-white/10" />

        {/* SOFTWARE BADGES */}

<div className="absolute left-[60px] bottom-[310px] z-[20]">

  {/* OUTER FRAME */}

  <div className="relative border border-white/20 bg-black/30 px-5 py-5 backdrop-blur-xl">

    {/* GLOW */}

    <div className="absolute -inset-[10px] bg-white/5 blur-[30px]" />

    {/* INNER FRAME */}

    <div className="absolute inset-[8px] border border-white/5 pointer-events-none" />

    {/* GRID */}

    <div className="grid grid-cols-3 gap-3">

      {/* AE */}

      <div className="relative">

        <div className="absolute -inset-[3px] border border-white/30 blur-[4px]" />

        <div className="relative flex h-[62px] w-[62px] items-center justify-center border border-white/40 bg-blue-500">

          <span className="text-[22px] font-black tracking-[-0.05em] text-black">

            Ae

          </span>

        </div>

      </div>

      {/* PR */}

      <div className="relative">

        <div className="absolute -inset-[3px] border border-white/20 blur-[4px]" />

        <div className="relative flex h-[62px] w-[62px] items-center justify-center border border-white/30 bg-black">

          <span className="text-[22px] font-black tracking-[-0.05em] text-white">

            Pr

          </span>

        </div>

      </div>

      {/* DR */}

      <div className="relative">

        <div className="absolute -inset-[3px] border border-white/20 blur-[4px]" />

        <div className="relative flex h-[62px] w-[62px] items-center justify-center border border-white/30 bg-black">

          <span className="text-[20px] font-black tracking-[-0.05em] text-white">

            Dr

          </span>

        </div>

      </div>

      {/* ME */}

      <div className="relative">

        <div className="absolute -inset-[3px] border border-white/20 blur-[4px]" />

        <div className="relative flex h-[62px] w-[62px] items-center justify-center border border-white/30 bg-black">

          <span className="text-[20px] font-black tracking-[-0.05em] text-white">

            Me

          </span>

        </div>

      </div>

      {/* AI */}

      <div className="relative">

        <div className="absolute -inset-[3px] border border-white/20 blur-[4px]" />

        <div className="relative flex h-[62px] w-[62px] items-center justify-center border border-white/30 bg-black">

          <span className="text-[20px] font-black tracking-[-0.05em] text-white">

            Ai

          </span>

        </div>

      </div>

      {/* PS */}

      <div className="relative">

        <div className="absolute -inset-[3px] border border-white/20 blur-[4px]" />

        <div className="relative flex h-[62px] w-[62px] items-center justify-center border border-white/30 bg-black">

          <span className="text-[20px] font-black tracking-[-0.05em] text-white">

            Ps

          </span>

        </div>

      </div>

    </div>

  </div>

</div>

        {/* AVAILABILITY */}

        <div className="absolute left-[80px] bottom-[180px]">

          <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.45em] text-white/45">

            Availability

          </p>

          <div className="mt-4 space-y-3 text-[22px] text-white/70">

            <p>Monday – Saturday</p>

            <p>10:00 AM – 07:00 PM IST</p>

          </div>

        </div>

        {/* SERIAL */}

        <div className="absolute right-[-10px] bottom-[200px] rotate-90">

          <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.6em] font-medium text-white/55">

            OV-2026

          </p>

        </div>

      </div>

    </div>

    {/* FLOATING SOFTWARE STRIP */}

    {/* SOFTWARE ATMOSPHERE */}


{/* AE */}

<div className="absolute left-[387px] bottom-[200px] z-[30]">

  <div className="relative">

    {/* glow */}

    <div className="absolute -inset-[8px] border border-white/40 blur-[6px]" />

    {/* outer frame */}

    <div className="absolute -inset-[3px] border border-white/50" />

    {/* box */}

    <div className="relative flex h-[72px] w-[72px] items-center justify-center bg-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.35)]">

      <span className="text-[24px] font-black tracking-[-0.06em] text-black">

        Ae

      </span>

    </div>

  </div>

</div>


{/* PR */}

<div className="absolute left-[510px] bottom-[200px] z-[30]">

  <div className="relative">

    <div className="absolute -inset-[8px] border border-white/35 blur-[6px]" />

    <div className="absolute -inset-[3px] border border-white/45" />

    <div className="relative flex h-[72px] w-[72px] items-center justify-center bg-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.35)]">

  <span className="text-[24px] font-black tracking-[-0.06em] text-black">

        Pr

      </span>

    </div>

  </div>

</div>


{/* DR */}

<div className="absolute left-[627px] bottom-[200px] z-[30]">

  <div className="relative">

    <div className="absolute -inset-[8px] border border-white/35 blur-[6px]" />

    <div className="absolute -inset-[3px] border border-white/45" />

    <div className="relative flex h-[72px] w-[72px] items-center justify-center bg-blue-500  shadow-[0_0_45px_rgba(59,130,246,0.35)]">

  <span className="text-[22px] font-black tracking-[-0.06em] text-black">
        Dr

      </span>

    </div>

  </div>

</div>


{/* ME */}

<div className="absolute left-[747px] bottom-[200px] z-[30]">

  <div className="relative">

    <div className="absolute -inset-[8px] border border-white/40 blur-[6px]" />

    <div className="absolute -inset-[3px] border border-white/50" />

    <div className="relative flex h-[72px] w-[72px] items-center justify-center bg-blue-500  shadow-[0_0_45px_rgba(59,130,246,0.35)]">

      <span className="text-[20px] font-black tracking-[-0.06em] text-black">

        Me

      </span>

    </div>

  </div>

</div>


{/* AI */}

<div className="absolute left-[866px] bottom-[200px] z-[30]">

  <div className="relative">

    <div className="absolute -inset-[8px] border border-white/35 blur-[6px]" />

    <div className="absolute -inset-[3px] border border-white/45" />

   <div className="relative flex h-[72px] w-[72px] items-center justify-center bg-blue-500  shadow-[0_0_45px_rgba(59,130,246,0.35)]">

  <span className="text-[22px] font-black tracking-[-0.06em] text-black">
        Ai

      </span>

    </div>

  </div>

</div>

{/* MICRO DOTS */}

<div className="absolute left-[46%] bottom-[340px] h-[4px] w-[4px] rounded-full bg-blue-500 opacity-70" />

<div className="absolute left-[58%] bottom-[290px] h-[5px] w-[5px] rounded-full bg-blue-500 opacity-50" />

<div className="absolute left-[72%] bottom-[360px] h-[3px] w-[3px] rounded-full bg-blue-500 opacity-60" />

{/* THIN TECH LINES */}

<div className="absolute left-[32%] bottom-[265px] h-[1px] w-[140px] bg-white/10" />

<div className="absolute left-[62%] bottom-[265px] h-[1px] w-[120px] bg-white/10" />

{/* MINI CORNER FRAME */}

<div className="absolute left-[54%] bottom-[380px] h-[26px] w-[26px] border-l border-t border-blue-500/60" />

{/* SERIAL */}

<div className="absolute left-[71%] bottom-[315px] rotate-90">

  <p className="text-[10px] tracking-[0.45em] text-white/20">

    SYS-06

  </p>

</div>

{/* LEFT TECH FRAME */}

<div className="absolute left-[280px] bottom-[350px] h-[120px] w-[160px] border border-white/[0.05]">

  <div className="absolute left-0 top-0 h-[18px] w-[18px] border-l border-t border-blue-500/50" />

  <div className="absolute right-0 bottom-0 h-[18px] w-[18px] border-r border-b border-white/20" />

</div>


{/* FLOATING COORDINATE */}

<div className="absolute left-[470px] bottom-[395px]">

  <p className="text-[10px] uppercase tracking-[0.55em] text-white/20">

    X:087 • Y:204

  </p>

</div>

{/* FLOATING DOT MATRIX */}

<div className="absolute left-[520px] bottom-[330px] grid grid-cols-4 gap-[6px]">

  <div className="h-[3px] w-[3px] rounded-full bg-white/20" />
  <div className="h-[3px] w-[3px] rounded-full bg-blue-500/60" />
  <div className="h-[3px] w-[3px] rounded-full bg-white/10" />
  <div className="h-[3px] w-[3px] rounded-full bg-white/20" />

  <div className="h-[3px] w-[3px] rounded-full bg-blue-500/40" />
  <div className="h-[3px] w-[3px] rounded-full bg-white/10" />
  <div className="h-[3px] w-[3px] rounded-full bg-white/20" />
  <div className="h-[3px] w-[3px] rounded-full bg-white/10" />

</div>


{/* THIN VERTICAL SYSTEM */}

<div className="absolute left-[590px] bottom-[120px] h-[180px] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />


{/* MINI YELLOW BAR */}

<div className="absolute left-[592px] bottom-[250px] h-[42px] w-[2px] bg-blue-500/60" />


{/* FLOATING NUMBER */}

<div className="absolute left-[960px] bottom-[410px]">

  <p className="text-[42px] font-black tracking-[-0.08em] text-white/[0.04]">

    06

  </p>

</div>

{/* RIGHT DATA LINES */}

<div className="absolute left-[1010px] bottom-[360px] space-y-[7px]">

  <div className="h-[1px] w-[60px] bg-white/[0.08]" />

  <div className="h-[1px] w-[34px] bg-blue-500/[0.5]" />

  <div className="h-[1px] w-[52px] bg-white/[0.06]" />

  <div className="h-[1px] w-[24px] bg-white/[0.12]" />

</div>


{/* TECH LINE */}

<div className="absolute left-[1020px] bottom-[280px] h-[1px] w-[120px] bg-white/10" />


{/* MINI DOT GROUP */}

<div className="absolute left-[1040px] bottom-[240px] flex items-center gap-3">

  <div className="h-[4px] w-[4px] rounded-full bg-blue-500" />

  <div className="h-[4px] w-[4px] rounded-full bg-white/30" />

  <div className="h-[4px] w-[4px] rounded-full bg-white/15" />

</div>


{/* RIGHT FLOATING FRAME */}

<div className="absolute right-[180px] bottom-[340px] h-[80px] w-[80px] border border-white/[0.06]">

  <div className="absolute left-0 top-0 h-[14px] w-[14px] border-l border-t border-blue-400/40" />

</div>


{/* SERIAL */}

<div className="absolute left-[880px] bottom-[180px] rotate-90">

  <p className="text-[10px] tracking-[0.55em] text-white/18">

    OV-SYS-2046

  </p>

</div>


{/* GIANT FADED TYPO */}

<h2 className="pointer-events-none absolute left-[320px] bottom-[120px] text-[180px] font-black uppercase tracking-[-0.12em] text-white/[0.02]">

  OMNI

</h2>


    {/* BOTTOM BAR */}

    <div className="relative mt-24 border-t border-white/5 pt-14">

      <div className="flex flex-col gap-10 pt-8 md:flex-row md:items-center md:justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-10">

          <div className="relative h-[44px] w-[44px] border border-white/30">

            <div className="absolute bottom-[-6px] right-[-6px] h-[14px] w-[14px] bg-blue-500" />

          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.22em] text-white/60 md:text-left md:text-[18px] md:tracking-[0.35em]">

            Let’s Build Something Extraordinary.

          </p>

        </div>

        {/* CENTER */}

        <div className="flex items-center gap-6">

          <div className="h-[1px] w-[40px] bg-white/20" />

          <p className="text-[28px] tracking-[0.2em] text-black/40">

            2026

          </p>

        </div>

        {/* RIGHT */}

        <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-white/65 md:gap-14 md:text-[22px]">

          <p>Omni</p>

          <p>Instagram</p>

          <p>YouTube</p>

        </div>

      </div>

    </div>

  </div>

</section>
</section>

{/* MINIMAL REVIEW SECTION */}

<section className="relative mx-auto -mt-[150px] max-w-[1440px] overflow-hidden bg-white pt-0 pb-16 text-black">

  {/* GRID */}

  <div className="absolute inset-0 opacity-[0.06]">

    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(59,130,246,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.22)_1px,transparent_1px)] bg-[size:110px_110px]" />

  </div>

  {/* ATMOSPHERE */}

  <div className="absolute left-[10%] top-[20%] h-[240px] w-[240px] rounded-full bg-black/[0.03] blur-[100px]" />

  <div className="absolute right-[12%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-black/[0.03] blur-[120px]" />

  {/* TOP SECTION */}

  <div className="relative z-10 mx-auto max-w-[1440px] px-3 md:px-8">

    {/* LABEL */}

    <div className="flex items-center justify-between pt-15">

      <div className="flex items-center gap-5">

        <div className="h-[7px] w-[7px] rounded-full bg-black" />

        <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.45em] text-black/55">

          Why Clients Choose Me

        </p>

      </div>

      <p className="text-[9px] md:text-[9px] md:text-[12px] tracking-[0.35em] text-black/40">

        05 / 07

      </p>

    </div>

    {/* TOP LINE */}

    <div className="mt-6 h-[1px] w-[520px] bg-blue-400/15" />

{/* CONTENT */}

<div className="relative mt-20 flex flex-col items-center text-center">

  {/* HEADING */}

  <h2 className="max-w-[1200px] text-center text-[24px] font-semibold leading-[1.05] tracking-[-0.06em] text-black md:text-[52px]">

    Built on clarity. Delivered with impact.

  </h2>

  {/* PARAGRAPH */}

  <p className="mt-4 max-w-[320px] text-[11px] leading-[1.7] text-black/55 md:mt-6 md:max-w-[920px] md:text-[16px] md:leading-[1.9]">

    Every project is crafted with precision,
    creativity and a focus on results that
    actually make a difference.

  </p>

  {/* MINI DOT SYSTEM */}

  <div className="absolute right-[120px] top-[20px] grid grid-cols-5 gap-[6px]">

    {Array.from({ length: 25 }).map((_, i) => (

      <div
        key={i}
        className="h-[2px] w-[2px] rounded-full bg-blue-500/25"
      />

    ))}

  </div>

  {/* MINI FRAME */}

  <div className="absolute right-[40px] top-[70px] h-[60px] w-[60px] border border-black/15">

    <div className="absolute bottom-[-5px] right-[-5px] h-[12px] w-[12px] bg-black" />

  </div>

</div>
    {/* FEATURES */}

    <div className="relative mt-14 grid grid-cols-2 border-t border-black/10 md:mt-24 md:grid-cols-4">

      {/* ITEM 1 */}

      <div className="flex flex-col items-center justify-start border-r border-black/10 px-3 py-8 md:px-6 md:py-12 text-center">

        {/* ICON */}

        <div className="relative mx-auto h-[52px] w-[52px]">

          <div className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full border-[2px] border-black" />

          <div className="absolute right-0 top-0 flex h-[46px] w-[46px] items-center justify-center rounded-full border-[2px] border-black">

            <div className="h-[28px] w-[28px] rounded-full border-[2px] border-black bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_5px)]" />

          </div>

        </div>

        <h3 className="mt-4 text-[18px] font-medium tracking-[-0.05em]">

          Transparency

        </h3>

        <p className="mt-4 text-[14px] leading-[1.8] text-black/55 md:mt-4 md:text-[14px] md:leading-[1.8]">

          Clear communication and
          complete project visibility
          from start to finish.

        </p>

      </div>

      
{/* ITEM 2 */}

<div className="flex flex-col items-center justify-start border-r border-black/10 px-6 py-12 text-center">

        {/* ICON */}

        <div className="relative flex mx-auto h-[52px] w-[52px] items-center justify-center">

          <div className="absolute h-[46px] w-[40px] rounded-b-[10px] border-[2px] border-black" />

          <div className="absolute top-[4px] h-[12px] w-[16px] border-[2px] border-black bg-white" />

          <div className="absolute top-[24px] h-[7px] w-[7px] rounded-full bg-black" />

          <div className="absolute bottom-[14px] left-[14px] h-[5px] w-[5px] rounded-full bg-black" />

          <div className="absolute bottom-[14px] right-[14px] h-[5px] w-[5px] rounded-full bg-black" />

        </div>

        <h3 className="mt-4 text-[18px] font-medium tracking-[-0.05em]">

          Creative Precision

        </h3>

<p className="mt-4 max-w-[220px] text-center text-[14px] leading-[1.9] text-black/55">

          Cinematic editing and
          motion design crafted
          with attention to detail.

        </p>

      </div>

      {/* ITEM 3 */}

      <div className="flex flex-col items-center justify-start border-r border-black/10 px-6 py-12 text-center">

        {/* ICON */}

        <div className="relative flex h-[52px] w-[52px] items-center justify-center">

          <div className="absolute top-[14px] h-[2px] w-[60px] bg-black" />

          <div className="absolute top-[30px] h-[2px] w-[60px] bg-black" />

          <div className="absolute top-[46px] h-[2px] w-[60px] bg-black" />

          <div className="absolute left-[16px] top-[8px] h-[14px] w-[14px] rounded-full border-[2px] border-black bg-white" />

          <div className="absolute right-[10px] top-[24px] h-[14px] w-[14px] rounded-full border-[2px] border-black bg-white" />

          <div className="absolute left-[28px] top-[40px] h-[14px] w-[14px] rounded-full border-[2px] border-black bg-white" />

        </div>

        <h3 className="mt-4 text-[18px] font-medium tracking-[-0.05em]">

          Efficiency

        </h3>

        <p className="mt-4 text-[14px] leading-[1.8] text-black/55">

          Fast turnaround without
          compromising quality or
          the creative process.

        </p> 

      </div>

      {/* ITEM 4 */}

      <div className="flex flex-col items-center justify-start px-6 py-12 text-center">

        {/* ICON */}

        <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border-[2px] border-black">

          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black" />

          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-black" />

          <div className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-black bg-white" />

        </div>

        <h3 className="mt-4 text-[18px] font-medium tracking-[-0.05em]">

          Results Driven

        </h3>

        <p className="mt-4 max-w-[210px] text-[14px] leading-[1.9] text-black/55">

          Focused on delivering
          visuals that engage,
          convert and leave impact.

        </p>

      </div>

    </div>

    {/* CENTER MICRO TEXT */}
<div className="mt-8 flex items-center justify-center">

  <div className="flex items-center gap-4">

    <div className="h-[1px] w-[80px] bg-blue-400/15" />

    <p className="text-[10px] uppercase tracking-[0.45em] text-black/25">

      Selected Client Insights

    </p>

    <div className="h-[1px] w-[80px] bg-blue-400/15" />

  </div>

</div>

    {/* REVIEW SECTION */}

    <div className="relative mt-12">

      {/* FLOATING DOT FIELD */}

<div className="absolute left-[48%] top-[40px] grid grid-cols-4 gap-[6px] opacity-30">

  {Array.from({ length: 16 }).map((_, i) => (

    <div
      key={i}
      className="h-[2px] w-[2px] rounded-full bg-black"
    />

  ))}

</div>

      {/* LABEL */}

      <div className="flex items-start justify-between pt-4">

        <div className="flex items-center gap-5">

          <div className="h-[7px] w-[7px] rounded-full bg-black" />

          <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.45em] text-black/55">

            Client Reviews

          </p>

        </div>

        <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.35em] text-black/60">

          What Clients Say

        </p>

      </div>

      {/* LINE */}

      <div className="mt-6 h-[1px] w-[430px] bg-blue-400/15" />
{/* MINI FRAME */}

<div className="absolute right-[260px] top-[26px] h-[34px] w-[34px] border border-black/10">

  <div className="absolute bottom-[-4px] right-[-4px] h-[8px] w-[8px] bg-black" />

</div>
      {/* SIDE TECH LABELS */}

<div className="absolute left-[-70px] top-[-250px] hidden rotate-[-90deg] text-[10px] uppercase tracking-[0.45em] text-black/20 md:block">
  Trusted Feedback
</div>

<div className="absolute right-[-70px] top-[-250px] hidden rotate-90 text-[10px] uppercase tracking-[0.45em] text-black/20 md:block">
  Real Client Experience
</div>

{/* TECH DECORATIONS */}

{/* LEFT DOT FIELD */}

<div className="absolute left-[120px] top-[120px] grid grid-cols-6 gap-[6px] opacity-20">

  {Array.from({ length: 36 }).map((_, i) => (

    <div
      key={i}
      className="h-[2px] w-[2px] rounded-full bg-black"
    />

  ))}

</div>

{/* RIGHT THIN FRAME */}

<div className="absolute right-[140px] top-[110px] h-[90px] w-[90px] border border-black/10">

  <div className="absolute left-[-6px] top-[-6px] h-[12px] w-[12px] border border-black/20 bg-white" />

</div>

{/* CENTER TECH LINE */}

<div className="absolute left-1/2 top-[170px] flex -translate-x-1/2 items-center gap-4 opacity-40">

  <div className="h-[1px] w-[120px] bg-blue-400/18" />

  <div className="h-[5px] w-[5px] rounded-full bg-black/30" />

  <div className="h-[1px] w-[120px] bg-blue-400/18" />

</div>

{/* MICRO LABEL */}

<div className="absolute left-1/2 top-[145px] -translate-x-1/2">

  <p className="text-[9px] uppercase tracking-[0.55em] text-black/20">

    Premium Client Feedback

  </p>

</div>
      {/* REVIEW CARDS */}

      <div className="mt-10 grid grid-cols-3 gap-2 md:mt-20 md:gap-8">
        
        

        {/* CARD */}

        {[
          {
            name: "Komal K.",
            review:
              "Amazing work! The edit was exactly what I needed. Super professional and delivered.",
          },
          {
            name: "Amanpreet",
            review:
              "The quality and creativity are next level. My content looks far more cinematic now.",
          },
          {
            name: "Sumedha S.",
            review:
              "Very professional and easy to work with. Understood everything perfectly.",
          },
          
        ].map((item, i) => (

          <div
            key={i}
            className="relative flex h-[145px] flex-col justify-between border border-black/10 bg-white p-2 md:h-[340px] md:p-10"
          >

            {/* QUOTE */}

            <p className="text-[20px] leading-none text-black/15 md:text-[48px]">

              “

            </p>

            {/* STARS */}

            <div className="mt-2 flex gap-1 text-[8px] md:mt-5 md:gap-2 md:text-[18px]">

              ★ ★ ★ ★ ★

            </div>

            {/* REVIEW */}

            <p className="mt-1 max-w-full text-[7px] leading-[1.35] text-black/65 md:mt-6 md:max-w-[320px] md:text-[17px] md:leading-[1.9]">

              {item.review}

            </p>

            {/* USER */}

            <div className="mt-2 flex items-end justify-between">

              <div className="flex items-center gap-1 md:gap-4">

                <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-black text-[8px] text-white md:h-[44px] md:w-[44px] md:text-[14px]">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <p className="text-[8px] font-medium md:text-[17px]">

                    {item.name}

                  </p>

                  <p className="mt-[2px] text-[4px] tracking-[0.02em] text-black/40 md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] md:tracking-[0.08em]">

                    • Verified Client

                  </p>

                </div>

              </div>

              <p className="text-[5px] tracking-[0.03em] text-black/35 md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] md:tracking-[0.12em]">

                05/22/26

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* BOTTOM DOTS */}

      <div className="mt-10 flex items-center justify-center gap-3 md:mt-20 md:gap-5">

        <div className="h-[12px] w-[12px] rounded-full bg-black" />

        <div className="h-[12px] w-[12px] rounded-full border border-black/25" />

        <div className="h-[12px] w-[12px] rounded-full border border-black/25" />

        <div className="h-[12px] w-[12px] rounded-full border border-black/25" />

      </div>

    </div>

  </div>

</section>

{/* FINAL FOOTER SECTION */}

<section
  id="about"
  className="relative mx-auto max-w-[1440px] overflow-hidden bg-black text-white"
></section>
<section className="relative overflow-hidden bg-black text-white">

  {/* GRID */}

  <div className="absolute inset-0 opacity-[0.08]">

    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:110px_110px]" />

  </div>

  {/* ATMOSPHERE */}

  <div className="absolute left-[10%] top-[20%] h-[260px] w-[260px] rounded-full bg-white/[0.03] blur-[120px]" />

  <div className="absolute right-[8%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-[1440px] px-10 py-24">

    {/* TOP */}

    <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] md:gap-16">

      {/* BRAND */}

<div className="col-span-2 md:col-span-1 md:-ml-30">

  <h2 className="text-[28px] font-semibold tracking-[-0.05em] md:text-[42px]">

    Omni.Visualss

  </h2>
        <p className="mt-5 max-w-[240px] text-[11px] leading-[1.7] text-white/45 md:mt-8 md:max-w-[320px] md:text-[15px] md:leading-[1.9]">

          Cinematic editing, motion design and
          premium visuals crafted with clarity,
          precision and modern storytelling.

        </p>

        {/* MICRO TECH */}

        <div className="mt-12 flex items-center gap-4">

          <div className="h-[1px] w-[70px] bg-white/10" />

          <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">

            Visual Experience System

          </p>

        </div>

      </div>

      {/* SERVICES */}

      <div>

        <p className="mb-4 text-[10px] md:mb-8 md:text-[13px] uppercase tracking-[0.35em] font-medium text-white/55">

          Services

        </p>

        <div className="space-y-3 text-[11px] md:space-y-5 md:text-[17px] text-white/85">

          <p>Graphic Designer</p>

          <p>Photographers</p>

          <p>Video Editors</p>

          <p>Web Designers</p>

          <p>Illustrators</p>

        </div>

      </div>

      {/* PLATFORM */}

      <div>

        <p className="mb-8 text-[13px] uppercase tracking-[0.35em] font-medium text-white/55">

          Platform

        </p>

        <div className="space-y-5 text-[17px] text-white/85">

          <p>Portfolio</p>

          <p>Case Studies</p>

          <p>Client Reviews</p>

          <p>Creative Process</p>

          <p>Visual Direction</p>

        </div>

      </div>

      {/* SOCIAL */}

      <div>

        <p className="mb-8 text-[13px] uppercase tracking-[0.35em] font-medium text-white/55">

          Social

        </p>

        <div className="space-y-5 text-[17px] text-white/85">

          <p>Instagram</p>

          <p>Twitter</p>

          <p>YouTube</p>

          <p>LinkedIn</p>

          <p>Facebook</p>

        </div>

      </div>

      {/* CONTACT */}

      <div>

        <p className="mb-8 text-[13px] uppercase tracking-[0.35em] font-medium text-white/55">

          Contact

        </p>

        <div className="space-y-5 text-[17px] text-white/85">

          <p>Available Worldwide</p>

          <p>Freelance Projects</p>

          <p>Brand Collaborations</p>

          <p>Creative Partnerships</p>

        </div>

      </div>

    </div>

    {/* CENTER MICRO DETAIL */}

    <div className="mt-24 flex items-center justify-center">

      <div className="flex items-center gap-5">

        <div className="h-[1px] w-[120px] bg-white/10" />

        <div className="grid grid-cols-5 gap-[5px]">

          {Array.from({ length: 25 }).map((_, i) => (

            <div
              key={i}
              className="h-[2px] w-[2px] rounded-full bg-white/30"
            />

          ))}

        </div>

        <div className="h-[1px] w-[120px] bg-white/10" />

      </div>

    </div>

    {/* BOTTOM */}

    <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-6 md:mt-20 md:flex-row md:items-center md:justify-between md:pt-10">

      {/* LEFT */}

      <div className="flex items-center gap-5">

        <div className="h-[10px] w-[10px] rounded-full bg-white" />

        <p className="text-[13px] tracking-[0.18em] text-white/35">

          © 2026 OMNI.VISUALSS

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex flex-wrap items-center gap-4 md:gap-10">

        <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.25em] font-medium text-white/55">

          Cinematic Editing

        </p>

        <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.25em] font-medium text-white/55">

          Motion Design

        </p>

        <p className="text-[9px] md:text-[9px] md:text-[9px] md:text-[9px] md:text-[12px] uppercase tracking-[0.25em] font-medium text-white/55">

          Visual Direction

        </p>

      </div>

    </div>

  </div>

</section>

</main>
);
}