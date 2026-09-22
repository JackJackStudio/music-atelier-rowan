import Link from "next/link";

const stories = [
  {
    slug: "aurelia",
    note: "A princess. A crown. A kingdom at war.",
    status: "12 Tracks",
  },
  {
    slug: "brenalia",
    note: "A forest kingdom. An ancient relic. A journey beyond the border.",
    status: "Story in progress",
  },
  {
    slug: "cazenia",
    note: "A brilliant princess. A silver thread. A kingdom yet to be revealed.",
    status: "Coming soon",
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
          <a href="#stories">Worlds</a>
          <Link href="/triveria/">Triveria</Link>
          <a href="#about">About</a>
          <Link href="/zh/">中文</Link>
          <Link href="/ja/">日本語</Link>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroArtwork" role="img" aria-label="Music Atelier Rowan fantasy atelier overlooking a moonlit kingdom" />
        <div className="heroFade" />
        <a className="scrollCue" href="#stories">Enter the worlds</a>
      </section>

      <section className="stories" id="stories">
        <div className="sectionHeading">
          <span>The Continent of Triveria</span>
          <h1>Choose a story. Enter a world.</h1>
          <p>Three kingdoms begin apart. Their music, legends, and princesses will one day cross the same road.</p>
        </div>

        <div className="storyGrid">
          {stories.map((story) => (
            <div
              className={`storyCard ${story.slug}`}
              key={story.slug}
            >
              <div className="storyLogoArea">
                <img className="storyLogo" src={`/logos/${story.slug}-logo.webp`} alt="" />
              </div>
              <div className="storyContent">
                <span className="storyStatus">{story.status}</span>
                <p className="storyNote">{story.note}</p>
                <span className="storyActions">
                  <Link className="enter" href={`/${story.slug}/`}> Enter story →</Link>
                  {story.slug === "aurelia" && (
                    <a className="storyListen" href="https://youtu.be/aufR8Y0sHTs" target="_blank" rel="noopener noreferrer">▶ Listen on YouTube</a>
                  )}
                </span>
              </div>
            </div>
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
            <a href="#stories">Explore the original story settings →</a>
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
