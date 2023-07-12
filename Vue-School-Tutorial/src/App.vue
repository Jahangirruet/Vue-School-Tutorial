<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Vue School Tutorial</RouterLink></li>
          <li>
            Composition APi
            <ul>
              <li><RouterLink to="/CompositionAPI/lession1">Lossion One</RouterLink></li>
              <li><RouterLink to="/CompositionAPI/lession2">Lession Two</RouterLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
