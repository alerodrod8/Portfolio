import { useState } from 'react';
import Upcoming from './upcoming';
import Prjcts from './prjcts';
import About from './about';

export default function Navigation() {
    // Estado para controlar qué componente se muestra
    const [currentComponent, setCurrentComponent] = useState('upcoming');

    // Función para renderizar el componente actual
    const renderComponent = () => {
        switch (currentComponent) {
            case 'upcoming':
                return <Upcoming />;
            case 'prjcts':
                return <Prjcts />;
            case 'about':
                return <About />;
            default:
                return <Upcoming />; // Por defecto, muestra <Upcoming />
        }
    };

    return (
        renderComponent()
    );
}