<template>
  <div class="blog">
    <div class="tab-mode d-md-none">
      <v-tabs v-model="tab" grow>
        <v-tab>All Posts</v-tab>
        <v-tab>Featured Post</v-tab>
        <v-tab>Recent Posts</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <div class="card-wrapper">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="card-wrapper">
            <PostCard v-for="post in featuredPosts" :key="post.id" :post="post" />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="card-wrapper">
            <PostCard v-for="post in recentPosts" :key="post.id" :post="post" />
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>

    <div class="wide-mode d-md-flex d-lg-flex d-xl-flex">
      <v-container>
        <v-row>
          <v-col md="8">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
          </v-col>
          <v-col md="4">
            <div class="side-section my-5 grey lighten-3">
              <v-card class="pa-2 transparent" outlined>
                <v-card-title class="red--text text--darken-2 headline">Featured Post</v-card-title>
                <v-divider></v-divider>
                <PostCardMini v-for="post in featuredPosts" :key="post.id" :post="post" />
              </v-card>
              <v-card class="pa-2 transparent" outlined>
                <v-card-title class="red--text text--darken-2 headline">Recent Post</v-card-title>
                <v-divider></v-divider>
                <PostCardMini v-for="post in recentPosts" :key="post.id" :post="post" />
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard";
import PostCardMini from '../components/PostCardMini'
export default {
  name: "Blog",
  components: {
    PostCard,
    PostCardMini
  },
  data() {
    return {
      tab: null,
      posts: [
        {
          id: 1,
          thumbnail: "/thumbnail/pic1.jpg",
          title: "【SHARE喃喃】這是最好的時代，也是最壞的時代",
          featured: false,
          date: new Date("3/08/2015"),
          content:
            "（文：柏毅） 陸先銘先生的個展：雙城記─「浮城過影」正在中山的台北當代藝術館展出中。 活在台北的你、你還有你，是否也認同狄更斯在《雙城記》開頭所寫的：「這是最好的時代，這是最壞的時代；這是智慧的年代，這是愚蠢的年代；這是信仰的時期，這是懷疑的時期；這是光明的季節，這是黑暗的季節；這是希望之春，這是絕望之冬......」。從大賣場提出一袋一袋，纖細雙手無力拉動堆積如山的紙板都是重量；平日急忙刷卡通過閘門、周末偷閒騎Ubike，起個大早就是一步一步都是通勤；紗織數300針以上、反發度高，再燈火通明的都市都能找到的一隅安靜的、比較不冷的都是床。"
        },
        {
          id: 2,
          thumbnail: "/thumbnail/pic2.jpg",
          title: "【SHARE筆記】拜訪：人生百味",
          featured: true,
          date: new Date("3/07/2015"),
          content:
            "（參訪：威融、柏毅／文：威融） 談及街友議題時，阿德強調街友只是群聚性問題的代名詞，背後擁有諸多因素。他們不能配合長期固定的工作的原因：家庭、健康、心裡障礙等。這些悖於社會主流價值判斷，代表我們可以忽視、接受現狀的想法，是值得商榷的。即使像台北市社會局政府擁有較多資源，但政府的社福制度是鑑於防備心態，依據個人的戶籍資料、審核申請者是否符合補助條件；但往往排斥到真正需要的朋友。社福另一個弊病是將資訊公布網路，但街友們並無法上網得到資訊，以及年長者使用網路慣性不同，需大量人力去溝通；另一方面，街友平日步行移動打零工，常耗時3~4小時，也降低了他們嘗試不同工作的企圖心，「試想，如果你一整天有超過八成的時間在通勤和打零工，要有翻身的想法並且去執行是很難的」阿德說。 "
        },
        {
          id: 3,
          thumbnail: "/thumbnail/pic3.jpg",
          title: "【SHARE筆記】拜訪：臺灣夢想城鄉營造協會",
          featured: false,
          date: new Date("3/02/2015"),
          content:
            "（參訪：威融、柏毅、泉潽／文：柏毅） 「來，你們幫忙我接著這個。」今天SHARE5前往剝皮寮，和夢想城鄉協會的執行長徐敏雄聊聊天，騎著機車抵達的徐敏雄老師將手上的長餘一公尺的木條交給我們。剝皮寮的「長壽茶桌仔」舊址現為夢想城鄉協會提供學員學作木工的場所，四處散落著各種木製品，有些被當作書架擺了些書、有些較小拿來收藏紙膠帶剛剛好、還有個是貓床的半成品靜靜躺在桌上，等待學員拿擱在一旁的鐵鎚和釘子敲敲打打完成它。"
        },
        {
          id: 4,
          thumbnail: "/thumbnail/pic4.jpg",
          title: "【SHARE筆記】拜訪：台北華陰街恩友中心",
          featured: false,
          date: new Date("2/26/2015"),
          content:
            "（參訪：柏毅、威融／文：威融）恩友中心提供午晚餐，庇護所，及合作診所義診活動(憑恩友卡，一個月換證一次)。用餐採取大鍋菜(2樓烹煮)，食物的來源是和傳統市場合作，半買半送的形式，隔幾天會送食物、不定期會有水果捐助。多數街友帶著家當(大包塑膠袋或背包)來，進來後可以拿到一本聖經和詩歌選集，牧師講道時，多數街友認真聆聽，少部分打盹，讀聖經時較多人齊念，唱歌時較少，但大家還是會緊盯著手上的書。近車站的恩友中心，來者多數是街友，但遠離車站或鄉鎮等，則多獨居老人或低收入戶家庭。多數參與的街友非基督徒，牧師期待透過講道的方式給予他們精神支柱，也希望能讓他們受洗，但用餐後即離去的街友仍是多數。"
        },
        {
          id: 5,
          thumbnail: "/thumbnail/pic5.jpg",
          title: "【SHARE喃喃】我想，不過是寢室的模樣不一樣吧",
          featured: false,
          date: new Date("2/10/2015"),
          content:
            "當你在車站、地下道、天橋上，或任何一個匆匆路過的地方瞥見這般景像時，想到了些什麼？也許你想到雜物堆疊不甚雅觀，也許你想到待回兒回來的人蓬頭垢面、衣衫襤褸，又或許你不特別想什麼，只是加緊腳步離去。每當夜幕漸漸垂下，這群你或許想到些什麼或不曾想到過的人，慢慢聚集在這兒，他們就和你我一樣，一天過了、累了，也準備好要歇息了。我們拉開房門、他們卸下家當；我們窩進棉被、他們窩進紙箱；我們好夢噩夢、他們好夢噩夢；我們醒來、他們醒來，然後一天又來了，都一樣。那麼究竟哪裡不一樣？我想，不過是寢室的模樣不一樣吧(笑。除此之外，你和我和他們，都有情緒、都有秘密、都有故事、都有24小時的一天，都要把一天過好，所以都要努力，而努力了一整天之後累了想睡了、也就都睡了。關於你和我和他們，其實，真的都一樣"
        }
      ]
    };
  },
  computed: {
    featuredPosts: function() {
      return this.posts.filter(post => post.featured === true);
    },
    recentPosts: function() {
      return this.posts.filter((post, index) => index < 3);
    }
    // archiveDate: function() {
    //   const totalDate = [];
    //   this.posts.forEach(post => totalDate.push(post.date));

    //   function archive(date) {
    //     const array = [];
    //     array.push(date.getMonth() + 1);
    //     array.push(date.getFullYear());
    //     return array.join(" ");
    //   }

    //   let mySet = new Set();
    //   let archiveDate = []
    //   totalDate.forEach(date => {
    //     mySet.add(archive(date));
    //     archiveDate = [...mySet];
    //   });

    //   return archiveDate
    // }
  }
};
</script>


<style scoped>
.card-wrapper {
  width: 500px;
  margin-right: auto;
  margin-left: auto;
}

.side-section {
  width: 400px;
}
</style>