<template>
  <v-app>
    <v-app-bar
      app
      class="red darken-2"
    >
      <router-link to="/">
      <v-img
        alt="Share5"
        max-width="120px"
        max-height="64px"
        src="../public/logo.png"
        transition="scale-transition"
      />
      </router-link>

      <v-spacer></v-spacer>

      

      <v-btn
        v-for=" nav in navs"
        :key="nav.index"
        :to="nav.link"
        small
        plain
        class="px-2 hidden-xs-only white--text"
      >
        <span>{{ nav.name }}</span>
        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none"></v-app-bar-nav-icon>
    </v-app-bar>

      <v-navigation-drawer v-model="drawer" app disable-resize-watcher color="rgb(211, 47, 47, .9">
        <v-list>
          <v-list-item v-for="nav in navs" :key="nav.index" router :to="nav.link" class="white--text">
            <v-list-item-icon>
              <v-icon>{{ nav.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="nav.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <router-view class="routerView"></router-view>
    </v-main>

      <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return {
      navs: [
        { name: '首頁', link: '/', icon:'mdi-home'},
        { name: '關於我們', link: '/about', icon:'mdi-information-variant'},
        { name: '活動紀錄', link: '/event', icon:'mdi-image-multiple'},
        { name: '相關連結', link: '/org', icon:'mdi-charity'},
      ],
      drawer: false
    }
  }
};
</script>

<style>
.routerView {
  background-color: #FAFAFA;
}
</style>