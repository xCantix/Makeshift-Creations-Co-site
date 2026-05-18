import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Box,
  Shirt,
  Sticker,
  PenTool,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Layers,
  Lightbulb,
  Package,
  Star,
  ScanLine,
} from "lucide-react";

const navItems = [
  { label: "Home", page: "home" },
  { label: "Creations", page: "creations" },
  { label: "Services", page: "services" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

const bestSellers = [
  {
    name: "Honeycomb Desk Organizer Storage Tray",
    price: "$12.00",
    description: "A geometric honeycomb-inspired organizer designed to keep desks, tools, and everyday essentials clean and accessible.",
    tag: "Best Seller",
    image: "/honeycomb-tray.png",
    link: "https://makeshift-creations-co-2.myshopify.com/products/honeycomb-desk-organizer-storage-tray?variant=54622070538612",
  },
  {
    name: "Lunar Phase Storage Box/Organizer",
    price: "$12.00",
    description: "A celestial-inspired desk organizer designed for pens, tools, notes, and everyday essentials.",
    tag: "New Release",
    image: "/lunar-phase-organizer.png",
    link: "https://8q9kqxr4pdprn8vg-99837706612.shopifypreview.com/products/lunar-phase-storage-box-organizer",
  },
  {
    name: "Monstera Tray",
    price: "$25.99",
    description: "A leafy statement piece for keys, accessories, and small essentials.",
    tag: "Decor Pick",
  },
];

const categories = [
  { title: "3D Printed Trays", icon: Layers, text: "Functional trays, rolling trays, organizers, and themed display pieces." },
  { title: "Storage Boxes", icon: Package, text: "Small-batch drawers and stackable storage made to tame clutter." },
  { title: "LED Lights", icon: Lightbulb, text: "Custom 3D printed light pieces for walls, gifts, and displays." },
  { title: "Earrings", icon: Sparkles, text: "Lightweight seasonal and novelty earrings with personality." },
];

const services = [
  {
    title: "Custom 3D Prints",
    icon: Box,
    text: "Bring a model, sketch, or idea and we’ll help turn it into a real object — from prototypes to one-of-a-kind gifts.",
  },
  {
    title: "Vinyl Decals",
    icon: Sticker,
    text: "Made-to-order decals for windows, vehicles, packaging, displays, small business branding, and décor.",
  },
  {
    title: "Custom Stickers",
    icon: Star,
    text: "Die-cut stickers for logos, drawings, events, product packaging, and personal projects.",
  },
  {
    title: "Logo Design",
    icon: PenTool,
    text: "Simple, usable logo concepts for groups, small businesses, makers, and new brands finding their look.",
  },
  {
    title: "Vinyl-Pressed Shirts",
    icon: Shirt,
    text: "Custom shirts for events, gifts, teams, and everyday wear using heat-transfer vinyl.",
  },
  {
    title: "Laser Engraving & Cutting",
    icon: ScanLine,
    text: "Precision laser engraving and cutting for wood, acrylic, leather, slate, custom signage, gifts, and small business branding.",
  },
];

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-5 pt-4 pb-2">
        <button onClick={() => setCurrentPage("home")} className="group flex items-center">
          <div className="text-left leading-none text-white transition group-hover:text-white/80">
            <p className="text-5xl font-black tracking-tight">Makeshift</p>
            <p className="text-5xl font-black tracking-tight">Creations</p>
            <p className="text-4xl font-black tracking-tight text-white">Co.</p>
          </div>
        </button>

        <nav className="hidden items-end gap-12 self-end pb-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setCurrentPage(item.page)}
              className={`text-3xl font-medium transition hover:text-white ${currentPage === item.page ? "text-white" : "text-white/70"}`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => setCurrentPage("contact")} className="rounded-sm bg-white px-8 py-4 text-2xl font-bold text-neutral-950 transition hover:bg-white/90">
            Get a Quote
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-sm border border-white/10 p-2 text-white md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setCurrentPage(item.page);
                  setOpen(false);
                }}
                className="text-left text-white/75"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/45">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-white/60">{text}</p>}
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <main className="min-h-screen bg-neutral-950 text-white" style={{ fontFamily: "'Gaegu', cursive" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap');`}</style>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <section id="home" className="relative overflow-hidden px-5 pb-24 pt-36 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-sm bg-white/5 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-6 py-3 text-xl font-medium text-white">
                <Sparkles size={24} /> Handmade goods. Custom work. Built with personality.
              </div>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Create. Customize. <span className="text-white/55">Inspire.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Functional 3D printed organizers, trays, accessories, decals, stickers, shirts, and custom design work — made with care by Makeshift Creations Co.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button onClick={() => setCurrentPage("creations")} className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 font-bold text-neutral-950 transition hover:bg-white/90">
                  Shop Creations <ArrowRight size={18} />
                </button>
                <button onClick={() => setCurrentPage("services")} className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                  Explore Services
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40">
                <div className="overflow-hidden rounded-sm bg-white text-neutral-950">
                  <div className="flex h-64 items-center justify-center bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-50">
                    <div className="relative flex h-40 w-40 items-center justify-center rounded-md border-[10px] border-amber-900 bg-amber-700 shadow-2xl">
                      <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="h-5 w-5 rounded-sm bg-amber-200/90" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">Featured</p>
                    <h3 className="mt-4 text-4xl font-black">HoneyComb Tray</h3>
                    <p className="mt-3 text-neutral-600">A clean, bold organizer designed to make your setup look intentional.</p>
                    <div className="mt-8 flex items-center justify-between">
                      <p className="text-3xl font-black">$40.00</p>
                      <button onClick={() => setCurrentPage("contact")} className="rounded-sm bg-neutral-950 px-5 py-2 text-sm font-bold text-white transition hover:bg-neutral-800">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {currentPage === "creations" && (
        <section id="creations" className="border-t border-white/10 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Creations"
              title="Functional design, made to organize."
              text="Thoughtfully designed organizers, trays, accessories, storage pieces, LED lights, and seasonal goods made in small batches."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {bestSellers.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 overflow-hidden rounded-sm border border-white/10 bg-neutral-900">
                    <div className="flex h-52 items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                      {item.name === "Honeycomb Desk Organizer Storage Tray" && (
                        <img
                          src={item.image}
                          alt="Honeycomb Desk Organizer Storage Tray"
                          className="h-full w-full object-cover"
                        />
                      )}

                      {item.name === "Lunar Phase Storage Box/Organizer" && (
                        <img
                          src={item.image}
                          alt="Lunar Phase Storage Box Organizer"
                          className="h-full w-full object-cover"
                        />
                      )}

                      {item.name === "Monstera Tray" && (
                        <div
                          className="relative h-32 w-32 rotate-12 bg-green-700 shadow-2xl"
                          style={{ clipPath: "polygon(50% 0%, 80% 10%, 100% 40%, 85% 100%, 50% 85%, 15% 100%, 0% 40%, 20% 10%)" }}
                        >
                          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-green-900" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 inline-flex rounded-sm bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">
                    {item.tag}
                  </div>
                  <h3 className="text-2xl font-black">{item.name}</h3>
                  <p className="mt-2 min-h-14 text-white/55">{item.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xl font-black">{item.price}</p>
                    <button
                      onClick={() => item.link ? window.open(item.link, "_blank") : setCurrentPage("contact")}
                      className="rounded-sm border border-white/15 px-4 py-2 text-sm font-bold transition group-hover:bg-white group-hover:text-neutral-950"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-28 grid gap-5 md:grid-cols-4">
              {categories.map((cat) => {
                const Icon = cat.icon;

                return (
                  <div key={cat.title} className="overflow-hidden rounded-sm border border-white/10 bg-neutral-900/70">
                    <div className="flex h-44 items-center justify-center border-b border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                      {cat.title === "3D Printed Trays" && (
                        <div className="grid rotate-12 grid-cols-3 gap-2">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="h-10 w-10 border border-amber-300 bg-amber-600 shadow-lg" />
                          ))}
                        </div>
                      )}

                      {cat.title === "Storage Boxes" && (
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-16 w-16 border-4 border-neutral-300 bg-neutral-700" />
                          <div className="h-16 w-16 border-4 border-neutral-300 bg-neutral-800" />
                          <div className="h-16 w-16 border-4 border-neutral-300 bg-neutral-600" />
                          <div className="h-16 w-16 border-4 border-neutral-300 bg-neutral-700" />
                        </div>
                      )}

                      {cat.title === "LED Lights" && (
                        <div className="relative flex h-24 w-24 items-center justify-center bg-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]">
                          <div className="h-12 w-12 bg-white/90" />
                        </div>
                      )}

                      {cat.title === "Earrings" && (
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="h-5 w-5 rounded-full border-2 border-pink-300" />
                            <div className="h-16 w-3 bg-pink-400" />
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-5 w-5 rounded-full border-2 border-purple-300" />
                            <div className="h-16 w-3 bg-purple-400" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <Icon className="mb-5 text-white/75" />
                      <h3 className="text-xl font-black">{cat.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/55">{cat.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {currentPage === "services" && (
      <section id="services" className="bg-neutral-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/45">Services</p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Whatever it is, make it stand out.</h2>
            <p className="mt-4 text-lg leading-8 text-white/60">
              Custom stickers, vinyl decals, logo design, 3D prints, and vinyl-pressed shirts for individuals, makers, and small businesses.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="flex h-48 items-center justify-center border-b border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                    {service.title === "Custom 3D Prints" && (
                      <div className="grid grid-cols-3 gap-2 rotate-12">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="h-10 w-10 border border-cyan-300 bg-cyan-500 shadow-lg" />
                        ))}
                      </div>
                    )}

                    {service.title === "Vinyl Decals" && (
                      <div className="flex rotate-[-8deg] gap-3">
                        <div className="h-20 w-20 border-4 border-neutral-400 bg-neutral-700" />
                        <div className="mt-8 h-20 w-20 border-4 border-neutral-500 bg-neutral-600" />
                      </div>
                    )}

                    {service.title === "Custom Stickers" && (
                      <div className="flex max-w-[180px] flex-wrap justify-center gap-3">
                        <div className="h-16 w-16 rotate-12 border-4 border-neutral-300 bg-neutral-700" />
                        <div className="h-16 w-16 -rotate-6 border-4 border-neutral-400 bg-neutral-600" />
                        <div className="h-16 w-16 rotate-3 border-4 border-neutral-500 bg-neutral-800" />
                      </div>
                    )}

                    {service.title === "Logo Design" && (
                      <div className="relative flex h-28 w-28 items-center justify-center border-4 border-white bg-neutral-900">
                        <div className="absolute h-20 w-20 rotate-45 border-4 border-orange-400" />
                        <div className="text-3xl font-black text-orange-300">M</div>
                      </div>
                    )}

                    {service.title === "Vinyl-Pressed Shirts" && (
                      <div className="relative h-32 w-28 bg-purple-500 shadow-2xl" style={{ clipPath: "polygon(20% 0%, 35% 0%, 45% 10%, 55% 10%, 65% 0%, 80% 0%, 100% 20%, 85% 35%, 85% 100%, 15% 100%, 15% 35%, 0% 20%)" }}>
                        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 border-4 border-white" />
                      </div>
                    )}

                    {service.title === "Laser Engraving & Cutting" && (
                      <div className="relative flex h-32 w-32 items-center justify-center border-4 border-amber-500 bg-neutral-800 shadow-2xl">
                        <div className="absolute top-0 h-2 w-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="h-6 w-6 border border-amber-300 bg-neutral-700" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-7">
                    <div className="mb-6 grid h-14 w-14 place-items-center rounded-sm border border-white/10 bg-neutral-900 text-white">
                      <Icon />
                    </div>
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{service.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {currentPage === "about" && (
      <section id="about" className="border-y border-white/10 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="mt-28 rounded-md border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/45">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Started with one printer and a good idea.</h2>
          </div>
          <div className="space-y-6 text-xl leading-9 text-white/70">
            <p>
              Makeshift Creations Co. started with a single 3D printer and a simple idea.
            </p>

            <p>
              After receiving a 3D printer as a Christmas gift, we began designing organizers and storage drawers for our own use. When friends and family saw them, the response was immediate. People loved the designs and started asking if we were selling them. With encouragement from those around us and a realization that there was a real need for well-made, thoughtful solutions, Makeshift Creations Co. was born.
            </p>

            <p>
              We’re a small, husband-and-wife team focused on problem solving and creativity. She handles networking and creative inspiration, helping shape ideas and connect with people. He focuses on 3D modeling, learning the machines, and crafting each product with care. Together, we combine imagination and technical skill to bring ideas to life.
            </p>

            <p>
              What matters most to us is taking the time to get the details right. Whether it’s a custom 3D print, vinyl decal, sticker, apparel piece, or logo design, we approach every project with the same mindset: listen first, think it through, and create something that truly works for the person who asked for it. We don’t mass-produce. We make things intentionally.
            </p>

            <p>
              We primarily work with small businesses, fellow makers, and individuals who have an idea but aren’t sure how to turn it into something real. If you come to us unsure whether your idea is possible, our goal is for you to leave excited and confident handing it off, knowing it’s in good hands.
            </p>

            <p>
              Makeshift Creations Co. is growing steadily and carefully, expanding our tools and capabilities as we go. We’re proud to stay hands-on, flexible, and personal, and we’ll always do everything we can to help make your ideas a reality.
            </p>
          </div>
        </div>
      </section>
      )}

      {currentPage === "contact" && (
      <section id="contact" className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-md bg-white p-8 text-neutral-950 md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-3xl font-black uppercase tracking-[0.3em] text-neutral-400">Contact</p>
              <h2 className="mt-4 text-6xl font-black tracking-tight md:text-7xl">Ready to make something?</h2>
              <p className="mt-5 text-3xl font-bold leading-[1.6] text-neutral-600">
                Send the details, reference photos, size needs, colors, and deadline. We’ll help shape the idea into a quote.
              </p>
              <div className="mt-8 space-y-6 text-3xl font-bold text-neutral-700">
                <a href="mailto:makeshiftcreationsco@gmail.com" className="flex items-center gap-4 text-3xl font-bold transition hover:text-neutral-950">
                  <Mail size={20} /> makeshiftcreationsco@gmail.com
                </a>
                <a href="tel:7253085837" className="flex items-center gap-4 text-3xl font-bold transition hover:text-neutral-950">
                  <Phone size={20} /> (725) 308-5837
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={20} /> Las Vegas, NV
                </div>
              </div>
            </div>

            <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-sm border border-neutral-200 bg-neutral-50 px-6 py-5 text-2xl font-bold outline-none focus:border-neutral-950" placeholder="Name" />
                <input className="rounded-sm border border-neutral-200 bg-neutral-50 px-6 py-5 text-2xl font-bold outline-none focus:border-neutral-950" placeholder="Email" />
              </div>
              <input className="rounded-sm border border-neutral-200 bg-neutral-50 px-6 py-5 text-2xl font-bold outline-none focus:border-neutral-950" placeholder="Project type" />
              <textarea className="min-h-40 rounded-sm border border-neutral-200 bg-neutral-50 px-6 py-5 text-2xl font-bold outline-none focus:border-neutral-950" placeholder="Tell us what you want made..." />
              <button className="inline-flex items-center justify-center gap-3 rounded-sm bg-neutral-950 px-8 py-5 text-3xl font-black text-white transition hover:bg-neutral-800">
                Request a Quote <ArrowRight size={18} />
              </button>
              <p className="text-xl font-bold text-neutral-500">
                Form is visual only until connected to Formspree, EmailJS, Netlify Forms, or your backend.
              </p>
            </form>
          </div>
        </div>
      </section>
      )}

      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Makeshift Creations Co. All rights reserved.</p>
          <div className="flex gap-5">
            <button onClick={() => setCurrentPage("creations")} className="hover:text-white">Creations</button>
            <button onClick={() => setCurrentPage("services")} className="hover:text-white">Services</button>
            <button onClick={() => setCurrentPage("contact")} className="hover:text-white">Contact</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
