import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import feria from '../assets/images/feriaNavideña.jpg';
import Paginacion from './paginacion';
import { Button, Modal } from 'flowbite-react';

function SeleccionarHorario() {
    const { horarios } = useParams();
    const [botonSeleccionado, setBotonSeleccionado] = useState(null);
    const [stateReservadoPopup, setStateReservadoPopup] = useState(null);


    const horariosArray = [
        '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00',
        '16:00', '17:00', '18:00', '19:00',
        '20:00', '21:00', '22:00', '23:00',
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`Reserva ${horarios}`}</h5>

            <img alt={""} src={feria} style={{ height: "250px", marginTop: "20", marginBottom: "20px" }} />
            <Paginacion />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                gap: '10px',
                justifyContent: 'center',
            }}>
                {horariosArray.map((hora) => (
                    <Button
                        key={hora}
                        style={{
                            height: "40px",
                            width: "80px",
                            marginTop: "5px",
                            marginRight: "20px",
                            marginLeft: "20px",
                            border: botonSeleccionado === hora ? '2px solid red' : 'none',
                        }}
                        onClick={() => setBotonSeleccionado(hora)}
                    >
                        {hora}
                    </Button>
                ))}
            </div>
            {/* Botón "Hola" totalmente independiente */}
            <div style={{ marginTop: '10px' }}>
                <Button
                    style={{
                        height: "40px",
                        width: "80px",
                        top: "-50px",
                        left: "400px",
                        backgroundColor: '#4C0088'
                    }}
                    onClick={() => setStateReservadoPopup(true)}
                >
                    Reservar
                </Button>
            </div>
            <Modal size="sm" dismissible show={stateReservadoPopup} on>
                <Modal.Body>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ marginBottom: "20px" }}>{botonSeleccionado !== null ? "Reserva exitosa" : "Seleccione un horario"}</h5>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={() => { setStateReservadoPopup(false); setBotonSeleccionado(null) }}>Aceptar</Button>

                    </div>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SeleccionarHorario;
