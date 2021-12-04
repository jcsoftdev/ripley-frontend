import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

interface FormDataI {
  name?: string;
  last_name?: string;
  date_born?: string;
}

interface ErrorI {
  message: string | null;
}

const UserForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<FormDataI>({
    date_born: '',
    name: '',
    last_name: ''
  });
  const [error, setError] = useState<ErrorI>();

  const validation = () => {
    if (!data?.date_born || !data?.last_name || !data?.name) {
      return false;
    }
    return true;
  };
  const onChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (validation() && error?.message) {
      console.log("error");
      setError({ message: null });
    }
    setData({ ...data, [target.name]: target.value || "" });
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!validation()) {
      setError({ message: "Rellene el formulario" });
      return;
    }else {

      
      
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        fetch(`${process.env.REACT_APP_API}/api/user`, config).then(() => {
          setData({
            date_born: '',
            name: '',
            last_name: ''
          });
          alert("guardado");
          navigate('/')
        });
      } catch (error) {
        setError({ message: "No se puedo enviar" });
      }
    }
  };

  return (
    <div className="form-container" onSubmit={onSubmitHandler}>
      <form className="form">
        <h2>Crear cliente</h2>
        <div className="form-input">
          <label htmlFor="name">Nombres</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="ejm: Juan Carlos"
            value={data?.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-input">
          <label htmlFor="lastName">Apellidos</label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            placeholder="ejm: Valencia Lopez"
            value={data?.last_name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-input">
          <label htmlFor="name">Fecha de Nacimiento</label>
          <input
            type="date"
            id="date"
            name="date_born"
            value={data?.date_born}
            onChange={onChangeHandler}
          />
        </div>
        <input className="button" type="submit" value="Guardar" />
        {error?.message && <p className="error">{error.message}</p>}
      </form>
    </div>
  );
};

export default UserForm;
