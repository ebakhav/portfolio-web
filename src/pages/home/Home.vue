<template>
  <main class="portfolio">
    

    <section class="hero">
      <div class="hero-left">
        <div class="intro">
          <h1>Elvira Bakhavdunova</h1>
          <p class="subtitle"> 
          Fine Arts Student
          Content Creator
          Director of Photography
          </p>
        </div>

        
      </div>

      <div class="hero-right">
        <img src="/portrait.jpg" alt="Elvira" />
      </div>
    </section>
  </main>
</template>


<style scoped>
.portfolio {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 24px 4%;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  padding-bottom: 20px;
}

.navigation a,
.socials a {
  color: #1c1e5c;
  text-decoration: none;
  font-size: 14px;
}

.hero {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
}

.hero-left {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro {
  text-align: center;
}

.intro h1 {
  font-size: clamp(48px, 7vw, 100px);
  font-weight: 400;
  margin: 0;
}

.intro p {
  font-size: 16px;
}

.socials {
  position: absolute;
  bottom: 20px;
  left: 0;
  display: flex;
  gap: 20px;
}

.hero-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 700px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-left {
    min-height: 350px;
  }

  .hero-right {
    height: 500px;
  }
}
.subtitle {
  width: 170px;
  margin: 0 auto;
}
</style>

