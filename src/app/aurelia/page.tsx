import Link from "next/link";
import AureliaNav from "./AureliaNav";

const hubs = [
  {
    href: "/aurelia/characters/",
    kicker: "People of Aurelia",
    title: "Characters",
    copy: "Meet King Aldren, Queen Jessara, Cedric, and Silver Wings — the four figures at the heart of Aurelia's first story.",
    cta: "Meet the characters →",
  },
  {
    href: "/aurelia/places/",
    kicker: "Across the Realm",
    title: "Places",
    copy: "Explore the royal city, workshop towns, rivers, forests, passes, lakes, coasts, and open valleys that define Aurelia.",
    cta: "Explore the realm →",
  },
  {
    href: "/aurelia/palace/",
    kicker: "The Royal Height",
    title: "Royal Palace",
    copy: "Enter the white-stone palace above the river city: the Great Hall, council chamber, royal garden, courtyards, terraces, and gates.",
    cta: "Enter the palace →",
  },
];

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
        <img className="aureliaWordmark" src="/images/Kingdom_Aurelia_Banner_Transparent.png" alt="Kingdom of Aurelia" />
      </header>

      <AureliaNav active="kingdom" />

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt">
          <img src="/images/Aurelia-kingdom.png" alt="The river kingdom of Aurelia" />
        </div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">The River Kingdom of Triveria</span>
          <h1>Kingdom Aurelia</h1>
          <p className="aureliaLead">
            A kingdom of rivers, workshops, white stone, royal blue, and morning light — shaped by craftsmanship, duty, and the belief that strength should serve the people.
          </p>
          <p>
            Snowmelt from Triveria's central mountains feeds rivers through Aurelia's valleys and towns. Bridges, canals,
            waterwheels, and workshops grew along their banks, making the realm a center of skilled craft rather than mass production.
          </p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">Land</span><h2>Rivers & Valleys</h2><p>Water defines Aurelia. Settlements follow the rivers, stone bridges bind the valleys together, and waterways connect towns, farms, workshops, and the royal city.</p></article>
        <article><span className="sectionKicker">Livelihood</span><h2>Workshops & Craft</h2><p>Smithies, woodworkers, weavers, jewelers, instrument makers, and precision workshops flourish beside dependable water power. Aurelia values things made carefully and made to last.</p></article>
        <article><span className="sectionKicker">Ideal</span><h2>Light · Duty · People</h2><p>Aurelian identity is built around responsibility, service, and quality. Its royal blue and gold appear across banners, civic spaces, bridges, halls, and ceremonial life.</p></article>
      </section>

      <section className="kingdomQuote"><span>AURELIA</span><blockquote>“If it bears the mark of Aurelia, it is made to last.”</blockquote></section>

      <section className="aureliaHubSection">
        <div className="aureliaHubHeading">
          <span className="sectionKicker">Explore the Kingdom</span>
          <h2>People, places, and the palace above the river.</h2>
          <p>Aurelia is more than the setting of Story I. These pages collect the people and locations that continue to exist beyond the events of the first twelve tracks.</p>
        </div>
        <div className="aureliaHubGrid">
          {hubs.map((hub) => (
            <Link className="aureliaHubCard" href={hub.href} key={hub.href}>
              <span>{hub.kicker}</span>
              <h3>{hub.title}</h3>
              <p>{hub.copy}</p>
              <strong>{hub.cta}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">Royal Standard</span><h2>Blue, Gold, and the Crown</h2><p>A deep royal-blue field, gold ornament, crown, and fleur-de-lis form Aurelia's formal royal language. The same palette carries into its palace roofs, banners, gates, bridges, and public ceremony.</p></article>
        <article><span className="sectionKicker">The Crown</span><h2>Queen Jessara</h2><p>Jessara inherits more than authority. Her path from protected princess to young queen reflects Aurelia's central ideal: responsibility before comfort, and protection before glory.</p></article>
      </section>

      <div className="aureliaNext"><Link href="/stories/aurelia/">Read Story I — The Princess and the Silver Wings →</Link></div>
    </main>
  );
}
