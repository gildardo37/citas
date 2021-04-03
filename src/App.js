import React, {Fragment, useState} from 'react';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';

function App() {

  //Arreglo de citas
  const [citas, guaardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agegue nueva
  const crearCita = cita => {
    guaardarCitas([
      ...citas,
      cita
    ]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guaardarCitas(nuevasCitas);
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
