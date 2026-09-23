import Link from "next/link";

export default function ZhCazeniaPage() {
  return (
    <main className="aureliaPage kingdomPage cazeniaRealm">
      <header className="realmTop">
        <div>
          <Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/cazenia/">English</Link>
            <Link className="languageLink" href="/ja/cazenia/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/cazenia-logo.webp" alt="Cazenia — The Princess and the Silver Thread" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Cazenia-kingdom.png" alt="Cazenia 遼闊而肥沃的平原" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">Triveria 的大平原王國</span>
          <h1>Cazenia 王國</h1>
          <p className="aureliaLead">一個擁有遼闊肥沃平原、整齊農田、灌溉水道與漫長道路的王國——在這裡，富足來自規劃。</p>
          <p>Cazenia 擁有 Triveria 最大面積的可耕地。穀物、水果、蔬菜、亞麻、棉花與大麻遍布平原，使它同時成為大陸的重要糧食產地，以及最主要的紡織原料來源。</p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">土地</span><h2>農田與開闊平原</h2><p>如果說 Brenalia 讓旅人被森林包圍，那麼 Cazenia 則把視野一路推向地平線。農場、莊園、糧倉、風車、運河與道路共同構成精心管理的農業景觀。</p></article>
        <article><span className="sectionKicker">生計</span><h2>收穫與纖維</h2><p>小麥與各類作物養活整個王國，而亞麻、棉花與大麻則供應 Triveria 的紡織產業。Cazenia 種植原料，Aurelia 的工坊則能把它們製成完成品。</p></article>
        <article><span className="sectionKicker">信念</span><h2>秩序與進步</h2><p>水必須被導引、收成必須被計算、糧倉必須被保護、道路必須被維護。因此 Cazenia 的文化重視紀律、規劃、效率，以及「秩序能守住繁榮」這個信念。</p></article>
      </section>

      <section className="kingdomQuote"><span>CAZENIA</span><blockquote>「Cazenia 種出 Triveria 所需要的一切。」</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">王室旗幟</span><h2>勃艮第紅、金與王冠</h2><p>Cazenia 的勃艮第紅與金色王旗帶著華麗而正式的王室徽記：精準、克制、秩序分明。它映照出一個相信結構與延續就是力量的王國。</p></article>
        <article><span className="sectionKicker">公主</span><h2>Princess Erissia</h2><p>聰慧、沉著，而且早已習慣掌控局面。Erissia 身上帶著她故鄉的邏輯：混亂會浪費資源，秩序則能保護人民。她的故事將揭示這種信念需要付出什麼，又能拯救什麼。</p></article>
      </section>

      <div className="aureliaNext"><Link href="/zh/triveria/">探索 Triveria →</Link></div>
    </main>
  );
}
