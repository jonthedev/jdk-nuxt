<template>
  <div class="projects-grid-item">
    <h2>{{ project.title }}</h2>
    <i @click="toggleModalStatus" class="fas fa-info-circle"></i>
    <div class="projects-details-icons">
      <i
        v-for="(iconClass, i) in project.icons"
        :key="i"
        :class="iconClass"
      ></i>
    </div>
    <transition name="fade">
      <div class="project-details bg2" v-if="modalStatus">
        <p>{{ project.description }}</p>
        <p>Tech: {{ project.tech }}</p>
        <a class="project-link" :href="project.url" target="_blank">
          <i class="far fa-eye" title="View Project"></i>
        </a>
        <i
          @click.prevent="toggleModalStatus"
          class="far fa-times-circle close"
        ></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      modalStatus: false,
    }
  },
  computed: {},
  methods: {
    toggleModalStatus() {
      this.modalStatus = !this.modalStatus
    },
  },
  components: {},
}
</script>

<style scoped>
/* card transition animation */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.project-details {
  background: var(--bg-dark);
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 1rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 100;
}

.project-details p {
  color: var(--text-green);
  margin-bottom: 0.5rem;
}

.projects-grid-item {
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in;
  padding: 0.4rem;

  position: relative;
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

/* BACKGROUND FRONT FACE COLOR 1*/
.bg1 {
  background: var(--bg-dark);
}
/* BACKGROUND FRONT FACE COLOR 2*/
.bg2 {
  background: var(--bg-light);
  color: var(--bg-dark);
}

i {
  margin: 0 0.5rem;
  font-size: 1.5rem;
}

/* EYE ICON / VIEW PROJECT */
i.fa-eye {
  color: var(--bg-dark);
}

i.fa-eye:hover {
  color: var(--bg-gray);
}

/* CLOSE BUTTON */
i.close {
  color: var(--text-green);
  cursor: pointer;
  position: absolute;
  bottom: 0.9rem;
  right: 0.5rem;
  transition: color 0.5s ease;
}

i.close:hover {
  color: #338a63;
}

/* INFO BUTTON */
i.fa-info-circle {
  color: rgb(0, 217, 255);
  cursor: pointer;
  transition: color 0.5s ease;

  position: absolute;
  bottom: 0.9rem;
  right: 0.5rem;
}

i.fa-info-circle:hover {
  color: rgb(29, 143, 163);
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 0.8rem;
  }

  .projects-grid-item {
    height: 200px;
  }

  .project-link i {
    font-size: 1rem;
  }

  i.fa-info-circle,
  i.close {
    bottom: 0.8rem;
    right: 0.4rem;
    font-size: 0.9rem;
  }

  .project-details p {
    font-size: var(--font-size-sm);
  }
}
</style>
