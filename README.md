# Frontend Test Task – CRUD Component

## 📌 Task Overview

Your task is to implement a **CRUD component** for managing an entity.  
The component should display a table of items and provide a form to **create** and **update** records.

The project is **OpenAPI model-driven** – meaning the component should use the provided OpenAPI specification to dynamically build the form and table columns, and interact with the API.

---

## 🗂 Project Structure

```
src/
  ├── api/
  │   └── openapi-spec.json   # OpenAPI specification of the API
  ├── components/
  │   └── crud.tsx            # Your task implementation goes here
  └── app.tsx                 # Example usage of the CRUD component
```

---

## ✅ Requirements

1. **CRUD Component (`src/components/crud.tsx`)**

   - Display a table listing entity records (columns: **Title**, **Text**, **Created at**, **Updated at**).
   - Provide a form to **create** and **update** entities.
   - Implement **delete** functionality for records.

2. **Form Fields**

   - Only **Title** and **Text** fields need to be implemented.
   - **Image upload is not required** for this task.

3. **OpenAPI-Driven**

   - Use the model definition from `src/api/openapi-spec.json` to dynamically:
     - Generate form fields
     - Render table columns

4. **API Integration**

   - Base API path: `https://admin.loyallyst.xyz`
   - **Authentication:**
     - Endpoint: `/api/auth/login`
     - Method: `POST`
     - Body:
       ```json
       {
         "email": "test@loyallyst.com",
         "password": "Iloveloyallyst!"
       }
       ```
     - Use the returned token in all requests:  
       `Authorization: Bearer <token>`
   - **Available Endpoints for Posts:**
     - `GET /api/apps/posts` → List posts
     - `GET /api/apps/posts/:id` → Get a single post
     - `POST /api/apps/posts` → Create a new post
     - `POST /api/apps/posts/:id` → Update a post
     - `DELETE /api/apps/posts/:id` → Delete a post

5. **Usage**

   - The CRUD component should work as shown in `src/app.tsx`:

     ```tsx
     import "./App.css";
     import { Crud } from "./components/crud/crud";

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
     ```

6. **Filtering**

   - Filtering by project is **hardcoded and must be used as is**.

7. **UI/UX**
   - Keep the interface simple and clean.
   - Any styling approach is allowed (CSS Modules, Tailwind, styled-components, etc.).

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

---

## 📖 Notes

- Write clean, maintainable, and reusable code.
- Follow the existing project structure and conventions.
- Use any libraries (Axios or Fetch for API calls) if needed.

---

## 📝 Evaluation Criteria

- ✅ Proper API integration
- ✅ Correct usage of OpenAPI spec for form and table generation
- ✅ Reusability of the CRUD component for different entity types
- ✅ Clean code and folder structure
- ✅ User-friendly UI/UX with working create, read, update, delete
