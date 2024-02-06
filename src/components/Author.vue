<template>
  <div class="author">
    <picture>
      <source :srcset="`${img}.webp`" type="image/webp">
      <source :srcset="`${img}.jpg`" type="image/jpeg">
      <img loading="lazy" :src="`${img}.jpg`" class="author__img" width="24" height="24" :alt="alt">
    </picture>

    <span class="author__name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {    
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
  }
}
</script>