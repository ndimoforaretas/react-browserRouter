# React Browser Router Project

This project demonstrates how to set up a React project with the `react-router-dom` package to enable routing in a single page application with Browser Router.

## Packages

- React Router Dom - `npm install react-router-dom`
- Tailwind CSS - `npm install tailwindcss`
- Nano ID - `npm install nanoid`
- React Icons - `npm install react-icons`

## Installations

### Tailwind CSS Installation & Configuration

- [ ] start your react-vite project with `npm create vite@latest <name of project>` and change directory to the project folder with `cd <name of project>`.
- [ ] Install the packages with `npm install`.
- [ ] Install Tailwind CSS for vite according to [this documentation guide](https://tailwindcss.com/docs/guides/vite):
  - `npm install -D tailwindcss postcss autoprefixer` - Install the required packages.
  - `npx tailwindcss init -p`- Create the Tailwind CSS configuration file.
- [ ] Create a `tailwind.config.js` file in the root of the project and add the following code:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [ ] Delete the `App.css` file.
- [ ] Delete the import of `App.css` in the `App.js` file.
- [ ] Delete the **CONTENTS** of the `index.css` file.
- [ ] Add the following code to the `index.css` file:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

- Test the installation by adding a Tailwind CSS class to an element in the `App.js` file.

```javascript
function App() {
  return (
    <div className="bg-red-500 text-3xl font-bold underline">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```
