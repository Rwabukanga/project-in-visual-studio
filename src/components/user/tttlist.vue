<template>
 <data-tables :data="data" layout="table">
   <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label" sortable="custom">
   </el-table-column>
   <p slot="append">table slot</p>
 </data-tables>
</template>

<script>
export default {
 data() {
   return {
     data,
     titles:[{
        label:"Firstname",
         prop:'firstname'
     },
     label="LastName",
     prop="lastname"
     ],
   }
 }
}
</script>