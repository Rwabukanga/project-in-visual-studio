<template>
  <div class="container">
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
</div>      
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
  background-color: black;
  shape-outside: circle();
}
label{
  color: white;
  font-family: 'Times New Roman', Times, serif;
}
input{
  background-color: dimgray;
}
</style>
