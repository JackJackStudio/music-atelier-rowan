import Link from "next/link";

export default function CazeniaPage() {
  return (
    <main className="aureliaPage kingdomPage cazeniaRealm">
      <header className="realmTop">
        <div>
          <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/zh/cazenia/">中文</Link>
            <Link className="languageLink" href="/ja/cazenia/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/cazenia-logo.webp" alt="Cazenia — The Princess and the Silver Thread" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Cazenia-kingdom.png" alt="The elegant kingdom of Cazenia" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">The Court Kingdom of Triveria</span>
          <h1>Kingdom Cazenia</h1>
          <p className="aureliaLead">
            A kingdom that treats beauty, art, music, architecture, and refinement as expressions of civilization itself — elegant, cultivated, and almost too perfect.
          </p>
          <p>
            Cazenia is known for grand palaces, monumental arches, sculpture, frescoes, music halls, dance, fashion, and an exacting court culture. Beauty is not considered decoration here. It is discipline, education, and a visible expression of order.
          </p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">Culture</span><h2>Art & Music</h2><p>Painting, sculpture, music, dance, fashion, and architecture are cultivated at the highest level. Artistic achievement is treated as part of Cazenia's identity and prestige.</p></article>
        <article><span className="sectionKicker">Court</span><h2>Elegance & Education</h2><p>Royal life prizes etiquette, education, presentation, and control. The ideal Cazenian courtier is expected to appear composed even when politics beneath the surface are anything but simple.</p></article>
        <article><span className="sectionKicker">Ideal</span><h2>Beauty & Order</h2><p>Cazenia believes civilization is strongest when everything has form, balance, and purpose. Its beauty is genuine — but so is the pressure to preserve perfection.</p></article>
      </section>

      <section className="kingdomQuote"><span>CAZENIA</span><blockquote>“Beauty is part of civilization.”</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">Royal Standard</span><h2>Burgundy, Gold, and the Eight-Point Star</h2><p>The Cazenian emblem is deliberately balanced and symmetrical: a refined golden court motif crowned not by a royal crown, but by an eight-point star. The star represents proportion, direction, and the pursuit of cultivated perfection.</p></article>
        <article><span className="sectionKicker">The Princess</span><h2>Princess Erissia</h2><p>Elegant, intelligent, and trained from childhood to embody the image of the perfect princess, Erissia understands Cazenia's beauty better than anyone — and also the cost of living inside a life designed by others.</p></article>
      </section>

      <div className="aureliaNext"><Link href="/triveria/">Explore Triveria →</Link></div>
    </main>
  );
}