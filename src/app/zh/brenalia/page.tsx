import Link from "next/link";

export default function ZhBrenaliaPage() {
  return (
    <main className="aureliaPage kingdomPage brenaliaRealm">
      <header className="realmTop">
        <div>
          <Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/brenalia/">English</Link>
            <Link className="languageLink" href="/ja/brenalia/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/brenalia-logo.webp" alt="Brenalia — The Princess and the Lost Relic" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Brenalia-kingdom.png" alt="森林王國 Brenalia" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">Triveria 的森林王國</span>
          <h1>Brenalia 王國</h1>
          <p className="aureliaLead">一個被古老森林、深谷與山脈屏障守護的王國——比兩個鄰國更自由、更安靜，也更貼近那個被世人遺忘的世界。</p>
          <p>Brenalia 的人們生活在森林邊緣的城鎮、河谷與較小的聚落之間。古老道路與林間小徑彼此相連，而真正熟悉它們的，往往是從小就在樹蔭下長大的人。對 Brenalia 而言，森林不只是資源，更是一種記憶。</p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">土地</span><h2>森林與河谷</h2><p>濃密林地與破碎地形形成 Brenalia 天然的屏障，使大規模軍隊難以深入，也讓地方傳統在相對獨立的環境中延續。</p></article>
        <article><span className="sectionKicker">生計</span><h2>自然的贈禮</h2><p>木材、藥草、蜂蜜、水果、樹脂、香料與天然染料從 Brenalia 流向整個大陸。但真正最珍貴的，也許是那些仍藏在樹冠之下的古老遺跡。</p></article>
        <article><span className="sectionKicker">信念</span><h2>自由與和諧</h2><p>Brenalia 人尊重王室，卻不讓繁複禮制定義日常生活。自由、地方傳統、好奇心，以及與自然保持平衡，比僵硬秩序更重要。</p></article>
      </section>

      <section className="kingdomQuote"><span>BRENALIA</span><blockquote>「Brenalia 找回 Triveria 所遺忘的事物。」</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">王室旗幟</span><h2>綠、金與生命之樹</h2><p>深森林綠上的金色樹木象徵根源、延續與林冠之下的生命。對一個最古老傳說仍沉睡在活生生森林裡的王國而言，這是再適合不過的象徵。</p></article>
        <article><span className="sectionKicker">公主</span><h2>Princess Ritania</h2><p>坐不住、充滿好奇，而且一點也不願被困在宮牆之內。Ritania 把 Brenalia 的精神帶在身上。她尋找 Lost Relic 的旅程，將讓王國被遺忘的傳說重新甦醒，也成為一場跨越國境冒險的開端。</p></article>
      </section>

      <div className="aureliaNext"><Link href="/zh/triveria/">探索 Triveria →</Link></div>
    </main>
  );
}
