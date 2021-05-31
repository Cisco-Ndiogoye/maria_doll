<template>
  <q-page class="flex flex-center">
    <q-item
    clickable
    tag="a"
    target="_blank"
    :href="'#/products/' + id"
    class="item"
    >
      <q-item-section class="item-section">
        <q-item-label class="item-label">{{this.product.catalog_name}}</q-item-label>
        <q-item-label caption lines="2" class="item-label-caption">Location: {{this.product.location_name}}</q-item-label>
        <q-item-label caption class="item-label-caption">Color: {{this.product.color}}</q-item-label>
      </q-item-section>

      <q-item-section side top class="item-section">
        <q-item-label caption class="item-label-caption">Size: {{this.product.size}}</q-item-label>
        <q-item-label caption class="item-label-caption">Size: {{this.product.quantity}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-page>
</template>
<style>
.item {
  width: 80%;
  min-height: 25%;
}
</style>
<script>
import { api } from 'boot/axios'

export default {
  // name: 'PageName',
  data() {
    return {
      id: '',
      product: null,
    }
  },

  beforeMount() {
    this.id = this.$route.fullPath.replace('/products/','')
    console.log(this.id)
    api.get('http://localhost:3000/products/' + this.id).then(function(response) {
      this.product = response.data;
      console.log(this.product);
    }.bind(this));
  },
}
</script>
