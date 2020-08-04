<template>
<div class="container">
    <input type="text" class="form-control" v-model="filterInput">
<table class="table table-stripped">
    <thead>
        <tr>
<th>Quantity</th>
<th>OrderDate</th>
<th>OrderStatus</th>
<th>Quality</th>
<th>Name of the User</th>
<th>Branchname</th>
        </tr>
    </thead>
    <tbody>
<tr v-bind:key="order.uuid" v-for="order in filterBy(orders, filterInput)">
<td>{{order.quantity}}</td>
<td>{{order.orderdate}}</td>
<td>{{order.orderstatus}}</td>
<td>{{order.gaz.quality}}</td>
<td>{{order.gaz.branchuser.firstname}}</td>
<td>{{order.gaz.branchuser.branch.branchname}}</td>
<td><button type="submit" class="btn btn-primary" @click="apprvorder(order.uuid)">UpdateStatus</button></td>
<td><button type="submit" class="btn btn-danger" @click="deleteorder(order.id)">Delete</button></td>
<!-- <td><button type="submit" class="btn btn-primary" @click="printreport(order.uuid)">Print Report</button></td> -->
 <!-- //<td><md-tab @click.native="$router.push(printreport(order.uuid))">PrintReport</md-tab></td> -->
 <!-- "<li><a href='/gazorder/" +order.uuid+"/report' target='blank'   class='label label-primary' data-toggle='tooltip'  title='Print Report'><i class='zmdi zmdi-print'></i> Print</a></li>"; -->
 <!-- <a v-bind:href="'/gazorder/'+order.uuid+'/report'" onClick="printreport(order.uuid).print(); return false">Print Report</a> -->
 <a v-bind:href="'http://localhost:2002/gazorder/'+order.uuid+'/report'">PrintReport</a>
 <!-- <a href="'/gazorder/'+order.uuid+'/report'" v-bind:class="printreport(order.uuid)" @click="printreport(order.uuid)"> Click Me </a> -->
<td><router-link class="btn btn-default" v-bind:to="'/ediorder/'+order.uuid">Updateorder</router-link></td>

        </tr>
    </tbody>
</table>
</div>  
</template>
<script>
import axios from 'axios'
import pdf from 'vue-pdf'

export default {
    name:'add',
    data(){
        return{
            orders:[],
            alert:'',
            filterInput:''
        }
    },
    methods:{
        findall(){
            axios.get('http://localhost:2002/gazorder/all')
            .then(response =>{
                this.orders = response.data.OBJECT;
                console.log(this.orders);
            }).catch(response =>{
                console.error(error);
            })
        },
         apprvorder(uuid){
           axios.put('http://localhost:2002/gazorder/approve/'+uuid)
           .then(response  =>{
              this.$router.push({path:'/orr',query:{alert:response.data.description}})
            }); 
        }, 
        deleteorder(id){
            axios.delete('http://localhost:2002/gazorder/delete/'+id)
            .then(response =>{
                this.$router.push({path:'/orr',query:{alert:response.data.description}})
            });
        },

  /*  printreport(uuid){
   axios.get('http://localhost:2002/gazorder/'+uuid +'/report')
   .then(response =>{

       this.orders= response.data.OBJECT;
       console.log(this.orders)
      
   })
   }, */

        filterBy(list, value){
          value = value.charAt(0).toUpperCase()+ value.slice(1);
          return list.filter(function(orders){
             return orders.gaz.branchuser.firstname.indexOf(value)> -1;
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