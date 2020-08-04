import { store } from './store';

export const guards = {

    isAuthenticated: (to, from, next) =>{
        if(store.state.auth !== null){
            next();
        } else{
            next('/login')
        }
    },

    isAdmin :(to, from, next) => {
     if(store.state.auth.user.role === "Admin"){
         next();
     }else{
         next("/login");
     }
    },

    isSeller :(to, from, next) => {
        if(store.state.auth.user.reg.category == "Seller"){
            next();
        }else{
            next("/login");
        }
    },
    isCustomer :(to, from, next) => {
        if(store.state.auth.user.reg.category == "Customer"){
            next();
        }else{
            next("/login");
        }
    },

    isAdminOrSeller :(to, from, next) =>{
      if(store.state.auth.user.role == "Admin" || store.state.auth.user.reg.category == "Seller"){
          next();
      }else{
          next("/login");
      }
    },
    isAdminOrCustomer :(to, from, next) =>{
     if(store.state.auth.user.role == "Admin" || store.state.auth.user.reg.category == "Customer"){
         next();
     }else{
         next("/login");
     }
    }
}
