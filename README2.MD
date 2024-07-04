# React Router - 2

- In the next stage, we will proceed as follows:
  - [ ] Set up a `404` page to display when the user navigates to a URL that does not exist.
  - `<Link>` vs `<NavLink>`
  - [ ] Set up nested routes for the different pages.
  - [ ] Set up a `useNavigate` hook to navigate to a different page programmatically.
  - [ ] Creating a Login page and a login form to demonstrate the use of `useNavigate` hook.

## Steps

### 404 Page

1. Create a new Page called `NotFoundPage.jsx` in the `pages` folder.
2. Add a simple message to the page to display when the user navigates to a URL that does not exist.

```jsx

```

3. Import the `NotFoundPage` in the `App.jsx` file and set up a route for it.
4. Make sure that the Path for the `NotFoundPage` is set to `*` so that it matches any URL that does not exist.

```jsx

```

5. Test the `NotFoundPage` by navigating to a URL that does not exist.

### `<Link>` vs `<NavLink>`

- The `<Link>` component is used to navigate to a different page in the application.
- The `<NavLink>` component is used to navigate to a different page in the application and also apply a class to the link when it is active.
- We will therefore update our `NavigationComponent.jsx` file to use the `<NavLink>` component instead of the `<Link>` component.

6. In the `NavigationComponent.jsx` file, import the `NavLink` component from `react-router-dom`.
7. Replace all the `<Link>` components with the `<NavLink>` component.

```jsx

```

8. Add a `className` prop to the `<NavLink>` component and use `conditional rendering` to apply the class when the link is active.

```jsx
className={({ isActive }) => (isActive ? "text-yellow-400" : "")}>
```

- `NavLink` has a prop called `isActive` that is a function that returns `true` when the link is active and `false` when it is not.
- The `isActive` prop is a function that returns `true` when the link is active and `false` when it is not.

### Login Page

9. Create a new Page called `LoginPage.jsx` in the `pages` folder.
10. Add a simple login form to the page with the following fields:
    - User Name
    - Password
    - Submit button
11. Make the input fields controlled components by setting up state for the `userName` and `password` fields.
    - Import `useState` from `react` and set up state for the `userName` and `password` fields.
12. We are going to simulate logging in with a fake user from a database by:
    - Creating a `fakeUser` state object with a `userName` and `password` field.

```javascript
const [fakeUser, setFakeUser] = useState({
  userName: "john doe",
  password: "r3@ct",
  success: null,
});
```

    - Creating a condition in the `onSubmit` function that will check if the `userName` and `password` match the `fakeUser` state object.
    - if it matches, we will navigate to the `Home` page using the `useNavigate` hook.

```javascript
const navigate = useNavigate();
const onSubmit = (e) => {
  e.preventDefault();
  if (userName === fakeUser.userName && password === fakeUser.password) {
    navigate("/home");
  } else {
    setFakeUser({ ...fakeUser, success: false });
  }
};
```

    - If it does not match, we will display an error message.

```jsx
{
  fakeUser.success === false && (
    <p className="text-red-500">Invalid username or password</p>
  );
}
```
