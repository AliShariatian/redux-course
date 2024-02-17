import Users from "./pages/Users/Users";
import Courses from "./pages/Courses/Courses";
import Articles from "./pages/Articles/Articles";
import Infos from "./pages/Infos/Infos";

export default [
   { path: "/", Component: Users },
   { path: "/users", Component: Users },
   { path: "/courses", Component: Courses },
   { path: "/articles", Component: Articles },
   { path: "/infos", Component: Infos },
];
