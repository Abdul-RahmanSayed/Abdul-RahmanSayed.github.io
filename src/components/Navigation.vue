<template>
  <header class="navbar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <h1>Abdul-Rahman Sayed</h1>
        </router-link>
        
        <nav class="nav-menu">
          <div 
            class="dropdown" 
            @mouseenter="handleMouseEnter" 
            @mouseleave="handleMouseLeave"
            ref="dropdown"
          >
            <button 
              class="nav-link dropdown-toggle" 
              @click="toggleDropdown"
              aria-haspopup="true"
              :aria-expanded="showDropdown"
            >
              About
            </button>
            <div class="dropdown-content" :class="{ show: showDropdown }">
              <router-link to="/experience" @click="closeDropdown">Experience</router-link>
              <router-link to="/skills" @click="closeDropdown">Skills</router-link>
            </div>
          </div>
          <router-link to="/resume" class="nav-link">Resume</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      showDropdown: false,
      hideTimeout: null
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout)
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    closeDropdown() {
      this.showDropdown = false
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout)
        this.hideTimeout = null
      }
    },
    handleMouseEnter() {
      if (window.innerWidth > 768) {
        if (this.hideTimeout) {
        clearTimeout(this.hideTimeout)
        this.hideTimeout = null
      }
        this.showDropdown = true
      }
    },
    handleMouseLeave() {
      if (window.innerWidth > 768) {
        this.hideTimeout = setTimeout(() => {
          this.showDropdown = false
          this.hideTimeout = null
        }, 300)
      }
    },
    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.closeDropdown()
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-deep-blue);
  padding: var(--spacing-md) 0;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: white;
  font-size: var(--font-lg);
  margin: 0;
  transition: color var(--transition-fast);
}

.logo:hover h1 {
  color: var(--color-coral);
}

.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-link {
  color: white;
  font-size: var(--font-md);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 4px;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-coral);
}

.nav-link.router-link-active {
  background-color: var(--color-coral);
  color: white;
}

.dropdown-toggle {
  border: none;
  background: none;
  font-family: inherit;
}

.dropdown-toggle:focus {
  outline: 2px solid var(--color-coral);
  outline-offset: 2px;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 180px;
  box-shadow: var(--shadow-lg);
  border-radius: 4px;
  margin-top: var(--spacing-xs);
  overflow: hidden;
}

.dropdown-content.show {
  display: block;
  animation: fadeIn 0.2s ease;
}

.dropdown-content a {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-navy);
  transition: all var(--transition-fast);
}

.dropdown-content a:hover {
  background-color: var(--color-ice-blue);
  color: var(--color-coral);
}

.dropdown-content a.router-link-active {
  background-color: var(--color-coral);
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .logo h1 {
    font-size: var(--font-md);
  }
  
  .nav-menu {
    gap: var(--spacing-sm);
    font-size: var(--font-sm);
  }
}
</style>
