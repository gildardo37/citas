import React, {Fragment} from 'react';


const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            
            <form>
                <label>Nombre mascotas</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="dueño"
                    className="u-full-width"
                    placeholder="Nombre Dueño de mascota"
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Hora</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                ></textarea>

                <button
                    type="button"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;