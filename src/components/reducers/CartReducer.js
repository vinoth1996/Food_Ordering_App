
const initialState = {
  addedItems: [],
  total: 0
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "pushItems":
      state.items = action.items;
      return { ...state }
    case "increaseQuantity":

      let existed_item = state.addedItems.find(
        item => action.name === item.name
      );

      if (existed_item) {
        existed_item.quantity += 1;
        return { ...state, total: state.total + existed_item.price };
      } else {
        let addedItem = {
          name: action.name,
          price: action.price,
          quantity: 1
        };
        return { ...state, addedItems: [...state.addedItems, addedItem], total: state.total + addedItem.price };
      }

    case "decreaseQuantity":

      let existing_item = state.addedItems.find(
        item => action.name === item.name
      );
      if (existing_item.quantity > 0) {
        existing_item.quantity -= 1;
        return { ...state, total: state.total - existing_item.price };
      }
      
    default:
      return state;
  }
};

export default reducers;
