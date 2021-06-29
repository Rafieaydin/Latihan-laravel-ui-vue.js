<template>
<!-- <nav> -->
    <!-- router ;ink atribute nya to -->
    <!-- <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link> -->
    <!--  coba memakai id -->
    <!-- <router-link to="/user/nama">User</router-link> -->

    <!-- route name parameter -->
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
    <!-- alernatif
    <router-link v-bind:to="{ name: 'About'}">About</router-link> -->
    <!--  -->
    <!-- <router-link :to="{ name: 'user' }">User</router-link> -->


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <a class="navbar-brand ml-5" href="#">Latihan</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <!-- route name parameter -->
        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
      </li>
       <!-- alernatif -->
        <li class="nav-item ">
       <router-link class="nav-link" v-bind:to="{ name: 'About'}">About</router-link>
      </li>
        <li class="nav-item ">
         <router-link class="nav-link" :to="{ name: 'user' }">User</router-link>
      </li>
    </ul>
  </div>
</nav>
<!-- </nav> -->
</template>
