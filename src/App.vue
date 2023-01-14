<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Esocial</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/list" class="nav-link">Lista</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crud" class="nav-link">Crud</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>