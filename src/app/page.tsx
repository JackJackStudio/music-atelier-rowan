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
            <source media="(max-width: 700px)" srcSet="/brand/mar-emblem.webp" />
            <img className="headerLogo" src="/brand/mar-header-logo.webp" alt="Music Atelier Rowan" />
          </picture>
        </a>
        <div className="navLinks">
          <a href="#stories">Worlds</a>
          <Link href="/triveria/">Triveria</Link>
          <a href="#about">About</a>
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
            <Link
              className={`storyCard ${story.slug}`}
              href={`/${story.slug}/`}
              key={story.slug}
              aria-label={`Enter ${story.slug}`}
            >
              <div className="storyLogoArea">
                <img className="storyLogo" src={`/logos/${story.slug}-logo.webp`} alt="" />
              </div>
              <div className="storyContent">
                <span className="storyStatus">{story.status}</span>
                <p className="storyNote">{story.note}</p>
                <span className="enter">Enter story →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="atelier" id="about">
        <div className="atelierFrame">
          <div>
            <span className="sectionKicker">Inside the Atelier</span>
            <h2>Where music becomes a world.</h2>
          </div>
          <p>
            M.A.R. is a home for original music, imagined kingdoms, forgotten memories, and stories told without words.
            Each album is designed as a place to enter — not only a collection of tracks.
          </p>
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
