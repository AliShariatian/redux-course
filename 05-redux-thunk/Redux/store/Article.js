// Actions
const ADD_ARTICLE = "ADD_ARTICLE";
const REMOVE_ARTICLE = "REMOVE_ARTICLE";

// Reducer
export default function reducer(state = [], action) {
   switch (action.type) {
      case ADD_ARTICLE: {
         const newArticle = action.payload;
         return [...state, newArticle];
      }

      case REMOVE_ARTICLE: {
         const newState = [...state].filter((article) => article.id !== action.id);
         return newState;
      }

      default: {
         return state;
      }
   }
}

// Action creators
export const addArticleAction = (data) => {
   return {
      type: ADD_ARTICLE,
      payload: data,
   };
};

export const removeArticleAction = (id) => {
   return {
      type: REMOVE_ARTICLE,
      id,
   };
};
