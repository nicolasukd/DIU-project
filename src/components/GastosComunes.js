import React, { useState } from 'react';
const meses = ["Enero", "Febrero", "Marzo", "Abril"]
const ListaDeudas = ({ texto, seleccionado, onToggleSeleccion }) => {
    const borderStyle = seleccionado ? 'border-solid border-2 border-blue-500' : 'border-dashed border-2 border-gray-300';

    return (
        <div className={`p-4 ${borderStyle}`} style={{ display: "flex", width: "30rem", flexDirection: 'row', gap: "10px", alignItems: "center" }}>
            <input type="checkbox" checked={seleccionado} onChange={onToggleSeleccion} />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{texto}</h5>
            <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white" style={{ marginLeft: "auto" }}>$49.990</h5>
        </div >
    );
};

const GastosComunes = () => {
    const [seleccionados, setSeleccionados] = useState([false, false, false, false]);

    const handleToggleSeleccion = (index) => {
        const nuevosSeleccionados = [...seleccionados];
        nuevosSeleccionados[index] = !nuevosSeleccionados[index];
        setSeleccionados(nuevosSeleccionados);
    };

    return (
        <div style={{ display: 'flex', marginTop: "20px", marginLeft: "40px", flexDirection: "column", gap: "20px" }}>
            <h5 style={{ width: "500px" }} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Selecciona el/los meses que quiere pagar:</h5>
            <div style={{ marginLeft: "100px" }}>
                {seleccionados.map((seleccionado, index) => (
                    <ListaDeudas
                        key={index}
                        texto={`${meses[index]}`}
                        seleccionado={seleccionado}
                        onToggleSeleccion={() => handleToggleSeleccion(index)}
                    />
                ))}</div>
        </div>
    );
};

export default GastosComunes;
