import '../assets/styles/Avisos.css'
import feria from '../assets/images/feriaNavideña.jpg'


import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';



function EspaciosComunes() {

    return (
        <div className='container'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reserva de Espacios</h5>
            <div className='row'>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={feria}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Piscina exterior
                    </h5>
                    <Link to={`/espaciosComunes/${encodeURIComponent('Piscina exterior')}`}>
                        <Button >
                            Reservar
                        </Button>
                    </Link>
                </Card>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={feria}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Piscina interior
                    </h5>
                    <Button>
                        Reservar
                    </Button>
                </Card>
            </div>

            <div className='row'>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={feria}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Salon de eventos
                    </h5>
                    <Button>
                        Reservar
                    </Button>
                </Card>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={feria}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sala común
                    </h5>
                    <Button>
                        Reservar
                    </Button>
                </Card>
            </div>
            <div className='row'>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={feria}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Quincho
                    </h5>
                    <Button>
                        Reservar
                    </Button>
                </Card>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={feria}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Patio
                    </h5>
                    <Button>
                        Reservar
                    </Button>
                </Card>
            </div>

        </div>
    )
}

export default EspaciosComunes