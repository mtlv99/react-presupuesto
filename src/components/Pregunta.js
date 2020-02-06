import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarFormInicio }) => {
  // definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // si se pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);

    setMostrarFormInicio(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es Incorrecto." /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarFormInicio: PropTypes.func.isRequired
};

export default Pregunta;
