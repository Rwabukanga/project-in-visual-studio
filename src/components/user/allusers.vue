<template>
      <div class="container">
    <table class="table table-stripped">
    <thead>
        <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Dob</th>
    <th>Gender</th>
    <th>IdNumber</th>
    <th>phonenumber</th>
    <th>Email</th>
    <th>Category</th>
    </tr>
    </thead>
    <tbody>
    <tr v-bind:key="user.id" v-for="user in users" >
    <td>{{user.firstname}}</td>
    <td>{{user.lastname}}</td>
    <td>{{user.dob}}</td>
    <td>{{user.gender}}</td>
    <td>{{user.idnumber}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.email}}</td>
    <td>{{user.category}}</td>
    </tr>
    </tbody>
    </table>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'all',
    data(){
        return{
          users:[],
          alert:''

        }
    },
    methods:{
       findall(){
           axios.get('http://localhost:2002/registrar/all')
           .then(response =>{
               this.users = response.data.OBJECT;
               console.log(this.users); 
           }).catch(response =>{
               console.error(err);
           });
       }
    },

     created:function(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        this.findall();
    }
}
</script>
<style scoped>

</style>