import { useState } from "react";

// 1. Import useNavigate
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // 2. useNavigate initialisieren
  const navigate = useNavigate();

  // Fake user state
  const [fakeUser, setFakeUser] = useState({
    userName: "john doe",
    password: "r3@ct",
    success: null,
  });

  // useState für die Eingaben
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  // Vales onChange
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      form.userName === fakeUser.userName &&
      form.password === fakeUser.password
    ) {
      console.log("Richtig!");
      setFakeUser({ ...fakeUser, success: true });

      // 3. navigate to HomePage ("/")
      navigate("/dashboard");
    } else {
      setFakeUser({ ...fakeUser, success: false });
      console.log("Falsch!");
    }
  };

  return (
    <div className="p-10">
      <h1>Login</h1>

      {fakeUser.success === false && (
        <p className="text-red-500 text-sm">Falsches Username oder Passwort</p>
      )}

      <form onSubmit={onSubmit} className="flex flex-col py-8">
        <label htmlFor="userName">Username:</label>
        <input
          value={form.userName}
          onChange={onChange}
          type="text"
          name="userName"
          placeholder="Username"
          id="userName"
        />
        <label htmlFor="password">Username:</label>
        <input
          value={form.password}
          onChange={onChange}
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />

        <button
          type="submit"
          value="Submit"
          className=" bg-gray-800 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
