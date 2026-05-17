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
    name: "HoneyComb Tray",
    price: "$40.00",
    description: "A bold modular tray made for clean setups and everyday organization.",
    tag: "Best Seller",
  },
  {
    name: "Lunar Phase Tray",
    price: "$35.00",
    description: "A witchy-inspired organizer with a clean display-ready profile.",
    tag: "Fan Favorite",
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
];

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => setCurrentPage("home")} className="group flex items-center gap-4">
          <div className="overflow-hidden rounded-full border-2 border-white bg-white shadow-lg shadow-white/10 transition group-hover:scale-105">
  <img
    src="public/logo.gif"
    alt="Makeshift Creations Co. logo"
    className="h-14 w-14 object-contain p-1"
  />
</div>
          <div>
            <p className="text-lg font-black tracking-tight text-white">Makeshift</p>
            <p className="-mt-1 text-xs uppercase tracking-[0.28em] text-white/55">Creations Co.</p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setCurrentPage(item.page)}
              className={`text-sm font-medium transition hover:text-white ${currentPage === item.page ? "text-white" : "text-white/70"}`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => setCurrentPage("contact")} className="rounded-full bg-white px-5 py-2 text-sm font-bold text-neutral-950 transition hover:scale-105">
            Get a Quote
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 text-white md:hidden" aria-label="Toggle menu">
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
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <Sparkles size={16} /> Handmade goods. Custom work. Built with personality.
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Create. Customize. <span className="text-white/55">Inspire.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Functional 3D printed organizers, trays, accessories, decals, stickers, shirts, and custom design work — made with care by Makeshift Creations Co.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => setCurrentPage("creations")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-neutral-950 transition hover:scale-105">
                Shop Creations <ArrowRight size={18} />
              </button>
              <button onClick={() => setCurrentPage("services")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                Explore Services
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40">
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] bg-white p-8 text-neutral-950">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">Featured</p>
                  <h3 className="mt-4 text-4xl font-black">HoneyComb Tray</h3>
                  <p className="mt-3 text-neutral-600">A clean, bold organizer designed to make your setup look intentional.</p>
                  <p className="mt-8 text-3xl font-black">$40.00</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-5">
                    <p className="text-2xl font-black">3D</p>
                    <p className="mt-2 text-sm text-white/55">Printed goods</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-5">
                    <p className="text-2xl font-black">Custom</p>
                    <p className="mt-2 text-sm text-white/55">Quotes welcome</p>
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
          <SectionHeader eyebrow="Creations" title="Functional design, made to organize." text="Thoughtfully designed organizers, trays, accessories, storage pieces, LED lights, and seasonal goods made in small batches." />

          <div className="grid gap-5 md:grid-cols-3">
            {bestSellers.map((item) => (
              <div key={item.name} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="mb-6 flex h-52 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-white to-neutral-300 text-neutral-950">
                  <Box size={72} strokeWidth={1.4} />
                </div>
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-2 min-h-14 text-white/55">{item.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-black">{item.price}</p>
                  <button onClick={() => setCurrentPage("contact")} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold transition group-hover:bg-white group-hover:text-neutral-950">
                    Ask About It
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="rounded-[1.5rem] border border-white/10 bg-neutral-900/70 p-6">
                  <Icon className="mb-5 text-white/75" />
                  <h3 className="text-xl font-black">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{cat.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {currentPage === "services" && (
      <section id="services" className="bg-white px-5 py-24 text-neutral-950">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">Services</p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">Whatever it is, make it stand out.</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Custom stickers, vinyl decals, logo design, 3D prints, and vinyl-pressed shirts for individuals, makers, and small businesses.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-neutral-950 text-white">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {currentPage === "about" && (
      <section id="about" className="border-y border-white/10 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/45">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Started with one printer and a good idea.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/65">
            <p>
              Makeshift Creations Co. began with a single 3D printer and a simple need: better organizers and storage drawers for everyday use. Friends and family noticed, asked for their own, and the idea grew from there.
            </p>
            <p>
              Today, we’re a hands-on husband-and-wife team combining creative inspiration, networking, 3D modeling, machine work, and careful finishing to make pieces that are personal, practical, and intentionally made.
            </p>
            <p>
              We work with small businesses, fellow makers, and anyone with an idea they want to turn into something real.
            </p>
          </div>
        </div>
      </section>
      )}

      {currentPage === "contact" && (
      <section id="contact" className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 text-neutral-950 md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">Contact</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Ready to make something?</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Send the details, reference photos, size needs, colors, and deadline. We’ll help shape the idea into a quote.
              </p>
              <div className="mt-8 space-y-4 text-neutral-700">
                <a href="mailto:makeshiftcreationsco@gmail.com" className="flex items-center gap-3 transition hover:text-neutral-950">
                  <Mail size={20} /> makeshiftcreationsco@gmail.com
                </a>
                <a href="tel:7253085837" className="flex items-center gap-3 transition hover:text-neutral-950">
                  <Phone size={20} /> (725) 308-5837
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={20} /> Las Vegas, NV
                </div>
              </div>
            </div>

            <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 outline-none focus:border-neutral-950" placeholder="Name" />
                <input className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 outline-none focus:border-neutral-950" placeholder="Email" />
              </div>
              <input className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 outline-none focus:border-neutral-950" placeholder="Project type" />
              <textarea className="min-h-40 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 outline-none focus:border-neutral-950" placeholder="Tell us what you want made..." />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-4 font-bold text-white transition hover:scale-[1.02]">
                Request a Quote <ArrowRight size={18} />
              </button>
              <p className="text-sm text-neutral-500">
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
