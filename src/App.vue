<template>
  <div>
  <div class="container" id="app">
    <header class="row">
      <div class="logo text-center py-3 col-md-12">
        <h1 class="text-dark font-weight-bold title">Meopham plant hire.co.uk</h1>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/mechines-for-rental">Mechines for rental</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rates-about">Rates-About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          
          </ul>
          
        </div>
        <nav class="navbar ">
        <a class="nav-link" href="https://www.facebook.com/meophamplanthire/" target="_blank" ><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" width="30"/></a>
        <router-link class="nav-link" to="#">07718915718 / 07718915718</router-link>
      </nav>
      </nav>
    </header>
  </div>
    <transition name="fade">
      <router-view/>
    </transition>
    <footer class="footer container mt-auto py-3 bg-dark">
  <div class="text-center">
    <span class="text-muted">&copy; {{ new Date().getFullYear() }} by meophamplanthire</span>
  </div>
</footer>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-family: Arial;
}
.logo{
  background-color: #F0D911;
  color: #000!important;
  
}
.logo > h1{
  font-size: 3vw!important;
}
.title{
  color: #000!important;
}
.bg-dark{
  background-color: #000!important;
  color: #fff!important;
}
</style>
