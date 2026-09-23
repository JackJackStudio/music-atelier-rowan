import Link from "next/link";

export default function CazeniaPage() {
  return (
    <main className="aureliaPage kingdomPage cazeniaRealm">
      <header className="realmTop">
        <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
        <img className="aureliaWordmark" src="/logos/cazenia-logo.webp" alt="Cazenia — The Princess and the Silver Thread" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Cazenia-kingdom.png" alt="The fertile plains of Cazenia" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">The Great Plains of Triveria</span>
          <h1>Kingdom Cazenia</h1>
          <p className="aureliaLead">A broad and fertile kingdom of open plains, ordered fields, irrigation channels, and long roads — a land where abundance depends upon planning.</p>
          <p>Cazenia possesses Triveria's largest stretches of cultivable land. Grain, fruit, vegetables, flax, cotton, and hemp grow across its plains, making the kingdom both a great food producer and the continent's most important source of textile raw materials.</p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">Land</span><h2>Fields & Open Plains</h2><p>Where Brenalia closes around the traveler, Cazenia opens toward the horizon. Farms, estates, granaries, windmills, canals, and roads form a carefully managed agricultural landscape.</p></article>
        <article><span className="sectionKicker">Livelihood</span><h2>Harvest & Fiber</h2><p>Wheat and other crops feed the realm, while flax, cotton, and hemp supply Triveria's textile trade. Cazenia grows the raw materials that Aurelia's workshops can transform into finished goods.</p></article>
        <article><span className="sectionKicker">Ideal</span><h2>Order & Progress</h2><p>Water must be directed, harvests counted, stores protected, and roads maintained. Cazenian culture therefore prizes discipline, planning, efficiency, and the belief that order protects prosperity.</p></article>
      </section>

      <section className="kingdomQuote"><span>CAZENIA</span><blockquote>“Cazenia grows what Triveria needs.”</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">Royal Standard</span><h2>Burgundy, Gold, and the Crown</h2><p>Cazenia's burgundy-and-gold standard carries an ornate royal crest: formal, deliberate, and unmistakably controlled. It reflects a realm that sees strength in structure and continuity.</p></article>
        <article><span className="sectionKicker">The Princess</span><h2>Princess Erissia</h2><p>Brilliant, composed, and accustomed to control, Erissia reflects the logic of her homeland. To Cazenia, chaos wastes resources; order protects people. Her story will reveal what that belief costs — and what it can save.</p></article>
      </section>

      <div className="aureliaNext"><Link href="/triveria/">Explore Triveria →</Link></div>
    </main>
  );
}