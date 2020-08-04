<template>
    <div class="container">
        <input  class="form-control" placeholder="enter" v-model="filterInput">
        <table class="table table-stripped">
            <thead>
                <tr>
             <th>ID</th>
             <th>Firstname</th>
             <th>Lastname</th>
             <th>dob</th>
             <th>Email</th>
             <th>Gender</th>
             <th>Phonenumber</th>
             <th>Branch</th>  
             <th>Actions</th>     
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="branchuser.uuid" v-for="branchuser in filterBy (branchusers,filterInput)">
                 <td>{{branchuser.id}}</td>
                 <td>{{branchuser.firstname}}</td>
                 <td>{{branchuser.lastname}}</td>   
                 <td>{{branchuser.dob}}</td>
                 <td>{{branchuser.email}}</td>
                 <td>{{branchuser.gender}}</td>
                <td>{{branchuser.phonenumber}}</td>
                <td>{{branchuser.branch.branchname}}</td>
                <td><button  class="btn btn-danger" type="submit" @click="deleteseller(branchuser.id)">Delete</button></td>
                <td><router-link class="btn btn-default" v-bind:to="'/edit/'+branchuser.uuid">Update</router-link></td>
                <td><router-link class="btn btn-default" v-bind:to="'/addgaz/'+branchuser.uuid">AddGazinBranch</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data (){
        return{
            branchusers:[],
            alert:'',
            filterInput:''
        }
    },
    methods:{
        findall(){
            axios.get('http://localhost:2002/branchuser/all')
            .then(response => {
              this.branchusers  = response.data.OBJECT;
              console.log(this.branchusers);
              
            }).catch(response  =>{
             console.error(err);
            });

        },
        deleteseller(id){
            axios.delete('http://localhost:2002/branchuser/delete/'+id)
            .then(response => {
                this.$router.push({path:'/allseller',query:{alert:response.data.description}})
            });
        },
        filterBy(list, value){
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function(branchusers){
                return branchusers.firstname.indexOf(value)> -1;
            });
        },

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