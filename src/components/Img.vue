<template>
  <div>
    <picture>
      <source :srcset="`${src}@2x.webp 2x, ${src}.webp 1x`" type="image/webp">
      <source :srcset="`${src}@2x.jpg 2x, ${src}.jpg 1x`" type="image/jpeg">
      <img 
        loading="lazy" 
        :src="`${src}.jpg`" 
        class="collections__img" 
        :width="width" 
        :height="height" 
        :alt="alt"
      >
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
}
</script>