import { createStore } from "vuex";

export default createStore({
  state: {
    dates: [],
    events: [],
  },
  mutations: {
    setDates(state, dates) {
      state.dates = dates;
    },
    setEvents(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    setDates({ commit, state }, dates) {
      if (dates == "") {
        commit("setDates", []);
        return;
      }
      // On sépare entre les virgules
      dates = dates.split(",");
      for (let i = 0; i < dates.length; i++) {
        //Suppression des espaces
        dates[i] = dates[i].replace(/\s+/g, "");
        // Vérification de la date
        // if (dates[i].match(/([1-9]|[0-2][0-9]|(3)[0-1])(\/)(([1-9]|(0)[1-9])|((1)[0-2]))/)){
        // }
      }
      commit("setDates", dates);
    },
    setEvents({ commit, state }, event) {
      commit("setEvents", event);
    },
  },
  modules: {},
  getters: {
    getDates(state) {
      return state.dates;
    },
    getEvents(state) {
      return state.events;
    },
  },
});
