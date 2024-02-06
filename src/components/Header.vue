<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <a class="logo header__logo">
          <img src="img/logo.svg" alt="logo" />
        </a>

        <nav class="nav hero__nav" title="Main navigation" data-menu>
          <div class="nav__wrap">
            <ul class="list-reset nav__list">
              <li 
                class="nav__item" 
                v-for="(element,i) of menu"
                :key="i"
              >
                <router-link :to="element.path" class="nav__link">{{ element.name }}</router-link>                
              </li>
            </ul>
            <button class="btn-reset btn btn--accent header__btn">
              <svg class="btn__icon">
                <use xlink:href="img/sprite.svg#user"></use>
              </svg>
              Sign Up
            </button>
          </div>
        </nav>

        <button class="burger header__burger" aria-label="Open a menu" aria-expanded="false" data-burger>
          <span class="burger__line"></span>
        </button>
      </div>
    </div>
  </header>

</template>

<script setup>
  const menu = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    }
  ]
</script>