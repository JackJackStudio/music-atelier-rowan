import Link from "next/link";
import AureliaNav from "../AureliaNav";

const tracks = [
  {
    number: "01",
    title: "Once Upon a Morning",
    summary: "A carefree morning in the palace gardens becomes a memory Jessara will carry for the rest of her life.",
    story: [
      "The story opens on an ordinary, happy morning in Aurelia. Morning mist lifts from the valley, sunlight touches the white towers, and servants search the palace for a missing princess.",
      "Jessara has escaped another lesson and is hiding in the gardens with a young Cedric. They are trying to sneak beyond the garden wall when an attendant calls her name. Cedric whispers, “No, they can’t see us.” A beat later: “…Now they can.”",
      "They run deeper into the garden and nearly collide with the king. He studies Jessara’s muddy dress and Cedric’s guilty expression, then simply asks where they were going. Jessara points toward the valley and answers, “Outside.”",
      "Later, the king takes Jessara to a high terrace overlooking the kingdom and tells her, “One day, all of this will be yours.” Jessara, too young to understand, points at the mountains and asks, “Even those?” He laughs. “No. I don’t think even kings own mountains.”",
      "The track ends with Jessara running off to find Cedric again. It is a picture of uncomplicated happiness — one of the last times in her life when she does not yet understand what it means to lose someone."
    ]
  },
  {
    number: "02",
    title: "The Girl by the Window",
    summary: "Jessara begins to see that the world beyond the palace is larger, stranger, and more dangerous than she was told.",
    story: [
      "Years later, Jessara is fifteen or sixteen. She now attends lessons in diplomacy, history, etiquette, and government, and for the first time she is allowed to observe a royal council meeting.",
      "She is nearly bored to sleep until a military officer spreads a border map across the table. Jessara notices several red marks near the eastern frontier and asks what they mean.",
      "The king answers only, “Border incidents.” When she asks with whom, he tells her it is nothing she needs to worry about. Jessara dislikes the answer immediately.",
      "That afternoon Cedric, now beginning formal knight training, arrives wearing light practice armor. Jessara tells him, “You look ridiculous.” Cedric replies, “I was told I look very respectable.” She answers, “They lied.”",
      "They ride to a high ridge beyond the city. Jessara looks east and asks what lies beyond the mountains. Cedric jokes, “More mountains,” before admitting that the border lies farther on.",
      "Jessara asks if he thinks there will be a war. Cedric says his father says no. Jessara replies, “My father says I don’t need to worry.” They exchange a look. Both are beginning to understand that adults usually say that when there is something worth worrying about."
    ]
  },
  {
    number: "03",
    title: "Wings in the Garden",
    summary: "A mysterious little visitor turns the palace garden into the last truly magical place in Jessara’s youth.",
    story: [
      "Strange little things begin happening in the palace garden. A strawberry is found with one tiny bite missing. A ribbon vanishes from Jessara’s room and appears the next day hanging from a rose branch. Soft laughter seems to come from nowhere.",
      "Jessara accuses Cedric of playing tricks on her. He stares at her. “Why would I steal half a strawberry?” Jessara answers, “Because you’re annoying.” Cedric: “That is not evidence.”",
      "Jessara decides to catch the culprit herself. She leaves a piece of honey cake on a stone table and hides nearby. After a long wait, a tiny figure with silver, translucent wings emerges from the flowers.",
      "Jessara accidentally snaps a twig and frightens the little fairy away. Instead of chasing her, Jessara returns the next day and the next, leaving a little food and sitting at a distance with a book.",
      "Eventually the fairy dares to land on Jessara’s finger. Jessara whispers, “Hello.” She asks whether the fairy has a name, then whether she can speak. The fairy only blinks at her. Jessara smiles. “That’s fine. Cedric talks enough for everyone.”",
      "The fairy is not a weapon or a source of power. At first she is simply a secret friend — the last piece of wonder and innocence in a world where politics and war are beginning to close in."
    ]
  },
  {
    number: "04",
    title: "The King Rides to War",
    summary: "Border tension becomes open war, and Jessara watches both her father and Cedric ride away through the same gate.",
    story: [
      "War does not begin all at once. First come raids on border villages. Then trade routes close. Then two messengers arrive at the palace in the middle of the night, and the council chamber remains lit until dawn.",
      "The next morning the bells ring — not for a festival, but for mobilization. Jessara rushes into the council chamber and finds the war map crowded with markers. Her father is already wearing armor.",
      "She realizes what is happening and says, “You’re going.” The king answers, “I have to.” Jessara loses her temper. “No, you don’t. You’re the king. Send someone else.”",
      "Her father answers, “A king cannot ask others to stand where he is unwilling to stand himself.” Jessara hates the answer because she understands it.",
      "Outside, soldiers gather beneath the blue-and-gold banners. Cedric is among them, now a young knight preparing for his first true campaign. Jessara sees him and blurts out, “You too?” Cedric tries to smile. “Apparently this is what knights do.” Jessara replies, “That is a stupid answer.” Cedric: “I know.”",
      "The gates open. The king rides at the head of the army. He turns once and raises a hand toward his daughter. Jessara raises hers too, but does not wave. She stands there until both her father and Cedric disappear down the road."
    ]
  },
  {
    number: "05",
    title: "The Empty Throne",
    summary: "Jessara waits for the king to return — and learns that returning home is not the same as coming back.",
    story: [
      "The war lasts far longer than anyone expected. Jessara is drawn into more council meetings and begins to understand what the words casualties, supplies, refugees, and reinforcements truly mean.",
      "Cedric occasionally sends short notes from the front. Each time, Jessara checks two things first: her father is alive, and Cedric is alive.",
      "One morning word reaches the palace that the king is returning. Jessara runs through the corridors, believing the war may finally be over.",
      "Then she steps into the outer court. There is no cheering. No music. No victory standard. The returning soldiers are silent. The royal banners hang low.",
      "Her father is not riding at the front. He is lying on a stretcher.",
      "For the first time, Jessara sees not a king but simply her father — a man who can bleed, suffer, and die.",
      "When he briefly wakes, Jessara insists, “You’re going to be fine.” He knows she is lying. He says, “Jessara… listen to me.” She refuses. “No. You can tell me later.” He never gets to finish what he wanted to say.",
      "After his death, Jessara walks alone into the throne room. The chair is empty. The silver-winged fairy sits silently on one armrest. Jessara stands there for a long time before finally allowing herself to cry."
    ]
  },
  {
    number: "06",
    title: "The Crown Is Heavy",
    summary: "Aurelia has no time to wait for Jessara to finish grieving. The princess must become queen while the war is still burning.",
    story: [
      "The funeral ends, but the war does not. Every morning brings petitions, casualty reports, food shortages, military requests, displaced families, tax decisions, and questions no one else is willing to answer.",
      "Jessara sits at her father’s desk and asks quietly, “How did he do this every day?” No one answers.",
      "The little fairy tries to help by moving a sheet of paper larger than herself and ends up buried beneath it. Jessara laughs despite herself — and then immediately begins to cry. It is the first time she has laughed since her father died.",
      "On the morning of the coronation, the crown waits on a table. It is beautiful and almost cruel in its weight. Cedric has returned briefly from the front to attend the ceremony.",
      "Jessara asks him, “Do I look terrified?” Cedric answers, “Yes.” She glares. He adds, “But only to people who know you.”",
      "Jessara asks him to stay until tomorrow. He does not answer, because they both know the war will not pause for a coronation.",
      "The ceremony is restrained. Aurelia is still mourning. The crown is placed on her head, and Princess Jessara becomes Queen Jessara of Aurelia.",
      "Afterward she does not return to her rooms. She walks directly into the council chamber. Everyone rises. Her father’s war map is still on the table.",
      "For the first time, every voice in the room falls silent and waits for her. Jessara looks at the eastern frontier and says, “Show me the eastern front.”"
    ]
  }
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
        <Link href="/aurelia/episode-2/">Continue to Episode II →</Link>
      </div>
    </main>
  );
}
