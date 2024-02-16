import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionTypes.js";

export default (state = [], action) => {
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
};

