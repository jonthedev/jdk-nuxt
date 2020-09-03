<template>
  <div>
    <main id="home" class="home-grid">
      <card>
        <template v-slot:title>Hi, I'm Jonathan.</template>
        <template v-slot:job>Front End Developer.</template>
      </card>
      <card>
        <template v-slot:svg>
          <DeveloperSVG />
        </template>
      </card>
      <card>
        <template v-slot:projects
          >I build websites and web applications.</template
        >
      </card>
    </main>
  </div>
</template>

<script>
import Card from '../components/Card'
import DeveloperSVG from '../components/DeveloperSVG'
import gsap from 'gsap'

export default {
  mounted() {
    gsap.to('.card', {
      duration: 2,
      y: 0,
      ease: 'bounce',
      opacity: 1,
      stagger: 0.25,
    })
  },
  components: {
    Card,
    DeveloperSVG,
  },
  data() {
    return {
      title: 'Home - Jonathan Front End Developer',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'Home page',
          content: 'Front End Developer Websites',
        },
      ],
    }
  },
}
</script>

<style scoped>
#home {
  height: 80vh;
  padding: 2rem;
}
.home-grid {
  display: grid;

  /* Explicit grid */
  grid-template-areas:
    'a b'
    'c d';

  grid-template-rows: repeat(2, 50%);
  grid-template-columns: repeat(2, 50%);
}

/* INTRO */
.card:nth-child(1) {
  grid-area: a;
}
/* SVG DEVELOPER ANIMATION */
.card:nth-child(2) {
  grid-area: b;
}
/* WHAT I DO */
.card:nth-child(3) {
  grid-area: c;
}

/* Medium screens */
@media screen and (max-width: 700px) {
  .home-grid {
    grid-template-areas:
      'a'
      'b'
      'c'
      'd';
    grid-template-rows: repeat(3, 31%);
    grid-template-columns: 1fr;
  }
}
</style>
