<template>
  <q-page >
      <ProductItem
      class="item"
      v-for="product in products"
      :key="product.id"
      v-bind="product"
      ProductItem/>
  </q-page>
</template>
<style>
  .item {
    width: 50%;
    margin: auto;
    margin-top: 5%;
  }
</style>
<script>
import { api } from 'boot/axios'
import ProductItem from 'src/components/ProductItem.vue'

export default {
  components: { ProductItem },
  data() {
    return {
      products: [],
    }
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      await api.get('http://localhost:3000/products').then(function(response) {
        this.products = response.data.data[0];
        console.log(this.products)
      }.bind(this));
    }
  }

}

</script>
