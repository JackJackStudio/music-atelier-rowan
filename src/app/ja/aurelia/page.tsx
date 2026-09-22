import Link from "next/link";
import JaAureliaNav from "./JaAureliaNav";

export default function JaAureliaPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/aurelia/">English</Link>
            <Link className="languageLink" href="/zh/aurelia/">中文</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <JaAureliaNav active="kingdom" />

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt">
          <img src="/images/Aurelia-kingdom.png" alt="白い石造りの山岳王国 Aurelia" />
        </div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">トリヴェリア最初の王国</span>
          <h1>Aurelia 王国</h1>
          <p className="aureliaLead">
            白い石の都、青と金の旗、高い橋、滝、深い谷。朝の光に輝く、美しく豊かな山岳王国。
            Aurelia は誇り高く平和な国ですが、その平穏は永遠には続きません。
          </p>
          <p>
            王都はトリヴェリア中央山脈の麓、高い谷の上に築かれています。
            白い塔と幾重ものテラスが朝日を受け、道と石橋が王宮と谷に点在する町や村を結んでいます。
            Aurelia の美しさは威圧的というより、明るく優雅です。
            白い石、ロイヤルブルー、温かな金色、花々、広い空——そして明日はきっと今日より良くなると信じている王国です。
          </p>
        </div>
      </section>

      <section className="aureliaDetails">
        <article>
          <span className="sectionKicker">王家の旗</span>
          <h2>青、金、そして王冠</h2>
          <p>
            Aurelia の王旗は深いロイヤルブルーを地色とし、金の装飾をまといます。
            中央には王冠と、宮殿の意匠にも繰り返し現れるフルール・ド・リスを組み合わせた紋章が置かれ、
            Brenalia の森の緑、Cazenia のバーガンディレッドとは明確に異なる、端正で気品ある王国の姿を表しています。
          </p>
        </article>
        <article>
          <span className="sectionKicker">物語はここから始まる</span>
          <h2>戦争の前、静かな朝。</h2>
          <p>
            物語が始まるとき、Jessara はまだ幼い少女です。
            王宮の庭園、父王、静かな谷——それらは彼女にとって、ずっと変わらないはずの世界でした。
            しかし十二の楽曲を通して、戦争、喪失、王冠、そして故郷を守る責任が、その確信を少しずつ変えていきます。
          </p>
        </article>
      </section>

      <div className="aureliaNext">
        <Link href="/ja/aurelia/jessara/">Princess Jessara へ →</Link>
      </div>
    </main>
  );
}
