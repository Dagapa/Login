import { useState } from "react"
import { validatorUser } from "../../Hooks/useIsUser"
import { Link } from "react-router-dom"
import styles from "./Login.module.css"

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);

  const handleUsername = (event) => {
    const input = event.target.value;
    setUsername(input);
  };

  const handlePassword = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = await validatorUser(username, password);
    setIsValidUser(isValid);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.forms}>
        <label> Username </label>
        <input onChange={handleUsername} type="text" />
        <label> Password </label>
        <input onChange={handlePassword} type="password" />
        <button type="submit">enviar</button>
      </form>
      {isValidUser && <Link to={"/search"}><span>Ir a búsqueda</span></Link>}
    </div>
  );
};