import { startTransition } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Increment = (state, action) => {
  console.log('state.cartItems')
  console.log(state.cartItems)
  const index = state.cartItems.findIndex(x => x._id === action.payload._id)
  console.log(index)

  if (index != -1) {
    const data = [...state.cartItems]
    data[index].quantity = data[index].quantity + 1
    console.log('data practise')
    console.log(data)
    return {cartItems:[...data]};
  }
  else {
    return {

      cartItems: [...state.cartItems, Object.assign(action.payload, { quantity: 1 })]
    }
  }

}

const Decrement = (state, action) => {

  const index = state.cartItems.findIndex(x => x._id === action.payload._id)
  console.log('index')
  console.log(index)
  const data = [...state.cartItems]
  console.log(data[index].quantity)
  
  if (data[index].quantity > 1) { 

    data[index].quantity = data[index].quantity - 1
    return {cartItems:[...data]};
  }
  else {
    console.log('hope is alive')
    data.splice(index, 1)
    return { cartItems: data }
  }

}

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': return Increment(state, action)
    // case 'ADD_TO_CART': {
    //   let tempcart = state.cartItems.filter((item) => item._id === action.payload._id);
    //   if (tempcart.length == 0) {
    //       return [...state, action.payload];
    //   }
    //   else {
    //       return state;
    //   }
    // }
    // else add the new item to cart

    case 'REMOVE_FROM_CART':return Decrement(state, action)
      



    case 'DELETE_FROM_CART': {

      let cart = [...state.cartItems]
      let index = cart.findIndex(item => item._id == action.payload)


      if (index > -1) {

        cart.splice(index, 1)


      }
      return { cartItems: cart }

      // const index = state.findIndex(item => item.id === action.payload.id);
      // return state.filter((_, i) => i !== index);

    }



    case 'CLEAR_CART': return {
      cartItems: []

    }
    case 'INCREMENT':
      return Object.assign([], state.map(item => {
        if (item.id === action.id) {
          item.quantity += action.up;
        }
        return item;
      }))
    case 'DECREMENT':
      return Object.assign([], state.map(item => {
        if (item.id === action.id) {
          item.quantity -= action.down;
        }
        return item;
      }));
    // case 'REMOVE_FROM_CART': return {


    // }
    // case "INCREMENT" :return initialstate+1;
    // case "DECREMENT" :return initialstate-1;
    default: return state


  }



}