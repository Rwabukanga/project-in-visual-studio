import { store } from './store';

export const guards = {

    isAuthenticated: (to, from, next) =>{
        if(store.state.auth !== null){
            next();
        } else{
            next('/')
        }
    },

    isAdmin :(to, from, next) => {
     if(store.state.auth != null && store.state.auth.user.role === "Admin"){
         next();
     }else{
         next("/");
     }
    },

    isSeller :(to, from, next) => {
        if(store.state.auth.user.reg.category == "Seller"){
            next();
        }else{
            next("/");
        }
    },
    isCustomer :(to, from, next) => {
        if(store.state.auth.user.reg.category == "Customer"){
            next();
        }else{
            next("/");
        }
    },

    isAdminOrSeller :(to, from, next) =>{
      if(store.state.auth != null  && store.state.auth.user.role == "Admin" || store.state.auth.user.reg.category == "Seller"){
          next();
      }else{
          next("/");
      }
    },
    isAdminOrCustomer :(to, from, next) =>{
     if(store.state.auth.user.role == "Admin" || store.state.auth.user.reg.category == "Customer"){
         next();
     }else{
         next("/");
     }
    }
}
