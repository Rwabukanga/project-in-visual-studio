<template>
<div class="container">
   <div class="card">
       <div class="card-header">
           <h1>REGISTRATION</h1>
       </div>
       <div class="card-body">
    <form>
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">    
    <label>Firstname</label>
    <input type="text" class="form-control" placeholder="First name" id="firstname" v-model="user.firstname">
    </div>
   
   
   <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      
       <label>LastName</label>
      <input type="text" class="form-control" placeholder="Last name" id="lastname" v-model="user.lastname">
  </div>
   
    
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
       <label>E-mail</label>
      <input type="email" class="form-control" placeholder="email" id="email" v-model="user.email">
  </div>
    
    
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
    <label>Category</label>
    <select id="category" class="form-control" v-model="user.category">
    <option value="Admin">Admin</option>
    <option value="Customer">Customer</option>
    <option value="Seller">Seller</option>
    </select>
    </div>
    

 <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
    <label>Gender</label>
    <select id="gender" class="form-control" v-model="user.gender">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    </select>
    </div>
   
 
  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
       <label>PhoneNumber</label>
      <input type="text" class="form-control" placeholder="Phone" id="phone" v-model="user.phone">
  </div>
    

     
  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
       <label>NationalId</label>
      <input type="text" class="form-control" placeholder="Idnumber" id="idnumber" v-model="user.idnumber">
  </div>
    
  
  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
       <label>DateofBirth</label>
      <input type="date" class="form-control" placeholder="dateofbirth" id="dob" v-model="user.dob">
  </div>
    
  
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
    <label>Username</label>
    <input type="text" class="form-control" placeholder="username" id="username" v-model="user.username">
  </div>
  <br>
   
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
       <label>Password</label>
      <input type="password" class="form-control" placeholder="password" id="password" v-model="user.password"> 
  </div>

 
<div class="form-group row">
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
<button type="submit" class="btn-lg  btn-primary " @click="addinguser()">Save</button>
</div>
</div>
</form>
       </div>
   </div>
</div>
</template>
<script>

import axios from 'axios'
 
export default {
    data(){
        name:"add";
        return{
            user:{firstname:'',lastname:'',email:'',category:'',gender:'',phone:'',idnumber:'',username:'',password:'',dob:''},
            alert:'',
            
        };

        },
        methods:{
            addinguser(e){
                if(!this.user.firstname || !this.user.lastname || !this.user.email || !this.user.category || !this.user.gender || !this.user.phone ||!this.user.idnumber || !this.user.username || !this.user.password ||!this.user.dob){
                    this.alert = "fill all places";
                }else{
                  
                  let userd = {
                   firstname: this.user.firstname,
                   lastname: this.user.lastname,
                   email: this.user.email,
                   category: this.user.category,
                   gender: this.user.gender,
                   phone: this.user.phone,
                   idnumber: this.user.idnumber,
                   dob: this.user.dob,
                   username:this.user.username,
                   password: this.user.password,
                   role: "user"
                  }
                  axios.post('http://localhost:2002/registrar/save',userd)
                  .then(response =>{
                      this.$swal({
                          type:"success",
                          position:"top-end",
                          showConfirmButton:false,
                          toast: "true",
                          timer:5000,
                          text: response.data.description
                      });
                      this.$router.push({path:'/', query:{alert:response.data.description}})
                  })
                  e.preventDefault();

                }
                e.preventDefault();
            }
        }
    }
   

</script>
<style scoped>
form{
   /*  margin: 20px 20px 30px 30px; */
    background-color: white;
}

.card{
 margin-top: 20px;
}
.card-header{
    background-color: chocolate;
    color: white;
}
h1{
    text-align: center;
    font-display: initial;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    font-weight: bolder;
}

.card-body{
    
    background-color: lightpink;
}
label{
    text-align: center;
    font-weight: lighter;
    font-size: larger;
    font-style: normal;
    font-variant: normal;
    font-family: 'Times New Roman', Times, serif;
}

button{
    margin-top: 20px;
    margin-left: 24em;
    width: 8em;
    margin-bottom: 20px;
}

</style>