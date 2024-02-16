import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionTypes.js";

const addArticleAction = (data) => {
   return {
      type: ADD_ARTICLE,
      payload: data,
   };
};

const removeArticleAction = (id) => {
   return {
      type: REMOVE_ARTICLE,
      id,
   };
};

export { addArticleAction, removeArticleAction };
