import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = ({crearCita}) => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que se escribe un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    };
    
    //extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario presione agregar cita
    const submitCita = e => {
        e.preventDefault();
        
        //Validar datos
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
        hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        //Eliminar mensaje previo
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
            : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre mascotas</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;