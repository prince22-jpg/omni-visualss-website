"use client";

import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState } from "react";


export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e: any) => {
    
  e.preventDefault();

  emailjs.sendForm(
  "service_tia5q8w",
  "template_8isgq19",
  e.target,
  "d8DCCpsPTdhT1zN-M"
)
    .then(() => {

  e.target.reset();

  setShowSuccess(true);


})

.catch((error) => {

  console.log("EMAIL ERROR:", error);

  alert(JSON.stringify(error));

});

};


 if (showSuccess) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-6 pt-20">
{/* SUCCESS CARD */}

<div
  className="
  relative z-10 mx-auto
  w-full max-w-[620px]
  rounded-[26px]
  border border-black/10
  bg-white
  px-12 py-14
  text-center
  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
"
>

  {/* ICON */}

  <div
    className="
    mx-auto flex
    h-20 w-20
    items-center justify-center
    rounded-full
    bg-violet-100
  "
  >

    <span className="text-4xl text-violet-600">
      ✓
    </span>

  </div>

  {/* TITLE */}

  <h1
    className="
    mt-8
    text-[54px]
    font-semibold
    leading-none
    tracking-[-0.05em]
    text-[#1d1d1f]
  "
  >

    Thank You

  </h1>

  {/* TEXT */}

  <p
    className="
    mx-auto mt-5
    max-w-[420px]
    text-[16px]
    leading-[1.8]
    text-black/50
  "
  >

    Your inquiry has been received successfully.
    <br />
    We will review your project details and get back to you shortly.

  </p>

  {/* BUTTON */}

  <div className="mt-9">

    <Link
      href="/"
      className="
      inline-flex
      h-[56px]
      items-center justify-center
      rounded-full
      bg-black
      px-9
      text-[12px]
      uppercase
      tracking-[0.28em]
      text-white
      transition-all duration-300
      hover:scale-[1.03]
    "
    >

      Back Home

    </Link>

  </div>

</div>
    </main>
  );
}

return (
  <main className="min-h-screen overflow-hidden bg-white text-black">

      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 md:py-5">

          <Link
            href="/"
            className="text-[15px] font-medium tracking-tight md:text-[1.15rem]"
          >
            Omni.visualss
          </Link>

          <nav className="hidden items-center gap-10 text-[14px] md:flex">

            <Link
              href="/portfolio"
              className="text-black/55 transition hover:text-blue-500"
            >
              Work
            </Link>

            <Link
              href="/#about"
              className="text-black/55 transition hover:text-blue-500"
            >
              About
            </Link>

            {/* ACTIVE */}

            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-5 py-2 text-white transition"
            >
              Contact
            </Link>

          </nav>

          <Link
  href="/"
  className="rounded-full border border-black/10 px-4 py-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white md:px-6 md:py-2.5 md:text-[14px]"
>

  Back Home

</Link>

        </div>

      </header>

      {/* MAIN */}

      <section className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-40">

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.05]">

          <div className="h-full w-full bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:110px_110px]" />

        </div>

        <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}

          <div className="pt-10">

            <div className="mb-10 flex items-center gap-4">

              <div className="h-[2px] w-[80px] bg-gradient-to-r from-[#2563eb] to-[#dbeafe]" />

              <p className="text-[11px] uppercase tracking-[0.45em] text-black/40">

                Let’s Connect

              </p>

            </div>

            <h1
  className="
  max-w-[420px]
  text-[44px]
  font-medium
  leading-[0.95]
  tracking-[-0.08em]
  md:text-[5.5rem]
  bg-gradient-to-b
  from-[#2563eb]
  via-[#3b82f6]
  to-[#dbeafe]
  bg-clip-text
  text-transparent
  "
>

  Let’s Build Something Exceptional.

</h1>

            <p className="mt-6 max-w-[420px] text-[15px] leading-[1.8] text-black/55 md:mt-10 md:text-[18px]">

              Share your project details and I’ll get back to you within 24 hours.

            </p>

            {/* INFO */}

            <div className="mt-12 space-y-7 md:mt-20 md:space-y-10">

              <div>

                <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-black/35">

                  Response Time

                </p>

                <p className="text-[18px] text-black/70">

                  Within 24 Hours

                </p>

              </div>

              <div>

                <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-black/35">

                  Availability

                </p>

                <p className="text-[18px] text-black/70">

                  Open for new projects

                </p>

              </div>

              <div>

                <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-black/35">

                  Email

                </p>

                <p className="text-[18px] text-black/70">

                  chiranjibhati333@gmail.com

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <form
  onSubmit={sendEmail}
  className="relative border border-black/8 bg-white/40 p-5 backdrop-blur-xl md:p-10"
>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-[14px]">
                  Website
                </label>

                <input
  name="website"
  type="text"
  placeholder="https://yourwebsite.com"
                  className="h-[52px] md:h-[58px] w-full border border-black/10 bg-white px-5 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-[14px]">
                  Business Email
                </label>

                <input
                  required
  name="user_email"
  type="email"
  placeholder="your@email.com"
                  className="h-[52px] md:h-[58px] w-full border border-black/10 bg-white px-5 outline-none transition focus:border-blue-500"
                />
              </div>

            </div>

            {/* DESCRIPTION */}

            <div className="mt-8">

              <label className="mb-3 block text-[14px]">

                Describe about your work

              </label>

              <textarea
                required
  name="project_details"
  placeholder="Tell me about your project..."
                className="h-[120px] md:h-[140px] w-full resize-none border border-black/10 bg-white p-5 outline-none transition focus:border-blue-500"
              />

            </div>

            {/* AUDIENCE */}

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>

                <label className="mb-3 block text-[14px]">

                  Who is the target audience for the video?

                </label>

                <input
  name="audience"
  type="text"
  placeholder="Entrepreneurs, founders..."
                  className="h-[52px] md:h-[58px] w-full border border-black/10 bg-white px-5 outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-3 block text-[14px]">

                  What problems your output faces?

                </label>

                <input
  name="problems"
  type="text"
  placeholder="Low retention, poor engagement..."
                  className="h-[52px] md:h-[58px] w-full border border-black/10 bg-white px-5 outline-none transition focus:border-blue-500"
                />

              </div>

            </div>

            {/* GENDER */}

<div className="mt-8">

  <label className="mb-4 block text-[14px]">

    What you will be?

  </label>

  <div className="flex gap-6">

    {/* MALE */}

<label className="group flex h-[52px] md:h-[58px] w-full cursor-pointer items-center gap-3 border border-black/10 bg-white px-5 transition-all duration-300 hover:border-blue-500 has-[input:checked]:border-blue-500">

  <input
  type="radio"
  name="gender"
  value="Male"
  className="hidden"
/>

  <div className="flex h-4 w-4 items-center justify-center rounded-full border border-black/30 transition-all duration-300 group-has-[input:checked]:border-blue-500">

    <div className="h-2 w-2 rounded-full bg-black opacity-0 transition-all duration-300 group-has-[input:checked]:opacity-100" />

  </div>

  Male

</label>

{/* FEMALE */}

<label className="group flex h-[52px] md:h-[58px] w-full cursor-pointer items-center gap-3 border border-black/10 bg-white px-5 transition-all duration-300 hover:border-black has-[input:checked]:border-blue-500">

  <input
  type="radio"
  name="gender"
  value="Female"
  className="hidden"
/>

  <div className="flex h-4 w-4 items-center justify-center rounded-full border border-black/30 transition-all duration-300 group-has-[input:checked]:border-blue-500">

    <div className="h-2 w-2 rounded-full bg-blue-500 opacity-0 transition-all duration-300 group-has-[input:checked]:opacity-100" />

  </div>

  Female

</label>
  </div>

</div>

            {/* ACCENT */}

            <div className="mt-8">

              <label className="mb-3 block text-[14px]">

                Specific accent? (Optional)

              </label>

              <input
  name="accent"
  type="text"
  placeholder="American, British..."
                className="h-[52px] md:h-[58px] w-full border border-black/10 bg-white px-5 outline-none transition focus:border-blue-500"
              />

            </div>

            {/* REFERENCES */}

            <div className="mt-8">

              <label className="mb-3 block text-[14px]">

                Any reference videos or websites?

              </label>

             <textarea
  name="reference_videos"
  placeholder="Paste links here..."
                className="h-[120px] w-full resize-none border border-black/10 bg-white p-5 outline-none transition focus:border-blue-500"
              />

            </div>

            {/* BUTTON */}

<button
  type="submit"
  className="mt-10 flex h-[68px] w-full items-center justify-center rounded-full bg-blue-500 text-[14px] uppercase tracking-[0.35em] text-white transition hover:scale-[1.01] hover:bg-blue-600"
>

  Send Your Inquiry ↗

</button>

</form>

</div>

</section>

    </main>
  );
}