import Link from "next/link";
import AureliaNav from "../AureliaNav";

const places = [
  { group: "Royal City", name: "Aurelia City", copy: "The white-stone river capital below the royal palace: blue roofs, bridges, canals, waterwheels, workshops, civic streets, and the kingdom's busiest concentration of craft and government." },
  { group: "Lake", name: "Silver Lake", copy: "A great silver-blue lake in northern Aurelia, quieter and more expansive than the capital, with distant mountains, lakeside forest, fishing settlements, wooden piers, and morning mist." },
  { group: "Workshop Town", name: "Millbrook", copy: "One of Aurelia's most representative workshop towns, closely tied to the kingdom's mature use of water power, mills, craft, and mechanical production." },
  { group: "River Settlement", name: "Riversend", copy: "A settlement shaped by Aurelia's waterways and roads, part of the network that connects the capital with the wider valleys and the movement of people and goods." },
  { group: "Woodland", name: "Eldenwood", copy: "A seasonal woodland landscape known for especially beautiful autumn color: gold, orange, deep red, and filtered sunlight among Aurelia's river valleys." },
  { group: "Crossing", name: "Sunbridge", copy: "A strategically important crossing and one of the names associated with the long approaches used during the Aurelia–Cazenia war." },
  { group: "Mountain Pass", name: "Cloudspire Pass", copy: "A dramatic highland route of pale mountain walls, snow peaks, cloud-wrapped slopes, cliff roads, stone defenses, and high bridges carrying Aurelia's blue-and-gold banners." },
  { group: "Western Coast", name: "Westwind Coast", copy: "Aurelia's western edge on the Azure Sea: white sea cliffs, deep blue water, grassy slopes, strong wind, seabirds, coastal roads, and distant lighthouses." },
  { group: "Open Country", name: "Verdant Expanse", copy: "Broad grassland, low hills, farmland, streams, and open sky. It represents the spacious Aurelia landscape used by riders, merchants, armies, and long-distance roads." },
];

export default function AureliaPlacesPage() {
  return (
    <main className="aureliaPage kingdomPage aureliaRealm">
      <header className="aureliaTop">
        <div><Link className="back" href="/aurelia/">← Back to Kingdom Aurelia</Link></div>
        <img className="aureliaWordmark" src="/images/Kingdom_Aurelia_Banner_Transparent.png" alt="Kingdom of Aurelia" />
      </header>

      <AureliaNav active="places" />

      <section className="aureliaLoreIntro">
        <span className="sectionKicker">Across the Realm</span>
        <h1>Towns & Landmarks</h1>
        <p>Aurelia is recognized by more than its palace. Rivers, white-stone bridges, workshops, blue roofs, open valleys, distant mountains, and morning light give the kingdom a visual identity that remains consistent from the capital to the coast.</p>
      </section>

      <section className="aureliaPlaceGrid">
        {places.map((place) => (
          <article className="aureliaLoreCard" key={place.name}>
            <span>{place.group}</span>
            <h2>{place.name}</h2>
            <p>{place.copy}</p>
          </article>
        ))}
      </section>

      <div className="aureliaNext"><Link href="/aurelia/palace/">Next: Enter the Royal Palace →</Link></div>
    </main>
  );
}
