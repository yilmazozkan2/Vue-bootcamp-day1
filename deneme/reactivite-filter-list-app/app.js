const app = Vue.createApp({
       data(){
              return{
                     fruitList:[
                            "Elma","Ayva","Kiraz","Portakal","Mandalina"
                     ],
                     search: "",
                     // filteredList: []
              };
       },
       methods:{
              // searchList(){
              //        this.filteredList = this.fruitList.filter((i)=>i.includes(this.search));
              //        console.log(filteredList);
              // }
       },
       computed: {
              filteredList(){
                     //burada amaç data propertyleri ile doldurmamak computed ile işi çözmek
                     return this.fruitList.filter((i)=>i.includes(this.search));
              }
       }
}).mount("#app");