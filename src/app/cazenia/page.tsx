import Link from "next/link";

export default function CazeniaPage() {
  return (
    <main className="storyPage">
      <Link className="back" href="/">← Back to Triveria</Link>
      <section className="storyHero">
        <h1>Cazenia</h1>
        <h2>The Princess and the Silver Thread</h2>
        <p>The third kingdom of Triveria is waiting beyond the horizon. Its princess is brilliant, controlled, elegant — and connected to a mysterious silver thread.</p>
        <p className="coming">Coming soon.</p>
      </section>
    </main>
  );
}
