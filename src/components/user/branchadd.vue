<template>
<div class="container">
   <form>
<div class="raw">
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
<label>BranchName</label>
<input type="text" id="branchname" class="form-control" v-model="branch.branchname">
</div>
</div>

<div class="raw">
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
<label>StartDate</label>
<input type="date" id="startdate" class="form-control" v-model="branch.startdate">
</div>
</div>

<div class="raw">
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
<label>E-mail</label>
<input type="email" id="email" class="form-control" v-model="branch.email">
</div>
</div>

<div class="raw">
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
<label>PhoneNumber</label>
<input type="text" id="phonenumber" class="form-control" v-model="branch.phonenumber">
</div>
</div>
<div class="raw">
 <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>PROVINCE</label>
                <select class="form-control" id="province" v-model="province" @change="fetchDistrict($event)">
            <option v-bind:key="province.id" v-for="province in provinces"   :value='province.id'>{{province.name}}</option>
                </select>
              </div> 
</div>

<div class="raw">
 <div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
                <label>District</label>
                <select class="form-control" id="district" v-model="branch.district"> 
            <option  v-bind:key="district.id" v-for="district in districts"  :value='district.id'>{{district.name}}</option>
                </select>
</div> 
</div>

<br>
<div class="raw">
<div class="col-xs-12 col-sm-8 col-sm-offset col-md-6 col-md-offset-3">
<button class="btn btn-primary" type="submit" @click="addBranch()">Submit</button>
</div>
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
    branch:{},
    alert:'',
    provinces:[],
    province:0,
    districts:[],
    district:0
    
}
},
methods: {
    fetchProvince(){
     axios.get("http://localhost:2002/location/province")
     .then(response =>{
         this.provinces = response.data.OBJECT;
         console.log(this.provinces);
     }).catch(response =>{
        //  console.error(err);
     });
    },
     fetchDistrict(event){
         //alert(event.target.value),
     axios.get('http://localhost:2002/location/district/'+event.target.value)
     .then(response =>{
         this.districts = response.data.OBJECT;
         console.log(response.data.OBJECT);
     }).catch(response =>{
         console.error(err);
     });
    },
    addBranch(b){
        if(!this.branch.branchname || !this.branch.startdate || !this.branch.email || !this.branch.phonenumber || !this.branch.district){
            alert="fill all places";
        }else{
            let newBranch= {
                branchname : this.branch.branchname,
                startdate : this.branch.startdate,
                email : this.branch.email,
                phonenumber : this.branch.phonenumber,
                district: this.branch.district
            }

            axios.post('http://localhost:2002/branch/save', newBranch)
            .then(response =>{
                this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
               this.$router.push({path:'/',query:{alert: response.data.description}});
            });
            b.preventDefault();
        }
        b.preventDefault();
    }
},
created:function(){
       
        this.fetchProvince();
    }

}
</script>
<style scoped>



</style>