<template>
 <div class="container">
     

    <!-- Left Panel -->

    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">

            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="./"><img src="src/assets/images/logo.png" alt="Logo"></a>
                <a class="navbar-brand hidden" href="./"><img src="src/assets/images/logo2.png" alt="Logo"></a>
            </div>

            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="index.html"> <i class="menu-icon fa fa-dashboard"></i>Dashboard </a>
                    </li>
                    <h3 class="menu-title">UI elements</h3><!-- /.menu-title -->
                   
                 
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-th"></i>Forms</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                            <li><i class="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                        </ul>
                    </li>

                    

                  
                   
                   

                    
                    
                   
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </aside><!-- /#left-panel -->

    <!-- Left Panel -->

    <!-- Right Panel -->

    <div id="right-panel" class="right-panel">

        <!-- Header-->
        <header id="header" class="header">

            <div class="header-menu">

                <div class="col-sm-7">
                    <a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
                    <div class="header-left">
                        <button class="search-trigger"><i class="fa fa-search"></i></button>
                        <div class="form-inline">
                            <form class="search-form">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search">
                                <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                            </form>
                        </div>

                        
                        <div class="dropdown for-message">
                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                id="message"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ti-email"></i>
                                <span class="count bg-primary">9</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="message">
                                <p class="red">You have 4 Mails</p>
                                <a class="dropdown-item media bg-flat-color-1" href="#">
                                <span class="photo media-left"><img alt="avatar" src="src/assets/images/avatar/1.jpg"></span>
                                <span class="message media-body">
                                    <span class="name float-left">Jonathan Smith</span>
                                    <span class="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                                <a class="dropdown-item media bg-flat-color-4" href="#">
                                <span class="photo media-left"><img alt="avatar" src="src/assets/images/avatar/2.jpg"></span>
                                <span class="message media-body">
                                    <span class="name float-left">Jack Sanders</span>
                                    <span class="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                                <a class="dropdown-item media bg-flat-color-5" href="#">
                                <span class="photo media-left"><img alt="avatar" src="src/assets/images/avatar/3.jpg"></span>
                                <span class="message media-body">
                                    <span class="name float-left">Cheryl Wheeler</span>
                                    <span class="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                                <a class="dropdown-item media bg-flat-color-3" href="#">
                                <span class="photo media-left"><img alt="avatar" src="src/assets/images/avatar/4.jpg"></span>
                                <span class="message media-body">
                                    <span class="name float-left">Rachel Santos</span>
                                    <span class="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class="user-area dropdown float-right">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img class="user-avatar rounded-circle" src="src/assets/images/admin.jpg" alt="User Avatar">
                        </a>

                        <div class="user-menu dropdown-menu">
                            <a class="nav-link" href="#"><i class="fa fa-user"></i> My Profile</a>

                            <a class="nav-link" href="#"><i class="fa fa-user"></i> Notifications <span class="count">13</span></a>

                            <a class="nav-link" href="#"><i class="fa fa-cog"></i> Settings</a>

                            <button class="btn btn-primary" type="submit" @click="logout">Logout</button>
                        </div>
                    </div>

                    <div class="language-select dropdown" id="language-select">
                        <a class="dropdown-toggle" href="#" data-toggle="dropdown"  id="language" aria-haspopup="true" aria-expanded="true">
                            <i class="flag-icon flag-icon-us"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="language">
                            <div class="dropdown-item">
                                <span class="flag-icon flag-icon-fr"></span>
                            </div>
                            <div class="dropdown-item">
                                <i class="flag-icon flag-icon-es"></i>
                            </div>
                            <div class="dropdown-item">
                                <i class="flag-icon flag-icon-us"></i>
                            </div>
                            <div class="dropdown-item">
                                <i class="flag-icon flag-icon-it"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </header><!-- /header -->
        <!-- Header-->

        <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active">Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    <form>
  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      <label>Firstname</label>
      <input type="text" class="form-control" id="firstname" v-model="firstname">
  </div>
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Lastname</label>
        <input type="text" class="form-control" id="lastname" v-model="lastname">
    </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
          <label>Dob</label>
          <input type="date" class="form-control" id="dob" v-model="dob">
      </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      <label>Email</label>
      <input type="email" class="form-control" id="email" v-model="email">
        </div>
          <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
            <label>Gender</label>
              <select id="gender" class="form-control" v-model="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
          </div>
             <!--  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>Gender</label>
                <input type="text" class="form-control" id="gender" v-model="gender">
            </div> -->

            <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>Phonenumber</label>
                <input type="text" class="form-control" id="phonenumber" v-model="phonenumber">
            </div>
            
              <!-- <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>Branch</label>
                <select  class="form-control" v-model="branchuuid">
            <option value="branch.branchname" v-bind:key="branch.uuid" v-for="branch in branches">{{branch.branchname}}</option>
                </select>
              </div> -->

        <!-- <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>Branch</label>
                <input type="text" class="form-control" id="branchuuid" v-model="branchuuid">
            </div> -->

              <br>
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
  <button type="submit" class="btn btn-primary" @click="addseller()">Submit</button> 
  </div>             
</form>       
            


           



            
            
           


           

            

           


        </div> <!-- .content -->
    </div><!-- /#right-panel -->

   
</template>
<script>
import axios from 'axios'
export default {
      data(){
      name:'add'
      return{
       firstname: '',
       lastname: '',
       dob: '',
       gender: '',
       phonenumber: '',
       email: '',
       /* branches:[],
       branchuuid:'', */ 
       alert: ''
      }
    },
    methods:{
      addseller(e){
        if( !this.firstname|| !this.lastname|| !this.dob|| !this.gender|| !this.phonenumber|| !this.email){
          alert = "fill all places";
        }else{
          let nseller = {
            firstname : this.firstname,
            lastname: this.lastname,
            dob: this.dob,
            gender: this.gender,
            phonenumber: this.phonenumber,
            email: this.email,
            // branchuuid: this.branchuuid
          }

          axios.post('http://localhost:2002/branchuser/saveuser/branch/'+this.$route.params.uuid, nseller)
         
        .then(response =>{
           
        //    this.$route.push({path: '/', query: {alert: response.data.OBJECT}}) 
        });
        e.preventDefault();
        }        
        e.preventDefault();
      },

      logout: function(){
          this.$store.dispacth('logout');
      },
     /*  findBranches(){
               axios.get('http://localhost:2002/branch/all')
               .then(response =>{
                   this.branches = response.data.OBJECT
                   console.log(this.branches)
               }).catch(err =>{
                   console.error(err);
               });
        } */
    },
    
         created: function(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
        }
        // this.findBranches();
         },
}
</script>
<style scoped>
form{
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  shape-outside: circle();
}
label{
  color:black;
  font-family: 'Times New Roman', Times, serif;
}
input{
  background-color: dimgray;
}
</style>