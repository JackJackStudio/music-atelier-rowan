import Link from "next/link";

export default function TriveriaPage() {
  return (
    <main className="storyPage">
      <Link className="back" href="/">← Home</Link>
      <section className="storyHero">
        <h1>Triveria</h1>
        <h2>Three kingdoms. Three princesses. One continent.</h2>
        <p>Aurelia, Brenalia, and Cazenia each begin with their own story. Their paths will eventually cross in a larger adventure across Triveria.</p>
        <p className="coming">World map and lore archive coming next.</p>
      </section>
    </main>
  );
}
