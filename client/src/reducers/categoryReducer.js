const initialState = {
  filter: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHOOSE_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
