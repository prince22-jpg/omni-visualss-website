"use client";

import Link from "next/link";
import { useState } from "react";

const projects: {
  title: string;
  category: string;
  youtubeId?: string;
  video?: string;
}[] = [
  {
  title: "Edit",
  category: "Motion Graphics",
  youtubeId: "lA8IPV4CowQ",
},
  {
    title: "SaaS Edit",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Brand Content",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Creative Visual",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Product Promo",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Modern Edit",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Commercial Reel",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Visual Story",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Creative Ad",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Luxury Visual",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Dynamic Motion",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Startup Reel",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Promo Visual",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Cinematic Edit",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Agency Ad",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Premium Campaign",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
  title: "Edit",
  category: "Motion Graphics",
  youtubeId: "lA8IPV4CowQ",
},
  {
    title: "SaaS Edit",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Brand Content",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Creative Visual",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Product Promo",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Modern Edit",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Commercial Reel",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Visual Story",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Creative Ad",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Luxury Visual",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Dynamic Motion",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Startup Reel",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Promo Visual",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Cinematic Edit",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Agency Ad",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Premium Campaign",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
  title: "Edit",
  category: "Motion Graphics",
  youtubeId: "lA8IPV4CowQ",
},
  {
    title: "SaaS Edit",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Brand Content",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Creative Visual",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Product Promo",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Modern Edit",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Commercial Reel",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Visual Story",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Creative Ad",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Luxury Visual",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Dynamic Motion",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Startup Reel",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Promo Visual",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Cinematic Edit",
    category: "Motion Graphics",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Agency Ad",
    category: "SaaS Edits",
    youtubeId: "lA8IPV4CowQ",
  },
  {
    title: "Premium Campaign",
    category: "Brand Content",
    youtubeId: "lA8IPV4CowQ",
  },
];

export default function PortfolioPage() {

    const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">

  <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-8 md:py-6">

    {/* TOP ROW */}
    <div className="flex items-center justify-between">

      {/* LOGO */}
      <Link
        href="/"
        className="text-[16px] font-medium tracking-tight md:text-[22px]"
      >
        Omni.visualss
      </Link>

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="rounded-full border border-black/10 px-4 py-2 text-[11px] transition hover:bg-blue-500 hover:text-white md:px-6 md:py-3 md:text-sm"
      >
        Back Home
      </Link>

    </div>

    {/* CATEGORY ROW */}
    <div className="mt-5 flex items-center justify-center gap-2 overflow-x-auto whitespace-nowrap text-[8px] tracking-[0.15em] md:mt-6 md:gap-10 md:text-[13px] md:tracking-[0.25em]">

      <Link
        href="/portfolio"
        className="rounded-full bg-blue-500 px-4 py-2 text-white transition-all duration-300"
      >
        All Work
      </Link>

     <Link
  href="/motion-graphics"
  className="rounded-full px-2 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white md:px-4"
>
        Motion Graphics
      </Link>

     <Link
  href="/saas-edits"
  className="rounded-full px-2 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white md:px-4"
>
        Saas Edits
      </Link>
<Link
  href="/brand-content"
  className="rounded-full px-2 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white md:px-4"
>
        Brand Content
      </Link>

    </div>

  </div>

</header>
      {/* TOP HUGE TECH LINE */}
<div className="absolute left-[18%] top-[2%] hidden xl:block">

  <div className="flex items-center gap-5">

    <div className="h-[1px] w-[720px] bg-blue-400/10" />

    <div className="h-[6px] w-[6px] rounded-full bg-blue-500" />

  </div>

</div>

{/* TOP SECONDARY LINE */}
<div className="absolute right-[8%] top-[8%] hidden xl:block">

  <div className="flex items-center gap-4">

    <div className="h-[4px] w-[4px] rounded-full bg-blue-500" />

    <div className="h-[1px] w-[240px] bg-blue-400/10" />

  </div>

</div>

{/* TOP CENTER MICRO TEXT */}
<div className="absolute left-1/2 top-[6%] hidden -translate-x-1/2 xl:block">

  <p className="text-[9px] uppercase tracking-[0.6em] text-blue-300/20">

    Visual Motion Framework

  </p>

</div>

{/* TOP FLOATING DOTS */}
<div className="absolute left-[62%] top-[14%] hidden xl:block">

  <div className="flex gap-[8px]">

    <div className="h-[3px] w-[3px] rounded-full bg-blue-400/15" />

    <div className="h-[3px] w-[3px] rounded-full bg-blue-400/15" />

    <div className="h-[3px] w-[3px] rounded-full bg-blue-500" />

  </div>

</div>

{/* LEFT TOP TECH NUMBER */}
<div className="absolute left-[24%] top-[12%] hidden xl:block">

  <p className="text-[9px] tracking-[0.45em] text-blue-300/20">

    2026 / ARCHIVE

  </p>

</div>

{/* RIGHT TOP MICRO META */}
<div className="absolute right-[20%] top-[16%] hidden xl:block">

  <p className="text-[9px] uppercase tracking-[0.5em] text-blue-300/20">

    Omni Visual Direction

  </p>

</div>

{/* TOP MINI FRAME */}
<div className="absolute right-[30%] top-[4%] hidden xl:block">

  <div className="relative h-[42px] w-[42px] border border-black/5">

    <div className="absolute -bottom-[4px] -right-[4px] h-[8px] w-[8px] bg-blue-500" />

  </div>

</div>

{/* UPPER FADE LINE */}
<div className="absolute left-[40%] top-[18%] hidden xl:block">

  <div className="h-[1px] w-[300px] bg-gradient-to-r from-black/10 to-transparent" />

</div>



      {/* TOP SECTION */}
      <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-8 md:py-20">
        <div className="mb-6 flex items-center gap-3 md:mb-20 md:gap-4">
          <div className="h-[1px] w-20 bg-blue-500" />

          <p className="text-[11px] uppercase tracking-[0.45em] text-black/50">
            Selected Work
          </p>
        </div>

        <div className="relative mb-6 flex min-h-[120px] items-center justify-center overflow-hidden md:mb-14 md:min-h-[180px]">

            

  {/* TOP LEFT MICRO */}
  <div className="absolute left-0 top-0">

    <div className="flex items-center gap-5">

      <div className="h-[1px] w-[80px] bg-blue-500" />

      <p className="text-[10px] uppercase tracking-[0.42em] text-black/35">


      </p>

    </div>

  </div>

  

  {/* CENTER TEXT */}
  <div className="relative text-center">

    <p
  className="
    px-4
    text-center
    text-[20px]
    font-medium
    leading-[1.3]
    tracking-[-0.04em]
    md:px-0
    md:text-[38px]
    bg-gradient-to-b
    from-[#2563eb]
    via-[#3b82f6]
    to-[#dbeafe]
    bg-clip-text
    text-transparent
  "
>

  Curated visual experiences for modern digital brands.

</p>

    <div className="mt-5 flex items-center justify-center gap-2 md:mt-8 md:gap-6">

      <div className="h-[1px] w-[30px] md:w-[90px] bg-blue-400/15" />

      <p className="text-[7px] uppercase tracking-[0.2em] md:text-[10px] md:tracking-[0.38em] text-black/25">

        Motion • Editing • Direction

      </p>

      <div className="h-[1px] w-[30px] md:w-[90px] bg-blue-400/15" />

    </div>

  </div>

  {/* TOP RIGHT META */}
  <div className="absolute right-0 top-0 hidden xl:block">

    <p className="text-[10px] uppercase tracking-[0.4em] text-blue-400/30">

      Selected Archive — 2026

    </p>

  </div>

  {/* LEFT DOT GRID */}
  <div className="absolute left-[2%] bottom-[8%] scale-[0.6] md:left-[8%] md:bottom-[20%] md:scale-100">

    <div className="grid grid-cols-4 gap-[5px]">

      {Array.from({ length: 16 }).map((_, i) => (

        <div
          key={i}
          className="h-[2px] w-[2px] rounded-full bg-black/20"
        />

      ))}

    </div>

  </div>

  {/* RIGHT DOT GRID */}
  <div className="absolute right-[2%] top-[18%] scale-[0.6] md:right-[10%] md:top-[28%] md:scale-100">

    <div className="grid grid-cols-5 gap-[5px]">

      {Array.from({ length: 25 }).map((_, i) => (

        <div
          key={i}
          className="h-[2px] w-[2px] rounded-full bg-black/15"
        />

      ))}

    </div>

  </div>

  {/* FLOATING CIRCLE */}
  <div className="absolute right-[18%] bottom-[10%] hidden xl:block">

    <div className="relative">

      <div className="h-[120px] w-[120px] rounded-full border border-black/5" />

      <div className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500" />

    </div>

  </div>

  {/* FLOATING TECH TEXT */}
  <div className="absolute bottom-0 left-0 flex items-center gap-6">

    <p className="text-[10px] uppercase tracking-[0.38em] text-blue-400/30">

      Portfolio System

    </p>

    <div className="h-[1px] w-[120px] bg-blue-400/15" />

    <p className="text-[10px] uppercase tracking-[0.38em] text-blue-400/30">

      Omni.Visualss

    </p>

  </div>

  {/* LEFT TOP FLOATING LINE */}
<div className="absolute left-[22%] top-[8%] hidden xl:block">

  <div className="flex items-center gap-3">

    <div className="h-[1px] w-[140px] bg-blue-400/15" />

    <div className="h-[4px] w-[4px] rounded-full bg-blue-500" />

  </div>

</div>

{/* RIGHT TECH FRAME */}
<div className="absolute right-[6%] bottom-[18%] hidden xl:block">

  <div className="relative h-[90px] w-[30px] md:w-[90px] border border-black/5">

    <div className="absolute -bottom-[8px] -right-[8px] h-[14px] w-[14px] bg-blue-500" />

  </div>

</div>

{/* CENTER MICRO META */}
<div className="absolute left-1/2 top-[18%] hidden -translate-x-1/2 xl:block">

  <p className="text-[9px] uppercase tracking-[0.55em] text-blue-300/25">

    Visual Direction Archive

  </p>

</div>



{/* LEFT BOTTOM TECH NUMBERS */}
<div className="absolute left-[12%] bottom-[8%] hidden xl:block">

  <div className="space-y-2">

    <p className="text-[9px] tracking-[0.35em] text-blue-300/25">
      X:087
    </p>

    <p className="text-[9px] tracking-[0.35em] text-blue-300/25">
      Y:204
    </p>

  </div>

</div>

{/* RIGHT SIDE VERTICAL TEXT */}
<div className="absolute right-[2%] top-[90%] hidden -translate-y-1/2 rotate-90 xl:block">

  <p className="text-[9px] uppercase tracking-[0.5em] text-blue-300/25">

    Premium Portfolio System

  </p>

</div>

{/* MINI CENTER CROSS */}
<div className="absolute left-[38%] top-[55%] hidden xl:block">

  <div className="relative h-[20px] w-[20px]">

    <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-blue-400/15" />

    <div className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-blue-400/15" />

  </div>

</div>

</div>
        {/* GRID */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-10 md:gap-y-20 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.youtubeId || project.video} className="group">
              {/* VIDEO CARD */}
              <div
  onClick={() =>
  setActiveVideo(
    project.youtubeId
      ? `https://www.youtube.com/embed/${project.youtubeId}`
      : project.video || ""
  )
}
  className="relative cursor-pointer overflow-hidden rounded-[12px] md:rounded-[24px] border border-black/10 bg-black"
>
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
  {project.youtubeId ? (
    <img
      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
      alt={project.title}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  ) : (
    <video
      src={project.video || ""}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      muted
      loop
      playsInline
      preload="metadata"
    />
  )}
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2 py-1 md:px-4 md:py-2 backdrop-blur-md">

    {/* PLAY ICON */}
    <div className="flex items-center justify-center">

      <div
        className="h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white"
      />

    </div>

    {/* TEXT */}
    <p className="text-[7px] md:text-[11px] uppercase tracking-[0.28em] text-white">

      Play

    </p>

  </div>
</div>

              {/* INFO */}
              <div className="mt-5">
                <p className="mb-2 text-[7px] uppercase tracking-[0.18em] md:text-[11px] md:tracking-[0.35em] text-black/40">
                  {project.category}
                </p>

                <h3 className="text-[11px] font-medium leading-[1.3] tracking-tight md:text-xl">
                  {project.title}
                </h3>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>

      {activeVideo && (
  <div
    onClick={() => setActiveVideo(null)}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-6"
  >

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setActiveVideo(null)}
      className="absolute right-6 top-6 z-50 rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black"
    >
      Close
    </button>

    {/* VIDEO PLAYER */}
    <div
  onClick={(e) => e.stopPropagation()}
  className="relative aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl"
>

      {activeVideo.includes("youtube.com") ? (
  <iframe
    src={`${activeVideo}?autoplay=1`}
    className="absolute inset-0 h-full w-full"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
) : (
  <video
    src={activeVideo}
    className="absolute inset-0 h-full w-full object-cover"
    controls
    autoPlay
    playsInline
  />
)}

    </div>
  </div>
)}
    </main>
  );
}