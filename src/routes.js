import adduser from './components/user/adduser.vue';
import Home from './components/Home.vue';
import branchadd from './components/user/branchadd.vue';
import selleradd from './components/user/selleradd.vue';
import sellers from './components/user/sellers.vue';
import editseller from './components/user/editseller.vue';
import insertgaz from './components/user/insertgaz.vue';
import allgaz from './components/user/allgaz.vue';
import editgaz from './components/user/editgaz.vue';
import insertorder from  './components/user/insertorder.vue';
import allorder from './components/user/allorder.vue';
import editorder from './components/user/editorder.vue';
import Dashboard from './components/user/Dashboard.vue';
import Login     from './components/user/Login.vue';
import branchaddDasboard from './components/user/branchaddDasboard.vue';
import branchlistDashboard from './components/user/branchlistDashboard.vue';
import sellerDashboard from './components/user/sellerDashboard.vue';
import Gazdashboard from './components/user/Gazdashboard.vue';
import orderDashboard from './components/user/orderDashboard.vue';
import sellersDashboard from './components/user/sellersDashboard.vue';
import allgazDashboard  from  './components/user/allgazDashboard.vue';
import branchlDashboard  from './components/user/branchlDashboard.vue';
import sellerslistDashboard from './components/user/sellerslistDashboard.vue';
import gazlistDashboard     from './components/user/gazlistDashboard.vue';
import orderlistDashboard   from  './components/user/orderlistDashboard.vue';
import listtable            from   './components/user/listtable.vue';
import gazlisttable         from './components/user/gazlisttable';
import Registration         from './components/user/Registration';
import CustomerDashboard    from './components/user/CustomerDashboard';
import SelersDashboard      from  './components/user/SelersDashboard';
import saveadminn          from './components/user/saveadminn';
import allusers            from './components/user/allusers';
import dddashboard         from './components/user/dddashboard';
import Catalo              from './components/user/Catalo';
import Dash             from './components/user/Dash';
import OgDashboard      from './components/user/OgDashboard';
import { guards } from './router-guards';
import Router from 'vue-router';
import NProgress from 'nprogress';
import Vue from 'vue';

Vue.use(Router)

export const router = new Router({ 

    linkExactActiveClass : 'active',
    mode: 'history',
    routes: [
      

     /*  {
     path:'/',
     redirect: 'dashboard',
     beforeEnter: guards.isAuthenticated,
     component: Dashboard
   
    
      }, */
    {
    path:'/all',
    beforeEnter: guards.isAdminOrSeller,
    component:adduser
    },

    {
        path:'/home',
        component:Home
    },
    {
        path:'/das',
        component:Dash
    },
    {
        path:'/cat',
        component:Catalo
    },

    {
    path:'/add',
    beforeEnter: guards.isAdmin,
    component:branchadd

     },

    {
    path:'/seller/:uuid',
    component:selleradd
     },

    {
    path:'/allseller',
    beforeEnter:guards.isAdminOrSeller,
    component:sellers 
   
   },

    {
        path:'/edit/:uuid',
        component:editseller
    },

    {
        path:'/addgaz/:uuid',
        component:insertgaz
    },

    {
    path:'/view',
    beforeEnter:guards.isCustomer,
    component:allgaz
    },

    {
        path:'/editgaz/:uuid',
        component:editgaz
    },

    {
    path:'/pluc/:uuid',
    component:insertorder
    },

    {
        path:'/dd',
        component:dddashboard
    },
   /*  {
        path:'/log',
        component:Loginnn
    }, */

    {
        path:'/orr',
        beforeEnter:guards.isSeller,
        component:allorder
    },

    {
        path:'/ediorder/:uuid',
        component: editorder
    },

    {
        path:'/dashboard',
        beforeEnter:guards.isAdminOrSeller,
        component: Dashboard
    },
    
    {
        path:'/addbranch',
        beforeEnter:guards.isAdmin,
        component: branchaddDasboard
    },

    {
        path:'/list',
        beforeEnter:guards.isAdminOrSeller,
        component: branchlistDashboard
    },

    {
        path:'/addseller/:uuid',
        beforeEnter:guards.isAdmin,
        component: sellerDashboard
    },

    {
        path:'/addgazes/:uuid',
        beforeEnter:guards.isSeller,
        component: Gazdashboard
    },

    {
        path:'/addorder',
        beforeEnter:guards.isCustomer,
        component: orderDashboard
    },

    {
        path:'/allsellers',
        beforeEnter:guards.isAdmin,
        component: sellersDashboard
    },

    {
        path:'/allgz',
        beforeEnter:guards.isSeller,
        component: allgazDashboard
    },

    {
        path:'/ell',
        beforeEnter:guards.isAdminOrSeller,
        component: branchlDashboard
    },

    {
        path:'/selist',
        beforeEnter:guards.isAdminOrSeller,
        component: sellerslistDashboard
    },

    {
        path:'/glist',
        beforeEnter:guards.isSeller,
        component: gazlistDashboard
    },

    {
        path:'/orlist',
        beforeEnter: guards.isCustomer,
        component: orderlistDashboard
    },
    
    {
        path:'/tt',
        component: listtable
    },

    {
        path:'/gazl',
        component: gazlisttable
    },
    
    {
        path:'/custd',
        beforeEnter:guards.isCustomer,
        component: CustomerDashboard
    },

    {
        path:'/sel',
        beforeEnter:guards.isSeller,
        component: SelersDashboard
    },


    //  ]
     

       

          {  
            path: '/',
            component : Login
            },

            {
            
                path:'/reg', 
                component: Registration
                
           },

           {
            
            path:'/adminn', 
            component: saveadminn
            
       },

       {
            
        path:'/allus', 
        component: allusers
        
       },

       {
           path:'/og',
           component:OgDashboard
       }

     /*  path:'/',
      redirect:'login',
      component:Login, */

    /*   children:[
       {
       path: '/login',
       component : Login
       },

        {
            
            path:'/reg', 
            component: Registration
            
       }

      ] */
   
    

    ]
    
})

router.beforeEach((to, from, next) =>{
 if(to.name){
     NProgress.start()
 }
 next()
})

router.afterEach( () =>{
NProgress.done()
})

