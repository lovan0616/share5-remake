<template>
  <div class="about">
    <v-container>
      <div class="p-wrapper mt-5 pt-5 grey--text text--darken-3 font-weight-thin">
        <v-scroll-y-reverse-transition
          v-for="(paragrath,index) in paragraths"
          :key="paragrath.index"
        >
          <p v-if="pShowState[`${index}`]" class="text-center">{{ paragrath }}</p>
        </v-scroll-y-reverse-transition>
        <v-icon class="scrollDown" x-large>mdi-chevron-double-down</v-icon>
      </div>

      <v-row>
        <v-col cols="12" sm="4" v-for="member in members" :key="member.id">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2">
              <v-img :src="member.image" height="350">
                <v-expand-transition>
                  <div class="red darken-1 hoverBoard transition-fast-in-fast-out pa-2" v-if="hover">
                    <h3 class="display-2 font-weight-light grey--text text--lighten-4">{{ member.name }}</h3>
                    <p class="grey--text text--lighten-4 mt-3">{{ member.description }}</p>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>


    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      paragraths: [
        "啟發源自於參加一場城市浪人比賽",
        "從將熱食分享給五個街友的小小小夢想，進步到想為更多街友做點事情的小小夢想",
        "沒有雄厚財力、沒有完備器材、也沒有無限量的時間經歷",
        "我們是一群大學生，仍相信有限的資源、平凡的力量也能為街友的處境帶來一點點改變"
      ],
      pShowState: [false, false, false, false],
      members: [
        {
          id: 'member1',
          name: '朱威融',
          image: './members/member1.jpg',
          description: '會做Share 5的緣由，跟我的人生一樣充滿轉折。想明白「流浪」的真義，我在校園裡拿著自製的醜醜紙板，站了一整天希望可以為街友募得一些物資。當我第一次用雙手將物資分給每一雙手時，看著他們彼此扶持、分享手中有限的食物…，我隱隱約約明白，我不能離開他們。我期待透過Share 5，讓社會重視街友、以及貧窮的議題，並透過記錄，與大家分享每一個人背後的故事。'
        },
        {
          id: 'member2',
          name: '吳柏毅',
          image: './members/member2.jpg',
          description: '過去關注性別人權、現在關注街友處境，將來會投入一塊時間關注流浪動物。最愛的洋芋片是卡迪那牛排口味、最愛的甜點是黑巧克力、最愛的生物是我家人和男友。'
        },
        {
          id: 'member3',
          name: '王湘苓',
          image: './members/member3.jpg',
          description: '心有點太軟的人 總覺得雖然我們和他們一樣會懷疑、自卑和徬徨，但當我們有一點點能力，就應該彼此幫助。'
        },
      ]
    };
  },
  methods: {
    timeUp() {
      const self = this;
      for (let i = 0; i < this.pShowState.length; i++) {
        setTimeout(function() {
          self.pShowState[i] = true;
          self.pShowState = [...self.pShowState];
        }, 1300 * i);
      }
    }
  },
  created() {
    this.timeUp();
  }
};
</script>

<style scoped>
.p-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(0, -10%);
}

.scrollDown {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 0);
}

.hoverBoard {
  width: 100%;
  height: 100%;
  opacity: .8;
}
</style>