import Link from "next/link";

export default function BrenaliaPage() {
  return (
    <main className="storyPage">
      <Link className="back" href="/">← Back to Triveria</Link>
      <section className="storyHero">
        <h1>Brenalia</h1>
        <h2>The Princess and the Lost Relic</h2>
        <p>In a kingdom protected by forests, valleys, and ancient ruins, Princess Ritania discovers a forgotten legend that pulls her far beyond the palace walls.</p>
        <p className="coming">A journey beyond borders · Full story pages coming next.</p>
      </section>
    </main>
  );
}
