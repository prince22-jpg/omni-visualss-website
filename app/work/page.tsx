"use client";

import { useState } from "react";

const projects = [
  {
    image: "https://img.youtube.com/vi/zhDzuK4t4jY/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/zhDzuK4t4jY",
  },

  {
    image: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },

  {
    image: "https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },

  {
    image: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },

  {
    image: "https://img.youtube.com/vi/XHOmBV4js_E/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/XHOmBV4js_E",
  },

  {
    image: "https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/kXYiU_JCYtU",
  },

  {
    image: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },

  {
    image: "https://img.youtube.com/vi/fLexgOxsZu0/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/fLexgOxsZu0",
  },

  {
    image: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
  },

  {
    image: "https://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/e-ORhEE9VVg",
  },

  {
    image: "https://img.youtube.com/vi/CevxZvSJLk8/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/CevxZvSJLk8",
  },

  {
    image: "https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/OPf0YbXqDm0",
  },
];

export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#8b5cf6]">
            Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Selected Work &
            <br />
            Creative Projects
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(project.video)}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition duration-300 group-hover:scale-110">
                    <div className="ml-1 text-3xl text-white">
                      ▶
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setActiveVideo("")}
              className="absolute -top-14 right-0 text-5xl text-white"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-[30px] border border-white/10">
              <div className="aspect-video">
                <iframe
                  src={activeVideo + "?autoplay=1"}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}