import Link from "next/link";
import ZhAureliaNav from "./ZhAureliaNav";

export default function ZhAureliaPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link>
          <div><Link className="languageLink" href="/aurelia/">English</Link></div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>

      <ZhAureliaNav active="kingdom" />

      <section className="aureliaKingdomHero">
        <div className="aureliaKingdomArt">
          <img src="/images/Aurelia-kingdom.png" alt="Aurelia 白石山岳王國" />
        </div>
        <div className="aureliaKingdomIntro">
          <span className="sectionKicker">Triveria 的第一個王國</span>
          <h1>Aurelia 王國</h1>
          <p className="aureliaLead">
            一個沐浴在晨光中的山岳王國：白色石城、藍金旗幟、高聳石橋、瀑布與深邃河谷。
            Aurelia 美麗、富饒而自豪——但這份和平不會永遠持續。
          </p>
          <p>
            王城坐落在 Triveria 中央山脈下方的高地，白色尖塔與層層露台迎著晨光，
            道路與石橋把王宮與散布在河谷中的城鎮、村落連接起來。
            Aurelia 的氣質不是冷峻的威嚴，而是一種明亮而優雅的王室美學：
            白石、皇家藍、溫暖金色、鮮花、開闊天空，以及一個仍然相信明天會更好的王國。
          </p>
        </div>
      </section>

      <section className="aureliaDetails">
        <article>
          <span className="sectionKicker">王室旗幟</span>
          <h2>藍、金與王冠</h2>
          <p>
            Aurelia 的王室旗幟以深皇家藍為底，搭配金色裝飾。
            中央圖騰結合王冠與宮殿中反覆出現的百合花飾，
            形成端正、華麗而優雅的識別，也與 Brenalia 的森林綠和 Cazenia 的勃艮第紅清楚區隔。
          </p>
        </article>
        <article>
          <span className="sectionKicker">故事從這裡開始</span>
          <h2>戰爭之前，一個和平的早晨。</h2>
          <p>
            故事開始時，Jessara 還只是個孩子。王宮花園、父王與寧靜的河谷，
            構成了她以為永遠不會改變的世界。接下來十二首樂曲裡，
            戰爭、失去、王冠與守護家園的責任，將一點一點改變她對這個王國的理解。
          </p>
        </article>
      </section>

      <div className="aureliaNext">
        <Link href="/zh/aurelia/jessara/">認識 Princess Jessara →</Link>
      </div>
    </main>
  );
}
