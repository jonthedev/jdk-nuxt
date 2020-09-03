<template>
  <footer id="footer">
    <p>&copy; Jonathan D Kaonga.</p>
    <div>
      <a
        v-for="(item, i) in footerLinks"
        :href="item.url"
        :key="i"
        :title="item.title"
      >
        <i :class="item.icon"></i>
      </a>
    </div>
    <span>
      Created with
      <i class="fab fa-vuejs"></i>
    </span>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          title: "Github",
          url: "https://github.com/jonthedev",
          icon: "fab fa-github",
        },
      ],
    };
  },
};
</script>

<style scoped>
#footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

i.fa-github {
  font-size: 2rem;
}

i {
  color: #42b883;
  margin-left: 0.5rem;
  font-size: 1.3rem;
}

i:hover {
  color: var(--bg-gray);
}

span i {
  margin-left: 0;
}

@media screen and (max-width: 700px) {
  p,
  span {
    font-size: var(--font-size-sm);
  }

  i {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 1200px) {
  i {
    font-size: 1.7rem;
  }
}
</style>
