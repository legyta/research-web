const initialState = {
  responses: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_FORM":
      return { ...state, form: action.response };

    default:
      return state;
  }
}
