import Link from "next/link";
import AureliaNav from "../AureliaNav";

const tracks = [
  ["07", "The Knight of Aurelia", "Jessara is now queen, but the war continues. Her childhood companion has become one of Aurelia's leading knights and returns again and again to the front. She has already lost her father and cannot bear the thought of losing him too."],
  ["08", "Her Wish Under the Moon", "By day Jessara deals with government, military reports, supplies, and diplomacy. Late at night she stands on her balcony and asks only that the knight — and everyone fighting for Aurelia — return home alive."],
  ["09", "When the Knight Fell", "The knight is carried back to the castle gravely wounded. The sight brings Jessara back to the day her father returned from war. The silver-winged fairy uses gentle magic to help stabilize him, but new reports warn that Aurelia's defenses are collapsing."],
  ["10", "The Little Wing Beyond the Lines", "With Aurelia losing ground, the little fairy crosses the enemy lines alone. Using her tiny size to avoid patrols, she overhears the enemy command and discovers a critical weakness in the next day's attack plan."],
  ["11", "The Last Battle of Aurelia", "The fairy returns with the intelligence Aurelia desperately needs. Jessara chooses a final counterattack, and the recovering knight rejoins the army. The battle is brutal, but Aurelia exploits the enemy's weakness and finally turns the war."],
  ["12", "Peace Returns to the Valley", "The war ends. The surviving soldiers return home, the knight lives, and the fairy is again beside Jessara. Morning sunlight returns to the valley — echoing the first track — but the child who once ran through the garden is now a true queen."],
];

export default function EpisodeTwoPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="episode-2" />

      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">Episode II · Tracks 07–12</span>
        <h1>The Queen and the War</h1>
        <p className="aureliaLead">
          Jessara must lead while fearing another personal loss. A wounded knight, a tiny silver-winged friend, and one
          final chance to save Aurelia carry the story toward its return to peace.
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
        <Link href="/aurelia/">Return to Kingdom Aurelia →</Link>
      </div>
    </main>
  );
}
