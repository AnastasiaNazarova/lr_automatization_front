<template>
  <div class="products_table">
    <div>
      <v-btn class="add_btn" @click="addProduct">Добавить новый продукт</v-btn>
    </div>
    <v-data-table
        :headers="headers"
        :items="products"
        item-key="id"
        :items-per-page="10"
        :disable-sort="true"
        :footer-props="footerProps"
    >
      <template v-slot:header.nameProduct="{ header }">
        {{ header.text }}
        <v-text-field v-model="searching.nameProduct"
                      outlined/>
      </template>
      <template v-slot:header.purchasePrice="{ header }">
        {{ header.text }}
        <v-text-field v-model="searching.purchasePrice"
                      outlined/>
      </template>
      <template v-slot:header.number="{ header }">
        {{ header.text }}
        <v-text-field v-model="searching.number"
                      outlined/>
      </template>
      <template v-slot:header.markup="{ header }">
        {{ header.text }}
        <v-text-field v-model="searching.markup"
                      outlined/>
      </template>
      <template v-slot:header.shelfLife="{ header }">
        {{ header.text }}
        <v-text-field v-model="searching.shelfLife"
                      outlined/>
      </template>
      <template v-slot:header.comment="{ header }">
        {{ header.text }}
        <v-text-field
            v-model="searching.comment"
            outlined/>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            id="editItemBtn"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
const filter = require('../utils/filtering');

export default {
  name: 'ProductsTable',
  data() {
    return {
      products: [],
      headers: [
        {
          text: 'Название продукта',
          value: 'nameProduct',
          filterable: true
        },
        {
          text: 'Закупочная цена',
          value: 'purchasePrice',
          filterable: true
        },
        {
          text: 'Количество',
          value: 'number',
          filterable: true
        },
        {
          text: 'Наценка (%)',
          value: 'markup',
          filterable: true
        },
        {
          text: 'Срок годности',
          value: 'shelfLife',
          filterable: true
        },
        {
          text: 'Комментарий',
          value: 'comment',
          filterable: true
        },
        {text: 'Действия', value: 'actions', sortable: false}
      ],
      footerProps: {
        'items-per-page-all-text': 'Все',
        'items-per-page-text': 'Кол-во продуктов на странице',
        'items-per-page-options': [5, 10, 20, -1]
      },
      searching: {
        name_product: '',
        purchase_price: '',
        number: '',
        markup: '',
        shelf_life: '',
        comment: ''
      }
    }
  },
  beforeMount() {
    this.$store.dispatch('setProductsAction');
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts
    }
  },
  watch: {
    getProducts(val) {
      this.products = val;
    },
    searching: {
      handler: function (val) {
        this.filterProducts(this.getProducts, val);
      },
      deep: true
    }
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('deleteProduct', id).then(() => {
        this.$store.dispatch('setProductsAction')
      })
    },
    addProduct() {
      this.$router.action = 1
      this.$router.push({name: 'AddProduct'})

    },
    filterProducts(products, searching) {
      this.products = filter(products, searching)
    },

    editItem (item) {
      this.$store.action = 2
      this.$store.id = item.id
      this.$router.push({name: 'AddProduct'})
    }
  }
}
</script>

<style>
.products_table {
  text-align: center;
}

.add_btn {
  margin: 10px;
}
</style>
