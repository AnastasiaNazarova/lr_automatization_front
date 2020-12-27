<template>
  <div class="product">
    <v-form ref="form" class="product_form">
      <v-text-field
          id="nameProduct"
          v-model="nameProduct"
          label="Название продукта"
          clearable
      ></v-text-field>

      <v-text-field
          id="purchasePrice"
          v-model="purchasePrice"
          label="Закупочная цена"
          clearable
      ></v-text-field>

      <v-text-field
          id="number"
          v-model="number"
          label="Количество"
          clearable
      ></v-text-field>

      <v-text-field
          id="markup"
          v-model="markup"
          label="Наценка (%)"
          clearable
      ></v-text-field>

      <v-text-field
          id="shelfLife"
          v-model="shelfLife"
          label="Срок годности"
          clearable
      ></v-text-field>

      <v-text-field
          id="comment"
          v-model="comment"
          label="Комментарий"
          clearable
      ></v-text-field>

      <div class="product_form__submit">
        <v-btn
            id="submit"
            class="mr-4"
            @click="save"
        >
          Сохранить
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      id: null,
      nameProduct: null,
      purchasePrice: null,
      number: null,
      markup: null,
      shelfLife: null,
      comment: null
    }
  },
  methods: {
    save() {
    if(this.$store.action == 1){
    this.$store.dispatch('addProduct', {
            nameProduct: this.nameProduct,
            purchasePrice: Number(this.purchasePrice),
            number: Number(this.number),
            markup: Number(this.markup),
            shelfLife: Number(this.shelfLife),
            comment: this.comment
          }).then(() => {
            this.$router.push({name: 'ProductsTable'})
          })
    }
    else{
    this.$store.dispatch('addProduct', {
            id:this.$store.id,
            nameProduct: this.nameProduct,
            purchasePrice: Number(this.purchasePrice),
            number: Number(this.number),
            markup: Number(this.markup),
            shelfLife: Number(this.shelfLife),
            comment: this.comment
          }).then(() => {
            this.$router.push({name: 'ProductsTable'})
          })

    }

    }
  }
}
</script>

<style>
.product_form {
  padding: 20px;
  width: 600px;
  border: 1px solid #ddd;
  margin: 20px auto;
}

.product_form__submit {
   display: flex;
   justify-content: center;
   margin: 10px;
 }
</style>
