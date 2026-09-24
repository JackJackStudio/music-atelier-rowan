import Link from "next/link";
import AureliaNav from "../AureliaNav";

const tracks = [
  {
    number: "07",
    title: "The Knight of Aurelia",
    summary: "Cedric returns to the city only long enough for Jessara to realize how much she fears watching him leave again.",
    story: [
      "Years ago Cedric was simply the boy who climbed garden walls with Jessara. Now he is one of Aurelia’s most important young knights and battlefield commanders.",
      "Episode II begins with Cedric returning briefly to the royal city. Jessara now wears the outward calm of a queen: steady in council, certain before soldiers, composed in front of the public.",
      "Cedric is one of the few people who still occasionally calls her “Jess” instead of “Your Majesty.” He remembers who she was before the crown.",
      "They walk through the garden where they once played. Jessara looks around and says, “It looks smaller.” Cedric answers, “We got taller.”",
      "The moment does not last. New orders arrive from the front. Cedric must leave again.",
      "At the gate Jessara asks, “How long?” Cedric answers, “I don’t know.” She says, “That is a terrible answer.” Cedric replies, “It is an honest one.”",
      "Jessara wants to say much more, but in the end she says only, “Come back.” Cedric answers, “I always do.” Jessara looks at him. “That’s not a promise.” Cedric admits, “No.”",
      "The army moves out. Cedric turns once toward the castle. Jessara is still standing there. She has already watched one person she loves disappear through these same gates and never return. Now she is watching another ride toward the same war."
    ]
  },
  {
    number: "08",
    title: "Her Wish Under the Moon",
    summary: "By day Jessara makes impossible decisions as queen. By night she allows herself one private wish.",
    story: [
      "The war enters its longest and most exhausting phase. This chapter is built around the daily life of a queen rather than one dramatic event.",
      "At dawn Jessara reviews food supplies. By morning she receives battlefield reports. At midday she meets families displaced from the frontier. In the afternoon she argues with ministers over whether to increase conscription. At night she reads lists of the wounded and dead.",
      "One day an adviser recommends abandoning a border town because defending it will weaken the rest of the line. Jessara asks, “How many people are still there?” The answer is roughly four thousand.",
      "Jessara says, “Then it is not empty.” She refuses to abandon it, knowing full well that her decision will make another part of the front more vulnerable.",
      "She begins to understand that ruling is not simply choosing the right thing. It is choosing among outcomes where someone will suffer and deciding which consequences she is willing to carry.",
      "Late that night she finally returns to her balcony. The battlefield cannot be seen from the palace; only the moon hangs over the mountains.",
      "Jessara does not know where Cedric is. She does not even know whether he is alive.",
      "She whispers, “I don’t need victory tonight.” After a pause: “Just… bring them home.”",
      "The little fairy wakes on the windowsill and lands on Jessara’s shoulder. This is one of the only places where the queen permits herself to admit that she is afraid."
    ]
  },
  {
    number: "09",
    title: "When the Knight Fell",
    summary: "Cedric is carried back to the palace gravely wounded, forcing Jessara to relive the terror of her father’s disappearance.",
    story: [
      "Jessara is in council when a military officer enters too quickly and forgets to bow. He says only, “Your Majesty…” and she understands from his face that something has happened.",
      "Cedric is carried into the palace with his armor cut open and blood across his clothes.",
      "For one terrible instant Jessara does not see Cedric. She remembers the day broken soldiers returned without her father — confused reports, bloodied armor, hurried footsteps, and the terrible certainty that no one knew where the king had gone.",
      "Someone says, “Your Majesty?” and only then does she move again.",
      "Cedric remains unconscious for hours. Jessara refuses several council requests and stays beside him.",
      "The little fairy lands near his chest and uses the faint, gentle magic she possesses. It is not a miracle that can reverse death. It is only enough to help his breathing steady.",
      "Jessara asks, “Can you save him?” The fairy cannot answer. She simply keeps trying.",
      "Eventually Cedric opens his eyes. His first words are, “You look terrible.” Jessara stares at him. “You almost died.” Cedric answers weakly, “Yes. That would explain it.”",
      "Jessara laughs and cries at the same time.",
      "But there is no time to remain at his bedside. A new report arrives: Aurelia’s eastern line is beginning to collapse. Jessara looks at Cedric, then toward the war room, and realizes she can no longer simply wait for events to happen."
    ]
  },
  {
    number: "10",
    title: "The Little Wing Beyond the Lines",
    summary: "For the first time, the silver-winged fairy chooses an adventure of her own — and crosses into the enemy camp alone.",
    story: [
      "The fairy hears Jessara and the generals discussing the crisis. Aurelia lacks troops, lacks reliable intelligence, and cannot predict where the enemy will strike next.",
      "That night, without telling Jessara, the fairy leaves the palace and follows the military road toward the front.",
      "The world becomes enormous from her point of view. Tents rise like buildings. Horse hooves shake the ground like thunder. Patrols force her into grass, wagons, and shadows.",
      "She crosses trenches and firelit camps. At one point she nearly gives herself away when a camp cat notices movement near a supply crate.",
      "Eventually she slips into the enemy command tent, where officers are discussing the next day’s assault.",
      "She learns that the enemy plans to concentrate its main force against Aurelia’s central position. That concentration will leave one side exposed for a short time.",
      "The fairy immediately begins the dangerous flight home. An alarm is raised when a map on the table shifts, though no one fully understands what caused it.",
      "She escapes the camp, exhausted, and continues through the night until the blue-and-gold banners of Aurelia finally appear in the distance.",
      "For the first time she is not merely Jessara’s secret companion. She has made a choice, taken a risk, and become a hero in her own right."
    ]
  },
  {
    number: "11",
    title: "The Last Battle of Aurelia",
    summary: "Aurelia finally sees a chance to end the war — but Jessara must risk both the kingdom and the person she most wants to protect.",
    story: [
      "The fairy returns barely able to fly and lands directly on Jessara’s war map. Jessara does not yet know where she has been.",
      "Using stones, scraps of paper, and frantic gestures, the fairy begins reconstructing the enemy deployment she saw. Slowly Jessara and the generals understand: the enemy will mass its strength in the center, leaving one flank exposed.",
      "It may be Aurelia’s only chance to finish the war. It may also be a trap.",
      "Everyone in the room waits for Jessara’s decision. After a long silence she says, “We attack.”",
      "Cedric, still recovering, enters the chamber wearing armor. Jessara sees him and immediately says, “No.” Cedric replies, “I didn’t say anything.” Jessara answers, “You don’t need to.”",
      "Cedric tells her, “Then order me to stay.” Jessara cannot answer immediately. If she were only Jessara, she would keep him in the palace. As queen, she knows the army needs him.",
      "At last she says the same words she has said before: “…Come back.” Cedric answers, “I’ll try.”",
      "The final battle is not an easy victory. Aurelia’s first attack gains ground, then the enemy adapts. The fighting becomes brutal. Soldiers fall. Cedric is nearly brought down again.",
      "Only when the intelligence gathered by the fairy is fully exploited does Aurelia’s cavalry break through the weakened flank.",
      "The enemy line collapses and begins to withdraw. The war is finally won.",
      "But the battlefield does not become joyful. Victory is surrounded by the people who did not survive to see it."
    ]
  },
  {
    number: "12",
    title: "Peace Returns to the Valley",
    summary: "Peace returns to Aurelia, and Jessara finally understands what her father meant when he told her the kingdom would one day be hers.",
    story: [
      "The final chapter begins not with celebration but with silence. For the first time in years there are no alarm bells, no urgent messengers, and no army gathering outside the walls.",
      "The city gates open and soldiers return home. Crowds fill the streets. Some families cheer. Some cry with relief. Others wait until the returning ranks thin and the person they hoped to see is still not among them.",
      "Jessara stands among the people rather than above them on a balcony.",
      "Cedric returns alive, still carrying the marks of the war. He and Jessara see one another across the crowd. Neither runs dramatically toward the other. They simply smile.",
      "Later Jessara walks alone into the palace garden where the story began. The same morning light falls across the same paths and the same old wall. The war is over, but her father’s fate is still unresolved; peace has returned without answering every question.",
      "She remembers her father telling her, “One day, all of this will be yours.” As a child she thought he meant the castle, the valley, the roads, and the land.",
      "Now she understands that a kingdom is not property. It is people — the lives she is responsible for protecting.",
      "Cedric joins her and looks at the garden wall. “Do you remember trying to climb that?” Jessara answers, “I climbed it.” Cedric says, “You fell.” Jessara replies, “You pushed me.” Cedric smiles. “That is not how I remember it.”",
      "Nearby, children are running through the garden while an exhausted attendant tries to catch them. Jessara watches them and sees an echo of her younger self.",
      "The silver-winged fairy settles on her shoulder.",
      "The valley of Aurelia is once again filled with morning light. The melody from the beginning returns, but it is no longer the theme of a sheltered princess. It has become the theme of a queen.",
      "Jessara finally understands why the crown is so heavy — and why she is willing to keep wearing it."
    ]
  }
];

export default function EpisodeTwoPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/">← Back to Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/zh/aurelia/episode-2/">中文</Link>
            <Link className="languageLink" href="/ja/aurelia/episode-2/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <AureliaNav active="episode-2" />

      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">Episode II · Tracks 07–12</span>
        <h1>The Queen and the War</h1>
        <p className="aureliaLead">
          Jessara must lead while living with the unanswered fate of her missing father and fearing that Cedric may vanish into the same war. The silver-winged fairy and one final chance to
          save Aurelia carry the story toward its return to peace.
        </p>
      </section>

      <section className="aureliaStoryChapters">
        {tracks.map((track) => (
          <article className="aureliaStoryChapter" key={track.number}>
            <div className="aureliaStoryChapterHead">
              <div className="trackNumber">{track.number}</div>
              <div>
                <h2>{track.title}</h2>
                <p className="chapterSummary">{track.summary}</p>
              </div>
            </div>
            <div className="chapterStory">
              {track.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
