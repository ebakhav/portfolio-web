
<template>
  <main class="contact-page">
    <div class="contact-content">
      <p class="eyebrow">GET IN TOUCH</p>

      <h1>Let's connect.</h1>

      <p class="description">
        I'm always open to interesting projects,
        new ideas and creative collaborations.
      </p>

      <div class="contact-links">
        <a href="mailto:bkh.elvira@gmail.com">
          Email ↗
        </a>

        <a href="https://www.instagram.com/bakhavdunova/"
           target="_blank">
          Instagram ↗
        </a>

       <a href="tel:+34624245929">Phone ↗</a>
    
      </div>
    </div>
    

    
  </main>
</template>

<style scoped>
.contact-page {
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
  margin: 20px 0;
}

.description {
  max-width: 420px;
  font-size: 15px;
  line-height: 1.9;
}

.contact-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 45px;
}

.contact-links a {
  color: #222;
  text-decoration: none;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.contact-links a:hover {
  opacity: 0.5;
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
