const initialState = {
  user: {},
};

export default function saveUser(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
