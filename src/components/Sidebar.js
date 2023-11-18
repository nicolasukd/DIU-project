
'use client';

import '../assets/styles/Sidebar.css'
import logo from '../assets/images/logo.png'

import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { Sidebar, Button, Card, Label, TextInput } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser, HiViewBoards } from 'react-icons/hi';

function Component() {
    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;

    return (
        <div >
            <Sidebar aria-label="Default sidebar example" >
                <Sidebar.Logo href="#" img={logo} imgAlt="logo">
                    App
                </Sidebar.Logo>
                <div >
                    <Sidebar.Items style={{ textAlign: 'initial' }}>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="/avisos" icon={HiChartPie}>
                                Avisos
                            </Sidebar.Item>
                            <Sidebar.Item href="/gastosComunes" icon={HiViewBoards} >
                                Gastos comúnes
                            </Sidebar.Item>
                            <Sidebar.Item href="/visitas" icon={HiInbox}>
                                Visitas
                            </Sidebar.Item>
                            <Sidebar.Item href="/espaciosComunes" icon={HiUser}>
                                Espacios comúnes
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiShoppingBag}>
                                Otra
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Otra
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Ajustes
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Suscripción
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                    <Sidebar.CTA>
                        <Button color='failure' aria-describedby={id} type="button" onClick={handleClick}>
                            Hablar con administración
                        </Button>
                    </Sidebar.CTA>

                </div>
            </Sidebar>
            <BasePopup id={id} open={open} anchor={anchor} placement={'right-end'} style={{ left: '50px' }}>
                <Card className="max-w-sm">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Administración" />
                            </div>
                            <TextInput style={{ height: '200px' }} id="large" type="email" sizing={'lg'} />
                        </div>
                        <div className="flex items-center gap-2">
                            <TextInput id="large" type="text" />
                            <Button color="failure">Enviar</Button>
                        </div>

                    </form>
                </Card>
            </BasePopup>
        </div >

    );
}

export default Component;
