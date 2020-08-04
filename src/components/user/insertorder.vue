<template>
  <div class="container">
    <form>
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Quantity</label>
        <input type="number" class="form-control" id="quantity" v-model="quantity">
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Order Date</label>
        <input type="date" class="form-control" id="orderdate" v-model="orderdate">
      </div>
          <br>
        <button type="submit" class="btn btn-primary" @click="addorder()">Submit</button>
      
    </form>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  data(){
    name:'add';
    return{
    quantity:'',
    orderdate:'',
    alert:''
    }
  },
  methods:{
   addorder(e){
     if(!this.quantity||!this.orderdate){
       alert = "fill all places";
     }else{
       let tt = {
        quantity: this.quantity,
        orderdate: this.orderdate,
       }
       axios.post('http://localhost:2002/gazorder/order/'+this.$route.params.uuid, tt)
       .then(response =>{
           /* this.$router.push({path:'/',query:{alert: response.data.description}});  */
       });
       e.preventDefault();
     }
     e.preventDefault();
   }

  },

}
</script>
<style scoped>
form{
  margin-bottom: 100px;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 5px;
  background-color: black;
}
label{
  color: white;
}
input{
  color:dimgrey ;
  background-color: dimgrey;
}
</style>