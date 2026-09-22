import Link from "next/link";
import ZhAureliaNav from "../ZhAureliaNav";
import AnalyticsLink from "../../../AnalyticsLink";

const tracks = [
  { number:"01", title:"Once Upon a Morning", zhTitle:"從前的一個早晨", summary:"王宮花園裡一個無憂無慮的清晨，成為 Jessara 一生都不會忘記的記憶。", story:[
    "故事從 Aurelia 一個再普通不過、也再幸福不過的早晨開始。晨霧從山谷散去，陽光照上白色尖塔，而王宮裡的侍女正在四處尋找又不見了的公主。",
    "Jessara 再次逃掉早晨的課程，和年幼的 Cedric 躲在花園裡，兩人正準備偷偷翻過外牆。遠處傳來侍女的呼喊。Cedric 壓低聲音說：「No, they can’t see us.」下一秒又補了一句：「…Now they can.」",
    "兩個孩子拔腿就跑，最後在花園深處差點撞上父王。國王看看 Jessara 沾滿泥土的裙子，又看看 Cedric 心虛的表情，只問他們到底想去哪裡。Jessara 指向山谷，很認真地回答：「Outside.」",
    "稍後，父王帶她走上能俯瞰整個王國的高台，告訴她：「One day, all of this will be yours.」年幼的 Jessara 指著遠方高山問：「Even those?」國王笑著說：「No. I don’t think even kings own mountains.」",
    "曲子最後，Jessara 又跑去找 Cedric。這是一幅幾乎完美的幸福畫面——也是她人生最後一段真正還不知道「失去」是什麼的時光。"
  ]},
  { number:"02", title:"The Girl by the Window", zhTitle:"窗邊的女孩", summary:"Jessara 第一次發現，王宮之外的世界比她被告知的更加遼闊，也更加危險。", story:[
    "幾年後，Jessara 已經十五、十六歲。她開始正式學習外交、歷史、禮儀與國政，並第一次被允許坐在議事廳後方旁聽。",
    "她原本幾乎無聊到睡著，直到一名軍官在桌上攤開邊境地圖。Jessara 注意到東側國境附近多了幾個陌生的紅色標記。",
    "父王只說那是「Border incidents」。當她追問是和誰發生衝突時，父王卻說這不是她需要擔心的事情。Jessara 立刻討厭上這個答案。",
    "下午，剛開始接受正式騎士訓練的 Cedric 穿著練習用輕甲來找她。Jessara 看了他一眼：「You look ridiculous.」Cedric 回答：「I was told I look very respectable.」她毫不客氣地說：「They lied.」",
    "兩人騎馬到王城外的高地。Jessara 看著東方，問山脈後面是什麼。Cedric 故意回答：「More mountains.」然後才告訴她，再往前就是國境。",
    "Jessara 問他會不會打仗。Cedric 說父親認為不會。Jessara 回答：「My father says I don’t need to worry.」兩人互看一眼。他們都開始懂了——大人往往是在真的有事情值得擔心時，才會說「不用擔心」。"
  ]},
  { number:"03", title:"Wings in the Garden", zhTitle:"花園裡的銀翼", summary:"一位神秘的小訪客，讓王宮花園成為 Jessara 青春裡最後真正具有魔法的地方。", story:[
    "王宮花園開始出現一些奇怪的小事。草莓總少了一小口，Jessara 的髮帶從房間消失，隔天卻掛在玫瑰枝上；花叢深處有時還會傳來細小的笑聲。",
    "Jessara 第一個懷疑 Cedric。Cedric 一臉莫名其妙：「Why would I steal half a strawberry?」Jessara：「Because you’re annoying.」Cedric：「That is not evidence.」",
    "Jessara 決定自己抓到這個惡作劇的傢伙。她把一小塊蜂蜜蛋糕放在石桌上，躲在附近等待。很久之後，一個有著銀色透明翅膀的小小身影從花叢中飛了出來。",
    "Jessara 不小心踩斷樹枝，把小精靈嚇跑了。她沒有追，而是隔天、後天繼續回到同一個地方，留下食物，自己坐遠一點看書。",
    "終於有一天，小精靈願意停在她的手指上。Jessara 小聲說：「Hello.」她問小精靈有沒有名字、會不會說話。對方只是眨眨眼。Jessara 笑了：「That’s fine. Cedric talks enough for everyone.」",
    "小精靈一開始不是武器，也不是某種力量來源。她只是 Jessara 的秘密朋友——在政治與戰爭逐漸逼近之前，屬於童話、好奇與純真的最後一小塊地方。"
  ]},
  { number:"04", title:"The King Rides to War", zhTitle:"國王出征", summary:"邊境衝突正式變成戰爭，Jessara 看著父王與 Cedric 從同一扇城門離去。", story:[
    "戰爭不是突然降臨。先是邊境村莊遭襲，再來是商路中斷，接著兩名使者在半夜抵達王宮，議事廳的燈一直亮到天明。",
    "第二天清晨，王城鐘聲響起。不是節慶，而是動員。Jessara 衝進議事廳，看見戰爭地圖已經插滿標記，而父王穿上了她從未真正看過的戰甲。",
    "她說：「You’re going.」父王回答：「I have to.」Jessara 第一次真正對父親發火：「No, you don’t. You’re the king. Send someone else.」",
    "國王看著她，回答：「A king cannot ask others to stand where he is unwilling to stand himself.」Jessara 討厭這句話，因為她明白父親是對的。",
    "城外，士兵在藍金旗幟下集結。Cedric 也在其中，準備參加人生第一場真正的戰役。Jessara 脫口而出：「You too?」Cedric 苦笑：「Apparently this is what knights do.」Jessara：「That is a stupid answer.」Cedric：「I know.」",
    "城門開啟。父王騎在軍隊最前方，最後一次回頭向女兒抬起手。Jessara 也舉起手，卻沒有揮動。她一直站在原地，直到父王和 Cedric 都消失在道路盡頭。"
  ]},
  { number:"05", title:"The Empty Throne", zhTitle:"空著的王座", summary:"Jessara 等著父王回家，卻第一次明白——回到王城，並不代表真正回來了。", story:[
    "戰爭比所有人預期得更久。Jessara 被要求參加越來越多議事，也開始真正理解傷亡、補給、難民與援軍代表什麼。",
    "Cedric 偶爾會從前線傳回短短的消息。每一次 Jessara 都先確認兩件事：父王還活著，Cedric 也還活著。",
    "某個清晨，消息傳來：國王回城了。Jessara 幾乎跑著穿過整座王宮，以為戰爭終於結束。",
    "但她踏進外庭後，看不到歡呼、音樂或勝利旗幟。所有返回的士兵都保持沉默，王室旗幟低垂。",
    "父王不是騎著馬回來的。他躺在擔架上。",
    "那一刻 Jessara 第一次看見的不是國王，而只是自己的父親——一個會流血、會受傷、也會死去的人。",
    "父王短暫醒來時，她堅持說：「You’re going to be fine.」父王知道她在說謊，只叫她：「Jessara… listen to me.」她立刻拒絕：「No. You can tell me later.」但他再也沒有機會把那句話說完。",
    "父王死後，Jessara 一個人走進王座廳。王座是空的。銀翼小精靈靜靜坐在扶手上。Jessara 站了很久，最後才終於允許自己哭出來。"
  ]},
  { number:"06", title:"The Crown Is Heavy", zhTitle:"王冠如此沉重", summary:"Aurelia 沒有時間等待 Jessara 悲傷結束。戰爭還在繼續，公主必須成為女王。", story:[
    "葬禮結束了，戰爭卻沒有。每天早晨等待 Jessara 的，是請願、傷亡名單、糧食短缺、軍方要求、流離失所的人民、稅務與各種沒有人願意替她回答的問題。",
    "Jessara 坐在父王的書桌前，低聲問：「How did he do this every day?」沒有人回答。",
    "小精靈努力想幫忙搬一張比自己還大的文件，結果整個人被紙壓住。Jessara 忍不住笑了一聲，下一秒卻又哭了。那是父王死後，她第一次笑。",
    "加冕當天，王冠安靜地放在桌上。它漂亮得近乎殘酷。Cedric 從前線短暫趕回王城參加儀式。",
    "Jessara 問：「Do I look terrified?」Cedric 很誠實：「Yes.」她瞪他。Cedric 又補一句：「But only to people who know you.」",
    "Jessara 希望他至少待到明天。Cedric 沒有回答，因為兩個人都知道，戰爭不會因為一場加冕而停一天。",
    "儀式沒有盛大的歡呼。Aurelia 仍在哀悼。王冠落到她頭上，Princess Jessara 正式成為 Queen Jessara of Aurelia。",
    "儀式之後，她沒有回寢宮，而是直接走進議事廳。所有大臣站起身，父王最後看過的戰爭地圖仍然攤在桌上。",
    "第一次，整個房間都安靜下來等待她的決定。Jessara 看向東部邊境，只說：「Show me the eastern front.」"
  ]}
];

export default function ZhEpisodeOnePage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/aurelia/episode-1/">English</Link>
            <Link className="languageLink" href="/ja/aurelia/episode-1/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>
      <ZhAureliaNav active="episode-1" />
      <AnalyticsLink className="episodeMusicBanner" href="https://youtu.be/aufR8Y0sHTs" target="_blank" rel="noopener noreferrer" eventName="listen_soundtrack" params={{ kingdom: "aurelia", episode: 1, tracks: "01-06", language: "zh", source: "episode_page", platform: "youtube" }}>
        <span className="episodeMusicIcon">▶</span>
        <span><strong>聆聽第一章配樂</strong><small>在 YouTube 開啟配樂，讓音樂陪你一起閱讀這段故事。</small></span>
        <em>YouTube ↗</em>
      </AnalyticsLink>

      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">第一章 · Tracks 01–06</span>
        <h1>公主成為女王</h1>
        <p className="aureliaLead">童年逐漸讓位給好奇、友情、戰爭、失去，以及一頂 Jessara 從未想過會這麼早戴上的王冠。</p>
      </section>
      <section className="aureliaStoryChapters">
        {tracks.map((track) => (
          <article className="aureliaStoryChapter" key={track.number}>
            <div className="aureliaStoryChapterHead">
              <div className="trackNumber">{track.number}</div>
              <div><h2>{track.title}</h2><h3 className="chapterZhTitle">{track.zhTitle}</h3><p className="chapterSummary">{track.summary}</p></div>
            </div>
            <div className="chapterStory">{track.story.map((p,i)=><p key={i}>{p}</p>)}</div>
          </article>
        ))}
      </section>
      <div className="aureliaNext"><Link href="/zh/aurelia/episode-2/">繼續第二章 →</Link></div>
    </main>
  );
}
