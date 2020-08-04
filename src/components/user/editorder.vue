<template>
<div class="container">
<form>
  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Quantity</label>
        <input type="number" class="form-control" id="quantity" v-model="order.quantity">
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Order Date</label>
        <input type="date" class="form-control" id="orderdate" v-model="order.orderdate">
      </div>
          <br>
        <button type="submit" class="btn btn-primary" @click="updateorder()">Submit</button>
          <br>
        <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <button type="submit" class="btn btn-primary" @click="apprvorder()">UpdateStatus</button>
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
        order:{quantity:'', order:''},
        alert:''
    }
    },
    methods:{
        fetchorder(uuid){
         axios.get('http://localhost:2002/gazorder/find/'+uuid)
         .then(response =>{
            this.order = response.data.OBJECT;
            console.log(this.order);
         });
        },
      /*   apprvorder(e){
        if(!this.quantity||!this.orderdate){
             alert = "fill all places";
         }else{
             let telordr = {
                 quantity: this.quantity,
                 orderdate: this.orderdate
             }
             axios.put('http://localhost:2002/gazorder/approve/'+this.$route.params.uuid, telordr)
             .then(response =>{
                //  this.$router.push({path:'/orr', query:{alert: response.data.description}})
             });
             e.preventDefault();
         }
         e.preventDefault();
        }, */
        updateorder(e){
         if(!this.quantity||!this.orderdate){
             alert = "fill all places";
         }else{
             let uporder = {
                 quantity: this.quantity,
                 orderdate: this.orderdate
             }
             axios.put('http://localhost:2002/gazorder/update/'+this.$route.params.uuid, uporder)
             .then(response =>{
                 this.$router.push({path:'/orr', query:{alert: response.data.description}})
             });
             e.preventDefault();
         }
         e.preventDefault();
        }
    },
    created: function(){
       this.fetchorder(this.$route.params.uuid);
    },
}
</script>
<style scoped>

</style>