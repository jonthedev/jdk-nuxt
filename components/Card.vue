<template>
  <div class="card">
    <h2>
      <slot name="title"></slot>
    </h2>
    <h3>
      <slot name="job"></slot>
    </h3>
    <p>
      <slot name="projects"></slot>
    </p>
    <slot name="svg"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  font-size: 3rem;
  color: var(--text-light);
  height: 90%;
  width: 90%;
  border-radius: 7px;
  opacity: 0;
  transform: translateY(10rem);

  border-bottom: 8px solid var(--text-light);
  border-top: 2px solid var(--text-light);

  padding: 0.5rem;

  align-self: center;
  justify-self: center;

  text-align: center;
}

p {
  font-size: 1.2rem;
}

h2 {
  font-size: 2.8rem;
}

h3 {
  font-size: 1.5rem;
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>