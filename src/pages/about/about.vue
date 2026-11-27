
<template>
  <main class="about-page">
   <div class="about-image">
     <img src="/image111.jpeg" alt="Elvira Bakhavdunova" />
   </div>
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
  padding: 60px 8%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8%;
  position: relative;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 3px;
  color: #888;
}
.about-image {
  width: 100%;
  height: 65vh;
  overflow: hidden
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
@media (max-width: 700px) {
  .about-page {
    grid-template-columns: 1fr 1fr;
  }

  .about-image {
    height: 450px;
  }
}
</style>
