<template>
  <main id="projects">
    <ProjectsGrid />
  </main>
</template>

<script>
import ProjectsGrid from "../components/ProjectsGrid";
export default {
  components: {
    ProjectsGrid,
  },
};
</script>

<style scoped>
#projects {
  min-height: 80vh;
  padding: 4rem;
}
</style>
