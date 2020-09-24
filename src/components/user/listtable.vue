<template>
<div class="panel panel-default">
   <div class="panel-body">
  <div class="row">
    <datatable   :data="data" :titles="titles" :action-col="actionCol" :filters="filters" :table-props="tableProps" 
       :selection="false"
       v-on:delete="deleteseller"
       v-on:edite="editsel"
       v-on:add="selladdgaz">
 
     
 
 
 
    </datatable> 
  </div>
   </div>
</div>
</template>

<script>
import axios from 'axios'
import Datatable from './Datatable.vue'
import Vue from 'vue'

export default {
components:{
  datatable: Datatable
},
  data() {
    return {
     
     edit:'',
     data:[],
     branchusers:[],
    titles :[{
       prop:'firstname',
       label:'FirstName'
       
      },

      {
        prop:'lastname',
        label:'LastName'
      },
      
      {
        prop:'dob',
        label:'DOB'
      },
    
      {
        prop:'gender',
        label:'Gender'
      },
      {
        prop:'branch.branchname',
        label:'Branch'
        
      },
      {
       
        prop:'phonenumber',
        label:'PhoneNumber'
      },
      {
        prop:'email',
        label:'Email'
      },
      ],
      filters: [{
        prop: 'firstname',
        
      }],
       tableProps: {
         border: true,
         stripe: true,
        defaultSort: {
          prop:'firstname',
          order:'descending'
        }
      },
      actionCol: {
       
        buttons: [
        

         /*  {
            id:2,
            label:"",
            classes:"btn btn-sm btn-default",
            event:"approve",
            icon:"fas fa-check-circle text-white",
            tooltip:{
              placement:"top",
              title: "Approve",
            },
            renderFn: card => !card.approve,
          }, */
          {
            id:1,
            label:"Delete",
            classes:" btn-sm btn-danger",
            event:"delete",
            icon:"fa fa-trash-o",
            tooltip:{
              placement:"top",
              title:"Delete"
            }
          },
           {
            id:2,
            label:"Edit",
            classes:"btn-sm btn-primary",
            event:"edite",
            //icon:"fas fa-edit",
            tooltip:{
              placement:"top",
              title:"Edit"
            }
          },
          {
            id:3,
            label:"Addgaz",
            classes:"btn-sm btn-primary",
            event:"add",
            tooltip:{
              placement:"top",
              title:"Addgaz"
            }
          },
       
          ]
      },
      //selectedRow: []
    }
   
  },
  methods: {
     findall(){
            axios.get('http://localhost:2002/branchuser/all')
            .then(response => {
            this.data = response.data.OBJECT;
             this.branchusers  = response.data.OBJECT; 
             console.log(this.branchusers);
             
                
            
            }).catch(response  =>{
             console.error(err);
            });
            
        },
       deleteseller: function(branchuser){
            axios.delete('http://localhost:2002/branchuser/delete/'+branchuser.id)
            .then(response => {
              this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
                this.$router.push({path:'/tt',query:{alert:response.data.description}})
            });
        },
       editsel: function(branchuser){

       this.$router.push({ path: '/edit/'+branchuser.uuid})
       },

       selladdgaz: function(branchuser){
         this.$router.push({path:'/addgazes/'+branchuser.uuid})
       },
    
    
  },
   created:function(){
    this.findall();
    }
   
}
</script>
<style scoped>
/* .defaultSort{
  background-color:"blue"
} */
</style>