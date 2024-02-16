import { ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes.js";

export default (state = [], action) => {
   switch (action.type) {
      case ADD_COMMENT: {
         const newComment = action.payload;
         return [...state, newComment];
      }

      case REMOVE_COMMENT: {
         const newState = [...state].filter((comment) => comment.id !== action.id);
         return newState;
      }

      default: {
         return state;
      }
   }
};

