import Link from "next/link";
import AnalyticsLink from "./AnalyticsLink";

const primaryStories = [
  {
    roman: "Story I",
    slug: "aurelia",
    title: "Aurelia",
    subtitle: "The Princess and the Silver Wings",
    note: "A princess. A crown. A kingdom at war.",
    status: "12 Tracks · Complete",
    enabled: true,
  },
  {
    roman: "Story II",
    slug: "brenalia",
    title: "Brenalia",
    subtitle: "The Princess and the Lost Relic",
    note: "A forest kingdom. An ancient relic. A journey beyond the border.",
    status: "Story in progress",
    enabled: false,
  },
  {
    roman: "Story III",
    slug: "cazenia",
    title: "Cazenia",
    subtitle: "The Princess and the Silver Thread",
    note: "A brilliant princess. A silver thread. A life already woven for her.",
    status: "Coming soon",
    enabled: false,
  },
];

const futureStories = [
  { roman: "Story IV", title: "Three Princesses" },
  { roman: "Story V", title: "Drazuvia Island" },
  { roman: "Story VI", title: "Sorrow Peaks" },
  { roman: "Story VII", title: "Temple of Spirits" },
];

const kingdoms = [
  {
    slug: "aurelia",
    title: "Aurelia",
    motto: "Light · Duty · People",
    note: "Rivers, workshops, white stone, and morning light.",
  },
  {
    slug: "brenalia",
    title: "Brenalia",
    motto: "Nature · Freedom · Harmony",
    note: "Ancient forests, hidden ruins, freedom, and old roads.",
  },
  {
    slug: "cazenia",
    title: "Cazenia",
    motto: "Beauty · Culture · Progress",
    note: "Art, elegance, court culture, and disciplined beauty.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="siteNav">
        <a className="brandMark" href="#top" aria-label="Music Atelier Rowan home">
          <picture>
            <source media="(max-width: 700px)" srcSet="/brand/mar-emblem.png" />
            <img className="headerLogo" src="/brand/mar-header-logo.png" alt="Music Atelier Rowan" />
          </picture>
        </a>
        <div className="navLinks">
          <a href="#stories">Stories</a>
          <a href="#kingdoms">Kingdoms</a>
          <Link href="/triveria/">Triveria</Link>
          <a href="#about">About</a>
          <Link href="/zh/">中文</Link>
          <Link href="/ja/">日本語</Link>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroArtwork" role="img" aria-label="Music Atelier Rowan fantasy atelier overlooking a moonlit kingdom" />
        <div className="heroFade" />
        <a className="scrollCue" href="#stories">Enter Triveria</a>
      </section>

      <section className="stories" id="stories">
        <div className="sectionHeading">
          <span>The Triveria Saga</span>
          <h1>Seven stories. One continent.</h1>
          <p>
            The saga begins with three princesses in three kingdoms, then follows the road that brings their stories together.
          </p>
        </div>

        <div className="storyGrid">
          {primaryStories.map((story) => (
            <div className="storyItem" key={story.slug}>
              {story.enabled ? (
                <AnalyticsLink
                  className={`storyCard ${story.slug}`}
                  href={`/stories/${story.slug}/`}
                  ariaLabel={`Enter ${story.roman}: ${story.title}`}
                  eventName="enter_story"
                  params={{ story: story.slug, language: "en", source: "homepage" }}
                >
                  <div className="storyLogoArea">
                    <img className="storyLogo" src={`/logos/${story.slug}-logo.webp`} alt="" />
                  </div>
                  <div className="storyContent">
                    <span className="storyIndex">{story.roman}</span>
                    <span className="storyStatus">{story.status}</span>
                    <p className="storyNote">{story.note}</p>
                    <span className="enter">Enter story →</span>
                  </div>
                </AnalyticsLink>
              ) : (
                <div className={`storyCard ${story.slug} locked`} aria-label={`${story.roman}: ${story.title}, ${story.status}`}>
                  <div className="storyLogoArea">
                    <img className="storyLogo" src={`/logos/${story.slug}-logo.webp`} alt="" />
                  </div>
                  <div className="storyContent">
                    <span className="storyIndex">{story.roman}</span>
                    <span className="storyStatus">{story.status}</span>
                    <p className="storyNote">{story.note}</p>
                    <span className="enter mutedEnter">Not yet available</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="futureStoryGrid" aria-label="Future stories in the Triveria Saga">
          {futureStories.map((story) => (
            <article className="futureStoryCard" key={story.roman}>
              <span>{story.roman}</span>
              <h2>{story.title}</h2>
              <small>Coming soon</small>
            </article>
          ))}
        </div>
      </section>

      <section className="kingdoms" id="kingdoms">
        <div className="sectionHeading">
          <span>The Three Kingdoms</span>
          <h1>Explore the kingdoms of Triveria.</h1>
          <p>
            Stories move through time. Kingdoms are the places, cultures, people, and traditions that endure around them.
          </p>
        </div>

        <div className="kingdomGrid">
          {kingdoms.map((kingdom) => (
            <AnalyticsLink
              className={`kingdomCard ${kingdom.slug}`}
              href={`/${kingdom.slug}/`}
              ariaLabel={`Explore the Kingdom of ${kingdom.title}`}
              eventName="enter_kingdom"
              params={{ kingdom: kingdom.slug, language: "en", source: "homepage" }}
              key={kingdom.slug}
            >
              <div className="kingdomLogoFrame">
                <img src={`/images/Kingdom_${kingdom.title}.png`} alt={`Kingdom of ${kingdom.title}`} />
              </div>
              <div className="kingdomCardCopy">
                <span>{kingdom.motto}</span>
                <p>{kingdom.note}</p>
                <strong>Explore kingdom →</strong>
              </div>
            </AnalyticsLink>
          ))}
        </div>
      </section>

      <section className="atelier" id="about">
        <div className="atelierFrame">
          <div className="atelierIntro">
            <span className="sectionKicker">About Music Atelier Rowan</span>
            <h2>Where music becomes a world.</h2>
          </div>

          <div className="atelierCopy">
            <p>
              Music Atelier Rowan is a home for original music, imagined worlds, and stories told without words.
              Here, fantasy kingdoms, distant planets, forgotten memories, and quiet human moments are brought to life
              through cinematic music and visual storytelling.
            </p>
            <p>
              Each album is more than a collection of tracks — it is a journey, a setting, and a story waiting to unfold.
              From orchestral fantasy to atmospheric soundscapes, every project is created with one idea at its heart:
              <strong> Stories, Told Through Music.</strong>
            </p>
          </div>

          <div className="listenerNote">
            <span className="listenerNoteLabel">Listen. Imagine. Discover.</span>
            <p>
              We hope you enjoy the freedom of listening first and letting the music create its own images, places, and
              stories in your imagination. If you would like to go deeper, the original story settings behind each project
              are here on this site — waiting for you to discover them.
            </p>
            <a href="#stories">Explore the Triveria Saga →</a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>M.A.R. — Music Atelier Rowan</strong>
          <span>Stories, Told Through Music.</span>
        </div>
        <span>The Continent of Triveria</span>
      </footer>
    </main>
  );
}
