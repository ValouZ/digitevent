<template>
  <div class="event">
    <h1 class="event__date">{{ dates[index] }}</h1>
    <p class="event__info">{{ events[index] }}</p>
  </div>
</template>

<script>
export default {
  props: ["index"],
  computed: {
    dates() {
      return this.$store.getters.getDates;
    },
    events() {
      return this.$store.getters.getEvents;
    },
  },
  data() {
    return {
      fetchedEvents: [],
    };
  },

  mounted() {
    for (let i = 0; i < this.dates.length; i++) {
      // appel à l'api renvoie une erreur de JSON
      // fetch("http://numbersapi.com/random/date")
      //   .then((response) => response.json())
      //   .then(function(data) {
      //     console.log(response);
      //   });

      // normalement j'aurais ajouté le résultat de l'appel à l'api
      this.fetchedEvents.push(
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
      );
    }
    this.$store.dispatch("setEvents", this.fetchedEvents);
  },
};
</script>

<style lang="scss" scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  border-radius: 5px;
  width: 300px;
  padding: 10px 25px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__date {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 5px;
  }

  &__info {
    text-align: left;
  }
}
</style>
