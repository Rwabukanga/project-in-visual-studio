<template>
 <div class="container">
<form v-on:submit="updatebranchuser">
  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      <label>Firstname</label>
      <input type="text" class="form-control" id="firstname" v-model="branchuser.firstname">
  </div>
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Lastname</label>
        <input type="text" class="form-control" id="lastname" v-model="branchuser.lastname">
    </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
          <label>Dob</label>
          <input type="date" class="form-control" id="dob" v-model="branchuser.dob">
      </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      <label>Email</label>
      <input type="email" class="form-control" id="email" v-model="branchuser.email">
        </div>
          <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
            <label>Gender</label>
              <select id="gender" class="form-control" v-model="branchuser.gender">
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
                <input type="text" class="form-control" id="phonenumber" v-model="branchuser.phonenumber">
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
  <button type="submit" class="btn btn-primary">Submit</button> 
  </div>             
</form>    
</div>          
</template>
<script>
import axios from 'axios'
export default {
  name:'add',
    data(){
        return{
            branchuser:{firstname: '', lastname: '', dob: '', gender: '', phonenumber: '',email: ''},
       
       /* branches:[],
       branchuuid:'', */ 
       alert: ''
        }
    },
    methods:{
        fetchbranchuser(uuid){
            axios.get('http://localhost:2002/branchuser/find/'+uuid)
            .then(response =>{
                this.branchuser = response.data.OBJECT;
                console.log(this.branchuser);
            });
        },
        updatebranchuser(e){
             if( !this.branchuser.firstname|| !this.branchuser.lastname|| !this.branchuser.dob|| !this.branchuser.gender|| !this.branchuser.phonenumber|| !this.branchuser.email){
          this.alert = "fill all places";
        }else{
          let nseller = {
            firstname : this.branchuser.firstname,
            lastname: this.branchuser.lastname,
            dob: this.branchuser.dob,
            gender: this.branchuser.gender,
            phonenumber: this.branchuser.phonenumber,
            email: this.branchuser.email,
            // branchuuid: this.branchuuid
          }
          axios.put('http://localhost:2002/branchuser/update/'+this.$route.params.uuid, nseller)
          .then(response =>{
               this.$router.push({path:"/allseller", query:{alert: response.data.description}});
          });
          e.preventDefault();
        }
        e.preventDefault();
        }
    },
      created: function(){
       this.fetchbranchuser(this.$route.params.uuid);
    },   
}
</script>
<style scoped>

</style>