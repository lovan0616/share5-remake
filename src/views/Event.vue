<template>
  <div class="event">
    <v-container>
      <div id="tabs"></div>
      <div class="albums">
        <Album
          v-for="event in events"
          :key="event.name"
          :event="event"
         />
      </div>
      <div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Album from '../components/Album'
export default {
  name: 'Event',
  components: {
    Album
  },
  data() {
    return {
      events: [
        {
          name: 'speech',
          name_ch: '校園演講',
          date: '2015/4/8-10',
          album: ['/speech/pic1.png', '/speech/pic2.png', '/speech/pic3.png', '/speech/pic4.png', '/speech/pic5.png']
        },
        {
          name: 'sandwich',
          name_ch: '手作三明治',
          date: '2015/3/26',
          album: ['/sandwich/pic1.png', '/sandwich/pic2.png', '/sandwich/pic3.png', '/sandwich/pic4.png', '/sandwich/pic5.png', '/sandwich/pic6.png']
        },
        {
          name: 'dinner',
          name_ch: '100份便當',
          date: '2014/12/30',
          album: ['/dinner/pic1.png', '/dinner/pic2.png', '/dinner/pic3.png', '/dinner/pic4.png']
        },
      ]
    }
  }
}
</script>
