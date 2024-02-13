import { createStore } from "vuex";


export default createStore({
  state: {
    peoples: [],
    isLoading: false,
    people: {},
    idPeople : '',
    count : 0,
    next: '',
    previous : ''
  },
  getters: {},
  mutations: {
    setPeoples(state, payload) {
      state.peoples = payload;
      state.isLoading = false;
    },
    setPeople(state, payload) {
      state.people = payload;
      state.isLoading = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setIdPeople(state, payload) {
      state.idPeople = payload;
    },
    setCount(state, payload) {
      state.count = payload;
    },
    setNext(state, payload) {
      state.next = payload;
    },
    setPrevious(state, payload) {
      state.previous = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        commit("setIsLoading");
        const res = await fetch("https://swapi.dev/api/people/");
        const data = await res.json();
        commit("setPeoples", data.results);
        commit("setCount", data.count);
        commit("setNext", data.next);
        commit("setPrevious", data.previous);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDataParams({ commit }, id) {
      try {
        commit("setIsLoading");
        const res = await fetch("https://swapi.dev/api/people/?page=" + id);
        const data = await res.json();
        commit("setPeoples", data.results);
        commit("setCount", data.count);
        commit("setNext", data.next);
        commit("setPrevious", data.previous);
      } catch (error) {
        console.log(error);
      }
    },
    async getDataPeople({ commit }, url) {
      try {
        commit("setIsLoading");
        const res = await fetch(url);
        const data = await res.json();
        commit("setPeople", data);
      } catch (error) {
        console.log(error);
      }
    },
    goRoute({ commit }, url) {
      const arrayUrl = url.split("/");
      commit("setIdPeople", arrayUrl[5]);
    },
  },
  modules: {},
});
