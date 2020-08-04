<template>
    <div class="sidebar">
        <body>
             <input type="checkbox" id="check">
             <label for="check">
                 <i class="fas fa-bars" id="btn"></i>
                  <i class="fas fa-times" id="cancel"></i>
             </label>
        <header>
        <h1>Projects</h1>
        </header>
        <ul>
            <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
            <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
            <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
            <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
            <li><a href="#"><i class="fas fa-question-circle"></i>About</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
        </ul>
     <section>

     </section>
         
    </body>
    </div>
   
</template>
<script>
export default {
    
}
</script>
<style scoped>
body{
    font-family: 'Robot', sans-serif;

}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
.sidebar{
    position: fixed;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #042331;
    transition: all .5s ease;
}
.sidebar header{
    font-size: 22px;
    color: white;
    text-align: center;
    line-height: 70px;
    background-color: #063146;
    user-select: none;
}
.sidebar ul a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 65px;
    font-size: 20px;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, 1);
    border-bottom: 1px solid black;
    transition: .4s;
}

ul li:hover a{
    padding-left: 50px;
}

.sidebar ul a i{
margin-right: 16px;
}

#check{
    display: none;
}

label #btn,label #cancel{
    position: absolute;
    cursor: pointer;
    background: #042331;
    border-radius: 3px;
}

label #btn{
    left: 100px;
    top: 25px;
    font-size: 35px;
    color:white;
    padding: 6px 12px;
    transition: all .5s; 
}

/* label #cancel{
    z-index: 1111;
    left: -195px;
    top: 17px;
    font-size: 30px;
    color: #0a5275;
    padding: 4px 9px;
    transition: all .5s ease;
} */

/* #check:checked ~ .sidebar{
left: 0;
} */

/* #check:checked ~  label #btn{
left: 250px;
opacity: 0;
pointer-events: none;
} */

/* #check:checked ~  label #cancel{
left: 195px;

} */
</style>