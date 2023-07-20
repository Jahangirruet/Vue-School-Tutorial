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
            Composition APi
            <ul>
              <li><RouterLink to="/CompositionAPI/lession1">   One</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession2">   Two </RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession3">   three</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession4">   Four </RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession5">   Five </RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession6">   six</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession7">   seven</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession8">   eight</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession9">   Nine </RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession10">  ten</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession11">   Eleven</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession12">   Twelve</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession13">     Thirtee</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession14">  Fourteen</RouterLink></li>
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