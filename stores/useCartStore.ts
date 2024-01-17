import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'CartStore',
  state: () => ({
    cart:[],
  }),
  actions: {
    isInCart(product:any){
    console.log('store',product)
      const data = this.cart.find((item)=>{
        return product.id == item.id
      })
      if (data == undefined){
        return false;
      } 
      return true;
    },

    addCart(product:any){
      if(! this.isInCart(product)){
        this.cart.push(product)
      }
    },
    getCount(){
      return this.cart.length;
    },
    getTotalPrice(){
      let price = 0;
      this.cart.forEach(product => {
        price +=product.price
      });
      return price;
    }

    
  }
})
