import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalQuantity: 0,
        items: []

    },
    reducers: {
        addItemToCard: (state, action) => {
            state.totalQuantity++
           
 const currentItem = action.payload
 const existingItem = state.items.find(el => el.id === currentItem.id)
 if (!existingItem) {
    state.items.push({
        id: currentItem.id,
        title: currentItem.title,
        price: currentItem.price,
        totalPrice: currentItem.price,
      quantity: 1
      
    })
 }else {
    existingItem.totalPrice = existingItem.totalPrice + currentItem.price
    existingItem.quantity++
 }
        },
  removeItemFromCard: (state, action) => {
    state.totalQuantity--;
    const currentId = action.payload;
    const existingItem = state.items.find(el => el.id === currentId);
    
    // Проверяем, существует ли existingItem
    if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.totalPrice -= existingItem.price;
            existingItem.quantity--;
        } else {
            state.items = state.items.filter(el => el.id !== currentId);
        }
    } else {
        console.error(`Item with id ${currentId} not found.`);
    }
}

    }
})
export const {addItemToCard, removeItemFromCard} = cartSlice.actions