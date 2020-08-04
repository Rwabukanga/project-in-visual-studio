<template>
<div class="container">
    <input type="text" class="form-control" placeholder="enter" v-model="filterInput">
 <table class="table table-stripped">
  <thead>
      <tr>
    <th>Quality</th>
    <th>Description</th>
    <th>Quantity</th>
    <th>Cost</th>
    <th>Branch</th>
    <th>Branchusers</th>
    <th>Delete Action</th>
    <th>Update Action</th>
    <th>Create Order</th>
      </tr>
  </thead>   
  <tbody>
  <tr v-bind:key="gaz.uuid" v-for ="gaz in filterBy (gazes, filterInput)">    
  <td>{{gaz.quality}}</td>
  <td>{{gaz.description}}</td>
  <td>{{gaz.quantity}}</td>
  <td>{{gaz.cost}}</td>
  <td>{{gaz.branchuser.branch.branchname}}</td>  
  <td>{{gaz.branchuser.firstname}}</td>
  <td><button class="btn btn-danger" type="submit" @click="deletegaz(gaz.id)">Delete</button></td>
  <td><router-link class="btn btn-default" v-bind:to="'/editgaz/'+gaz.uuid">UpdateGaz</router-link></td>
  <td><router-link class="btn btn-default" v-bind:to="'/pluc/'+gaz.uuid">AddOrder</router-link></td>
  </tr>  
  </tbody>
 </table>   
</div>    
</template>
<script>
import axios from 'axios'
export default {
    name:'add',
    data(){
        return{
            gazes:[],
            alert:'',
            filterInput:''
        }
    },
    methods:{
        findall(){
            axios.get('http://localhost:2002/gaz/all')
            .then(response =>{
                this.gazes = response.data.OBJECT;
                console.log(this.gazes);
            }).catch(response =>{
                console.error(err);
            });
        },
        deletegaz(id){
            axios.delete('http://localhost:2002/gaz/delete/'+id)
            .then(response =>{
                 this.$router.push({path:'/view',query:{alert:response.data.description}})
            });
        },

 

        filterBy(list, value){
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function(gazes){
                return gazes.branchuser.branch.branchname.indexOf(value)> -1;
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
table{
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: dodgerblue;
    color: white;
}
</style>
