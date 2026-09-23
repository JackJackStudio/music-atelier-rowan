import Link from "next/link";

export default function BrenaliaPage() {
  return (
    <main className="aureliaPage kingdomPage brenaliaRealm">
      <header className="realmTop">
        <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
        <img className="aureliaWordmark" src="/logos/brenalia-logo.webp" alt="Brenalia — The Princess and the Lost Relic" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Brenalia-kingdom.png" alt="The forest kingdom of Brenalia" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">The Forest Kingdom of Triveria</span>
          <h1>Kingdom Brenalia</h1>
          <p className="aureliaLead">A kingdom sheltered by ancient forests, deep valleys, and mountain barriers — freer, quieter, and closer to the forgotten world than either of its neighbors.</p>
          <p>Brenalia's people live among forest-edge towns, river valleys, and smaller settlements connected by old roads and paths known best to those who grew up beneath the trees. Here, the forest is more than a resource. It is memory.</p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">Land</span><h2>Forests & Valleys</h2><p>Dense woodland and broken terrain form a natural shield around Brenalia. The landscape kept large armies at a distance and allowed local traditions to grow with unusual independence.</p></article>
        <article><span className="sectionKicker">Livelihood</span><h2>Nature's Riches</h2><p>Timber, medicinal herbs, honey, fruit, resin, spices, and natural dyes move from Brenalia into the wider continent. Its greatest treasures, however, may be the ruins hidden beneath the canopy.</p></article>
        <article><span className="sectionKicker">Ideal</span><h2>Freedom & Harmony</h2><p>Brenalians respect the crown without allowing ceremony to define everyday life. Freedom, local custom, curiosity, and balance with nature matter more than rigid order.</p></article>
      </section>

      <section className="kingdomQuote"><span>BRENALIA</span><blockquote>“Brenalia finds what Triveria has forgotten.”</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">Royal Standard</span><h2>Green, Gold, and the Tree</h2><p>The golden tree on deep forest green represents roots, continuity, and life beneath the canopy — a fitting emblem for a kingdom whose oldest stories still sleep among living woods.</p></article>
        <article><span className="sectionKicker">The Princess</span><h2>Princess Ritania</h2><p>Restless, curious, and unwilling to remain behind palace walls, Ritania carries Brenalia's spirit with her. Her search for the Lost Relic turns the kingdom's forgotten legends into the beginning of a journey beyond its borders.</p></article>
      </section>

      <div className="aureliaNext"><Link href="/triveria/">Explore Triveria →</Link></div>
    </main>
  );
}