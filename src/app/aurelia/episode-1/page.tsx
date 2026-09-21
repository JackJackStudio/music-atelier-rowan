import Link from "next/link";
import AureliaNav from "../AureliaNav";

const tracks = [
  ["01", "Once Upon a Morning", "Jessara is still a young princess, running and laughing through the castle gardens while her father watches over her. Aurelia is peaceful, and the weight of the crown is still far beyond her world."],
  ["02", "The Girl by the Window", "Now a teenager, Jessara often stands by the castle window looking toward the valley, roads, and distant walls, beginning to wonder what kind of person she will become."],
  ["03", "Wings in the Garden", "Jessara encounters a tiny fairy with silver wings in the palace garden. Cautious curiosity slowly becomes friendship, preserving a little piece of wonder in her changing world."],
  ["04", "The King Rides to War", "Tension with a neighboring kingdom becomes open war. The king personally leads Aurelia's army to the front, and Jessara understands for the first time that war may take away the person she loves most."],
  ["05", "The Empty Throne", "The king returns gravely wounded and dies. The empty throne becomes both the symbol of Jessara's loss and the end of her protected youth."],
  ["06", "The Crown Is Heavy", "Barely an adult, Jessara is crowned queen. State affairs, military reports, finances, and the needs of the people arrive all at once. She is not ready — but there is no longer any way back."],
];

export default function EpisodeOnePage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="episode-1" />

      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">Episode I · Tracks 01–06</span>
        <h1>The Princess Becomes a Queen</h1>
        <p className="aureliaLead">
          Childhood gives way to curiosity, friendship, war, grief, and a crown Jessara never expected to carry so soon.
        </p>
      </section>

      <section className="aureliaTrackList">
        {tracks.map(([number, title, summary]) => (
          <article className="aureliaTrack" key={number}>
            <div className="trackNumber">{number}</div>
            <div>
              <h2>{title}</h2>
              <p>{summary}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="aureliaNext">
        <Link href="/aurelia/episode-2/">Continue to Episode II →</Link>
      </div>
    </main>
  );
}
