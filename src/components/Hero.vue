<template>
  <section class="section hero">
    <div class="container">
      <div class="hero__wrap grid">
        <div class="hero__heading">
          <h1 class="page-title page-title--capitalized hero__title">Discover digital art &amp; Collect NFTs</h1>
          <p class="page-desc">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        </div>

        <div class="hero__collection">
          <Example 
            class="hero__example"
            img="img/hero"
            title="Space Walking"
            alt="Strange people in the space"
            :author="author"
          />
        </div>

        <div class="hero__btns">
          <a href="#" class="btn-reset btn btn--big btn--accent">
            <svg class="btn__icon">
              <use xlink:href="img/sprite.svg#rocket"></use>
            </svg>
            Get Started
          </a>
        </div>

        <ul class="list-reset counter hero__counter grid">
          <li class="counter__item">
            <span
              class="counter__num js--counterNum"
              data-counter-end="240"
              data-counter-step="10"
              data-counter-add="k+"
            >
              0
            </span>
            <span class="counter__desc">Total Sale</span>
          </li>

          <li class="counter__item">
            <span
              class="counter__num js--counterNum"
              data-counter-end="100"
              data-counter-step="10"
              data-counter-add="k+"
            >
              0
            </span>
            <span class="counter__desc">Auctions</span>
          </li>

          <li class="counter__item">
            <span
              class="counter__num js--counterNum"
              data-counter-end="240"
              data-counter-step="10"
              data-counter-add="k+"
            >
              0
            </span>
            <span class="counter__desc">Artists</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>  
  import Example from '@/components/Example'
  export default {
    components: {
      Example
    },
    data() {
      return {
        author: {
          name: "Animakid",
          img: "img/creator-10",
          alt: "A man in a helmet"
        }  
      }
    }
  }
</script>