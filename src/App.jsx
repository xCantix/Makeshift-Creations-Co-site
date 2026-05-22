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
    name: "Monstera 3 Drawer Storage Box",
    price: "$25.00",
    description: "A botanical-inspired 3 drawer storage box designed to organize desks, craft supplies, accessories, and everyday essentials.",
    tag: "Storage Pick",
    image: "/monstera-3drawer.png",
    link: "https://makeshift-creations-co-2.myshopify.com/products/monstera-3-drawer-storage-box",
    category: "Storage Boxes",
  },
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
                      className="h-full w-full object-contain p-2"
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
      {currentPage === "creations" && (
        <section id="creations" className="border-t border-white/10 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Creations"
              title="Functional design, made to organize."
              text="Choose a category below to browse current products."
            />

            <div className="grid gap-5 md:grid-cols-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button key={cat.title} onClick={() => openCategory(cat.title)} className="overflow-hidden rounded-sm border border-white/10 bg-neutral-900/70 text-left transition hover:-translate-y-1 hover:bg-white/[0.07] scale-90">
                    <div className="flex h-36 items-center justify-center border-b border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                      {cat.title === "3D Printed Trays" && (
                        <div className="grid rotate-12 grid-cols-3 gap-2">
                          {Array.from({ length: 9 }).map((_, i) => <div key={i} className="h-10 w-10 border border-amber-300 bg-amber-600 shadow-lg" />)}
                        </div>
                      )}
                      {cat.title === "Storage Boxes" && (
                        <img
                          src="/monstera-3drawer.png"
                          alt="Monstera 3 Drawer Storage Box"
                          className="h-full w-full object-contain p-2"
                        />
                      )}
                      {cat.title === "LED Lights" && (
                        <div className="relative flex h-24 w-24 items-center justify-center bg-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]">
                          <div className="h-12 w-12 bg-white/90" />
                        </div>
                      )}
                      {cat.title === "Earrings" && (
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center"><div className="h-5 w-5 rounded-full border-2 border-pink-300" /><div className="h-16 w-3 bg-pink-400" /></div>
                          <div className="flex flex-col items-center"><div className="h-5 w-5 rounded-full border-2 border-purple-300" /><div className="h-16 w-3 bg-purple-400" /></div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <Icon className="mb-5 text-white/75" />
                      <h3 className="text-lg font-black">{cat.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/55">{cat.text}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {bestSellers.map((item) => (
                <div key={item.name} className="group rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="mb-6 overflow-hidden rounded-sm border border-white/10 bg-neutral-900">
                    <div className="flex h-52 items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
                    </div>
                  </div>
                  <div className="mb-3 inline-flex rounded-sm bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">{item.tag}</div>
                  <h3 className="text-2xl font-black">{item.name}</h3>
                  <p className="mt-2 min-h-14 text-white/55">{item.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xl font-black">{item.price}</p>
                    <button onClick={() => window.open(item.link, "_blank")} className="rounded-sm border border-white/15 px-4 py-2 text-sm font-bold transition group-hover:bg-white group-hover:text-neutral-950">
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === "category" && (
        <section id="category" className="border-t border-white/10 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Shop Category" title={selectedCategory || "Products"} text="Browse products in this category." />
            <div className="mb-14 flex justify-start">
              <button onClick={() => setCurrentPage("creations")} className="rounded-sm border border-white/15 bg-white/5 px-6 py-3 text-xl font-black text-white transition hover:bg-white hover:text-neutral-950">
                ← Back
              </button>
            </div>
            {categoryProducts.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-3">
                {categoryProducts.map((item) => (
                  <div key={item.name} className="group rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                    <div className="mb-6 overflow-hidden rounded-sm border border-white/10 bg-neutral-900"><div className="flex h-52 items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900"><img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" /></div></div>
                    <div className="mb-3 inline-flex rounded-sm bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">{item.tag}</div>
                    <h3 className="text-2xl font-black">{item.name}</h3>
                    <p className="mt-2 min-h-14 text-white/55">{item.description}</p>
                    <div className="mt-6 flex items-center justify-between"><p className="text-xl font-black">{item.price}</p><button onClick={() => window.open(item.link, "_blank")} className="rounded-sm border border-white/15 px-4 py-2 text-sm font-bold transition group-hover:bg-white group-hover:text-neutral-950">View Product</button></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-10 text-center"><h3 className="text-3xl font-black">No products listed here yet.</h3><p className="mt-4 text-xl text-white/60">This category is ready for future products.</p></div>
            )}
          </div>
        </section>
      )}

      {currentPage === "services" && (
        <section id="services" className="bg-neutral-950 px-5 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Services" title="Whatever it is, make it stand out." text="Custom stickers, vinyl decals, logo design, 3D prints, laser engraving, and vinyl-pressed shirts." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07]">
                    <div className="flex h-48 items-center justify-center border-b border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                      <Icon size={72} className="text-white/70" />
                    </div>
                    <div className="p-7">
                      <div className="mb-6 grid h-14 w-14 place-items-center rounded-sm border border-white/10 bg-neutral-900 text-white"><Icon /></div>
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

      {currentPage === "calculator" && (
        <section id="calculator" className="border-y border-white/10 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Quote Tool" title="Makeshift Creations Co. Price Calculator" text="Use this calculator to estimate custom project pricing before reaching out for a final quote." />
            <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div><h3 className="text-3xl font-black text-white">Custom Quote Calculator</h3><p className="mt-1 text-xl text-white/60">Embedded pricing calculator</p></div>
                <button onClick={() => setCurrentPage("contact")} className="rounded-sm border border-white/15 px-5 py-3 text-xl font-bold text-white transition hover:bg-white hover:text-neutral-950">Request Final Quote</button>
              </div>
              <iframe title="Makeshift Creations Co. Price Calculator" src="https://calculator-app-green-alpha.vercel.app/" className="h-[1100px] w-full rounded-sm border border-white/10 bg-neutral-900" />
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
              <p>Makeshift Creations Co. started with a single 3D printer and a simple idea.</p>
              <p>After receiving a 3D printer as a Christmas gift, we began designing organizers and storage drawers for our own use. When friends and family saw them, the response was immediate. People loved the designs and started asking if we were selling them. With encouragement from those around us and a realization that there was a real need for well-made, thoughtful solutions, Makeshift Creations Co. was born.</p>
              <p>We’re a small, husband-and-wife team focused on problem solving and creativity. She handles networking and creative inspiration, helping shape ideas and connect with people. He focuses on 3D modeling, learning the machines, and crafting each product with care. Together, we combine imagination and technical skill to bring ideas to life.</p>
              <p>What matters most to us is taking the time to get the details right. Whether it’s a custom 3D print, vinyl decal, sticker, apparel piece, or logo design, we approach every project with the same mindset: listen first, think it through, and create something that truly works for the person who asked for it. We don’t mass-produce. We make things intentionally.</p>
              <p>We primarily work with small businesses, fellow makers, and individuals who have an idea but aren’t sure how to turn it into something real. If you come to us unsure whether your idea is possible, our goal is for you to leave excited and confident handing it off, knowing it’s in good hands.</p>
              <p>Makeshift Creations Co. is growing steadily and carefully, expanding our tools and capabilities as we go. We’re proud to stay hands-on, flexible, and personal, and we’ll always do everything we can to help make your ideas a reality.</p>
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
                <p className="mt-5 text-3xl font-bold leading-[1.6] text-neutral-600">Send the details, reference photos, size needs, colors, and deadline. We’ll help shape the idea into a quote.</p>
                <div className="mt-8 space-y-6 text-3xl font-bold text-neutral-700">
                  <a href="mailto:makeshiftcreationsco@gmail.com" className="flex items-center gap-4 text-3xl font-bold transition hover:text-neutral-950"><Mail size={20} /> makeshiftcreationsco@gmail.com</a>
                  <a href="tel:7253085837" className="flex items-center gap-4 text-3xl font-bold transition hover:text-neutral-950"><Phone size={20} /> (725) 308-5837</a>
                  <div className="flex items-center gap-4 text-3xl font-bold"><MapPin size={20} /> Las Vegas, NV</div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6">
                <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-8">
                  <h3 className="text-4xl font-black text-neutral-950">Start Your Project</h3>
                  <p className="mt-4 text-2xl font-bold leading-10 text-neutral-600">Fill out our detailed project inquiry form and we’ll get back to you with pricing, recommendations, and next steps.</p>
                  <a href="https://formspace.club/f/7e253da8-1676-45cc-be5a-cd773efbbc45" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 rounded-sm bg-neutral-950 px-8 py-5 text-3xl font-black text-white transition hover:bg-neutral-800">
                    Open Inquiry Form <ArrowRight size={18} />
                  </a>
                </div>
              </div>
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
