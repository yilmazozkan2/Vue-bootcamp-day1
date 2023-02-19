import {createStore} from "vuex";
import contact from "./modules/contact";
const store = createStore({
       state:{
              name:"Özkan"
       },
       modules:{
              contact
       }
});
export default store;