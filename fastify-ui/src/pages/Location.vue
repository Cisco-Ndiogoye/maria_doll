<template>
  <q-page>
    <!-- content -->
    <q-page >
      <ProductItem
      class="item"
      v-for="product in products"
      :key="product.id"
      v-bind="product"
      ProductItem/>
  </q-page>
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
  // name: 'PageName',
  components: { ProductItem },

  data() {
    return {
      location: '',
      products: null,
    }
  },

  created() {
    this.location = this.$route.fullPath.replace('/products/location/','')
    console.log(this.id)
    api.get('http://localhost:3000/products/location/' + this.location).then(function(response) {
      this.products = response.data.data;
      console.log(this.products);
    }.bind(this));
  },
}
</script>
