<template>          
<div class="container">

<div style="margin-bottom: 5px">
      <el-row>
      
          
        <el-col :span="6" style="margin:10px 10px 10px 10px  ">
          <el-input class="form-control" placeholder="search NO." v-model="filters[0].value"></el-input>
        </el-col>
        
      </el-row>
    
  </div>
   <data-tables  :data="data" :titles="titles" :action-col="actionCol" :filters="filters" :table-props="tableProps" layout="table">
      <el-table-column  v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label" sortable="custom">
      </el-table-column>
      
     
 <el-table-column label="Actions" v-if="actionCol"   min-width="100px" style="margin:100px 20px 20px 30px">
        <template  slot-scope="scope">
          <button
            type="button"
            :key="button.id"
            :class="button.renderFn?(button.renderFn(scope.row)?''+button.classes:'d-none '+button.classes):button.classes"
            @click="$emit(button.event,scope.row)"
            v-for="button in actionCol.buttons"
            data-toggle="tooltip"
            :data-placement="button.tooltip.placement || 'top'"
            :title="button.tooltip.title || ''"
          style="margin:5px 2px 2px 5px">
            <i :class="button.icon"></i>
            {{button.label}}
          </button>
        
          
        </template>
      </el-table-column>
    </data-tables>
</div>
</template>
<script>
export default {

props:['data','titles','actionCol','filters','tableProps'],

  data(){
    
  }
}
</script>
<style scoped>

</style>