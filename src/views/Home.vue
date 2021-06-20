<template>
  <div class="home">
    <Dates />
    <DatesCount />
    <DateCard v-for="(date, i) in numberOfDates" :key="i" :index="i" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dates from "@/components/Dates.vue";
import DatesCount from "@/components/DatesCount.vue";
import DateCard from "@/components/DateCard.vue";

export default {
  name: "Home",
  components: {
    Dates,
    DatesCount,
    DateCard,
  },

  computed: {
    numberOfDates() {
      return this.$store.getters.getDates.length;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, red, black);

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 15%, 0 2%);
    width: 100vw;
    height: 100vh;
    background: rgb(15, 15, 138);
    // display: inline-block;
    // height: 0;
    // width: 0;
    // border-top: 142px solid rgb(15, 15, 138);
    // border-left: 100vw solid transparent;
  }
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
</style>
