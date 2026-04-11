import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Calendar, ArrowRight, ArrowLeft, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const blogs = [
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
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80",
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
    content: `<h2>Understanding Pakistan Export Customs</h2>
<p>When shipping personal effects and household goods from Pakistan, you need to comply with both Pakistani export regulations and the import rules of your destination country. Our customs brokerage team handles this process daily from our offices in Rawalpindi, Islamabad, Lahore, and Peshawar.</p>

<h2>Required Documentation</h2>
<p>You'll need the following documents for customs clearance:</p>
<ul>
<li>Valid passport with visa for destination country</li>
<li>Detailed packing inventory list</li>
<li>Proof of residence in Pakistan</li>
<li>Work permit or employment letter (if applicable)</li>
<li>No Objection Certificate (NOC) for certain items</li>
</ul>

<h2>Items That Require Special Permits</h2>
<p>Certain items need additional documentation: antiques over 100 years old, religious artifacts, electronic equipment in large quantities, and commercial goods. Our team guides you through the permit process for each category.</p>

<h2>Prohibited & Restricted Items</h2>
<p>Common items that cannot be shipped internationally include: perishable foods, live plants and animals, hazardous chemicals, weapons, and counterfeit goods. Destination countries may have additional restrictions — for example, Australia has strict quarantine rules for wooden items.</p>

<h2>Duty-Free Allowances</h2>
<p>Most countries allow duty-free import of used household goods and personal effects if you can prove you've owned them for at least 6 months. New items and gifts may attract customs duties. We help you optimize your shipment to minimize duty costs.</p>

<h2>How We Handle Customs</h2>
<p>At Best International Movers, our licensed customs brokers manage the entire clearance process. We prepare all documentation, calculate duties, handle inspections, and ensure your shipment clears customs smoothly at both ends.</p>`
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
    content: `<h2>Why Choosing the Right Mover Matters</h2>
<p>Your choice of moving company can make or break your international relocation experience. A good mover ensures your belongings arrive safely and on time, while a bad one can cause delays, damage, and unnecessary stress.</p>

<h2>Key Factors to Consider</h2>
<h3>1. Experience & Track Record</h3>
<p>Look for companies with at least 10 years of international moving experience. Ask for references from recent customers who moved to your destination country. Best International Movers has 15+ years of experience with 5,000+ successful relocations.</p>

<h3>2. Licensing & Insurance</h3>
<p>Verify that the company is properly licensed for international freight forwarding. Ask about insurance coverage — reputable movers offer comprehensive transit insurance with full replacement value options.</p>

<h3>3. Free Home Survey</h3>
<p>Any serious international mover will offer a free home survey to assess your belongings and provide an accurate quote. Be wary of companies that quote over the phone without seeing your items — this often leads to surprise charges later.</p>

<h3>4. Transparent Pricing</h3>
<p>Get detailed, itemized quotes from at least 3 companies. Watch out for hidden fees like fuel surcharges, peak season charges, or destination fees. A good mover will explain every line item clearly.</p>

<h3>5. Local Presence</h3>
<p>Choose a company with offices in your city. Whether you're in Rawalpindi, Islamabad, Lahore, or Peshawar, having local support makes communication easier and allows for proper home surveys.</p>

<h2>Red Flags to Avoid</h2>
<p>Be cautious of movers who: demand large cash deposits upfront, don't provide written contracts, have no physical office, quote significantly below competitors (may indicate substandard service), or refuse to provide references.</p>

<h2>Questions to Ask</h2>
<p>Before signing a contract, ask: What insurance options do you offer? Who handles customs clearance? Do you subcontract any part of the move? What happens if there are delays? Can I track my shipment?</p>`
  },
  {
    slug: "packing-guide-international-move",
    img: "https://images.unsplash.com/photo-1550567089-a2e63cb7340b?auto=format&fit=crop&q=80",
    title: "Ultimate Packing Guide for International Moving: Protect Your Belongings",
    date: "Feb 1, 2024",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "9 min read",
    excerpt: "Professional packing tips and techniques for protecting your household goods during international shipping. Learn what materials to use and how to pack like the pros.",
    content: `<h2>Why Professional Packing Matters</h2>
<p>International shipments undergo multiple handling points — loading, transport to port, container loading, ocean/air transit, unloading, customs inspection, and final delivery. Proper packing is essential to protect your belongings through every stage.</p>

<h2>Essential Packing Materials</h2>
<p>Professional international movers use specialized materials:</p>
<ul>
<li><strong>Acid-free tissue paper:</strong> For wrapping delicate items and preventing tarnishing on metals</li>
<li><strong>Bubble wrap:</strong> Multiple layers for fragile items</li>
<li><strong>Custom wooden crates:</strong> For artwork, mirrors, and antiques</li>
<li><strong>Wardrobe boxes:</strong> Keep clothes on hangers, wrinkle-free</li>
<li><strong>Climate-resistant wrapping:</strong> Protects against humidity during sea transit</li>
<li><strong>Heavy-duty cartons:</strong> Double-walled for maximum protection</li>
</ul>

<h2>Room-by-Room Packing Tips</h2>
<h3>Kitchen</h3>
<p>Wrap each plate individually with bubble wrap. Pack glasses and stemware in cell boxes. Use crumpled paper to fill empty spaces in boxes. Label boxes as FRAGILE.</p>

<h3>Bedroom</h3>
<p>Use vacuum bags for bedding and soft items to save space. Disassemble bed frames and wrap parts individually. Keep all screws and bolts in labeled bags taped to the furniture.</p>

<h3>Living Room</h3>
<p>Remove legs from tables and wrap separately. Protect upholstered furniture with stretch wrap. Wrap electronics in anti-static bubble wrap and pack in original boxes if available.</p>

<h3>Bathroom</h3>
<p>Seal all liquids in zip-lock bags inside boxes. Many toiletries are cheaper to buy at your destination — pack only essentials and favorites.</p>

<h2>Items That Need Special Attention</h2>
<p>Electronics should be packed in anti-static materials. Artwork needs custom crating. Musical instruments require climate-controlled packaging. At Best International Movers, our trained packers handle these items with expert care every day in Rawalpindi, Islamabad, Lahore, and Peshawar.</p>

<h2>Let the Professionals Handle It</h2>
<p>While DIY packing is possible, professional packing significantly reduces the risk of damage. Our team uses industry-best materials and techniques developed over 15+ years of international moving experience. Contact us for a free packing assessment!</p>`
  },
];

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  useSEO({
    title: blog ? `${blog.title} | Best International Movers` : "Moving & Logistics Blog | Best International Movers Pakistan",
    description: blog ? blog.excerpt : "Expert tips on international moving, customs regulations, packing guides & logistics insights. Read our latest articles to make your move stress-free.",
    keywords: "moving tips pakistan, international moving guide, customs regulations pakistan, packing tips",
    urlPath: blog ? `/blog/${blog.slug}/` : "/blog/",
  });

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
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
