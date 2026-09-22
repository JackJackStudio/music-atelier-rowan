import Link from "next/link";
import AureliaNav from "./AureliaNav";

export default function AureliaPage() {
  return (
    <main className="aureliaPage kingdomPage aureliaRealm">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/zh/aurelia/">中文</Link>
            <Link className="languageLink" href="/ja/aurelia/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="kingdom" />

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt">
          <img src="/images/Aurelia-kingdom.png" alt="The river kingdom of Aurelia" />
        </div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">The First Kingdom of Triveria</span>
          <h1>Kingdom Aurelia</h1>
          <p className="aureliaLead">
            A river-bound kingdom of white stone, royal blue, and gold — shaped by craft, duty, and the belief that strength should serve the people.
          </p>
          <p>
            Snowmelt from Triveria's central mountains feeds a dense network of rivers through Aurelia's valleys and towns.
            Waterwheels, bridges, canals, and workshops grew along their banks, turning the kingdom into Triveria's great center of making and skilled craft.
          </p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">Land</span><h2>Rivers & Valleys</h2><p>Water defines Aurelia. Settlements follow the rivers, stone bridges bind the valleys together, and waterways carry people, materials, and finished goods across the realm.</p></article>
        <article><span className="sectionKicker">Livelihood</span><h2>Workshops & Craft</h2><p>Mills, smithies, dyers, woodworkers, potters, and textile workshops flourish beside dependable water. Aurelia makes what much of Triveria uses.</p></article>
        <article><span className="sectionKicker">Ideal</span><h2>Duty & Service</h2><p>Aurelian tradition prizes duty, honor, and service. Its knights embody a simple ideal: those with strength carry a responsibility to protect those without it.</p></article>
      </section>

      <section className="kingdomQuote"><span>AURELIA</span><blockquote>“Aurelia makes what Triveria needs.”</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">Royal Standard</span><h2>Blue, Gold, and the Crown</h2><p>A deep royal-blue field and gold ornament represent the crown and the formal grace of the kingdom. The palette appears throughout its banners, halls, bridges, and ceremonial life.</p></article>
        <article><span className="sectionKicker">The Crown</span><h2>Queen Jessara</h2><p>Jessara's story reflects Aurelia itself: responsibility before comfort, protection before glory. The crown she inherits is not simply authority — it is a promise to carry the kingdom through fear, loss, and war.</p></article>
      </section>

      <div className="aureliaNext"><Link href="/aurelia/jessara/">Meet Queen Jessara →</Link></div>
    </main>
  );
}