<template>
  <div class="resume">
    <div class="container">
      <h2 class="page-title">Resume</h2>
      
      <div class="resume-actions">
        <a :href="resumePdf" download="Abdul_Sayed_Resume_2025.pdf" class="btn btn-primary">
          Download Resume
        </a>
      </div>
      
      <div class="resume-viewer">
        <embed :src="resumePdf" type="application/pdf" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      resumePdf: new URL('@assets/pdfs/Abdul_Sayed_Resume_2025min_1762481377203.pdf', import.meta.url).href
    }
  }
}
</script>

<style scoped>
.resume {
  padding: var(--spacing-xl) 0;
}

.page-title {
  text-align: center;
  color: var(--color-deep-blue);
  font-size: var(--font-2xl);
  margin-bottom: var(--spacing-lg);
}

.resume-actions {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
}

.resume-viewer {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  min-height: 80vh;
}

.resume-viewer embed {
  width: 100%;
  height: 80vh;
  border: none;
}

@media (max-width: 768px) {
  .resume-viewer {
    min-height: 60vh;
  }
  
  .resume-viewer embed {
    height: 60vh;
  }
}
</style>
