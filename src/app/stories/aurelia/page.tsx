import Link from "next/link";
import AnalyticsLink from "../../AnalyticsLink";

const episodes = [
  {
    href: "/aurelia/episode-1/",
    number: "Episode I",
    title: "The Princess Becomes a Queen",
    tracks: "Tracks 01–06",
    note: "Childhood, discovery, war, loss, and the crown that changes Jessara's life.",
  },
  {
    href: "/aurelia/episode-2/",
    number: "Episode II",
    title: "The Queen and the War",
    tracks: "Tracks 07–12",
    note: "The war continues as Jessara, Cedric, and Silver Wings face the cost of protecting Aurelia.",
  },
];

export default function AureliaStoryPage() {
  return (
    <main className="storyDetailPage aureliaStoryDetail">
      <header className="storyDetailTop">
        <Link className="back" href="/#stories">← Back to Stories</Link>
        <Link className="storyKingdomShortcut" href="/aurelia/">Kingdom of Aurelia →</Link>
      </header>

      <section className="storyDetailHero">
        <span className="sectionKicker">Story I · Complete · 12 Tracks</span>
        <img
          className="storyDetailLogo"
          src="/logos/aurelia-logo.webp"
          alt="Aurelia — The Princess and the Silver Wings"
        />
        <p className="storyDetailLead">A princess. A crown. A kingdom at war.</p>
        <p>
          Jessara grows from a protected princess into the young queen Aurelia needs. Through war, loss, friendship,
          and the return of a tiny silver-winged companion, her first story becomes the opening chapter of the wider
          Triveria Saga.
        </p>
      </section>

      <section className="storyEpisodes">
        <div className="storySectionHeading">
          <span className="sectionKicker">Episodes</span>
          <h1>The story so far</h1>
        </div>

        <div className="episodeGrid">
          {episodes.map((episode) => (
            <AnalyticsLink
              className="episodeCard"
              href={episode.href}
              ariaLabel={`Read ${episode.number}: ${episode.title}`}
              eventName="enter_episode"
              params={{ story: "aurelia", episode: episode.number, language: "en", source: "story_index" }}
              key={episode.number}
            >
              <span className="episodeNumber">{episode.number}</span>
              <h2>{episode.title}</h2>
              <strong>{episode.tracks}</strong>
              <p>{episode.note}</p>
              <span className="enter">Read episode →</span>
            </AnalyticsLink>
          ))}
        </div>
      </section>

      <section className="storyWorldLink">
        <span className="sectionKicker">Beyond the story</span>
        <h2>Explore the Kingdom of Aurelia</h2>
        <p>
          Discover the river valleys, workshops, royal city, people, and places that exist beyond the events of Story I.
        </p>
        <Link href="/aurelia/">Enter the kingdom →</Link>
      </section>
    </main>
  );
}
