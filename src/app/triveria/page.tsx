import Link from "next/link";

const kingdoms = [
  {
    name: "Aurelia",
    href: "/aurelia/",
    image: "/images/Aurelia-kingdom.png",
    role: "The River Kingdom",
    motto: "Duty · Craft · Service",
    description:
      "A kingdom of rivers, white-stone cities, bridges, and workshops. Aurelia turns the resources of Triveria into crafted goods and carries a long tradition of duty, knighthood, and service.",
  },
  {
    name: "Brenalia",
    href: "/brenalia/",
    image: "/images/Brenalia-kingdom.png",
    role: "The Forest Kingdom",
    motto: "Nature · Freedom · Harmony",
    description:
      "Protected by forests, valleys, and mountain barriers, Brenalia lives closer to the wild and to the forgotten past. Ancient ruins still sleep beneath its trees.",
  },
  {
    name: "Cazenia",
    href: "/cazenia/",
    image: "/images/Cazenia-kingdom.png",
    role: "The Kingdom of the Great Plains",
    motto: "Strength · Order · Progress",
    description:
      "Across Cazenia's broad fertile plains lie farms, granaries, roads, and fields of grain and textile crops. Its prosperity is built upon planning, discipline, and the careful management of land.",
  },
];

const places = [
  {
    name: "Sorrow Peaks",
    region: "Southwestern Triveria",
    description:
      "A remote chain of sharp, isolated peaks overlooking the southern coast. Their difficult terrain and ominous name have made them a natural home for old stories, lost roads, and memories the continent has not entirely forgotten.",
  },
  {
    name: "Twin Lakes",
    region: "Southern Triveria",
    description:
      "Two great inland lakes resting between forest and mountain. Their waters form one of southern Triveria's most recognizable landmarks and an important natural meeting point between routes crossing the interior.",
  },
  {
    name: "Verdant Expanse",
    region: "Western Interior",
    description:
      "A vast stretch of green wilderness south of Aurelia. Less settled than the lands around the kingdoms' capitals, the Expanse preserves the feeling of an older Triveria beyond roads, walls, and royal borders.",
  },
  {
    name: "The Trivara Mountains",
    region: "Heart of Triveria",
    featured: true,
    description:
      "The immense mountain range at the center of the continent divides Triveria geographically and has shaped the histories of all three kingdoms. Hidden among its high passes and forgotten valleys are traces of a world older than Aurelia, Brenalia, and Cazenia — including legends of the Temple of the Spirits and the lost TrivaCharm.",
  },
  {
    name: "Whispering Forest",
    region: "Northern Brenalia",
    description:
      "One of Brenalia's oldest forests, where dense woodland, ancient paths, and the presence of forgotten ruins blur the boundary between history and legend. Travelers say the forest never feels entirely silent.",
  },
  {
    name: "Eldenwood",
    region: "Western Aurelia",
    description:
      "A great woodland on Aurelia's western side, standing between the cultivated river valleys and the wilder reaches of the continent. It marks a gradual transition from the ordered heartland of Aurelia into older, less governed country.",
  },
  {
    name: "Drazuvia",
    region: "The Forgotten Isle",
    description:
      "Beyond Aurelia's western coast lies an island that appears on the old maps of Triveria, yet remains distant from the life of the three kingdoms. Ruins and mountains dominate its landscape, while much of its history remains deliberately unexplained.",
  },
  {
    name: "Moonpet Lake",
    region: "Northern Brenalia",
    description:
      "A secluded lake surrounded by deep forest in northern Brenalia. Calm, remote, and strongly associated with moonlit folklore, it belongs to the quieter and more mysterious side of the forest kingdom.",
  },
];

export default function TriveriaPage() {
  return (
    <main className="triveriaPage">
      <header className="triveriaTop">
        <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
        <span>The World of M.A.R.</span>
      </header>

      <section className="triveriaIntro">
        <span className="sectionKicker">The Continent of</span>
        <h1>Triveria</h1>
        <p className="triveriaTagline">Three Kingdoms. Different Paths. One Destiny.</p>
        <p>
          Aurelia, Brenalia, and Cazenia grew apart beneath the same mountains and beneath the same sky.
          Rivers, forests, plains, trade, war, and forgotten legends shaped each of them differently —
          but the continent has always connected their stories more deeply than its borders suggest.
        </p>
      </section>

      <section className="triveriaMapSection">
        <div className="triveriaMapFrame">
          <img src="/images/Triveria Map.png" alt="Map of the continent of Triveria" />
        </div>
        <p className="mapCaption">
          The known continent of Triveria — three kingdoms divided by geography, joined by roads, trade, memory, and an older history.
        </p>
      </section>

      <section className="triveriaSection">
        <div className="triveriaSectionHeading">
          <span className="sectionKicker">The Three Kingdoms</span>
          <h2>Three ways of living in the same world.</h2>
          <p>
            Geography shaped livelihood. Livelihood shaped culture. Over generations, each kingdom came to value something different —
            and to depend upon things the others could provide.
          </p>
        </div>

        <div className="triveriaKingdomGrid">
          {kingdoms.map((kingdom) => (
            <Link className="triveriaKingdomCard" href={kingdom.href} key={kingdom.name}>
              <div className="triveriaKingdomImage">
                <img src={kingdom.image} alt={kingdom.name} />
              </div>
              <div className="triveriaKingdomCopy">
                <span>{kingdom.role}</span>
                <h3>{kingdom.name}</h3>
                <strong>{kingdom.motto}</strong>
                <p>{kingdom.description}</p>
                <em>Explore {kingdom.name} →</em>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="triveriaSection placesSection">
        <div className="triveriaSectionHeading">
          <span className="sectionKicker">Places of Triveria</span>
          <h2>Beyond the kingdoms.</h2>
          <p>
            Not every important place belongs to a capital or a crown. Mountains, forests, lakes, and forgotten islands preserve
            older boundaries — and sometimes older stories.
          </p>
        </div>

        <article className="trivaraFeature">
          <span>Heart of the Continent</span>
          <h3>The Trivara Mountains</h3>
          <p>{places.find((place) => place.featured)?.description}</p>
          <blockquote>“Before there were three kingdoms, there was Triveria.”</blockquote>
        </article>

        <div className="placeGrid">
          {places.filter((place) => !place.featured).map((place, index) => (
            <article className="placeCard" key={place.name}>
              <span>{String(index + 1).padStart(2, "0")} · {place.region}</span>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="triveriaClosing">
        <span className="sectionKicker">An Older Story</span>
        <h2>Triveria was never three separate worlds.</h2>
        <p>
          Long before the present kingdoms drew their borders, people and spirits crossed these mountains, forests, and valleys.
          Their traces remain scattered across the continent. Some are ruins. Some are legends. Some have not yet been found.
        </p>
        <Link href="/">Return to Music Atelier Rowan →</Link>
      </section>
    </main>
  );
}
