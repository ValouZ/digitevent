<template>
  <div class="dates">
    <h3>Please enter dates separated by commas :</h3>

    <section class="form">
      <input
        v-model="dates"
        v-on:keyup.enter="pressEnter()"
        type="text"
        placeholder="10/02, 15/09, ../.."
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: "10/02, 15/02, 6/09",
    };
  },
  methods: {
    pressEnter() {
      this.$store.dispatch("setDates", this.dates);
      this.dates = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.dates {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
  padding: 50px 50px 0;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 29%, 0 56%);
    background: #3EBDFF;
    width: 100%;
    height: 400px;
  }
}

h3 {
  font-weight: 400;
  margin-bottom: 20px;
}

.form {
  width: 100%;
  input {
    width: 70%;
    padding-bottom: 5px;
    text-align: center;
    background: unset;
    border: none;
    border-bottom: solid 1px black;
  }
}
</style>
