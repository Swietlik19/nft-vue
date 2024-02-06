<template>
  <div class="container">
    {{ creator.author || '...' }}
  </div>
</template>

<script>
export default {  
  data() {
    return {
      creator: {}
    }
  },
  mounted() {
    const id = this.$route.params.id;

    const getAuthor = async () => {
      const url = `https://stoplight.io/mocks/swietlik19/myown/211822484/authors/${id}`;
      const options = {
        method: 'GET',
        headers: {Prefer: `code=200, example=Example ${id}`, Accept: 'application/json'}
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.name !== 'Error') {
          this.creator = data[0]
        } 
      } catch (error) {
        console.error(error);
      }
    }

    getAuthor();
  }
}
</script>