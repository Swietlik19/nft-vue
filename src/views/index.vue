<template>
  <Hero></Hero>
  <Collections></Collections>
  <Creators></Creators>
  <Categories></Categories>
  <Discover></Discover>
  <Cta></Cta>
  <HowWorks></HowWorks>
  <Subscribe></Subscribe>
</template>

<script>
import Hero from '@/components/Hero'
import Collections from '@/components/Collections'
import Creators from '@/components/Creators'
import Categories from '@/components/Categories'
import Discover from '@/components/Discover'
import Cta from '@/components/Cta'
import HowWorks from '@/components/HowWorks'
import Subscribe from '@/components/Subscribe'
export default {
  name: 'App',
  components: {
    Hero, Collections, Creators, Categories, Discover, Cta, HowWorks, Subscribe
  }
}
</script>