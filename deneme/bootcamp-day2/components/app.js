const app = Vue.createApp({
       data() {
         return {
         };
       },      
});
app.component("home-item",{
       data(){
              return{
                     title: "Anasayfa"
              };
       },
       template: `
       <div class="container-sm">
              {{title}}
       </div>
       
       `
});

app.mount("#app");
     