// Actions
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

//  Reducer
export default function reducer(state = [], action) {
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
}

// Action creators
export const addCommentAction = (data) => {
   return {
      type: ADD_COMMENT,
      payload: data,
   };
};

export const removeCommentAction = (id) => {
   return {
      type: REMOVE_COMMENT,
      id,
   };
};
