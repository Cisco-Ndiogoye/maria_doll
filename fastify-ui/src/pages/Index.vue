<template>
  <q-page class="flex flex-center">
    <q-list v-if="products">
      <div>
        <ProductItem
        v-for="product in this.products"
        :key="product"
        v-bind="product"
        />
        <q-separator spaced inset />
      </div>
    </q-list>
  </q-page>
</template>
<style>
  q-list {
    width: 50%;
  }
</style>
<script>
import { api } from 'boot/axios'
import ProductItem from 'components/ProductItem.vue'

export default {
  components: { ProductItem },
  data() {
    return {
      products: new Array(),
    }
  },

  beforeMount() {
    api.get('http://localhost:3000/products').then(function(response) {
      response.data.data[0].forEach((e, i) => {
        this.products[i] = JSON.parse(JSON.stringify(e));
      });
    }.bind(this));
    console.log(this.products);
  },

}

</script>
