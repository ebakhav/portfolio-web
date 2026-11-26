
<template>
  <main class="about-page">
    <div class="about-content">
      <p class="eyebrow">A LITTLE INTRODUCTION</p>

      <h1>About me</h1>

      <div class="about-text">
        <p class="greeting">Hello, I'm Elvira.</p>

        <p>
          I'm a Fine Arts student based in Valencia,
          interested in visual communication, digital
          design and creative technologies.
        </p>

        <p>
          I enjoy exploring the relationship between
          image, composition and interaction, creating
          visual experiences that combine creativity
          and functionality.
        </p>
      </div>
    </div>

    <p class="page-number">01 — ABOUT</p>
  </main>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 3px;
  color: #888;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 76px;
  font-weight: 400;
  margin: 20px 0 40px;
}

.about-text {
  max-width: 520px;
  font-size: 15px;
  line-height: 1.9;
}

.greeting {
  font-size: 22px;
  margin-bottom: 25px;
}

.page-number {
  position: absolute;
  bottom: 25px;
  left: 10%;
  font-size: 10px;
  letter-spacing: 2px;
  color: #888;
}
</style>
