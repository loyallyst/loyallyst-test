import "./App.css";

import { Crud } from "./components/crud";

function App() {
  return (
    <Crud
      baseUrl={{
        pathname: "/api/apps/posts",
        queryParams: {
          $expand: "project",
          $filter: "project/id eq 4f94fd2f-39d1-4356-9611-5d5930003025",
        },
      }}
      schema={{
        table: "Post",
        create: "CreatePostBodyDto",
        update: "UpdatePostBodyDto",
      }}
    />
  );
}

export default App;
