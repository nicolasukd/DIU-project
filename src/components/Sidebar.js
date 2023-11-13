
'use client';

import '../assets/styles/Sidebar.css'
import logo from '../assets/images/logo.png'

import { Outlet, Link } from "react-router-dom";
import { Sidebar, Button } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function Component() {
    return (
        <Sidebar aria-label="Default sidebar example" >
            <Sidebar.Logo href="#" img={logo} imgAlt="logo">
                App
            </Sidebar.Logo>
            <div className='Sidebar'>
                <Sidebar.Items style={{ textAlign: 'initial' }}>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/avisos" icon={HiChartPie}>
                            Avisos
                        </Sidebar.Item>
                        <Sidebar.Item href="/gastosComunes" icon={HiViewBoards} label="3" >
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
                    <Button color='failure'>
                        Hablar con administración
                    </Button>
                </Sidebar.CTA>
            </div>
        </Sidebar>
    );
}

export default Component;
