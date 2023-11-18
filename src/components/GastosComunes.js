// App.js
import { Button, Modal, Table } from 'flowbite-react';
import React, { useState } from 'react';

const cardStyle = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
};

const selectedCardStyle = {
    borderColor: '#007bff',
};

const Card = ({ type, number, name, onSelect, isSelected }) => {
    const combinedStyles = { ...cardStyle, ...(isSelected && selectedCardStyle) };

    return (
        <div style={combinedStyles} onClick={onSelect}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '18px' }}>{type}</div>
                <div style={{ marginBottom: '8px', fontSize: '16px' }}>{number}</div>
            </div>
        </div>
    );
};

const GastosComunes = () => {
    const [seleccionados, setSeleccionados] = useState([false, false, false, false]);
    const [statePagadoPopup, setStatePagadooPopup] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const meses = ["Enero", "Febrero", "Marzo", "Abril"];

    const handleToggleSeleccion = (index) => {
        const nuevosSeleccionados = [...seleccionados];
        nuevosSeleccionados[index] = !nuevosSeleccionados[index];
        setSeleccionados(nuevosSeleccionados);
    };

    const handleCardSelect = (index) => {
        setSelectedCard(index);
    };

    const calcularTotal = () => {
        const total = seleccionados.reduce((acc, isSelected, index) => {
            if (isSelected) {
                acc += 49990;
            }
            return acc;
        }, 0);
        return total;
    };

    const cards = [
        { type: 'Visa', number: '**** **** **** 1234', name: 'John Doe' },
        { type: 'MasterCard', number: '**** **** **** 5678', name: 'Jane Doe' },
        { type: 'American Express', number: '**** **** **** 2356', name: 'John Doe' },
        { type: 'Cuenta rut', number: '**** **** **** 5248', name: 'John Doe' },
        { type: 'Crédito Santander', number: '**** **** **** 9012', name: 'John Doe' },
    ];

    return (
        <div>
            <div style={{ display: 'flex', marginTop: "20px", marginLeft: "40px", flexDirection: "column", gap: "5px" }}>
                <h5 style={{ width: "500px", fontSize: '20px' }} className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Seleccione el/los meses que quiere pagar:</h5>
                <div style={{ left: "500px", display: "flex", justifyContent: "center" }}>
                    <div style={{ marginLeft: "100px" }}>
                        {seleccionados.map((seleccionado, index) => (
                            <div key={index} className={`p-4 ${seleccionado ? 'border-solid border-2 border-blue-500' : 'border-dashed border-2 border-gray-300'}`} style={{ display: "flex", width: "40rem", flexDirection: 'row', gap: "10px", alignItems: "center" }}>
                                <input type="checkbox" checked={seleccionado} onChange={() => handleToggleSeleccion(index)} />
                                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{meses[index]}</h5>
                                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white" style={{ marginLeft: "auto" }}>$49.990</h5>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "30px", gap: "10px", alignItems: "flex-end", alignContent: "flex-end" }}>
                        <h5 style={{ marginTop: "150px", fontSize: '20px' }} className="text-lg tracking-tight text-gray-900 dark:text-white">Total a pagar:</h5>
                        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">${calcularTotal()}</h5>
                        <Button onClick={() => setStatePagadooPopup(true)} style={{ height: "40px", fontSize: '18px' }}>Pagar</Button>
                    </div>
                    <Modal size="sm" dismissible show={statePagadoPopup} on>
                        <Modal.Body>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white" style={{ marginBottom: "20px" }}>{!(seleccionados.some(elemento => elemento === true)) ? "Seleccione mes/es a pagar" : selectedCard == null ? "Seleccione un medio de pago" : "Transacción exitosa"}</h5>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button onClick={() => { setStatePagadooPopup(false) }}>Aceptar</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <h5 style={{ fontSize: '20px' }} className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Seleccione un medio de pago:</h5>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            type={card.type}
                            number={card.number}
                            name={card.name}
                            onSelect={() => handleCardSelect(index)}
                            isSelected={selectedCard === index}
                        />
                    ))}
                </div>
            </div>
            <div style={{ marginLeft: "100px" }}>
                <h5 style={{ width: "150px", fontSize: '15px' }} className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Pagos anteriores:</h5>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Mes de pago</Table.HeadCell>
                        <Table.HeadCell>Total pagado</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Diciembre'}
                            </Table.Cell>
                            <Table.Cell>$49.990</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Noviembre
                            </Table.Cell>
                            <Table.Cell>$49.990</Table.Cell>

                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default GastosComunes;
