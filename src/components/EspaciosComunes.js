import '../assets/styles/Avisos.css'
import piscinaExt from '../assets/images/piscinaExterior.jpg'
import piscinaInt from '../assets/images/piscinaInterior.jpg'
import salaComun from '../assets/images/salaComun.jpg'
import salonEventos from '../assets/images/salonEventos.jpg'
import quincho from '../assets/images/quincho.jpg'
import patio from '../assets/images/patio.jpeg'


import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';



function EspaciosComunes() {

    return (
        <div className='container'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reserva de Espacios</h5>
            <div className='row'>
                <Card
                    className="max-w-sm"
                    imgSrc={piscinaExt}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Piscina exterior
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Piscina exterior')}`}>
                        <Button style={{ width: "100%" }}>
                            Reservar
                        </Button>
                    </Link>
                </Card>
                <Card
                    className="max-w-sm"
                    imgSrc={piscinaInt}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Piscina interior
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Piscina interior')}`}>
                        <Button style={{ width: "100%" }}>
                            Reservar
                        </Button>
                    </Link>
                </Card>
            </div>

            <div className='row'>
                <Card
                    className="max-w-sm"
                    imgSrc={salonEventos}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Salon de eventos
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Salon de eventos')}`}>
                        <Button style={{ width: "100%" }}>
                            Reservar
                        </Button>
                    </Link>
                </Card>
                <Card
                    className="max-w-sm"
                    imgSrc={salaComun}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sala común
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Sala común')}`}>
                        <Button style={{ width: "100%" }}>
                            Reservar
                        </Button>
                    </Link>
                </Card>
            </div>
            <div className='row'>
                <Card
                    className="max-w-sm"
                    imgSrc={quincho}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Quincho
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Quincho')}`}>
                        <Button style={{ width: "100%" }}>
                            Reservar
                        </Button>
                    </Link>
                </Card>
                <Card
                    className="max-w-sm"
                    imgSrc={patio}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Patio
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Patio')}`}>
                        <Button style={{ width: "100%" }}>
                            Reservar
                        </Button>
                    </Link>
                </Card>
            </div>

        </div>
    )
}

export default EspaciosComunes