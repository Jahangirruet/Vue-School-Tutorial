<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Vue School Tutorial |</RouterLink></li><br />
          <li>
            Composition APi<br />
            <ul>
              <li><RouterLink to="/CompositionAPI/lession1">   One |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession2">   Two  |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession3">   three |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession4">   Four  |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession5">   Five  |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession6">   six |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession7">   seven |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession8">   eight |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession9">   Nine  |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession10">  ten |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession11">   Eleven |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession12">   Twelve |</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession13">     Thirteen|</RouterLink></li><br />
              <li><RouterLink to="/CompositionAPI/lession14">  Fourteen |</RouterLink></li><br />
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
nav {
  float: left;
  width: 30%;
  height: 900px; /* only for demonstration, should be removed */
}
</style>
