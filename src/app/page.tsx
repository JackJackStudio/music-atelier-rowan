import Link from "next/link";

const stories = [
  {
    slug: "aurelia",
    title: "Aurelia",
    subtitle: "The Princess and the Silver Wings",
    note: "A princess. A crown. A kingdom at war.",
    status: "12 Tracks",
  },
  {
    slug: "brenalia",
    title: "Brenalia",
    subtitle: "The Princess and the Lost Relic",
    note: "A forest kingdom. An ancient relic. A journey beyond the border.",
    status: "Story in progress",
  },
  {
    slug: "cazenia",
    title: "Cazenia",
    subtitle: "The Princess and the Silver Thread",
    note: "A brilliant princess. A silver thread. A kingdom yet to be revealed.",
    status: "Coming soon",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">M.A.R.</div>
        <h1>Music Atelier Rowan</h1>
        <p className="tagline">Stories, Told Through Music.</p>
        <p className="intro">Original music, imagined worlds, and cinematic stories waiting to unfold.</p>
        <a className="scrollCue" href="#stories">Explore the worlds</a>
      </section>

      <section className="stories" id="stories">
        <div className="sectionHeading">
          <span>The Continent of Triveria</span>
          <h2>Choose a story. Enter a world.</h2>
        </div>

        <div className="storyGrid">
          {stories.map((story) => (
            <Link className={`storyCard ${story.slug}`} href={`/${story.slug}/`} key={story.slug}>
              <div className="storyGlow" />
              <div className="storyContent">
                <span className="storyStatus">{story.status}</span>
                <h3>{story.title}</h3>
                <p className="storySubtitle">{story.subtitle}</p>
                <p className="storyNote">{story.note}</p>
                <span className="enter">Enter story →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer>
        <span>M.A.R. — Music Atelier Rowan</span>
        <span>Stories, Told Through Music.</span>
      </footer>
    </main>
  );
}
