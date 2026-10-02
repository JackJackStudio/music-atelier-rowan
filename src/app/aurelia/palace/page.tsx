import Link from "next/link";
import AureliaNav from "../AureliaNav";

const spaces = [
  { name: "Great Hall / Throne Hall", copy: "The ceremonial heart of the palace: coronations, formal audiences, royal processions, and the empty throne that becomes one of Jessara's most painful symbols of loss." },
  { name: "Royal Council Chamber", copy: "Maps, reports, sealed letters, and military decisions gather here. It is where Jessara must first speak not merely as a princess, but as the person everyone expects to lead." },
  { name: "Jessara's Chamber", copy: "A private royal space within the palace, contrasted with the public halls where Jessara is expected to appear composed and certain." },
  { name: "Royal Garden", copy: "Flowers, fountains, butterflies, morning sunlight, and the Great Tree define the garden where Jessara plays as a child and first encounters Silver Wings." },
  { name: "Grand Courtyard", copy: "A formal outdoor space for movement through the palace complex, royal departures, mounted guards, visitors, and ceremonial gathering." },
  { name: "Royal Balcony / Terrace", copy: "From the palace height, the royal family can look across the capital, river, stone bridges, green valleys, roads, farmland, and distant mountains." },
  { name: "Palace Gates & Long Corridors", copy: "Tall gates, high windows, long interior passages, and the approach between the palace and city reinforce Aurelia's white-stone, royal-blue, and gold visual language." },
];

export default function AureliaPalacePage() {
  return (
    <main className="aureliaPage kingdomPage aureliaRealm">
      <header className="aureliaTop">
        <div><Link className="back" href="/aurelia/">← Back to Kingdom Aurelia</Link></div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="palace" />

      <section className="aureliaLoreIntro">
        <span className="sectionKicker">Above the River City</span>
        <h1>Royal Palace</h1>
        <p>The palace stands on a natural height beside Aurelia City rather than isolated far from it. Its ivory stone, slender towers, royal-blue roofs, and restrained gold detail overlook the capital and the bright river valleys beyond.</p>
      </section>

      <section className="aureliaPalaceFeature">
        <div>
          <span className="sectionKicker">Visual Identity</span>
          <h2>White stone. Royal blue. Gold in the morning light.</h2>
          <p>The palace is part of the city and part of the landscape at once: high enough to command the view, close enough to remain visibly connected to the people and roads below.</p>
        </div>
        <img src="/images/Aurelia-kingdom.png" alt="Aurelia's royal city and palace landscape" />
      </section>

      <section className="aureliaPlaceGrid">
        {spaces.map((space) => (
          <article className="aureliaLoreCard" key={space.name}>
            <span>Royal Palace</span>
            <h2>{space.name}</h2>
            <p>{space.copy}</p>
          </article>
        ))}
      </section>

      <div className="aureliaNext"><Link href="/stories/aurelia/">Continue to Story I →</Link></div>
    </main>
  );
}
