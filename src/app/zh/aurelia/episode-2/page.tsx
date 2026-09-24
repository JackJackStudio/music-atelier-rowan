import Link from "next/link";
import ZhAureliaNav from "../ZhAureliaNav";

const tracks = [
  { number:"07", title:"The Knight of Aurelia", zhTitle:"Aurelia 的騎士", summary:"Cedric 短暫回到王城，卻只停留到足以讓 Jessara 再次體會看著他離開有多麼可怕。", story:[
    "很多年前，Cedric 只是陪 Jessara 翻花園圍牆的男孩。如今，他已經成為 Aurelia 最重要的年輕騎士與戰場指揮官之一。",
    "第二章開始時，Cedric 短暫返回王城。Jessara 已經學會了女王應有的外表：在議事廳裡冷靜，在軍人面前果斷，在人民面前永遠顯得從容。",
    "但 Cedric 是少數偶爾仍然會叫她「Jess」，而不是「Your Majesty」的人。他記得她戴上王冠以前的樣子。",
    "兩人走過童年玩耍的花園。Jessara 看著四周說：「It looks smaller.」Cedric 回答：「We got taller.」",
    "短暫的平靜很快結束。新的軍令抵達，Cedric 必須再次回到前線。",
    "城門前，Jessara 問：「How long?」Cedric：「I don’t know.」她說：「That is a terrible answer.」他回答：「It is an honest one.」",
    "Jessara 原本有很多話想說，最後只剩一句：「Come back.」Cedric 回答：「I always do.」Jessara 看著他：「That’s not a promise.」Cedric 只說：「No.」",
    "軍隊出發後，Cedric 回頭望了一次。Jessara 還站在城門上。她已經看著一個她愛的人從這扇門離開，之後再也沒有回來；如今，她又看著另一個人走向同一場戰爭。"
  ]},
  { number:"08", title:"Her Wish Under the Moon", zhTitle:"月下的願望", summary:"白天，Jessara 必須替王國做出沒有正確答案的決定；到了夜裡，她才允許自己保留一個私人願望。", story:[
    "戰爭進入最漫長、最消耗人的階段。這一章沒有單一的大事件，而是女王日復一日的生活。",
    "清晨她檢查糧食，上午讀軍報，中午接見從邊境逃回的家庭，下午與大臣爭論是否增加徵兵，夜裡則閱讀傷兵與陣亡者名單。",
    "某天，一名顧問建議放棄一座邊境城鎮，因為繼續防守會削弱其他戰線。Jessara 問：「How many people are still there?」答案是大約四千人。",
    "Jessara 說：「Then it is not empty.」她拒絕放棄城鎮，即使她很清楚，這個決定會讓別的地方承受更大壓力。",
    "她逐漸明白，統治並不是簡單地選擇『正確』的事情，而是在每一個選項都會有人受傷時，決定自己願意承擔哪一種後果。",
    "深夜，她終於回到陽台。從王宮看不到戰場，只看得到掛在山脈上方的月亮。",
    "她不知道 Cedric 在哪裡，甚至不知道他是否還活著。",
    "Jessara 低聲說：「I don’t need victory tonight.」停了一會兒，又說：「Just… bring them home.」",
    "小精靈從窗台醒來，飛到她肩上。這裡是女王少數允許自己承認『我很害怕』的地方。"
  ]},
  { number:"09", title:"When the Knight Fell", zhTitle:"當騎士倒下", summary:"Cedric 重傷被送回王宮，迫使 Jessara 再次經歷父王失蹤那一天的恐懼。", story:[
    "Jessara 正在議事，一名軍官匆忙闖進來，甚至忘了行禮。他只說：「Your Majesty…」Jessara 從他的表情就知道出事了。",
    "Cedric 被抬進王宮。他的盔甲已經被割開，衣服上滿是血。",
    "有那麼可怕的一瞬間，Jessara 看見的不是 Cedric，而是父王失蹤那天留下的混亂記憶——帶血的盔甲、支離破碎的軍報、急促的腳步，以及沒有人知道國王究竟去了哪裡的恐懼。",
    "直到有人叫了一聲「Your Majesty?」，她才重新動起來。",
    "Cedric 昏迷了好幾個小時。Jessara 推掉數次議事要求，一直守在床邊。",
    "小精靈停在 Cedric 胸前，使用自己微弱而溫柔的魔法。那不是能讓死人復生的奇蹟，只足以讓他的呼吸慢慢穩定。",
    "Jessara 問：「Can you save him?」小精靈無法回答，只能繼續努力。",
    "Cedric 終於睜開眼睛。第一句話竟然是：「You look terrible.」Jessara 瞪著他：「You almost died.」Cedric 虛弱地回答：「Yes. That would explain it.」",
    "Jessara 一邊哭一邊笑。",
    "但她不能一直守在這裡。新的軍報抵達：Aurelia 的東線正在崩潰。她看向 Cedric，再看向戰情室的方向，明白自己不能再只是等待事情發生。"
  ]},
  { number:"10", title:"The Little Wing Beyond the Lines", zhTitle:"越過戰線的小小銀翼", summary:"銀翼小精靈第一次選擇屬於自己的冒險——獨自飛越戰線，潛入敵軍營地。", story:[
    "小精靈聽見 Jessara 和將領討論危機。Aurelia 兵力不足、情報不足，也無法確定敵軍下一步會攻向哪裡。",
    "當晚，她沒有告訴 Jessara，便獨自離開王宮，沿著軍隊通往前線的道路飛去。",
    "從她的尺度看，人類的世界突然變得巨大。營帳像建築，馬蹄像雷聲，巡邏兵的腳步逼得她不斷躲進草叢、車底與陰影。",
    "她穿過壕溝與火光照亮的營地，甚至一度差點被補給箱旁的一隻貓發現。",
    "最後，她成功溜進敵軍指揮帳篷，聽見將領們討論隔天的進攻。",
    "敵人準備把主力集中攻擊 Aurelia 的中央防線。這也意味著，其中一側會在短時間內出現空缺。",
    "小精靈立刻踏上危險的返程。桌上的地圖被碰動後，敵營一度響起警報，卻沒有人真正看清楚究竟是什麼東西闖了進來。",
    "她筋疲力盡地逃離營地，在天亮以前終於再次看見 Aurelia 的藍金旗幟。",
    "這一次，她不再只是 Jessara 身邊的秘密朋友。她做出了自己的選擇、承擔了自己的風險，也第一次成為自己故事裡的英雄。"
  ]},
  { number:"11", title:"The Last Battle of Aurelia", zhTitle:"Aurelia 的最後一戰", summary:"Aurelia 終於得到結束戰爭的機會，但 Jessara 必須同時拿王國與自己最想保護的人去冒險。", story:[
    "小精靈幾乎已經飛不動，最後直接落在 Jessara 的戰爭地圖上。Jessara 一開始甚至不知道她去了哪裡。",
    "小精靈用石子、紙片與急促的手勢，把自己看到的敵軍部署重新拼出來。Jessara 和將領終於看懂：敵軍會把大部分兵力集中在中央，因此另一側防線將短暫暴露。",
    "這可能是 Aurelia 結束戰爭唯一的機會，也可能是一個陷阱。",
    "所有人都等著 Jessara 決定。沉默很久後，她只說：「We attack.」",
    "仍在康復的 Cedric 穿著盔甲走進議事廳。Jessara 一看到他就說：「No.」Cedric：「I didn’t say anything.」Jessara：「You don’t need to.」",
    "Cedric 看著她：「Then order me to stay.」Jessara 一時間說不出話。如果她只是 Jessara，她會把他留下；但作為 Aurelia 的女王，她知道軍隊需要他。",
    "最後她仍然只說了那句熟悉的話：「…Come back.」Cedric 回答：「I’ll try.」",
    "最終戰並不是輕鬆的勝利。Aurelia 一開始取得進展，敵軍很快調整，戰況隨即陷入苦戰。士兵不斷倒下，Cedric 甚至差點再次負傷。",
    "直到小精靈帶回的情報被完全利用，Aurelia 騎兵才成功突破敵軍暴露的側翼。",
    "敵軍陣線終於崩潰並開始撤退。戰爭結束了。",
    "但戰場沒有立刻變成歡樂的地方。所謂勝利，仍然被那些永遠無法回家的人包圍著。"
  ]},
  { number:"12", title:"Peace Returns to the Valley", zhTitle:"和平重返山谷", summary:"和平回到 Aurelia，Jessara 也終於理解父王當年說『這一切有一天會屬於妳』真正代表什麼。", story:[
    "最後一章不是從慶典開始，而是從安靜開始。多年來第一次，沒有警鐘、沒有緊急使者，也沒有在城外集結的軍隊。",
    "王城大門打開，士兵陸續回家。街道擠滿人民，有人歡呼，有人因鬆了一口氣而哭，也有人一直等待，直到回城的隊伍逐漸走完，自己想見的人仍然沒有出現。",
    "Jessara 沒有站在高高的陽台上，而是站在人群之中。",
    "Cedric 活著回來了，身上仍留著戰爭的痕跡。他與 Jessara 隔著人群看見彼此。兩人沒有戲劇性地奔向對方，只是笑了。",
    "稍後，Jessara 一個人走回整個故事最初的王宮花園。同樣的晨光落在同一條小路與同一面舊牆上。戰爭結束了，但父王的下落仍然沒有答案；和平回來了，卻沒有解開所有謎團。",
    "她想起父王曾說：「One day, all of this will be yours.」小時候她以為那代表城堡、河谷、道路與土地。",
    "如今她終於懂了：王國不是財產。王國是人，是那些她必須負責守護的生命。",
    "Cedric 走過來，看著那面花園圍牆：「Do you remember trying to climb that?」Jessara：「I climbed it.」Cedric：「You fell.」Jessara：「You pushed me.」Cedric 笑了：「That is not how I remember it.」",
    "不遠處，幾個孩子正在花園裡奔跑，一名疲憊的侍女在後面追著。Jessara 看著他們，像看見很多年前的自己。",
    "銀翼小精靈落在她肩上。",
    "Aurelia 山谷再次被晨光照亮。故事開頭的旋律重新出現，但那已不再是被保護著長大的 Princess Theme，而是成熟之後的 Queen Theme。",
    "Jessara 終於明白王冠為什麼如此沉重，也終於明白自己為什麼願意繼續戴著它。"
  ]}
];

export default function ZhEpisodeTwoPage() {
  return (
    <main className="aureliaPage">
      <header className="aureliaTop">
        <div>
          <Link className="back" href="/zh/">← 返回 Music Atelier Rowan</Link>
          <div className="languageChoices">
            <Link className="languageLink" href="/aurelia/episode-2/">English</Link>
            <Link className="languageLink" href="/ja/aurelia/episode-2/">日本語</Link>
          </div>
        </div>
        <img className="aureliaWordmark" src="/logos/aurelia-logo.webp" alt="Aurelia — The Princess and the Silver Wings" />
      </header>
      <ZhAureliaNav active="episode-2" />
      <section className="aureliaEpisodeHeader">
        <span className="sectionKicker">第二章 · Tracks 07–12</span>
        <h1>女王與戰爭</h1>
        <p className="aureliaLead">Jessara 必須在父王生死未明的陰影下領導王國，也害怕 Cedric 會像父王一樣消失在同一場戰爭裡。銀翼小精靈與最後一次反攻，將故事帶向和平。</p>
        <a className="episodeMusicBanner" href="https://youtu.be/bf-5DsIqcGE" target="_blank" rel="noopener noreferrer">
          <span className="episodeMusicIcon">▶</span>
          <span><strong>故事配樂 — Episode II — Track 07–12</strong><small>YouTube</small></span>
          <em>立即聆聽 →</em>
        </a>
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
      <div className="aureliaNext"><Link href="/zh/aurelia/">返回 Aurelia 王國 →</Link></div>
    </main>
  );
}
