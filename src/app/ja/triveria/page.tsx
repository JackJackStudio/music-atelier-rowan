import Link from "next/link";

const kingdoms=[
{name:"Aurelia",href:"/ja/aurelia/",image:"/images/Aurelia-kingdom.png",role:"河川と工芸の王国",motto:"責務 · 工芸 · 奉仕",description:"白い石造都市と谷を縫う河川、その岸辺に広がる橋と工房。Aurelia は Triveria 各地の素材を品物へと変え、騎士道、責務、そして人々への奉仕という伝統を受け継いでいます。"},
{name:"Brenalia",href:"/brenalia/",image:"/images/Brenalia-kingdom.png",role:"森と自然の王国",motto:"自然 · 自由 · 調和",description:"森、峡谷、山々に守られた Brenalia は、荒野と忘れられた過去に最も近い王国です。古代の遺跡はいまも深い森の下で眠っています。"},
{name:"Cazenia",href:"/cazenia/",image:"/images/Cazenia-kingdom.png",role:"大平原の王国",motto:"力 · 秩序 · 進歩",description:"広大で肥沃な平原には農地、穀倉、街道、灌漑水路が広がります。食料と繊維原料が繁栄を支え、計画性、規律、土地の管理が Cazenia の文化を形作っています。"},
];
const places=[
["Sorrow Peaks","Triveria 南西部","南の海を望む、険しく孤立した峰々。その厳しい地形と不吉な名は、古い伝承、失われた道、そして大陸が忘れきれない記憶と結びついています。"],
["Twin Lakes","Triveria 南部","森と山の間に横たわる二つの大きな内陸湖。南 Triveria を象徴する自然景観のひとつであり、内陸を横断する道が交わる重要な場所でもあります。"],
["Verdant Expanse","西部内陸","Aurelia の南に広がる緑の大荒野。三王国の中心地ほど開拓されておらず、街道や城壁、国境が生まれる以前の古い Triveria の面影を残しています。"],
["Whispering Forest","Brenalia 北部","Brenalia 最古の森のひとつ。深い木々、古道、忘れられた遺跡が歴史と伝説の境界を曖昧にします。旅人たちは、この森が完全に静まることはないと語ります。"],
["Eldenwood","Aurelia 西部","Aurelia 西方に広がる大森林。整備された河谷と大陸のより野生的な土地の間に位置し、王国の秩序ある中心部から古く統治の薄い地域への移り変わりを示しています。"],
["Drazuvia","忘れられた島","Aurelia 西岸の彼方、Triveria の古地図に描かれながら三王国の日常から遠く離れた島。山と遺跡がその景観を支配し、真の歴史はいまも謎に包まれています。"],
["Moonpet Lake","Brenalia 北部","深い森に囲まれた静かな湖。人里から遠く、月明かりの伝承と強く結びつき、Brenalia の静かで神秘的な一面を象徴しています。"],
["Redmarch","Cazenia 東部","Cazenia 東部平原に広がる、Triveria 有数の農業地帯。穀物、亜麻、綿などの畑が地平線まで続き、灌漑水路、農園、穀倉、収穫物を都市へ運ぶ街道がその間を走ります。"],
];
export default function TriveriaJaPage(){return <main className="triveriaPage">
<header className="triveriaTop"><Link className="back" href="/ja/">← Music Atelier Rowan に戻る</Link><span>M.A.R. の世界</span></header>
<section className="triveriaIntro"><span className="sectionKicker">大陸</span><h1>Triveria</h1><p className="triveriaTagline">三つの王国。異なる道。一つの運命。</p><p>Aurelia、Brenalia、Cazenia は同じ山々と空の下で、それぞれ異なる道を歩んできました。河川、森林、平原、交易、戦争、そして忘れられた伝説が三つの文明を形作りました。しかし国境よりも深いところで、大陸そのものが彼らの物語を結び続けています。</p></section>
<section className="triveriaMapSection"><div className="triveriaMapFrame"><img src="/images/Triveria Map.png" alt="Triveria 大陸地図"/></div><p className="mapCaption">知られている Triveria 大陸——地理によって分かれながら、道、交易、記憶、そしてより古い歴史によって結ばれた三王国。</p></section>
<section className="triveriaSection"><div className="triveriaSectionHeading"><span className="sectionKicker">三つの王国</span><h2>同じ世界に生きる、三つの方法。</h2><p>地理が生業をつくり、生業が文化をつくりました。世代を重ねるうち、三王国は異なる価値を育みながら、互いがもたらすものを必要とするようになりました。</p></div><div className="triveriaKingdomGrid">{kingdoms.map(k=><Link className="triveriaKingdomCard" href={k.href} key={k.name}><div className="triveriaKingdomImage"><img src={k.image} alt={k.name}/></div><div className="triveriaKingdomCopy"><span>{k.role}</span><h3>{k.name}</h3><strong>{k.motto}</strong><p>{k.description}</p><em>{k.name} を探索 →</em></div></Link>)}</div></section>
<section className="triveriaSection placesSection"><div className="triveriaSectionHeading"><span className="sectionKicker">Triveria の地</span><h2>王国の、その先へ。</h2><p>重要な場所のすべてが首都や王冠に属するわけではありません。山、森、湖、忘れられた島々は、より古い境界——そして時には、より古い物語を残しています。</p></div>
<article className="trivaraFeature"><span>大陸の心臓部</span><h3>The Trivara Mountains</h3><p>大陸中央を横断する巨大山脈は Triveria を地理的に分け、三王国すべての歴史を形作ってきました。高い峠や忘れられた谷には、Aurelia、Brenalia、Cazenia よりも古い世界の痕跡が残り、Temple of the Spirits や失われた TrivaCharm の伝説へとつながっています。</p><blockquote>「三つの王国が生まれる前から、Triveria はそこにあった。」</blockquote></article>
<div className="placeGrid">{places.map((p,i)=><article className="placeCard" key={p[0]}><span>{String(i+1).padStart(2,"0")} · {p[1]}</span><h3>{p[0]}</h3><p>{p[2]}</p></article>)}</div></section>
<section className="triveriaClosing"><span className="sectionKicker">より古い物語</span><h2>Triveria は、決して三つの別々の世界ではなかった。</h2><p>現在の王国が国境を引くはるか以前から、人々と精霊は山、森、谷を越えていました。その痕跡はいまも大陸各地に残っています。あるものは遺跡に、あるものは伝説に。そして、まだ発見されていないものもあります。</p><Link href="/ja/">Music Atelier Rowan に戻る →</Link></section>
</main>}