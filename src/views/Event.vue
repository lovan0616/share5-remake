<template>
  <div class="event">
    <v-container>
      <!-- Todo: 研究如何透過-tav實現錨點功能  -->
      <!-- <div id="tabs">
        <v-tabs centered>
          <v-tab
            v-for="event in events" 
            :key="event.name">
            {{ event.name_ch }}
          </v-tab>
        </v-tabs>
      </div> -->
 
      <div class="albums">
        <Album
          v-for="event in events"
          :key="event.name"
          :event="event"
         />
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
          date: new Date('04/08/2015'),
          album: ['./speech/pic1.png', './speech/pic2.png', './speech/pic3.png', './speech/pic4.png', './speech/pic5.png']
        },
        {
          name: 'sandwich',
          name_ch: '手作三明治',
          date: new Date('03/26/2015'),
          album: ['./sandwich/pic1.png', './sandwich/pic2.png', './sandwich/pic3.png', './sandwich/pic4.png', './sandwich/pic5.png', './sandwich/pic6.png']
        },
        {
          name: 'dinner',
          name_ch: '100份便當',
          date: new Date('12/30/2014'),
          album: ['./dinner/pic1.png', './dinner/pic2.png', './dinner/pic3.png', './dinner/pic4.png']
        },
      ]
    }
  }
}
</script>
