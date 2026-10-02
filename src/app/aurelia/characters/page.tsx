import Link from "next/link";
import AureliaNav from "../AureliaNav";

const characters = [
  {
    name: "King Aldren",
    role: "King of Aurelia · Jessara's Father",
    copy: "Steadfast, upright, and deeply responsible, Aldren is a king who stands with his soldiers rather than directing war from safety. After Queen Elara's death, he becomes Jessara's closest family and a defining influence on the leader she will become.",
    detail: "When Cazenia attacks Aurelia, Aldren personally leads the defense. His disappearance leaves Jessara facing grief, uncertainty, and the burden of the crown.",
  },
  {
    name: "Queen Jessara",
    role: "Princess · Queen of Aurelia",
    copy: "Jessara begins as a protected, curious princess and grows into a young queen before she feels ready. Her story is shaped by love, loss, duty, and the fear of losing the people closest to her.",
    detail: "Her strength is not fearlessness. It is the decision to keep loving, carrying responsibility, and protecting others even after loss.",
    href: "/aurelia/jessara/",
  },
  {
    name: "Cedric",
    role: "Knight of Aurelia",
    copy: "Jessara's childhood companion grows into one of Aurelia's important young knights and battlefield commanders. Loyal, familiar, brave, and emotionally restrained, he remains one of the few people around whom Jessara does not have to perform the certainty of a queen.",
    detail: "War repeatedly takes him away from the royal city. After being gravely wounded, he survives, recovers, and returns to fight in Aurelia's final counterattack.",
  },
  {
    name: "Silver Wings",
    role: "Fairy Companion",
    copy: "A tiny silver-winged fairy first encountered in the royal garden. Playful, elusive, and mischievous at first, she gradually becomes one of Jessara's closest companions.",
    detail: "During Aurelia's darkest phase, Silver Wings crosses enemy lines alone, discovers a weakness in the enemy plan, and brings back the intelligence that helps turn the final battle.",
  },
];

export default function AureliaCharactersPage() {
  return (
    <main className="aureliaPage kingdomPage aureliaRealm">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/aurelia/">← Back to Kingdom Aurelia</Link>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="characters" />

      <section className="aureliaLoreIntro">
        <span className="sectionKicker">People of Aurelia</span>
        <h1>Characters</h1>
        <p>Four lives define the emotional center of Aurelia's first story: a king, a princess who becomes queen, a knight who shares her childhood, and a tiny fairy who becomes far more than an observer.</p>
      </section>

      <section className="aureliaCharacterDirectory">
        {characters.map((character) => {
          const body = (
            <>
              <span>{character.role}</span>
              <h2>{character.name}</h2>
              <p>{character.copy}</p>
              <p>{character.detail}</p>
              <strong>{character.href ? "Read full profile →" : "Full profile coming later"}</strong>
            </>
          );
          return character.href ? (
            <Link className="aureliaLoreCard characterCardLink" href={character.href} key={character.name}>{body}</Link>
          ) : (
            <article className="aureliaLoreCard" key={character.name}>{body}</article>
          );
        })}
      </section>

      <div className="aureliaNext"><Link href="/aurelia/places/">Next: Explore Aurelia's towns and landmarks →</Link></div>
    </main>
  );
}
