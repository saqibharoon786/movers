import { Link } from "react-router-dom";

export const internationalMoversAndPackersPakistanFaqs = [
  {
    q: "Which is the best international moving company in Pakistan?",
    a: "The best international mover is one that manages the complete journey — packing, inland transport, customs, ocean freight, and destination delivery — under one roof with physical presence in your city. Best International Movers & Logistics has done this for 15+ years from Islamabad, Rawalpindi, Lahore, and Peshawar.",
  },
  {
    q: "How do I move my household goods from Pakistan to UAE?",
    a: "Book a free pre-move survey, confirm your container size, complete export packing, ship via FCL or LCL sea freight from Karachi to Jebel Ali, clear Pakistan export customs, and coordinate UAE import clearance and delivery. We manage all of this for you.",
  },
  {
    q: "How long does international moving from Pakistan take?",
    a: "UAE is typically 3–4 weeks door-to-door. UK and Canada are 6–10 weeks. Australia is 6–10 weeks. Timelines include packing, inland haulage, customs, ocean transit, and destination clearance.",
  },
  {
    q: "Is marine insurance included in moving quotes?",
    a: "Marine insurance is quoted separately from freight. It is strongly recommended for all international shipments and we clearly explain coverage options during the quotation stage.",
  },
  {
    q: "Can you move my office internationally from Pakistan?",
    a: "Yes. We manage corporate and office international relocations including IT equipment, furniture, documents, and sensitive equipment with scheduling options that minimise business disruption.",
  },
  {
    q: "How do I get a quote from Best International Movers?",
    a: "Call 0300-9130211, WhatsApp wa.me/923009130211, or complete our contact form. Free survey, itemised quote, no obligation.",
  },
];

const destinations = [
  { h3: "UAE", text: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah" },
  { h3: "Saudi Arabia", text: "Riyadh, Jeddah, Dammam, Makkah, Madinah, Khobar" },
  { h3: "UK", text: "London, Birmingham, Manchester, Bradford, Leeds, Glasgow, Edinburgh" },
  { h3: "USA", text: "New York, Houston, Los Angeles, Chicago, Dallas, Washington DC" },
  { h3: "Canada", text: "Toronto, Vancouver, Calgary, Ottawa, Montreal" },
  { h3: "Australia", text: "Sydney, Melbourne, Brisbane, Perth, Adelaide" },
  { h3: "Qatar", text: "Doha and surrounding areas" },
  { h3: "Kuwait, Bahrain, Oman", text: "All major cities" },
  { h3: "Malaysia", text: "Kuala Lumpur, Penang" },
  { h3: "Europe", text: "Germany, Netherlands, Sweden, Norway, Denmark, France, Spain, Italy" },
  { h3: "Other", text: "100+ countries via our global partner network" },
];

export function InternationalMoversAndPackersPakistanBody() {
  return (
    <>
      <h2>International Movers and Packers in Pakistan</h2>
      <p>
        Pakistan&apos;s trusted international moving company — expert packing, sea and air freight, customs clearance, and
        complete door-to-door relocation to over 100 countries worldwide.
        <br />
        📞 0300-9130211 | Mon–Sat 8:00 AM – 8:00 PM
      </p>

      <h2>Pakistan&apos;s Complete International Moving Solution</h2>
      <p>
        When a Pakistani family decides to relocate abroad, they face a market full of companies that claim to be
        international movers but are, in practice, local transporters with a freight broker contact in Karachi. The
        result is a chain of handoffs — local mover to freight agent to shipping line to destination broker — with no
        single company taking responsibility for the complete journey.
      </p>
      <p>
        Best International Movers &amp; Logistics was built specifically to solve this problem. We are a genuine end-to-end
        international moving company operating from Islamabad, Rawalpindi, Lahore, and Peshawar — with in-house packing
        crews, established carrier contracts, customs clearance support, and destination partner networks covering over
        100 countries. From the day we survey your home to the day your belongings are delivered at your new address
        abroad, one company manages everything.
      </p>

      <h2>Our International Moving and Packing Services</h2>

      <h3>International Household Relocation</h3>
      <p>
        We relocate complete households internationally — from studio apartments to large villas — using professional
        export packing, FCL or LCL sea freight containers, and coordinated destination delivery. Every move begins with a
        physical pre-move survey to determine accurate volume, assess access conditions, and recommend the right
        container size and shipping mode.
      </p>

      <h3>Export Packing Services</h3>
      <p>
        Our packing teams are trained to international moving standards. We use export-grade materials throughout —
        double-walled cartons, furniture blankets, stretch wrap, foam padding, bubble wrap, and custom wooden crating
        for fragile and high-value items. Every carton is numbered and linked to a master inventory list that serves as
        the foundation for customs documentation.
      </p>
      <p>
        Proper export packing is the single most important factor in preventing transit damage on international
        shipments. We apply the same packing standards for a move to Dubai as we do for a move to Canada or Australia.
      </p>

      <h3>FCL and LCL Sea Freight</h3>
      <p>
        <strong>FCL (Full Container Load)</strong> — We book 20ft, 40ft, or 40HC containers exclusively for your goods,
        coordinating stuffing, sealing, inland haulage to port, export customs, and ocean freight with carriers
        including Maersk, MSC, and Hapag-Lloyd.
      </p>
      <p>
        <strong>LCL (Less than Container Load)</strong> — For smaller moves, we consolidate your goods with compatible
        cargo heading to the same destination region. You pay per CBM — making international shipping accessible even
        for partial household moves.
      </p>

      <h3>Air Freight for International Moves</h3>
      <p>
        We arrange air freight from Islamabad, Lahore, and Karachi airports for urgent shipments, high-value items, and
        time-critical consignments that cannot wait for the next available vessel sailing.
      </p>

      <h3>Customs Documentation and Clearance</h3>
      <p>
        Our customs team prepares and files all export documentation — packing lists, export declarations, WeBOC filings,
        and coordination with destination customs brokers. We provide lane-specific documentation checklists so you know
        exactly what is required before moving day.
      </p>

      <h3>Corporate and Employee Relocation</h3>
      <p>
        We manage international relocation programs for multinational corporations, NGOs, embassies, and large
        organisations moving employees and their families from Pakistan to global postings. Our corporate relocation
        service includes pre-move surveys, move management, storage options, and destination coordination — with the
        documentation and reporting standards that corporate HR teams require.
      </p>

      <h3>Overseas Pakistani Return Moves</h3>
      <p>
        We also assist overseas Pakistanis returning home from abroad — coordinating international shipping of household
        goods from UAE, UK, USA, Canada, Australia, and other countries back to Pakistan, including customs clearance at
        Karachi and inland delivery to any Pakistani city.
      </p>

      <h2>Destinations We Move To from Pakistan</h2>
      {destinations.map((d) => (
        <p key={d.h3}>
          <strong>{d.h3}:</strong> {d.text}
        </p>
      ))}

      <h2>Cities We Operate From in Pakistan</h2>
      <p>
        Islamabad — F sectors, G sectors, E sectors, DHA, Bahria Town
        <br />
        Rawalpindi — Satellite Town, DHA, Bahria Town, Chaklala, Gulraiz
        <br />
        Lahore — DHA, Gulberg, Model Town, Johar Town, Bahria Town Lahore
        <br />
        Peshawar — Hayatabad, University Town, Ring Road areas
      </p>
      <p>We coordinate international moves from all major Pakistani cities — contact us regardless of your location.</p>

      <h2>What Makes Us Different from Other International Movers in Pakistan</h2>
      <ul>
        <li>
          Genuine end-to-end service: We do not stop at Karachi port. We manage origin packing, inland transport, customs,
          ocean freight, and destination delivery with one accountable team.
        </li>
        <li>
          Physical presence in 4 cities: Islamabad, Rawalpindi, Lahore, and Peshawar offices mean faster surveys, local
          crew, and real accountability.
        </li>
        <li>Licensed customs brokerage: Our customs team files directly — no middleman between you and Pakistan Customs.</li>
        <li>
          Major shipping line contracts: Direct relationships with Maersk, MSC, and Hapag-Lloyd mean capacity even when
          markets tighten.
        </li>
        <li>15+ years, 15,000+ shipments, 5,000+ clients: Our track record across dozens of trade lanes from Pakistan speaks for itself.</li>
        <li>Marine insurance: All-risk cargo insurance available for every international shipment — strongly recommended and clearly quoted separately.</li>
      </ul>

      <h2>International Moving Rates Pakistan — How Pricing Works</h2>
      <p>
        International moving costs from Pakistan depend on volume (CBM), origin city, destination port, shipping mode
        (FCL or LCL), packing requirements, and current market freight rates. A complete itemised quotation covers inland
        haulage, terminal handling, ocean freight, documentation, and destination charges.
      </p>
      <p>
        We do not publish generic rate tables — the variables make them meaningless. We provide accurate written
        quotations after a free pre-move survey. Surveys are conducted in Islamabad, Rawalpindi, Lahore, and Peshawar at
        no charge and with no obligation.
      </p>

      <h2>Internal links (helpful)</h2>
      <p>
        If your pickup is in Islamabad, start here: <Link to="/packers-and-movers-islamabad">Packers and Movers Islamabad</Link>.
      </p>
    </>
  );
}

