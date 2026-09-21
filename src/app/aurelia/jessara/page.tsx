import Link from "next/link";
import AureliaNav from "../AureliaNav";

export default function JessaraPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="jessara" />

      <section className="aureliaCharacterHero">
        <span className="sectionKicker">Princess of Aurelia</span>
        <h1>Jessara</h1>
        <p className="aureliaLead">
          A protected child, a curious young princess, a daughter who loses her father, and eventually a queen who must
          learn to carry a kingdom before she feels ready.
        </p>
      </section>

      <section className="aureliaDetails">
        <article>
          <span className="sectionKicker">Her Beginning</span>
          <h2>The girl in the castle garden.</h2>
          <p>
            Jessara grows up surrounded by safety, affection, and the beauty of Aurelia. As a child she runs through the
            palace and gardens with little understanding of crowns, war, or duty. As she grows older, she begins looking
            beyond the castle walls and wondering who she will become.
          </p>
        </article>
        <article>
          <span className="sectionKicker">Silver Wings</span>
          <h2>A small friend from the garden.</h2>
          <p>
            During her youth, Jessara meets a mysterious little fairy with silver wings. What begins as quiet curiosity
            becomes friendship. The fairy represents the part of Jessara's life that still belongs to wonder, innocence,
            and the impossible — and later becomes unexpectedly important to the fate of the kingdom.
          </p>
        </article>
        <article>
          <span className="sectionKicker">The Crown</span>
          <h2>She was not ready. There was no way back.</h2>
          <p>
            When the king returns from war mortally wounded, Jessara loses both her father and the protected life she knew.
            She is forced to inherit a kingdom still at war. Her story is not about becoming the strongest warrior; it is
            about learning to love, carry responsibility, and protect others even while she is afraid of losing them.
          </p>
        </article>
        <article>
          <span className="sectionKicker">The Knight</span>
          <h2>A childhood companion at the front.</h2>
          <p>
            Jessara's childhood friend grows into one of Aurelia's most important knights and military commanders. After losing her father, Cedric's repeated returns to the battlefield make the war deeply personal. The fear of losing
            another person she loves becomes one of the emotional threads running through the second half of the story.
          </p>
        </article>
      </section>

      <div className="aureliaNext">
        <Link href="/aurelia/episode-1/">Begin Episode I →</Link>
      </div>
    </main>
  );
}
