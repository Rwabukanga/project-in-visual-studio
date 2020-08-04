<template>
<div class="container">
  <datatable :data="data" :titles="titles" :action-col="actionCol" :filters="filters" :table-props="tableProps" layout="table">
 
  </datatable>
</div>
</template>

<script>
import axios from 'axios'
import Datatable from './Datatable.vue'
import Vue from 'vue'

export default {
    components:{
        datatable:Datatable
    },
  data() {
    return {
      data:[],
      gaz:[],
      titles:[
          {
              prop:'quantity',
              label:'Quantity'
          },
          {
              prop:'quality',
              label:'Quality'
          },
          {
              prop:'description',
              label:'Description'
          },
          {
              prop:'cost',
              label:'Cost'
          },
          {
              prop:'branchuser.lastname',
              label:'branchuser'
          }
      ],
      filters: [{
        prop: 'quality',
        value:''
        
      }],
      tableProps: {
        border: true,
        stripe: true,
        defaultSort: {
          prop: 'cost',
          order: 'descending'
        }
      },
      actionCol:{
          buttons:[
             {
                 id:1,
                 label:"Delete",
                 classes:"btn btn-sm btn-danger",
                 event: "delete",
                 icon:"fa fa-trash-o",
                 tooltip:{
                     placement:"top",
                     title:"Delete"
                 }
             },
/*              {
               id:2,
               label:"Edit",
               classes:"btn btn-sm btn-primary",
               event:"edit",
               tooltip:{
                 placement:"top",
                 title:"Edit"
               }
             }
 */             
          ]
      }
    }
  },
  methods:{
      findall(){
          axios.get('http://localhost:2002/gaz/all')
          .then(response =>{
            this.gaz = response.data.OBJECT;
            this.data = response.data.OBJECT;
            console.log(this.gaz);
          }).catch(response =>{
              console.error(err);
          });
      }
  },
  created(){
  this.findall();
  }
}
</script>