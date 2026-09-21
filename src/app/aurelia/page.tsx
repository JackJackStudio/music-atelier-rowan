import Link from "next/link";

export default function AureliaPage() {
  return (
    <main className="storyPage">
      <Link className="back" href="/">← Back to Triveria</Link>
      <section className="storyHero">
        <h1>Aurelia</h1>
        <h2>The Princess and the Silver Wings</h2>
        <p>A cinematic fantasy story following a princess who loses her father, inherits a kingdom at war, and gradually becomes the queen her people need.</p>
        <p className="coming">12 tracks · Story and music pages coming next.</p>
      </section>
    </main>
  );
}
