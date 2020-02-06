import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCreandoGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();

    // validar
    if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // construir el gasto
    const gasto = {
      nombre: nombre,
      cantidad: cantidad,
      id: shortid.generate()
    };

    console.log(gasto);

    // pasar el gasto al componente principal
    setGasto(gasto);
    setCreandoGasto(true);

    // resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios, o Presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>

        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>

        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 100"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCreandoGasto: PropTypes.func.isRequired
};

export default Formulario;
