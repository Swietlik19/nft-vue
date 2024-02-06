<template>
  <section class="section collections">
    <div class="container">
      <div class="page-heading">
        <h2 class="page-title">Trending Collection</h2>
        <p class="page-desc">Checkout our weekly updated trending collection.</p>
      </div>

      <ul class="list-reset collections__list grid">
        <li 
          class="collections__item" 
          v-for="(item,i) in collections"          
          :key="i"
        >
          <Collection       
            :imgs="item.imgs"
            :count="item.count"
            :title="item.title"     
            :author="item.author"     
          />          
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Collection from '@/components/Collection.vue'
export default {
  components: {
    Collection
  },
  data() {
    return {
      collections: [{
        imgs: [{
          src: 'img/collection-animals-1',
          alt: 'A painted dog with glasses'
        },
        {
          src: 'img/collection-animals-2',
          alt: 'A painted cat with glasses'
        },
        {
          src: 'img/collection-animals-3',
          alt: 'A painted bear with glasses'
        }],
        count: '1025+',
        title: 'DSGN Animals',
        author: {
          name: 'MrFox',
          img: 'img/creator-6',
          alt: 'A painted fox with sunglasses'
        }
      },
      {
        imgs: [{
          src: 'img/collection-mushroom-1',
          alt: 'A fantastic painted mushroom'
        },
        {
          src: 'img/collection-mushroom-2',
          alt: 'A fantastic painted mushroom'
        },
        {
          src: 'img/collection-mushroom-3',
          alt: 'A fantastic painted mushroom'
        }],
        count: '1025+',
        title: 'Magic Mushrooms',
        author: {
          name: 'Shroomie',
          img: 'img/creator-7',
          alt: 'An avatar man'
        }
      },
      {
        imgs: [{
          src: 'img/collection-robot-1',
          alt: 'A futuristic robot'
        },
        {
          src: 'img/collection-robot-2',
          alt: 'A futuristic robot'
        },
        {
          src: 'img/collection-robot-3',
          alt: 'A futuristic robot'
        }],
        count: '1025+',
        title: 'Disco Machines',
        author: {
          name: 'BeKind2Robots',
          img: 'img/collection-creator-3',
          alt: 'A smiling robot'
        }
      }]
    }
  }
}
</script>