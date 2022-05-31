<template>
  <div class="hello">
    <FwTurn class="magazine" :options="bookOptions">
      <div class="hard">First</div>
      <div v-for="(entry, index) in entries" :key="index">
        <h1> {{ entry.title }} </h1>
        <p> {{ entry.content }} </p>
        <small> {{ entry.author }}</small>
      </div>
      <div class="hard">Last</div>
    </FwTurn>
  </div>
</template>

<script>
import { FwTurn } from "vue-turnjs";

export default {
  name: "HelloWorld",
  components: {
    FwTurn,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      entries: [],
      bookOptions: {
        display: "double",
        acceleration: true,
        elevation: 50,
      },
    };
  },
  async mounted() {
    await this.getEntries();
  },
  methods: {
    async getEntries() {
      this.entries = [
        {
          title: "test",
          content: "some stuff here\nXOXO",
          author: "admin",
        },
        {
          title: "Page 2",
          content: "heyo",
          author: "aaso",
        },
      ];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.magazine {
  width: 500px;
  height: 300px;
}
.magazine .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}
</style>
