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
    // appel à l'api renvoie une erreur de syntax JSON (et je n'ai pas su quoi faire)
    // fetch("http://numbersapi.com/random/date")
    //   .then((response) => response.json())
    //   .then(function(data) {
    //     console.log(data);

    // normalement j'aurais ajouté le résultat de l'appel à l'api (data)
    this.$store.dispatch("setEvents", "bonjour");
    //   });
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
