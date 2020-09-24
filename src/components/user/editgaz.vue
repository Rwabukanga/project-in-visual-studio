<template>
  <div class="container">
<form v-on:submit="updategaz">
 <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      <label>Quality</label>
      <input type="text" class="form-control" id="quality" v-model="gaz.quality" >
  </div>
    <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Description</label>
        <input type="text" class="form-control" id="description" v-model="gaz.description">
    </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
          <label>Quantity</label>
          <input type="number" class="form-control" id="quantity" v-model="gaz.quantity">
      </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
      <label>Cost</label>
      <input type="cost" class="form-control" id="cost" v-model="gaz.cost">
        </div>
            <!-- <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>Select Picture</label>
                <img src="previewImage" class="uploading-image">
                <input type="file" accept="image/*" @change="uploadImage($event)"  id="file-input">
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
     gaz:{quality:'',description:'',quantity:'',cost:''},
     alert:''
      }
    },
    methods:{
        fetchgaz(uuid){
            axios.get('http://localhost:2002/gaz/find/'+uuid)
            .then(response =>{
                this.gaz = response.data.OBJECT;
                console.log(this.gaz);
            });
        },
        updategaz(E){
        if(!this.gaz.quality|| !this.gaz.description|| !this.gaz.quantity|| !this.gaz.cost){
                this.alert = 'fill all places';
            }else{
                  let ngaze = {
                    quality : this.gaz.quality,
                    description : this.gaz.description,
                    quantity : this.gaz.quantity,
                    cost : this.gaz.cost,
                    
                }
                 axios.put('http://localhost:2002/gaz/update/'+this.$route.params.uuid, ngaze)
                 .then(response =>{
                     this.$router.push({path:"/", query:{alert: response.data.description}})
                 });
                 e.preventDefault();
            }
             e.preventDefault();
        }
    },
    
    created: function(){
       this.fetchgaz(this.$route.params.uuid);
    }
}
</script>
<style scoped>

</style>