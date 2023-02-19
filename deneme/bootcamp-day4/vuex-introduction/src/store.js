import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      name: "Özkan",
      surname: "Yılmaz",
      pass: 12341,
      addres: {},
      kimlikNo: 121461,
    },
    fullName: "Bahar",
    theme: "dark",
    numbers: [1, 2, 3, 4, 5],
    items: [
      { id: 1, title: "Laptop", category: "Elektronik" },
      { id: 2, title: "Masa", category: "Mobilya" },
      { id: 3, title: "Sandalye", category: "Mobilya" },
      { id: 4, title: "Bardak", category: "Plastik" },
    ],
  },
  getters: {
    woodItems: (state) => state.items.filter((i) => i.category === "Mobilya"),
    activeUser(state){
       // this.$ gibi olan bağı koparmak için aşağıdaki gibi yazılır ...
       const person ={
              ...state.person
       };
       delete person.pass;
       return person;
    }
  },
  mutations : {
       newItem(state, item){
              state.items.push(item);
       }
  },
  actions:{
       logFunction(_, item){
              setTimeout(() => {
                     console.log('item :>> ', item);
              }, 2000);
       }
  }
});
export default store;
