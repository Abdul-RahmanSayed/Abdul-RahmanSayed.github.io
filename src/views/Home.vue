<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <div class="profile-image">
          <img src="@assets/images/IMG_0938-475x475.jpg" alt="Abdul-Rahman Sayed">
        </div>
        
        <div class="about-section">
          <h2>About Me</h2>
          <p class="intro-text">
            I am currently a third year Computer Science student at Georgia Institute of Technology 
            with concentrations in Intelligence and Media.
          </p>
          
          <div class="concentrations">
            <div class="concentration-card">
              <img src="@assets/images/artificial-intelligence-3382507_1280.jpg" alt="Artificial Intelligence">
              <h3>Intelligence</h3>
            </div>
            <div class="concentration-card">
              <img src="@assets/images/noun_Interaction Design_1916596 (1).png" alt="Interaction Design">
              <h3>Media</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: var(--spacing-xl) 0;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-normal);
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-section {
  max-width: 800px;
  text-align: center;
}

.about-section h2 {
  color: var(--color-deep-blue);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-xl);
}

.intro-text {
  font-size: var(--font-md);
  color: var(--color-navy);
  margin-bottom: var(--spacing-xl);
  line-height: 1.8;
}

.concentrations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.concentration-card {
  background: white;
  border-radius: 12px;
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  cursor: pointer;
}

.concentration-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--color-coral);
}

.concentration-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: var(--spacing-md);
}

.concentration-card h3 {
  color: var(--color-deep-blue);
  font-size: var(--font-lg);
}

@media (max-width: 768px) {
  .profile-image {
    width: 200px;
    height: 200px;
  }
  
  .concentrations {
    grid-template-columns: 1fr;
  }
}
</style>
