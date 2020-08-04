<template>
    <div class="container">
    <input class="form-control" placeholder="enter" v-model="filterInput">
    <table class="table table-stripped">
    <thead>
        <tr>
    <th>BranchName</th>
    <th>StartDate</th>
    <th>E-mail</th>
    <th>PhoneNumber</th>
    <!-- <th>District</th> -->
    <th>Update</th>
    <th>Delete</th>
    <th>AddBranchuser</th>
        </tr>
    </thead>
    <tbody>
    <tr v-bind:key="branch.uuid" v-for="branch in filterBy(branches, filterInput)">
    <td>{{branch.branchname}}</td>
    <td>{{branch.startdate}}</td>
    <td>{{branch.email}}</td>
    <td>{{branch.phonenumber}}</td>
    <!-- <td>{{branch.district.name}}</td> -->
    <td><router-link class="btn btn-default" v-bind:to="'/edit/'+branch.uuid">Update</router-link></td>
    <td><button class="btn btn-danger" type="submit" @click="deleteBranch(branch.id)">Delete</button></td>
    <td><router-link class="btn btn-default" v-bind:to="'/seller/'+branch.uuid">AddBranchUser</router-link></td>
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
        branches:[],
        alert:'',
        filterInput:''
        }
    },
    methods:{
        findBranches(){
               axios.get('http://localhost:2002/branch/all')
               .then(response =>{
                   this.branches = response.data.OBJECT
                   console.log(this.branches)
               }).catch(err =>{
                   console.error(err);
               });
        },
        deleteBranch(id){
            axios.delete('http://localhost:2002/branch/delete/'+id)
            .then(response =>{
                this.$router.push({path:'/all',query:{alert: response.data.description}});
            });
        },
      filterBy(list, value){
          value = value.charAt(0).toUpperCase() + value.slice(1);
          return list.filter(function(branches){
           return branches.branchname.indexOf(value)> -1;
          });         
      },
    },

    created: function(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
        }
        this.findBranches();
    },
}
</script>
<style scoped>

</style>