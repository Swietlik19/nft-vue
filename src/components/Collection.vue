<template>
  <div class="collections__wrap">
    <a href="#" class="collections__imgs grid">
      <Img 
        class="collections__itemElement" 
        v-for="(item,i) in imgs"
        :key="i"
        :src="item.src"
        :alt="item.alt"
        :width="i === 0 ? 315 : 95"
        :height="i === 0 ? 315 : 95"
      />

      <div class="collections__itemElement collections__itemElement--text">
        {{ count }}
      </div>
    </a>

    <div class="collections__info">
      <h3 class="collections__title">{{ title }}</h3>
      <Author 
        class="collections__author"
        :name="author.name"
        :img="author.img"
        :alt="author.alt"
      />
    </div>
  </div>
</template>

<script>
import Img from '@/components/Img.vue'
import Author from '@/components/Author.vue'

export default {
  components: {
    Img, Author
  },
  props: {  
    imgs: {
      type: Array,
      required: true
    },
    count: {
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