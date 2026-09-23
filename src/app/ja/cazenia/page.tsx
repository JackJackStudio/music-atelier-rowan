import Link from "next/link";

export default function JaCazeniaPage() {
  return (
    <main className="aureliaPage kingdomPage cazeniaRealm">
      <header className="realmTop">
        <div>
          <Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/cazenia/">English</Link>
            <Link className="languageLink" href="/zh/cazenia/">中文</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/cazenia-logo.webp" alt="Cazenia — The Princess and the Silver Thread" />
      </header>

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt"><img src="/images/Cazenia-kingdom.png" alt="Cazenia の広大で肥沃な平原" /></div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">トリヴェリアの大平原王国</span>
          <h1>Cazenia 王国</h1>
          <p className="aureliaLead">広大で肥沃な平原、整然とした農地、灌漑水路、長く伸びる街道。豊かさが計画によって支えられている王国です。</p>
          <p>Cazenia は Triveria 最大級の耕作地を持ちます。穀物、果実、野菜、亜麻、綿花、麻が平原に広がり、この国を大陸有数の食料生産地であり、繊維原料の中心地にしています。</p>
        </div>
      </section>

      <section className="kingdomPillars">
        <article><span className="sectionKicker">土地</span><h2>畑と大平原</h2><p>Brenalia が旅人を森で包み込む国なら、Cazenia は視界を地平線まで開く国です。農場、荘園、穀物庫、風車、運河、街道が、管理された農業景観を形づくります。</p></article>
        <article><span className="sectionKicker">暮らし</span><h2>収穫と繊維</h2><p>小麦をはじめとする作物が国を養い、亜麻、綿花、麻が Triveria の繊維交易を支えます。Cazenia が原料を育て、Aurelia の工房がそれを製品へと変えていきます。</p></article>
        <article><span className="sectionKicker">理想</span><h2>秩序と進歩</h2><p>水は導かれ、収穫は数えられ、備蓄は守られ、道は維持されなければなりません。だからこそ Cazenia は、規律、計画、効率、そして秩序こそ繁栄を守るという信念を重んじます。</p></article>
      </section>

      <section className="kingdomQuote"><span>CAZENIA</span><blockquote>「Cazenia は、Triveria が必要とするものを育てる。」</blockquote></section>

      <section className="aureliaDetails">
        <article><span className="sectionKicker">王家の旗</span><h2>バーガンディ、金、そして王冠</h2><p>Cazenia のバーガンディと金の王旗には、華やかで格式ある王家の紋章が置かれています。意図的で、整然としていて、統制の取れた意匠は、構造と継続に力を見いだす国の姿そのものです。</p></article>
        <article><span className="sectionKicker">姫</span><h2>Princess Erissia</h2><p>聡明で落ち着きがあり、物事を掌握することに慣れている Erissia。彼女には故国の論理が染みついています。混乱は資源を浪費し、秩序は人々を守る。彼女の物語は、その信念が何を代償とし、何を救えるのかを明らかにしていきます。</p></article>
      </section>

      <div className="aureliaNext"><Link href="/ja/triveria/">Triveria を探索する →</Link></div>
    </main>
  );
}
