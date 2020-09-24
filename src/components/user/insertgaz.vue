<template>
<div class="container">
<form>
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
       <!--  <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
        <label>Select Picture</label>
    
       
        <input type="file" @change="onFileSelected" >
      
        
    </div> -->
   
              <br>
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
  <button type="submit" class="btn btn-primary" @click="addgaz()">Submit</button> 
  </div>             
</form>    
</div>   
</template>
<script>
import axios from 'axios'

export default {
   
    data(){
        name:'add';
        return{
            gaz:{quality:'',description:'',quantity:'',cost:''},
            alert:'',
           /*  selectedFile: null, */
      
        }
    },
methods:{
addgaz(e){
    if(!this.gaz.quality|| !this.gaz.description|| !this.gaz.quantity|| !this.gaz.cost){
    this.alert = 'fill all places';
            }else{
                let ngaz = {
                    quality : this.gaz.quality,
                    description : this.gaz.description,
                    quantity : this.gaz.quantity,
                    cost : this.gaz.cost,
                  /*   selectedFile: this.selectedFile */
                    
                }
                axios.post('http://localhost:2002/gaz/save/'+this.$route.params.uuid, ngaz)
                .then(response =>{
                   
               /*  this.$router.push({path:'/',query:{alert: response.data.description}});  */
                });
                e.preventDefault();
            }
            e.preventDefault();
        },
    /*    onFileSelected(event){
           this.selectedFile = event.target.files[0];
       }, */
      /*  onUpload(){
           const fd = new FormData();
           fd.append('image', this.selectedFile)
           axios.post('http://localhost:2002/gaz/savegaz', fd)
           .then(res =>{
               console.log(res)
           })
       } */
       
    }
}
</script>
<style scoped>

</style>