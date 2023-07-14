<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Vue School Tutorial |</RouterLink></li>
          <li>
            Composition APi
            <ul>
              <li><RouterLink to="/CompositionAPI/lession1">   One |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession2">   Two  |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession3">   three |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession4">   Four  |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession5">   Five  |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession6">   six |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession7">   seven |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession8">   eight |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession9">   Nine  |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession10">  ten |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession11">   Twoelve |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession12">   Thirteen |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession13">   Fourteen  |</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession14">  Fifteen |</RouterLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
}
</style>
