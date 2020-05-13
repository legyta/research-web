const initialState = {
  article: {},
};

export default function selectedArticleReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_ARTICLE":
      return {
        ...state,
        article: action.article,
        id: action.article_id,
      };

    default:
      return state;
  }
}
