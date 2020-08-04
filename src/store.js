import Vue from 'vue';
import Vuex from 'vuex';
import createdPersistatedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import axios from 'axios';
import { router }   from './routes';
var ls = new SecureLS({ isCompression: false});

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [

        createdPersistatedState({
            storage :{
                 getItem: key => ls.get(key),
                 setItem: (key, value) => ls.set(key, value),
                 removeItem: key => ls.remove(key)

            }
        }) 
    ],

    state: {
        backend_url: 'http://localhost:2002',
        auth:null,
    },

    getters: {
        getBackendUrl: state =>{
            return state.backend_url;
        },
        getUsername: state =>{

            let username = "Unknown";
            
            if(state.auth === null){
                username = "not logged in";
            }else if(state.auth.user.role === "Admin"){

                username = state.auth.user.username;

            }else{
                
                username = state.auth.registrant.firstname;
            }
            return username;
        }
    },
    mutations: {
        mutateAuth: (state,data) =>{

            state.auth = data
        },
        mutateCredentials: (state, data) =>{

            state.auth.credentials = data
        }
    },

    actions :{
        login: (context, creds) =>{
            //alert("hello")
            console.log(creds);
            axios({
               method: "POST",
               url: context.state.backend_url + "/users/login",
               data: creds,
               
              /*  headers :{
                   'authorization': 'Bearer' + creds.access_token
               } */
            })
            
            .then(response =>{
              
                if(response.data.code === 200){
                    response.data.OBJECT.credentials = creds;
                    context.commit('mutateAuth', response.data.OBJECT);
                       console.log(response.data.OBJECT);
                    if(response.data.OBJECT.user.reg.category == "Customer"){
                        router.push('/custd');
                    }else if(response.data.OBJECT.user.reg.category == "Seller"){
                        router.push('/sel');
                    }else if(response.data.OBJECT.user.role == "Admin"){
                        router.push('/dashboard');

                    }
                   

                }
            })

            .catch(err =>{
               console.error(err);
            })
        },
        logout: context=>{
            context.commit('mutateAuth', null);
            localStorage.clear();
            router.push("/login");
        },
        signUp: (context, credentials) => {
            axios.post(context.state.backend_url + "/registrar/save", credentials)
            .then(res =>{
                if(res.data.code === 200){
                 context.commit('mutateAuth', res.data.OBJECT);
                 router.push("/dashboard")
                } else{
                    alert.error(res.data.description);
                }
            })
            .catch(err =>{
                alert.error(err);
            })
        },
    }
})


  store.subscribe((mutation,state) => {
    if(mutation.type === "idleVue/IDLE-CHANGED" && mutation.payload === true){
        store.dispatch('logout')
    } else if(mutation.type === "mutateAuth" && mutation.payload !== null){

        var expiry = state.auth.credentials.expires_in*1000;

        console.log("expires in"+ expiry)
       /*  setInterval(() => {
            store.dispatch('login')
        }, (state.auth.credentials.expires_in*1000)); */
    }
  })