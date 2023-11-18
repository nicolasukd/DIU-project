import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Paginator = () => {
    const daysToShow = 5; // Número de días a mostrar
    const [startIndex, setStartIndex] = useState(0);

    const generateDates = (startIndex, daysToShow) => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() + startIndex);

        const generatedDates = [];
        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            generatedDates.push(date);
        }
        return generatedDates;
    };

    const calculateSelectedIndex = (startIndex, daysToShow) => {
        return Math.floor(daysToShow / 2);
    };

    const [dates, setDates] = useState(generateDates(startIndex, daysToShow));
    const selectedIndex = calculateSelectedIndex(startIndex, daysToShow);

    const nextDays = () => {
        setStartIndex(startIndex + 1);
        setDates(generateDates(startIndex + 1, daysToShow));
    };

    const prevDays = () => {
        setStartIndex(startIndex - 1);
        setDates(generateDates(startIndex - 1, daysToShow));
    };

    const selectDay = (index) => {
        // Implementa la lógica para seleccionar un día específico si es necesario
        console.log(`Día seleccionado: ${index + 1}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
            <BsChevronLeft onClick={prevDays} style={{ fontSize: '20px', cursor: 'pointer', marginRight: "30px" }} />
            {dates.map((date, index) => (
                <div
                    key={index}
                    style={{
                        border: index === selectedIndex ? '2px solid #007bff' : '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        marginBottom: '10px',
                        marginRight: '30px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        height: 'auto',
                        backgroundColor: "#D9D9D9"
                    }}
                    onClick={() => selectDay(index)}
                >
                    <h2 style={{ fontSize: '24px', margin: '0' }}>{date.getDate()}</h2>
                    <p style={{ fontSize: '14px', margin: '0' }}>{date.toLocaleString('default', { month: 'short' })}</p>
                    {/* Agrega aquí la información específica del día si es necesario */}
                </div>
            ))}
            <BsChevronRight onClick={nextDays} style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
    );
};

export default Paginator;
