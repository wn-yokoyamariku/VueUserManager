<script setup></script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <nav>
              <RouterLink to="/" class="home">Home</RouterLink>
              <RouterLink to="/about">Register</RouterLink>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.home {
    margin-left: 30px;
    margin-right: 30px;
}
</style>
