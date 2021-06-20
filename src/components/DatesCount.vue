<template>
  <div class="dates-count">
    <h1>A MOMENT OF HISTORY</h1>
    <p>You entered {{ numberOfDates }} date(s)...</p>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfDates(){
      return this.$store.getters.getDates.length;
    }
  },
};
</script>

<style lang="scss" scoped>
.dates-count{
  background: black;
  color: white;
  width: fit-content;
  padding: 25px;
  margin-bottom: 25px;
  width: 300px;

  h1{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p{
    font-weight: 700;
  }
}
</style>
