<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="'#/products/' + id"
    >
      <q-item-section>
        <q-item-label>{{catalog_name}}</q-item-label>
        <q-item-label caption lines="2">Location: {{location_name}}</q-item-label>
        <q-item-label caption>Color: {{color}}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>Size: {{size}}</q-item-label>
        <q-item-label caption>Size: {{quantity}}</q-item-label>
      </q-item-section>
    </q-item>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    id: {
      type: Number,
      required: true,
    },

    location_name: {
      type: String,
      required: true
    },

    catalog_name: {
      type: String,
      required: true
    },

    color: {
      type: String,
      default: '#'
    },

    size: {
      type: String,
      default: '#'
    },

    quantity: {
      type: String,
      default: '#'
    }
  },
  methods() {
    //console.log(ProductDetailVue);
  }
}
</script>
