<template>
  <router-link :to="`/authors/${id}`" class="creators__link">
    <picture>
      <source :srcset="`${img}@2x.webp 2x, ${img}.webp 1x`" type="image/webp">
      <source :srcset="`${img}@2x.jpg 2x, ${img}.jpg 1x`" type="image/jpeg">
      <img loading="lazy" :src="`${img}.jpg`" class="creators__img" width="60" height="60" :alt="alt">
    </picture>

    <div class="creators__info">
      <h3 class="creators__name">{{  name }}</h3>
      <p class="creators__sale">
        Total Sales:
        <b class="creators__sum">{{ sales }} ETH</b>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String, 
      required: true
    },
    name: {
      type: String, 
      required: true
    },
    img: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    sales: {
      type: Number,
      required: true
    }
  }
}
</script>