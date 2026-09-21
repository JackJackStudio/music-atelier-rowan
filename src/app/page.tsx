import Link from "next/link";

const stories = [
  {
    slug: "aurelia",
    title: "Aurelia",
    subtitle: "The Princess and the Silver Wings",
    note: "A princess. A crown. A kingdom at war.",
    status: "12 Tracks",
    accent: "silver-blue",
  },
  {
    slug: "brenalia",
    title: "Brenalia",
    subtitle: "The Princess and the Lost Relic",
    note: "A forest kingdom. An ancient relic. A journey beyond the border.",
    status: "Story in progress",
    accent: "forest-green",
  },
  {
    slug: "cazenia",
    title: "Cazenia",
    subtitle: "The Princess and the Silver Thread",
    note: "A brilliant princess. A silver thread. A kingdom yet to be revealed.",
    status: "Coming soon",
    accent: "crimson",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="siteNav">
        <a className="brandMark" href="#top" aria-label="Music Atelier Rowan home">
          <span className="brandSeal">MAR</span>
          <span className="brandName">Music Atelier Rowan</span>
        </a>
        <div className="navLinks">
          <a href="#stories">Worlds</a>
          <Link href="/triveria/">Triveria</Link>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroScene" aria-hidden="true">
          <div className="heroMoon" />
          <div className="heroArch" />
          <div className="heroLantern heroLanternLeft" />
          <div className="heroLantern heroLanternRight" />
          <div className="heroSpark heroSparkOne" />
          <div className="heroSpark heroSparkTwo" />
          <div className="heroSpark heroSparkThree" />
        </div>

        <div className="heroContent">
          <div className="heroLogoLockup">
            <div className="eyebrow">M.A.R.</div>
            <h1>Music Atelier Rowan</h1>
            <p className="tagline">Stories, Told Through Music.</p>
          </div>
          <p className="intro">
            Original music, imagined worlds, and cinematic stories shaped like pages from a forgotten fantasy book.
          </p>
          <a className="scrollCue" href="#stories">Enter the worlds</a>
        </div>
      </section>

      <section className="stories" id="stories">
        <div className="sectionHeading">
          <span>The Continent of Triveria</span>
          <h2>Choose a story. Enter a world.</h2>
          <p>
            Three kingdoms begin apart. Their music, legends, and princesses will one day cross the same road.
          </p>
        </div>

        <div className="storyGrid">
          {stories.map((story) => (
            <Link
              className={`storyCard ${story.slug}`}
              href={`/${story.slug}/`}
              key={story.slug}
              aria-label={`Enter ${story.title}`}
            >
              <div className="storyAtmosphere" />
              <div className="storyLogoWrap">
                <img
                  className="storyLogo"
                  src={`/logos/${story.slug}-logo.webp`}
                  alt={`${story.title} — ${story.subtitle}`}
                />
              </div>
              <div className="storyContent">
                <span className="storyStatus">{story.status}</span>
                <h3>{story.title}</h3>
                <p className="storySubtitle">{story.subtitle}</p>
                <p className="storyNote">{story.note}</p>
                <span className="enter">Enter story <span aria-hidden="true">→</span></span>
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
