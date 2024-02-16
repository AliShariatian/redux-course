const logger = (params) => (store) => (next) => (action) => {
   // console.log("Params:", params);
   // console.log("Store:", store);
   // console.log("Next:", next);
   // console.log("Action:", action);

   console.log('Logger Middleware');
   // Go to next middleware
   next(action);
};

export default logger;
