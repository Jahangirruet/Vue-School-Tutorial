<script>
// import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div>
    <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Vue School Tutorial</RouterLink></li>
          <li>
            pinia
            <ul>
              <li><RouterLink to="/pinia/lession1">   One</RouterLink></li>
              <li><RouterLink to="/pinia/lession2">   Two </RouterLink></li>
              <li><RouterLink to="/pinia/lession3">   three</RouterLink></li>
              <li><RouterLink to="/pinia/lession4">   Four </RouterLink></li>
              <li><RouterLink to="/pinia/lession5">   Five </RouterLink></li>
              <li><RouterLink to="/pinia/lession6">   six</RouterLink></li>
              <li><RouterLink to="/pinia/lession7">   seven</RouterLink></li>
              <li><RouterLink to="/pinia/lession8">   eight</RouterLink></li>
              <li><RouterLink to="/pinia/lession9">   Nine </RouterLink></li>
              <li><RouterLink to="/pinia/lession10">  ten</RouterLink></li>
              <li><RouterLink to="/pinia/lession11">   Eleven</RouterLink></li>
              <li><RouterLink to="/pinia/lession12">   Twelve</RouterLink></li>
              <li><RouterLink to="/pinia/lession13">     Thirtee</RouterLink></li>
              <li><RouterLink to="/pinia/lession14">  Fourteen</RouterLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
  </div>
</template>

<style>

</style>