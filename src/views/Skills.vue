<template>
  <div class="skills">
    <div class="container">
      <h2 class="page-title">Technical Skills</h2>
      
      <div class="carousel-container">
        <button class="arrow-btn left" @click="moveLeft" aria-label="Previous skill">
          <img src="@assets/images/Dark_blue_left_arrow.svg.png" alt="Previous">
        </button>
        
        <div class="skills-carousel">
          <div 
            v-for="(skill, index) in skills" 
            :key="index" 
            class="skill-card"
            :class="{ hidden: !isVisible(index) }"
          >
            <div class="skill-icon">
              <img :src="skill.icon" :alt="skill.name">
            </div>
            <h3>{{ skill.name }}</h3>
          </div>
        </div>
        
        <button class="arrow-btn right" @click="moveRight" aria-label="Next skill">
          <img src="@assets/images/Dark_blue_right_arrow.svg.png" alt="Next">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        {
          name: 'Java',
          icon: new URL('@assets/images/174-1746684_java-java-logo-black-png-transparent-png.png', import.meta.url).href
        },
        {
          name: 'HTML, CSS, and Javascript',
          icon: new URL('@assets/images/html5-logo-devextreme-multi-purpose-controls-html-javascript-3_1_white.png', import.meta.url).href
        },
        {
          name: 'Git and Github',
          icon: new URL('@assets/images/30b150cd489202db131009ac9540cec0.png', import.meta.url).href
        },
        {
          name: 'Unix',
          icon: new URL('@assets/images/Unix.png', import.meta.url).href
        },
        {
          name: 'LaTeX',
          icon: new URL('@assets/images/t5VF4.png', import.meta.url).href
        }
      ],
      visibleSkills: [0, 1, 2, 3]
    }
  },
  methods: {
    isVisible(index) {
      return this.visibleSkills.includes(index)
    },
    moveRight() {
      const removed = this.visibleSkills.shift()
      const rightmost = this.visibleSkills[this.visibleSkills.length - 1]
      const toAdd = (rightmost + 1) % this.skills.length
      this.visibleSkills.push(toAdd)
    },
    moveLeft() {
      const removed = this.visibleSkills.pop()
      const leftmost = this.visibleSkills[0]
      const toAdd = (leftmost - 1 + this.skills.length) % this.skills.length
      this.visibleSkills.unshift(toAdd)
    }
  }
}
</script>

<style scoped>
.skills {
  padding: var(--spacing-xl) 0;
}

.page-title {
  text-align: center;
  color: var(--color-deep-blue);
  font-size: var(--font-2xl);
  margin-bottom: var(--spacing-xl);
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--spacing-lg) 0;
}

.arrow-btn {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.arrow-btn:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
  background-color: var(--color-coral);
}

.arrow-btn img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.skills-carousel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  flex: 1;
}

.skill-card {
  background: white;
  border-radius: 12px;
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  border: 2px solid transparent;
}

.skill-card.hidden {
  display: none;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-coral);
}

.skill-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-ice-blue);
  border-radius: 12px;
  padding: var(--spacing-sm);
}

.skill-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.skill-card h3 {
  color: var(--color-deep-blue);
  text-align: center;
  font-size: var(--font-md);
  font-weight: 600;
  min-height: 3rem;
  display: flex;
  align-items: center;
}

@media (max-width: 1024px) {
  .skills-carousel {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .carousel-container {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .skills-carousel {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .arrow-btn {
    width: 50px;
    height: 50px;
  }
  
  .arrow-btn.left,
  .arrow-btn.right {
    order: 2;
  }
  
  .skills-carousel {
    order: 1;
  }
}

@media (max-width: 480px) {
  .skills-carousel {
    grid-template-columns: 1fr;
  }
}
</style>
