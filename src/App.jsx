import React, { useLayoutEffect, useState } from "react";
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
  Check,
  Palette,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { label: "Home", page: "home" },
  { label: "Creations", page: "creations" },
  { label: "Services", page: "services" },
  { label: "Process", page: "process" },
  { label: "FAQ", page: "faq" },
  { label: "Gallery", page: "gallery" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

const inquiryUrl = "https://formspace.club/f/7e253da8-1676-45cc-be5a-cd773efbbc45";

const bestSellers = [
  {
    name: "Pumpkin Pie Slice Earrings",
    price: "$9.99",
    description: "Playful pumpkin pie slice earrings with a dollop of whipped cream — a lightweight seasonal accessory for fall and Thanksgiving.",
    tag: "Fall Favorite",
    image: "/pumpkin-pie-earrings.png",
    link: inquiryUrl,
    category: "Earrings",
  },
  {
    name: "Christmas Tree Earrings",
    price: "$9.99",
    description: "Festive Christmas tree earrings with red ornaments and a bright yellow star — lightweight holiday style with handmade personality.",
    tag: "Holiday Pick",
    image: "/christmas-tree-earrings.png",
    link: inquiryUrl,
    category: "Earrings",
  },
  {
    name: "Monstera Leaf LED Wall Light",
    price: "$15.00",
    description: "A tropical-inspired LED wall light with a soft ambient glow and bold monstera leaf styling.",
    tag: "LED Glow",
    image: "/monstera-led.png",
    link: inquiryUrl,
    category: "LED Lights",
  },
  {
    name: "Monstera 3 Drawer Storage Box",
    price: "$35.00",
    description: "A botanical-inspired 3 drawer storage box designed to organize desks, craft supplies, accessories, and everyday essentials.",
    tag: "Storage Pick",
    image: "/monstera-3drawer.png",
    link: inquiryUrl,
    category: "Storage Boxes",
  },
  {
    name: "Honeycomb Desk Organizer Storage Tray",
    price: "$40.00",
    description: "A geometric honeycomb-inspired organizer designed to keep desks, tools, and everyday essentials clean and accessible.",
    tag: "Best Seller",
    image: "/honeycomb-tray.png",
    link: inquiryUrl,
    category: "3D Printed Trays",
  },
  {
    name: "Lunar Phase Storage Box/Organizer",
    price: "$12.00",
    description: "A celestial-inspired desk organizer designed for pens, tools, notes, and everyday essentials.",
    tag: "New Release",
    image: "/lunar-phase-organizer.png",
    link: inquiryUrl,
    category: "Storage Boxes",
  },
  {
    name: "Monstera Leaf Desk Organizer & Multi-Purpose Holder",
    price: "$25.99",
    description: "A botanical-inspired organizer perfect for desks, accessories, pens, tools, and everyday essentials.",
    tag: "Decor Pick",
    image: "/monstera-organizer.png",
    link: inquiryUrl,
    category: "3D Printed Trays",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Idea",
    text: "Send us your project details, reference photos, rough measurements, colors, deadline, and anything you already know you want included.",
  },
  {
    step: "02",
    title: "We Review the Project",
    text: "We look over the design needs, material options, machine time, complexity, and whether the project is best suited for 3D printing, vinyl, laser work, apparel, or a mix.",
  },
  {
    step: "03",
    title: "Quote & Plan",
    text: "You’ll get pricing, recommendations, and next steps before production begins. For custom work, we make sure the direction is clear first.",
  },
  {
    step: "04",
    title: "Make It",
    text: "Once approved, we create the piece carefully in small batches or one at a time, checking details as we go.",
  },
  {
    step: "05",
    title: "Finish & Deliver",
    text: "We handle final cleanup, assembly, packing, and delivery or shipping details so the finished item is ready to use or gift.",
  },
];

const faqs = [
  {
    question: "Do you take custom orders?",
    answer: "Yes. Custom work is one of the main things we do. Send your idea, reference photos, dimensions, colors, and intended use so we can review it properly.",
  },
  {
    question: "How long does a custom project take?",
    answer: "Timing depends on complexity, material availability, machine time, and current workload. Simple projects may be quick, while larger custom pieces can take longer.",
  },
  {
    question: "Can you help if I only have an idea and no design file?",
    answer: "Yes. You do not need a finished file to start. We can help shape the idea, discuss what is realistic, and plan the best way to make it.",
  },
  {
    question: "Do you ship orders?",
    answer: "Yes, shipping can be arranged for many products. Some larger, fragile, or highly custom items may need special handling.",
  },
  {
    question: "Are 3D printed items perfectly smooth?",
    answer: "No. Because of the 3D printing process, minor layer lines and small variations may be visible. That is part of the handmade character of the piece.",
  },
  {
    question: "Do you do bulk or small business orders?",
    answer: "Yes. We can review small-batch requests for stickers, decals, apparel, laser work, 3D prints, and branded items.",
  },
];

const galleryItems = [
  { title: "Pumpkin Pie Slice Earrings", image: "/pumpkin-pie-earrings.png", type: "Seasonal Earrings" },
  { title: "Christmas Tree Earrings", image: "/christmas-tree-earrings.png", type: "Holiday Earrings" },
  { title: "Honeycomb Desk Organizer", image: "/honeycomb-tray.png", type: "3D Printed Organizer" },
  { title: "Monstera Storage Box", image: "/monstera-3drawer.png", type: "Storage Box" },
  { title: "Monstera LED Wall Light", image: "/monstera-led.png", type: "LED Light" },
  { title: "Lunar Phase Organizer", image: "/lunar-phase-organizer.png", type: "Storage Organizer" },
  { title: "Monstera Desk Holder", image: "/monstera-organizer.png", type: "Desk Organizer" },
  { title: "Custom Project Placeholder", image: null, type: "More Projects Coming Soon" },
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
    details: [
      "Custom 3D printing is ideal for functional parts, organizers, prototypes, gifts, display pieces, replacement parts, and small-batch creative projects.",
      "You can bring us a finished 3D model, a reference image, a sketch, or just an idea. We’ll help figure out what is realistic, what materials make sense, and how to approach the design so the final print works for your needs.",
      "Every project is reviewed for size, complexity, material use, print time, finishing needs, and durability before pricing."
    ],
    includes: ["Design support", "3D printed parts", "Prototype help", "Small-batch production", "Functional and decorative prints"],
  },
  {
    title: "Vinyl Decals",
    icon: Sticker,
    text: "Made-to-order decals for windows, vehicles, packaging, displays, small business branding, and décor.",
    details: [
      "Vinyl decals are a clean way to add branding, decoration, labels, or custom artwork to smooth surfaces.",
      "They work well for windows, vehicles, tumblers, laptops, packaging, display signs, business branding, and personal projects.",
      "We can help size the design, choose colors, and prepare the layout so the finished decal is clear and easy to apply."
    ],
    includes: ["Custom sizing", "Single-color or layered vinyl", "Business decals", "Window and vehicle decals", "Application-ready designs"],
  },
  {
    title: "Custom Stickers",
    icon: Star,
    text: "Die-cut stickers for logos, drawings, events, product packaging, and personal projects.",
    details: [
      "Custom stickers are great for small businesses, packaging, branding, events, artwork, giveaways, and personal designs.",
      "We can create stickers from logos, illustrations, simple text, or prepared artwork and help format the design for a clean finished result.",
      "Sticker pricing depends on size, quantity, finish, material, and how much design preparation is needed."
    ],
    includes: ["Logo stickers", "Packaging stickers", "Event stickers", "Custom shapes", "Small-batch orders"],
  },
  {
    title: "Logo Design",
    icon: PenTool,
    text: "Simple, usable logo concepts for groups, small businesses, makers, and new brands finding their look.",
    details: [
      "Logo design is for customers who need a clean, usable starting point for a brand, project, group, shop, or event.",
      "We focus on practical logos that can be used across stickers, shirts, decals, packaging, websites, and social media instead of overly complicated designs that are hard to reproduce.",
      "The process usually starts with your business name, style preferences, colors, reference ideas, and where the logo will be used."
    ],
    includes: ["Simple logo concepts", "Brand direction", "Usable design files", "Sticker and apparel friendly layouts", "Small business branding"],
  },
  {
    title: "Vinyl-Pressed Shirts",
    icon: Shirt,
    text: "Custom shirts for events, gifts, teams, and everyday wear using heat-transfer vinyl.",
    details: [
      "Vinyl-pressed shirts are a strong option for custom apparel, small events, teams, gifts, staff shirts, and one-off designs.",
      "Designs are created with heat-transfer vinyl and pressed onto apparel using heat and pressure for a clean finished look.",
      "Pricing depends on shirt type, vinyl colors, design size, design complexity, and quantity."
    ],
    includes: ["Custom shirts", "Event apparel", "Small batch orders", "Text and graphic designs", "Heat-transfer vinyl"],
  },
  {
    title: "Laser Engraving & Cutting",
    icon: ScanLine,
    text: "Precision laser engraving and cutting for wood, acrylic, leather, slate, custom signage, gifts, and small business branding.",
    details: [
      "Laser engraving and cutting is great for custom signs, business cards, gifts, tags, plaques, décor, templates, and branded products.",
      "We can work with designs for engraving, cutting, or both depending on the material and the final use of the item.",
      "Project pricing depends on material, size, engraving time, cutting complexity, design preparation, and finishing needs."
    ],
    includes: ["Wood engraving", "Acrylic cutting", "Custom signs", "Business branding", "Personalized gifts"],
  },
];

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5">
        <button onClick={() => navigate("home")} className="group flex items-center gap-3 text-left" aria-label="Makeshift Creations Co. home">
          <img src="/logo.gif" alt="" className="h-12 w-12 rounded-full border border-white/15 bg-white object-cover transition group-hover:rotate-3" />
          <div className="leading-tight">
            <p className="brand-type text-lg font-black tracking-tight text-white sm:text-xl">Makeshift Creations Co.</p>
            <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/75 sm:block">Made in Las Vegas</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.page)}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white ${currentPage === item.page ? "bg-white/10 text-white" : "text-white/60"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("contact")}
            className="ml-2 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-black text-neutral-950 transition hover:bg-amber-200"
          >
            Get a Quote
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/15 p-2.5 text-white lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.page)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-bold ${currentPage === item.page ? "bg-amber-300 text-neutral-950" : "bg-white/5 text-white/75"}`}
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
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productReturnPage, setProductReturnPage] = useState("creations");

  const openCategory = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setCurrentPage("category");
  };

  const openService = (service) => {
    setSelectedService(service);
    setCurrentPage("serviceDetail");
  };

  const openProduct = (product, returnPage = currentPage) => {
    setSelectedProduct(product);
    setProductReturnPage(returnPage);
    setCurrentPage("productDetail");
  };

  const categoryProducts = bestSellers.filter((item) => item.category === selectedCategory);
  const relatedProducts = selectedProduct
    ? bestSellers.filter((item) => item.name !== selectedProduct.name).slice(0, 3)
    : [];

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <section id="home" className="relative overflow-hidden px-5 pb-24 pt-32 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,211,77,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.10),transparent_30%)]" />
          <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/5 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-100">
                <Sparkles size={17} /> Handmade goods · Custom work · Built with personality
              </div>
              <h1 className="brand-type text-5xl font-black leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                Useful things,<br /><span className="text-amber-300">made memorable.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Functional 3D printed organizers, trays, accessories, decals, stickers, shirts, and custom design work — made with care by Makeshift Creations Co.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button onClick={() => setCurrentPage("creations")} className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3.5 font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200">
                  Browse Creations <ArrowRight size={18} />
                </button>
                <button onClick={() => setCurrentPage("services")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Explore Services
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="rotate-1 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/40 transition hover:rotate-0">
                <div className="overflow-hidden rounded-[1.4rem] bg-[#f7f3e8] text-neutral-950">
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
                        onClick={() => openProduct(bestSellers.find((item) => item.name === "Honeycomb Desk Organizer Storage Tray"), "home")}
                        className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto mt-16 max-w-7xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/45">Custom Orders Welcome</p>
                <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                  Have an idea but don’t know where to start?
                </h2>
                <p className="mt-5 text-2xl leading-10 text-white/65">
                  We help turn rough ideas, sketches, reference photos, and small business needs into real custom pieces.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <button
                  onClick={() => setCurrentPage("process")}
                  className="w-full rounded-sm border border-white/15 px-6 py-4 text-2xl font-black text-white transition hover:bg-white hover:text-neutral-950 md:w-auto"
                >
                  See the Process
                </button>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="w-full rounded-sm bg-white px-6 py-4 text-2xl font-black text-neutral-950 transition hover:bg-white/90 md:w-auto"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {currentPage === "creations" && (
        <section id="creations" className="border-t border-white/10 px-5 pt-40 pb-24">
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
                        <img
                          src="/honeycomb-tray.png"
                          alt="Honeycomb Desk Organizer Storage Tray"
                          className="h-full w-full object-contain p-2"
                        />
                      )}
                      {cat.title === "Storage Boxes" && (
                        <img
                          src="/monstera-3drawer.png"
                          alt="Monstera 3 Drawer Storage Box"
                          className="h-full w-full object-contain p-2"
                        />
                      )}
                      {cat.title === "LED Lights" && (
                        <img
                          src="/monstera-led.png"
                          alt="Monstera Leaf LED Wall Light"
                          className="h-full w-full object-contain p-2"
                        />
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
                    <button onClick={() => openProduct(item, "creations")} className="rounded-sm border border-white/15 px-4 py-2 text-sm font-bold transition group-hover:bg-white group-hover:text-neutral-950">
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
        <section id="category" className="border-t border-white/10 px-5 pb-24 pt-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Shop Category" title={selectedCategory || "Products"} text="Browse products in this category." />
            <div className="mb-14 flex justify-start">
              <button
                onClick={() => setCurrentPage("creations")}
                className="rounded-sm border border-white/15 bg-white/5 px-6 py-3 text-xl font-black text-white transition hover:bg-white hover:text-neutral-950"
              >
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
                    <div className="mt-6 flex items-center justify-between"><p className="text-xl font-black">{item.price}</p><button onClick={() => openProduct(item, "category")} className="rounded-sm border border-white/15 px-4 py-2 text-sm font-bold transition group-hover:bg-white group-hover:text-neutral-950">View Product</button></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-10 text-center"><h3 className="text-3xl font-black">No products listed here yet.</h3><p className="mt-4 text-xl text-white/60">This category is ready for future products.</p></div>
            )}
          </div>
        </section>
      )}

      {currentPage === "productDetail" && selectedProduct && (
        <section id="product-detail" className="relative overflow-hidden border-y border-white/10 px-5 pb-24 pt-32 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(252,211,77,0.10),transparent_30%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="relative mb-8 flex items-center gap-3 text-sm font-bold text-white/45">
              <button onClick={() => setCurrentPage("creations")} className="transition hover:text-amber-300">Creations</button>
              <span>/</span>
              <button onClick={() => { setSelectedCategory(selectedProduct.category); setCurrentPage("category"); }} className="transition hover:text-amber-300">{selectedProduct.category}</button>
              <span className="hidden sm:inline">/</span>
              <span className="hidden truncate text-white/70 sm:inline">{selectedProduct.name}</span>
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#f7f3e8] p-4 shadow-2xl shadow-black/30 sm:p-7">
                  <div className="absolute left-7 top-7 z-10 rounded-full bg-neutral-950/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">Product photo</div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="mx-auto aspect-square max-h-[650px] w-full rounded-2xl object-contain"
                  />
                </div>
                <button
                  onClick={() => setCurrentPage(productReturnPage)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-neutral-950"
                >
                  ← Back to browsing
                </button>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-9">
                <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200">
                  {selectedProduct.tag}
                </div>
                <h1 className="brand-type mt-5 text-4xl font-black leading-[1.02] tracking-tight text-white md:text-5xl xl:text-6xl">
                  {selectedProduct.name}
                </h1>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Price</p>
                    <p className="mt-1 text-4xl font-black text-white">{selectedProduct.price}</p>
                  </div>
                  <p className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/60">Custom requests quoted separately</p>
                </div>
                <p className="mt-6 text-lg leading-8 text-white/65 md:text-xl">{selectedProduct.description}</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                    <Check className="text-amber-300" size={20} />
                    <p className="mt-3 text-sm font-bold text-white">Made with care</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">Small-batch maker quality</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                    <Palette className="text-amber-300" size={20} />
                    <p className="mt-3 text-sm font-bold text-white">Make it yours</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">Ask about custom options</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                    <MessageCircle className="text-amber-300" size={20} />
                    <p className="mt-3 text-sm font-bold text-white">Real help</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">Questions are welcome</p>
                  </div>
                </div>

                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-300 px-8 py-4 text-lg font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
                >
                  Ask About This Piece
                  <ArrowRight size={22} />
                </a>
                <p className="mt-4 text-center text-sm leading-6 text-white/45">Tell us what you like, what you’d change, and when you need it.</p>
              </div>
            </div>

            <div className="relative mt-20 border-t border-white/10 pt-14">
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300/70">Keep exploring</p>
                  <h2 className="brand-type mt-2 text-3xl font-black text-white md:text-4xl">More from the workbench</h2>
                </div>
                <button onClick={() => setCurrentPage("creations")} className="text-sm font-bold text-white/60 transition hover:text-white">View all creations →</button>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {relatedProducts.map((item) => (
                  <button key={item.name} onClick={() => openProduct(item, "creations")} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.07]">
                    <div className="h-52 bg-[#f7f3e8] p-3"><img src={item.image} alt="" className="h-full w-full object-contain" /></div>
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">{item.category}</p>
                      <h3 className="mt-2 text-xl font-black text-white">{item.name}</h3>
                      <div className="mt-4 flex items-center justify-between"><span className="font-black text-amber-300">{item.price}</span><span className="text-sm font-bold text-white/55 group-hover:text-white">View piece →</span></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "services" && (
        <section id="services" className="bg-neutral-950 px-5 pt-40 pb-24 text-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Services" title="Whatever it is, make it stand out." text="Custom stickers, vinyl decals, logo design, 3D prints, laser engraving, and vinyl-pressed shirts." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.title}
                    onClick={() => openService(service)}
                    className="flex h-full w-full flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-0 text-left align-top transition hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <div className="m-0 flex h-48 w-full items-center justify-center border-b border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                      <Icon size={72} className="text-white/70" />
                    </div>
                    <div className="p-7">
                      <div className="mb-6 grid h-14 w-14 place-items-center rounded-sm border border-white/10 bg-neutral-900 text-white"><Icon /></div>
                      <h3 className="text-2xl font-black">{service.title}</h3>
                      <p className="mt-4 leading-7 text-white/60">{service.text}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {currentPage === "serviceDetail" && selectedService && (
        <section id="service-detail" className="border-y border-white/10 px-5 pt-44 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex justify-start">
              <button
                onClick={() => setCurrentPage("services")}
                className="rounded-sm border border-white/15 bg-white/5 px-6 py-3 text-xl font-black text-white transition hover:bg-white hover:text-neutral-950"
              >
                ← Back
              </button>
            </div>

            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-8">
                <div className="mb-8 grid h-20 w-20 place-items-center rounded-sm border border-white/10 bg-neutral-900 text-white">
                  {React.createElement(selectedService.icon, { size: 42 })}
                </div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/45">Service</p>
                <h2 className="text-5xl font-black tracking-tight text-white">{selectedService.title}</h2>
                <p className="mt-5 text-2xl leading-10 text-white/60">{selectedService.text}</p>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-sm bg-white px-8 py-4 text-2xl font-black text-neutral-950 transition hover:bg-white/90"
                >
                  Request a Quote <ArrowRight size={18} />
                </button>
              </div>

              <div className="space-y-8">
                <div className="rounded-md border border-white/10 bg-white/[0.04] p-8">
                  <h3 className="text-4xl font-black text-white">About This Service</h3>
                  <div className="mt-6 space-y-5 text-xl leading-9 text-white/65">
                    {selectedService.details.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-white/10 bg-white/[0.04] p-8">
                  <h3 className="text-4xl font-black text-white">Common Uses</h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {selectedService.includes.map((item) => (
                      <div key={item} className="rounded-sm border border-white/10 bg-neutral-900 px-5 py-4 text-xl font-bold text-white/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "calculator" && (
        <section id="calculator" className="border-y border-white/10 px-5 pt-40 pb-24">
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

      {currentPage === "process" && (
        <section id="process" className="border-y border-white/10 px-5 pt-40 pb-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="How It Works"
              title="From idea to finished piece."
              text="A simple process for custom work, small-batch products, and creative projects."
            />

            <div className="grid gap-5 md:grid-cols-5">
              {processSteps.map((item) => (
                <div key={item.step} className="rounded-md border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-5xl font-black text-white/20">{item.step}</p>
                  <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-md border border-white/10 bg-white/[0.04] p-8 text-center">
              <h3 className="text-4xl font-black text-white">Ready to start?</h3>
              <p className="mx-auto mt-4 max-w-3xl text-2xl leading-10 text-white/60">
                Send the idea first. We’ll help figure out what’s realistic, what it may cost, and what information we need next.
              </p>
              <button
                onClick={() => setCurrentPage("contact")}
                className="mt-8 rounded-sm bg-white px-8 py-4 text-2xl font-black text-neutral-950 transition hover:bg-white/90"
              >
                Start a Custom Order
              </button>
            </div>
          </div>
        </section>
      )}

      {currentPage === "faq" && (
        <section id="faq" className="border-y border-white/10 px-5 pt-40 pb-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions."
              text="A quick guide before you place an order or request a custom project."
            />

            <div className="space-y-5">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-md border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-3xl font-black text-white">{item.question}</h3>
                  <p className="mt-4 text-xl leading-8 text-white/60">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setCurrentPage("contact")}
                className="rounded-sm bg-white px-8 py-4 text-2xl font-black text-neutral-950 transition hover:bg-white/90"
              >
                Still Have a Question?
              </button>
            </div>
          </div>
        </section>
      )}

      {currentPage === "gallery" && (
        <section id="gallery" className="border-y border-white/10 px-5 pt-40 pb-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Gallery"
              title="Recent work and product previews."
              text="A growing look at finished pieces, product photos, and custom project examples."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {galleryItems.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
                  <div className="flex h-72 items-center justify-center border-b border-white/10 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-contain p-3" />
                    ) : (
                      <div className="text-center">
                        <Sparkles className="mx-auto mb-4 text-white/40" size={60} />
                        <p className="text-2xl font-black text-white/50">More coming soon</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">{item.type}</p>
                    <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === "about" && (
        <section id="about" className="border-y border-white/10 px-5 pt-40 pb-24">
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
        <section id="contact" className="px-5 pt-40 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f7f3e8] p-6 text-neutral-950 shadow-2xl shadow-black/30 md:p-12">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Contact</p>
                <h2 className="brand-type mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">Ready to make something?</h2>
                <p className="mt-5 text-lg font-semibold leading-8 text-neutral-600 md:text-xl">Send the details, reference photos, size needs, colors, and deadline. We’ll help shape the idea into a quote.</p>
                <div className="mt-8 space-y-4 text-base font-bold text-neutral-700 sm:text-lg">
                  <a href="mailto:makeshiftcreationsco@gmail.com" className="flex items-center gap-3 break-all transition hover:text-neutral-950"><Mail className="shrink-0" size={20} /> makeshiftcreationsco@gmail.com</a>
                  <a href="tel:7253085837" className="flex items-center gap-3 transition hover:text-neutral-950"><Phone className="shrink-0" size={20} /> (725) 308-5837</a>
                  <div className="flex items-center gap-3"><MapPin className="shrink-0" size={20} /> Las Vegas, NV</div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="brand-type text-3xl font-black text-neutral-950 md:text-4xl">Start Your Project</h3>
                  <p className="mt-4 text-lg font-semibold leading-8 text-neutral-600 md:text-xl">Fill out our detailed project inquiry form and we’ll get back to you with pricing, recommendations, and next steps.</p>
                  <a href="https://formspace.club/f/7e253da8-1676-45cc-be5a-cd773efbbc45" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-neutral-800">
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
