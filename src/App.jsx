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
  { label: "Calculator", page: "calculator" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

const bestSellers = [
  {
    name: "Honeycomb Desk Organizer Storage Tray",
    price: "$40.00",
    description: "A geometric honeycomb-inspired organizer designed to keep desks, tools, and everyday essentials clean and accessible.",
    tag: "Best Seller",
    image: "/honeycomb-tray.png",
    link: "https://makeshift-creations-co-2.myshopify.com/products/honeycomb-desk-organizer-storage-tray?variant=54622070538612",
    category: "3D Printed Trays",
  },
  {
    name: "Lunar Phase Storage Box/Organizer",
    price: "$12.00",
    description: "A celestial-inspired desk organizer designed for pens, tools, notes, and everyday essentials.",
    tag: "New Release",
    image: "/lunar-phase-organizer.png",
    link: "https://8q9kqxr4pdprn8vg-99837706612.shopifypreview.com/products/lunar-phase-storage-box-organizer",
    category: "3D Printed Trays",
  },
  {
    name: "Monstera Leaf Desk Organizer & Multi-Purpose Holder",
    price: "$25.99",
    description: "A botanical-inspired organizer perfect for desks, accessories, pens, tools, and everyday essentials.",
    tag: "Decor Pick",
    image: "/monstera-organizer.png",
    link: "https://makeshift-creations-co-2.myshopify.com/products/monstera-leaf-desk-organizer-amp-multi-purpose-holder?variant=54622126145908",
    category: "3D Printed Trays",
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openCategory = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setCurrentPage("category");
  };

  const categoryProducts = bestSellers.filter((item) => item.category === selectedCategory);

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
                    <img
                      src="/honeycomb-tray.png"
                      alt="Honeycomb Desk Organizer Storage Tray"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">Featured</p>
                    <h3 className="mt-4 text-4xl font-black">Honeycomb Desk Organizer Storage Tray</h3>
                    <p className="mt-3 text-neutral-600">A clean, bold organizer designed to make your setup look intentional.</p>
                    <div className="mt-8 flex items-center justify-between">
                      <p className="text-3xl font-black">$40.00</p>
                      <button
                        onClick={() => window.open("https://makeshift-creations-co-2.myshopify.com/products/honeycomb-desk-organizer-storage-tray?variant=54622070538612", "_blank")}
                        className="rounded-sm bg-neutral-950 px-5 py-2 text-sm font-bold text-white transition hover:bg-neutral-800"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
