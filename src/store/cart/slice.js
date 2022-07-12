import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const device = action.payload;

      const existingCartItem = state.cartItems.find((item) => {
        return item.id === device.id;
      });

      const updatedItem = existingCartItem
        ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
        : null;

      const updatedCart = updatedItem
        ? state.cartItems.map((item) => {
            if (parseInt(item.id) === updatedItem.id) {
              return updatedItem;
            } else {
              return item;
            }
          })
        : [...state.cartItems, { ...action.payload, quantity: 1 }];

      const newState = {
        ...state,
        cartItems: [...updatedCart],
      };

      return newState;
    },

    removeItem: (state, action) => {
      const device = action.payload;

      const existingCartItem = state.cartItems.find((item) => {
        return item.id === device.id;
      }); // check whether the item is there or not

      const updatedItem = existingCartItem
        ? { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
        : null; // copy existing item and remove quantity to the exisiting item

      const updatedCart =
        updatedItem && updatedItem.quantity > 0
          ? state.cartItems.map((item) => {
              if (parseInt(item.id) === updatedItem.id) {
                return updatedItem;
              } else {
                return item;
              }
            })
          : updatedItem && updatedItem.quantity <= 0
          ? state.cartItems.filter((item) => {
              return item.id !== device.id;
            })
          : state;

      const newState = {
        ...state,
        cartItems: [...updatedCart],
      };

      return newState;
    },
    clearItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },

    emptyCart: (state, action) => {
      return {
        ...state,
        cartItems: [],
      };
    },
  },
});

export const { addItem, removeItem, clearItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
