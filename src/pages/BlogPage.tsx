import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ArrowLeft, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const blogs = [
  {
    slug: "packers-and-movers-islamabad-guide",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Packers and Movers in Islamabad: Complete Guide to Safe & Affordable House Shifting (2025)",
    date: "Apr 2025",
    category: "Moving Guides",
    author: "Best International Movers",
    readTime: "11 min read",
    excerpt:
      "Planning to shift in Islamabad? Costs, tips, red flags, checklists and how to get a free survey — plus how to choose trusted packers and movers in Islamabad.",
    content: "",
  },
  {
    slug: "tips-for-stress-free-international-move",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "10 Tips for a Stress-Free International Move from Pakistan",
    date: "Apr 1, 2026",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Planning to move internationally from Pakistan? Expert tips on packing, customs, documentation and choosing the right moving company—complete 2025 guide.",
    content: "",
  },
  {
    slug: "air-freight-vs-sea-freight-pakistan",
    img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Air Freight vs Sea Freight from Pakistan: Which is Right?",
    date: "Apr 1, 2026",
    category: "Logistics",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Compare air and sea freight costs, transit times, pros and cons—and choose the right shipping method for your move.",
    content: "",
  },
  {
    slug: "customs-regulations-pakistan-2025",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    title: "Pakistan Customs Regulations for International Moving 2025",
    date: "Apr 1, 2026",
    category: "Guides",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Export procedures, prohibited items, documentation, and practical tips for smooth Pakistan customs clearance.",
    content: "",
  },
  {
    slug: "moving-from-pakistan-to-dubai-guide",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    title: "Moving from Pakistan to Dubai: Complete Guide 2025",
    date: "Apr 1, 2026",
    category: "Guides",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Visa notes, shipping options, UAE customs, costs, and timelines for Dubai relocations from Pakistan.",
    content: "",
  },
  {
    slug: "customs-regulations-guide-pakistan",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    title: "Complete Guide to Customs Regulations for Moving from Pakistan in 2024",
    date: "Feb 28, 2024",
    category: "Guides",
    author: "Best International Movers",
    readTime: "10 min read",
    excerpt: "Everything you need to know about customs clearance, documentation, and regulations when moving your household goods from Pakistan internationally.",
    content: `<h2>Understanding Pakistan Export Customs in 2026</h2>
<p>When relocating from Pakistan, customs delays are usually caused by incomplete documents, mismatched inventory descriptions, or unclear ownership records. A clean file from day one helps your shipment move without storage penalties or unexpected port holds.</p>

<h2>Essential Documentation Checklist</h2>
<p>Before cargo handover, keep these ready in one shared folder:</p>
<ul>
<li>Valid passport, visa, and destination permit copies</li>
<li>Detailed inventory with item condition and estimated value</li>
<li>National ID, proof of residence, and shipper declaration</li>
<li>Power of attorney for customs broker handling</li>
<li>Special permits for antiques, controlled electronics, or commercial stock</li>
</ul>

<h2>Compliance Tips That Reduce Delays</h2>
<p>Use consistent item names across packing list, valuation sheet, and airway/bill of lading data. Avoid broad labels like "miscellaneous goods". For mixed shipments, separate personal effects from business inventory and mark cartons clearly.</p>

<h2>Duty Planning Before Dispatch</h2>
<p>Duty exposure changes by destination and commodity class. Estimate liability early with our <a href="/custom-duty-calculator">Pakistan custom duty calculator</a>, then validate assumptions with your destination customs advisor before final booking.</p>

<h2>Related Services for Safer Clearance</h2>
<p>Clients moving homes usually pair <a href="/services/professional-packing">professional packing services</a> with <a href="/services/customs-clearance">customs clearance support</a> to reduce inspection issues and paperwork errors.</p>

<h2>Best Routes from Pakistan</h2>
<p>For destination-specific planning, review <a href="/pakistan-to-dubai-movers">Pakistan to Dubai movers</a> and <a href="/pakistan-to-uk-movers">Pakistan to UK movers</a> pages to compare transit times, document flow, and handling approach.</p>`
  },
  {
    slug: "best-international-moving-company-pakistan",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    title: "How to Choose the Best International Moving Company in Pakistan",
    date: "Feb 15, 2024",
    category: "Guides",
    author: "Best International Movers",
    readTime: "7 min read",
    excerpt: "A comprehensive guide to selecting a reliable international moving company in Rawalpindi, Islamabad, Lahore, and Peshawar. What to look for and red flags to avoid.",
    content: `<h2>How to Choose an International Moving Company in Pakistan</h2>
<p>Price alone is not a decision framework. The right mover should show operational clarity: survey process, cargo plan, customs documentation workflow, insurance terms, and escalation paths when delays happen.</p>

<h2>5 Criteria That Actually Matter</h2>
<h3>1) Survey Quality</h3>
<p>A proper pre-move survey should classify fragile goods, oversized pieces, access constraints, and preferred freight mode. Generic phone quotes without inspection are high-risk.</p>

<h3>2) Freight Strategy</h3>
<p>Ask when they recommend <a href="/services/air-freight">air freight</a> versus <a href="/services/sea-freight">sea freight</a>, and whether they provide mixed-mode options for urgent and non-urgent items.</p>

<h3>3) Documentation Control</h3>
<p>Strong movers provide document templates, ownership declarations, and destination compliance notes before dispatch. This is where most failed relocations break down.</p>

<h3>4) City Operations</h3>
<p>Choose teams with active coverage where you actually live: <a href="/movers-islamabad">Islamabad</a>, <a href="/movers-rawalpindi">Rawalpindi</a>, <a href="/movers-lahore">Lahore</a>, and <a href="/movers-and-packers-in-peshawar">Peshawar</a>.</p>

<h3>5) Cost Transparency</h3>
<p>Use the <a href="/custom-duty-calculator">import duty estimator</a> before final quote approval and ask for separate line-items for origin handling, freight, destination charges, and insurance.</p>

<h2>Red Flags You Should Not Ignore</h2>
<ul>
<li>No written scope of work or exclusions list</li>
<li>Unclear liability terms for fragile/high-value items</li>
<li>No timeline commitment for customs milestones</li>
<li>No post-delivery issue handling process</li>
</ul>

<h2>Shortlist Workflow</h2>
<p>Compare two or three companies, ask the same compliance questions, and verify response quality. Then select the team that offers the clearest documentation plan, not just the lowest upfront number.</p>`
  },
  {
    slug: "packing-guide-international-move",
    img: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Ultimate Packing Guide for International Moving: Protect Your Belongings",
    date: "Feb 1, 2024",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "9 min read",
    excerpt: "Professional packing tips and techniques for protecting your household goods during international shipping. Learn what materials to use and how to pack like the pros.",
    content: `<h2>International Packing Standards That Prevent Damage</h2>
<p>Packing quality decides claim rates. Every cross-border move passes through loading, port handling, customs checks, transit vibration, and final unloading. Weak labeling or low-grade cartons usually fail at transfer points, not at pickup.</p>

<h2>Material Stack We Recommend</h2>
<ul>
<li><strong>Double-wall export cartons:</strong> for weight-bearing household items</li>
<li><strong>Foam + bubble layering:</strong> for fragile mixed-load cartons</li>
<li><strong>Custom crating:</strong> for mirrors, artwork, and high-value electronics</li>
<li><strong>Moisture barriers:</strong> for sea-freight humidity control</li>
<li><strong>Serialized labels:</strong> inventory tracking from origin to delivery</li>
</ul>

<h2>Packing Workflow by Priority</h2>
<p>Start with non-daily items, then room-priority cartons, then fragile sets. Keep one essentials carton (documents, chargers, medication) and one customs carton with copies of invoices and inventory references.</p>

<h2>Pair Packing With Freight & Compliance</h2>
<p>For heavy household moves, coordinate packing with <a href="/services/sea-freight">sea freight planning</a>. For urgent shipments, use <a href="/services/air-freight">air freight options</a>. If the move includes dutiable items, pre-calculate with the <a href="/custom-duty-calculator">custom duty calculator</a>.</p>

<h2>City-Level Support in Pakistan</h2>
<p>Our packing teams work from <a href="/movers-islamabad">Islamabad</a>, <a href="/movers-rawalpindi">Rawalpindi</a>, <a href="/movers-lahore">Lahore</a>, and <a href="/movers-and-packers-in-peshawar">Peshawar</a>. You can also review our <a href="/services/professional-packing">professional packing service page</a> for scope details and add-ons.</p>`
  },
];

import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";
import { BlogSchema } from "@/components/BlogSchema";

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <SEO {...seoConfig.blog} urlPath="/blog" />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Blog & News</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Latest <span className="gold-gradient-text">Insights</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Expert tips, guides, and news about international moving from Pakistan.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogs.map((p, i) => (
              <motion.article key={p.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${p.slug}`} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-gold/30 transition-all block h-full">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={640} height={360} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">{p.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={12} />{p.date}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.excerpt}</p>
                    <span className="text-gold text-sm font-medium flex items-center gap-1">Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
        <ContactFooter />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title={blog.title} description={blog.excerpt} urlPath={`/blog/${blog.slug}`} />
      <BlogSchema title={blog.title} date={blog.date} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline"><ArrowLeft size={14} /> All Articles</Link>
          
          <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded">{blog.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1"><User size={14} />{blog.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} />{blog.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{blog.readTime}</span>
            </div>

            <img src={blog.img} alt={blog.title} className="w-full rounded-xl mb-8 object-cover h-64 md:h-80" />

            <div className="prose prose-invert prose-gold max-w-none [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-muted-foreground [&_strong]:text-foreground" dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="mt-12 glass-card rounded-xl p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Need Help With Your Move?</h3>
              <p className="text-muted-foreground mb-6">Contact Best International Movers & Logistics for a free quote. We serve Rawalpindi, Islamabad, Lahore & Peshawar.</p>
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all">
                WhatsApp Us Now <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
