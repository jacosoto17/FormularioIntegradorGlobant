import { useState } from "react";

export function Registro() {
  let nombre = "Formulario de registro";

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    rol: "",
  });

  function manejarCambios(evento) {
    let nombre = evento.target.name;
    let valor = evento.target.value;


    let nuevosDatosFormulario = {
      ...datosFormulario,
      [nombreCaja]: valorCaja,
    };

    console.log("campo que estoy escribiendo: ", nombreCaja);
    console.log("valor que estoy escribiendo: ", valorCaja);
    console.log("datos nuevos: ", nuevosDatosFormulario);
    setDatosFormulario(nuevosDatosFormulario);
  }

  return (
    <>
      <section className="container">
        <section className="row justify-content-center">
          <section className="col-6">
            <h1>{nombre}</h1>
            <hr />

            <form className="border rounded p-3 shadow">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Jacobo Soto Rojas"
                id="nombres"
                name="nombres"
                value={datosFormulario.nombre}
                onChange={manejarCambios}
              />

              <input
                type="mail"
                className="form-control mb-3"
                placeholder="Correo electrónico"
                id="correo"
                name="correo"
                value={datosFormulario.correo}
                onChange={manejarCambios}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                id="contraseña"
                name="contraseña"
                value={datosFormulario.contraseña}
                onChange={manejarCambios}
              />

              <select className="form-select mb-3">
                <option value="">Administrador</option>
                <option value="">Inquilino</option>
              </select>
              <button className="btn btn-primary w-100">Enviar</button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}
