import Link from "next/link";
import AureliaNav from "./AureliaNav";

export default function AureliaPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
          <div><Link className="languageLink" href="/zh/aurelia/">中文</Link></div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="kingdom" />

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt">
          <img
            src="/images/Aurelia-kingdom.png"
            alt="The white-stone mountain kingdom of Aurelia"
          />
        </div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">The First Kingdom of Triveria</span>
          <h1>Kingdom Aurelia</h1>
          <p className="aureliaLead">
            A luminous mountain kingdom of white stone, blue-and-gold banners, high bridges, waterfalls, and deep valleys.
            Aurelia is beautiful, prosperous, and proud — but its peace will not last forever.
          </p>
          <p>
            The royal city rises above the valley beneath the central mountains of Triveria. White towers and terraces
            catch the morning sun, while roads and bridges connect the palace to villages scattered through the valley below.
            The kingdom's identity is elegant rather than severe: white stone, royal blue, warm gold, flowers, open skies,
            and the sense of a realm that still believes tomorrow can be brighter.
          </p>
        </div>
      </section>

      <section className="aureliaDetails">
        <article>
          <span className="sectionKicker">Royal Standard</span>
          <h2>Blue, Gold, and the Crown</h2>
          <p>
            Aurelia's royal banner uses a deep royal-blue field with gold ornament. Its central mark combines the crown
            with the fleur-de-lis motif seen throughout the palace, giving the kingdom a formal, graceful identity that is
            immediately distinct from Brenalia's forest-green heraldry and Cazenia's burgundy-red palette.
          </p>
        </article>
        <article>
          <span className="sectionKicker">The Story Begins Here</span>
          <h2>A peaceful morning before the war.</h2>
          <p>
            The story opens in this kingdom while Jessara is still a child. The castle gardens, her father, and the quiet
            valley form the world she believes will always be there. Across twelve tracks, that certainty is tested by war,
            loss, the crown, and the responsibility of protecting the home she once took for granted.
          </p>
        </article>
      </section>

      <div className="aureliaNext">
        <Link href="/aurelia/jessara/">Meet Princess Jessara →</Link>
      </div>
    </main>
  );
}
