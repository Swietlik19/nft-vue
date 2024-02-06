<template>
  <section class="section creators">
    <div class="container">

      <div class="creators__wrap grid">
        <div class="creators__heading">
          <h2 class="page-title">Top creators</h2>
          <p class="page-desc">Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>

        <div class="creators__btns">
          <a href="#" class="btn-reset btn btn--transparent btn--big">
            <svg class="btn__icon">
              <use xlink:href="img/sprite.svg#rocket"></use>
            </svg>
            View Rankings
          </a>
        </div>

        <ol class="list-reset creators__list grid">
          <li 
            class="creators__item"
            v-for="item in creators"
            :key="item.id"
          >
            <Creator              
              :name="item.author"
              :img="item.img"
              :alt="item.alt"
              :sales="item.sales"
              :id="item.id"
            />
          </li>
        </ol>
      </div>

    </div>
  </section>
</template>

<script>
import Creator from '@/components/Creator.vue'

export default {
  components: {
    Creator
  },
  data() {
    return {
      creators: []
    }
  },
  mounted() {
    fetch('creators.json')
      .then(response => response.json())
      .then(json => {
        this.creators = json.slice(0, 12)
      })
  }
}
</script>