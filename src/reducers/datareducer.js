export const datareducer = (state, action) => {
  switch (action.type) {
    case "set_data":
      return { ...state, products: action.payload };
    case "set_Tot_Stock":
      return { ...state, totalStock: action.payload };
    case "set_Delivered":
      return { ...state, totalDelivered: action.payload };
    case "set_low_Stock":
      return { ...state, lowstock: action.payload };
    
    default:
      return state;
  }
};
