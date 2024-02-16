import { ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes.js";

const addCommentAction = (data) => {
   return {
      type: ADD_COMMENT,
      payload: data,
   };
};

const removeCommentAction = (id) => {
   return {
      type: REMOVE_COMMENT,
      id,
   };
};

export { addCommentAction, removeCommentAction };
