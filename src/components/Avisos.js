import '../assets/styles/Avisos.css'
import feria from '../assets/images/feriaNavideña.jpg'
import corte from '../assets/images/corteLuz.jpeg'
import gato from '../assets/images/gatoPerdido.jpg'
import aumentoGC from '../assets/images/gastosComunes.jpg'
import anoNuevo from '../assets/images/anoNuevo.jpg'


import { Card, Modal } from 'flowbite-react';
import { useState } from 'react';



function Avisos() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Card className="max-w-sm" imgSrc={corte} horizontal onClick={() => setOpenModal(true)}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Corte de luz programado
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

                <div className='row'>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={feria}
                        onClick={() => setOpenModal(true)}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Feria navideña
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={gato}
                        onClick={() => setOpenModal(true)}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Gato perdido 
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

                <div className='row'>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={aumentoGC}
                        onClick={() => setOpenModal(true)}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Aumento gastos comunes
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={anoNuevo}
                        onClick={() => setOpenModal(true)}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Actividades año nuevo
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

            </div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} on>
                <Modal.Header>Detalles del aviso</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            12/12/2021 12:00
                        </p>
                    </div>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default Avisos