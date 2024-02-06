<template>
  <article class="example">
    <a href="#" class="example__link">
      <picture>
        <source :srcset="`${img}@2x.webp 2x, ${img}.webp 1x`" type="image/webp" media="(min-width: 768px)">
        <source :srcset="`${img}@2x.jpg 2x, ${img}.jpg 1x`" type="image/jpeg" media="(min-width: 768px)">
        <source :srcset="`${img}-mobile@2x.webp 2x, ${img}-mobile.webp 1x`" type="image/webp">
        <source :srcset="`${img}-mobile@2x.jpg 2x, ${img}-mobile.jpg 1x`" type="image/jpeg">
        <img loading="lazy" :src="`${img}.jpg`" class="example__img" width="315" height="206" :alt="alt">
      </picture>

      <div class="example__content">
        <h2 class="example__title">{{ title }}</h2>
        <Author 
          class="example__author"
          :name="author.name"
          :img="author.img"
          :alt="author.alt"
        />
      </div>
    </a>
  </article>
</template>

<script>
import Author from '@/components/Author.vue'
export default {
  components: {
    Author
  },
  props: {
    img: {
      type: String,
      required: true
    },
    alt: {
      type: String, 
      required: true
    },
    title: {      
      type: String,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  }
}  
</script> 