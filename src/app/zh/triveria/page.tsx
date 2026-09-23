import Link from "next/link";

const kingdoms = [
  { name:"Aurelia", href:"/zh/aurelia/", image:"/images/Aurelia-kingdom.png", role:"河流與工藝之國", motto:"責任 · 工藝 · 服務", description:"河流穿越白石城市、橋樑與河谷，水力孕育了磨坊與各式工坊。Aurelia 將 Triveria 各地的原料轉化為精緻商品，也延續著騎士、責任與服務人民的傳統。" },
  { name:"Brenalia", href:"/zh/brenalia/", image:"/images/Brenalia-kingdom.png", role:"森林與自然之國", motto:"自然 · 自由 · 和諧", description:"森林、峽谷與山脈形成天然屏障，使 Brenalia 與荒野及古老世界保持著更緊密的聯繫。許多被遺忘的遺跡，至今仍沉睡在森林深處。" },
  { name:"Cazenia", href:"/zh/cazenia/", image:"/images/Cazenia-kingdom.png", role:"大平原之國", motto:"力量 · 秩序 · 進步", description:"Cazenia 擁有廣闊肥沃的平原，遍布農田、穀倉、道路與灌溉渠道。糧食與紡織原料支撐著王國的繁榮，而規劃、紀律與土地管理則塑造了它的文化。" },
];

const places=[
["Sorrow Peaks","Triveria 西南部","一片偏遠而險峻的山峰，俯瞰南方海岸。崎嶇地形與帶有悲劇色彩的名字，使這裡長久以來與古老傳說、失落道路以及大陸不願遺忘的記憶相連。"],
["Twin Lakes","Triveria 南部","兩座巨大的內陸湖泊，坐落於森林與山地之間，是南部最醒目的自然地標之一，也是穿越內陸路線的重要交會地帶。"],
["Verdant Expanse","西部內陸","Aurelia 南方廣大的綠色荒野。這裡比三國首都周邊更少受到開發，仍保留著道路、城牆與王國邊界出現以前的古老 Triveria 氣息。"],
["Whispering Forest","Brenalia 北部","Brenalia 最古老的森林之一。茂密樹林、古老小徑與被遺忘的遺跡，使歷史與傳說的界線在此變得模糊。旅人常說，這座森林似乎從未真正安靜。"],
["Eldenwood","Aurelia 西部","Aurelia 西側的大森林，介於已開發的河谷與更原始的西部地區之間。它象徵著 Aurelia 秩序井然的核心地帶逐漸過渡到更古老、更少受到治理的土地。"],
["Drazuvia","被遺忘的島嶼","在 Aurelia 西方海岸之外，有一座出現在 Triveria 古老地圖上的孤島。山脈與遺跡主宰著它的景觀，而它真正的歷史，至今仍籠罩在謎團之中。"],
["Moonpet Lake","Brenalia 北部","一座被深林環抱的幽靜湖泊。偏遠、平靜，又與月光下的古老傳說緊密相連，代表著 Brenalia 更寧靜也更神秘的一面。"],
["Redmarch","Cazenia 東部","橫跨 Cazenia 東部平原，是 Triveria 最重要的農業地區之一。大片穀物、亞麻、棉花與其他作物延伸至地平線，灌溉渠道、農莊、穀倉與運送收成的道路交織其中。"],
];

export default function TriveriaZhPage(){return <main className="triveriaPage">
<header className="triveriaTop"><Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link><span>M.A.R. 的世界</span></header>
<section className="triveriaIntro"><span className="sectionKicker">大陸</span><h1>Triveria</h1><p className="triveriaTagline">三個王國，不同道路，同一個命運。</p><p>Aurelia、Brenalia 與 Cazenia 在同一片山脈與天空下走向不同的道路。河流、森林、平原、貿易、戰爭與被遺忘的傳說塑造了三種不同文明——然而，大陸本身始終以比國境更深的方式連結著它們。</p></section>
<section className="triveriaMapSection"><div className="triveriaMapFrame"><img src="/images/Triveria Map.png" alt="Triveria 大陸地圖"/></div><p className="mapCaption">已知的 Triveria 大陸——三個被地理分隔，卻由道路、貿易、記憶與更古老歷史連結的王國。</p></section>
<section className="triveriaSection"><div className="triveriaSectionHeading"><span className="sectionKicker">三個王國</span><h2>同一個世界，三種生活方式。</h2><p>地理塑造產業，產業塑造文化。經過世代發展，三個王國各自珍視不同的價值，也逐漸依賴彼此能夠提供的事物。</p></div>
<div className="triveriaKingdomGrid">{kingdoms.map(k=><Link className="triveriaKingdomCard" href={k.href} key={k.name}><div className="triveriaKingdomImage"><img src={k.image} alt={k.name}/></div><div className="triveriaKingdomCopy"><span>{k.role}</span><h3>{k.name}</h3><strong>{k.motto}</strong><p>{k.description}</p><em>探索 {k.name} →</em></div></Link>)}</div></section>
<section className="triveriaSection placesSection"><div className="triveriaSectionHeading"><span className="sectionKicker">Triveria 的重要地點</span><h2>王國之外。</h2><p>重要的地方並不都屬於首都或王冠。山脈、森林、湖泊與被遺忘的島嶼保存著更古老的疆界——有時，也保存著更古老的故事。</p></div>
<article className="trivaraFeature"><span>大陸之心</span><h3>The Trivara Mountains</h3><p>橫亙大陸中央的巨大山脈，在地理上分隔 Triveria，也深刻塑造了三個王國的歷史。高山隘口與被遺忘的山谷之間，仍留有比 Aurelia、Brenalia、Cazenia 更古老的世界痕跡——包括 Temple of the Spirits 與失落 TrivaCharm 的傳說。</p><blockquote>「在三個王國出現以前，Triveria 就已經存在。」</blockquote></article>
<div className="placeGrid">{places.map((p,i)=><article className="placeCard" key={p[0]}><span>{String(i+1).padStart(2,"0")} · {p[1]}</span><h3>{p[0]}</h3><p>{p[2]}</p></article>)}</div></section>
<section className="triveriaClosing"><span className="sectionKicker">更古老的故事</span><h2>Triveria 從來不是三個彼此分離的世界。</h2><p>早在今日的王國劃定國境之前，人類與精靈便已穿越這些山脈、森林與河谷。他們留下的痕跡散布整片大陸。有些成為遺跡，有些成為傳說，而有些仍等待被發現。</p><Link href="/zh/">返回 Music Atelier Rowan →</Link></section>
</main>}