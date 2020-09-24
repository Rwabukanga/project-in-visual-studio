<template>
<div class="container" >
	
	
	
	
	
		<div class="card">
			<div class="card-header">
             <h1>Login Form</h1>
            </div>
			<div class="card-body">
		<form v-on:submit.prevent="login">
			
		<div class="row">
			


         <label>Username</label>
         <div class="col-xs-20 col-sm-12 col-sm-offset col-md-8 col-md-offset-3">
        <div class="input-group mb-3 ">
        <div class="input-group-prepend">
            
    <span class="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input class="form-control" type="text" placeholder="username" name="username" id="username"  v-model="dd.username" required>
</div>
        </div>

			<!--  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-3 col-md-offset-3">
			<label>Username</label>
			<div class="formField">
			<input  name="username" type="text" class="form-control" id="username" v-model="dd.username" required>
			</div>
		</div> -->
		</div>
		<br>


<div class="row">
	<label>Password</label>
<div class="col-xs-20 col-sm-12 col-sm-offset col-md-8 col-md-offset-3">
<div class="input-group mb-3">
        <div class="input-group-prepend">
           
    <span class="input-group-text"><i class="fa fa-unlock"></i></span>
  </div>
  <input class="form-control" type="password" value="FakePSW" placeholder="password" name="password" id="password"  v-model="dd.password" required>
</div>
 </div>
</div>
		<!-- <div class="row">
			 <div class="col-xs-12 col-sm-8 col-sm-offset col-md-3 col-md-offset-3">
			<label>Password</label>
			<input name="password" type="password"  class="form-control" id="password" v-model="dd.password">
		
		</div>
		 </div> -->
<br>
		<div class="row">
			<button class="btn-sm btn-primary" type="submit">Log In</button>
			<button><a href="/reg">Sign Up</a></button>
		</div>
		</form>
			</div>
		</div>


</div>
</template>

<script>
export default {
	name: "login",

	data(){
		return{
			dd:{
				username:"",
				password:""
			}
		};
	},
	methods:{
      login: function(){
		  this.$store.dispatch('login', this.dd)
		 
	  }
	},



};
</script>
<style scoped>





/* .container{
   background-color: lightslategray;
} */

form{
	
	/* margin: 10px 30px 100px 100px; */
    color:white;
	margin-top: 20px;
	margin-left: 25em;
}


label{
	
	color: black;
	text-align: center;
	font-display: initial;
	font-family: 'Times New Roman', Times, serif;
	font-size: larger;
	font-weight: normal;
}

/* .oval {
      width: 500px;
      height: 600px;
      background-color:grey;
      border-radius: 100px / 50px;
	  margin-left: 300px;
	  background-position: center;
	 
    } */
  
button{
	margin-left: 30px;
	margin-right: 95px;
	height: 30px;
	width: 100px;
	margin-top: 60px;
	color: black;
}
button a{
	color: black;
	
	font-family: 'Times New Roman', Times, serif;
	

}


/* input{
  width: 210px;
  height: 30px;
  box-sizing: border-box;
  background-color: black;
} */

.formField{
    border-color: #28a745;
    padding-right: 30px;
    position: relative;
}

.card {
	margin-top: 80px;
	margin-bottom: 20px;
}

.card-header{
	text-align: center;
	font-display: initial;
	font-family: 'Times New Roman', Times, serif;
	font-size: larger;
	font-style: normal;
	font-weight: bold;
	background-color: blue;
	color: white;
}



</style>