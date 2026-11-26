<template>
  <div>
    <header class="navigation">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 8%;
}

.navigation a {
  color: #222;
  text-decoration: none;
  margin-left: 30px;
}

.navigation .logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  margin-left: 0;
}
</style>