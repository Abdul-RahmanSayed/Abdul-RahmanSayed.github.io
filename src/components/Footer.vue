<template>
  <footer class="footer">
    <div class="container">
      <p>
        &copy; For more information come visit my 
        <a href="https://www.linkedin.com/in/abdul-sayed-84643513a/" target="_blank" rel="noopener noreferrer">
          <u>LinkedIn!</u>
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: var(--color-deep-blue);
  color: white;
  padding: var(--spacing-lg) 0;
  margin-top: auto;
  text-align: center;
}

.footer p {
  margin: 0;
  font-size: var(--font-sm);
}

.footer a {
  color: var(--color-ice-blue);
  transition: color var(--transition-fast);
}

.footer a:hover {
  color: var(--color-coral);
}
</style>
