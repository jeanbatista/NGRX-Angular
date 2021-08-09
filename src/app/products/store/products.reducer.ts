const initialState = {
  data: [],
  loading: false,
  error: undefined,
  currentProduct: undefined
};

export function reducer(state: any, action: any) {
  if (!state)
    state = initialState;

  if (action.type === '[Products] Add Product') {
    const newProductsList = [...state.data, action.payload]

    return {
      data: newProductsList
    };
  }

  return state;
}
