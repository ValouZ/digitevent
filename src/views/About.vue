<template>
  <div class="recap">
    <table cellspacing="15">
      <thead>
        <tr>
          <th colspan="2">Récap des évènements</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(date, i) in dates" :key="i">
          <td>{{ dates[i] }}</td>
          <td>{{ events[i] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.getters.getEvents;
    },
    dates() {
      return this.$store.getters.getDates;
    },
  },
};
</script>

<style lang="scss" scoped>
.recap {
  margin-top: 100px;
  color: white;
  text-align: left;

  th{
    text-align: center;
  }
}
</style>
