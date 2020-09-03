<template>
  <nav id="nav" class="light">
    <div class="logo">J D K</div>
    <div>
      <NuxtLink
        v-for="(item, i) in nav"
        :key="i"
        :to="item.url"
        :title="item.title"
        >{{ item.title }}</NuxtLink
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Projects',
          url: '/projects',
        },
        {
          title: 'Contact',
          url: '/contact',
        },
      ],
    }
  },
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: var(--text-light);
  margin-left: 10px;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  padding: 0.4rem;
  text-decoration: none;
}

#nav a:hover {
  color: var(--bg-gray);
}

#nav a.router-link-exact-active {
  border-bottom-color: var(--text-light);
  border-top-color: var(--text-light);
  border-radius: 6px;
}

@media screen and (max-width: 700px) {
  #nav a {
    font-size: var(--font-size-sm);
  }
}
</style>
