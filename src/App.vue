<template>
  <div id="app">
      
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container">
            <!-- Brand -->
            <a class="navbar-brand" href="#">Customer Manager</a>

            <!-- Links -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#"> <router-link class="nav-link" to="/">Home</router-link> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link class="nav-link" to="/about">About</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link class="nav-link" to="/add">Add</router-link></a>
              </li>
              
            </ul>
          </div>  
        </nav>
      
    
        
     
    
     
    
          
     
    <router-view></router-view>
   
   
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
