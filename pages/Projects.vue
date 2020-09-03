<template>
  <main id="projects">
    <ProjectsGrid />
  </main>
</template>

<script>
import ProjectsGrid from '../components/ProjectsGrid'
export default {
  components: {
    ProjectsGrid,
  },
  data() {
    return {
      title: 'Projects - Jonathan Front End Developer',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'Projects Portfolio',
          content: 'Projects Portfolio',
        },
      ],
    }
  },
}
</script>

<style scoped>
#projects {
  min-height: 80vh;
  padding: 4rem;
}
</style>
