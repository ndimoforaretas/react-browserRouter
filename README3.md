# React Router - 3 Use `useParams` to Access URL Parameters

In this step, we will proceed as follows:

- We will Create dynamic route paths with route params: the `/:<param>` notation
- Access route params with the `useParams` hook

## Steps

### Dynamic Route Paths

- We will create 3 things:
  - A UserList component that displays a list of users.
  - A UserDetail component that displays the details of a user.
  - A UserPage that will display the UserList component.
- We will move our dummy data to the `App.jsx` file and pass it down to the `UserPage` component and the `UserDetailPage` component.

1. Create a new file called `UserPage.jsx` in the `pages` folder.
2. Add the following dummy data to the `UserPage` component:

```javascript
const userData = [
  {
    id: 1,
    username: "derMitDemRotenShirt",
    email: "user1@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    id: 2,
    username: "Sherlock123",
    email: "user2@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    id: 3,
    username: "Manni",
    email: "user3@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    id: 4,
    username: "Leggo Lego-Leno!",
    email: "user4@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    id: 5,
    username: "Elvis",
    email: "user5@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
];
```

3. Create a new file called `UserList.jsx` in the `components` folder.
   - You component should accept a `users` prop and
   - map through the users to display their names in a list item.

```javascript
import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

4. Import the `UserList` component into the `UserPage` component and

   - pass the `userData` to it as a prop.

5. Create a Route for the `UserPage` component in the `App.jsx` file.

```javascript
<Route path="/users" element={<UserPage />} />
```

- Do not forget to import the `UserPage` component.

6. Update the `NavbarComponent` to include a link to the `UserPage` component.

7. Create a new file called `UserDetailPage.jsx` in the `pages` folder.
   - Your component should accept a `user` prop and
   - display the user's details (username, email, and avatar).

```javascript
import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">User Detail</h1>
      <div>
        <img src={user.avatar} alt={user.username} />
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetail;
```

### Route Params

- We will create a route for the `UserDetailPage` too.

8. In the `App.jsx` file, import the `UserDetailPage` component.
9. Set up a route for the `UserDetailPage` component.
10. Remember to set up a route for the `UserDetailPage` component with a dynamic route path that includes a `route param` (`/users/:userId`).

```javascript
<Route path="/users/:userId" element={<UserDetailPage />} />
```

11. In the `UserDetailPage` component, `useParams` from `react-router-dom` to access the `userId` route param.

    - use the `useParams` hook to access the `userId` route param.
    - comment out the user information for now.
    - see if you can display the `userId` on the page.

```javascript
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">User Detail: {userId}</h1>
    </div>
  );
};

export default UserDetail;
```

- What happens when you type in the URL `http://localhost:3000/users/hello`?

12. In the `UserList` component, we will use the `Link` component from `react-router-dom` to link to the `UserDetailPage` component.

```javascript
import { Link } from "react-router-dom";
const UserList = ({ users }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-3">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
```

- What happens when you click on a user's name?

13. We move the `userData` from the `UserPage` to the `App.jsx` file and pass it down to the `UserPage` component and the `UserDetailPage` component as props.

```javascript
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavbarComponent from "./components/NavbarComponent";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import UserDetailPage from "./pages/UserDetailPage";

const userData = [
  {
    id: 1,
    username: "derMitDemRotenShirt",
    email: "user1@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    id: 2,
    username: "Sherlock123",
    email: "user2@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    id: 3,
    username: "Manni",
    email: "user3@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    id: 4,
    username: "Leggo Lego-Leno!",
    email: "user4@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    id: 5,
    username: "Elvis",
    email: "user5@example.com",
    avatar: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<UserPage userData={userData} />} />
          <Route
            path="/users/:userId"
            element={<UserDetailPage users={userData} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
```

```javascript
// UserPage.jsx
import UserList from "../components/UserList";

const UserPage = ({ userData }) => {
  return <UserList users={userData} />;
};
export default UserPage;
```

```javascript
// UserDetailPage.jsx
import { Link } from "react-router-dom";
const UserList = ({ users }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-3">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
```

- in the `UserDetailPage` component, we will use the `userId` to find the user with the matching `id` and display the user's details.

14. In the `UserDetailPage` component, use the `find` method to find the user with the matching `id` from the `users` array and display the user's details.

```javascript
import { useParams } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">User Detail: {userId}</h1>
      <div>
        <img src={user.avatar} alt={user.username} />
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetail;
```

- What happens when you click on a user's name in the `UserList` component?
