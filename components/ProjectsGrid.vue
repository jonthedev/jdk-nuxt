<template>
  <div class="projects-grid">
    <div
      class="project"
      v-for="(project, i) in projects"
      :key="i"
      target="_blank"
    >
      <grid-item :project="project" :class="project.class">
        <template v-slot:title>{{ project.title }}</template>
      </grid-item>
    </div>
  </div>
</template>

<script>
import GridItem from './ProjectsGridItem'
import { mapGetters } from 'vuex'

import gsap from 'gsap'

export default {
  components: {
    GridItem,
  },
  mounted() {
    gsap.to('.project', {
      duration: 2,
      x: 0,
      ease: 'bounce',
      opacity: 1,
      stagger: 0.25,
    })
  },
  computed: {
    ...mapGetters({
      projects: 'projects/getProjects',
    }),
  },
  methods: {},
}
</script>

<style scoped>
/* GRID SETUP */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

/* ITEM POSITIONING */
.project {
  transform: translateX(-4rem);
  opacity: 0;
}
/* 1ST PROJECT GRID ITEM */
.projects-grid > .project:nth-of-type(1) {
  grid-column: 1 / 3;
}

/* 2ND PROJECT GRID ITEM */
.projects-grid > .project:nth-of-type(2) {
  grid-column: 3 / 5;
}
/* 3RD PROJECT GRID ITEM */
.projects-grid > .project:nth-of-type(2) {
  grid-column: 1 / 2;
  grid-row: 2 /3;
}

/* MEDIUM SCREENS */
@media screen and (max-width: 800px) {
  .projects-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .projects-grid > .project:nth-of-type(1),
  .projects-grid > .project:nth-of-type(2) {
    grid-column: auto;
  }
}
</style>
