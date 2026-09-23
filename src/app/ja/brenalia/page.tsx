import Link from "next/link";

export default function JaBrenaliaPage() {
  return (
    <main className="aureliaPage kingdomPage brenaliaRealm">
      <header className="realmTop">
        <div>
          <Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/brenalia/">English</Link>
            <Link className="languageLink" href="/zh/brenalia/">中文</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/brenalia-logo.webp" alt="Brenalia — The Princess and the Lost Relic" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Brenalia-kingdom.png" alt="森の王国 Brenalia" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">トリヴェリアの森の王国</span>
          <h1>Brenalia 王国</h1>
          <p className="aureliaLead">古い森、深い谷、山々の障壁に守られた王国。二つの隣国よりも自由で静かで、忘れられた世界により近い場所です。</p>
          <p>Brenalia の人々は、森の縁の町、川沿いの谷、小さな集落に暮らしています。古い道と森の小径がそれらを結び、その道を最もよく知るのは、木々の下で育った人々です。この国にとって森は単なる資源ではなく、記憶そのものです。</p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">土地</span><h2>森と谷</h2><p>深い森と複雑な地形が Brenalia を天然の要塞にしています。大軍の侵入を遠ざけ、土地ごとの伝統が独自に育つ余地を残してきました。</p></article>
        <article><span className="sectionKicker">暮らし</span><h2>自然の恵み</h2><p>木材、薬草、蜂蜜、果実、樹脂、香辛料、天然染料が Brenalia から大陸へ運ばれます。しかし最大の宝は、森の天蓋の下に眠る遺跡なのかもしれません。</p></article>
        <article><span className="sectionKicker">理想</span><h2>自由と調和</h2><p>Brenalia の人々は王家を敬いながらも、儀礼に日常を支配させません。自由、土地の慣習、好奇心、そして自然との調和が、硬い秩序よりも大切にされています。</p></article>
      </section>

      <section className="kingdomQuote"><span>BRENALIA</span><blockquote>「Brenalia は、Triveria が忘れたものを見つける。」</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">王家の旗</span><h2>緑、金、そして樹</h2><p>深い森の緑に描かれた金の樹は、根、継承、そして森の天蓋の下に続く生命を表します。最古の物語が今なお生きた森の中に眠る王国にふさわしい紋章です。</p></article>
        <article><span className="sectionKicker">姫</span><h2>Princess Ritania</h2><p>落ち着きがなく、好奇心旺盛で、宮殿の壁の内側に留まる気などまるでない Ritania。彼女は Brenalia の精神そのものです。Lost Relic を探す旅は、忘れられた伝説を目覚めさせ、国境を越える冒険の始まりとなります。</p></article>
      </section>

      <div className="aureliaNext"><Link href="/ja/triveria/">Triveria を探索する →</Link></div>
    </main>
  );
}
