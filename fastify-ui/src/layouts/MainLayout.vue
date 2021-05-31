<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-input dark dense standout v-model="text" class="q-ml-md">
          <template v-slot:append>
            <q-icon name="search" class="cursor-pointer" @click="search" />
            <q-icon name="clear" class="cursor-pointer" @click="reset" />
          </template>
        </q-input>
        </q-toolbar-title>

        <div>
          <q-btn
            type="submit"
            @click="refresh"
            label="Refresh"
            class="q-mt"
            color="black"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Products',
    caption: 'List products',
    icon: 'list',
    to: 'http://localhost:8080/#/products'
  },
  {
    title: 'Import',
    caption: 'Import products from file',
    icon: 'download',
    to: 'http://localhost:8080/#/products/file/add'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      text: null,
    }
  },

  methods: {
    refresh() {
      this.$root.$emit('refresh')
    },

    reset() {
      this.text = '';
    },

    search() {
      this.$router.push({path: '/products/location/' + this.text});
      this.reset();
    }
  }
}
</script>
