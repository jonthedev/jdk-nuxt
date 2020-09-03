<template>
  <main id="contact">
    <div class="contact-container">
      <div class="contact-icon">
        <i class="far fa-envelope"></i>
        <p>jdkaonga@gmail.com</p>
      </div>
    </div>
  </main>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    gsap.to(".contact-icon", {
      x: 0,
      duration: 1,
      ease: "bounce",
      opacity: 1,
      stagger: 0.25,
    });
  },
};
</script>

<style scoped>
#contact {
  height: 80vh;
  padding: 2rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  opacity: 0;

  transform: translateX(10rem);
}

p {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--bg-dark);
}

i {
  font-size: 13rem;
  color: var(--text-light);
}

@media screen and (max-width: 700px) {
  .contact-icon {
    flex-direction: column;
  }

  p,
  i {
    color: var(--text-light);
  }

  p {
    font-size: 1rem;
  }

  i {
    font-size: 5rem;
  }
}
</style>
