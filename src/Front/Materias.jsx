import React, { useState, useEffect } from 'react';

const Materias = () => {
    const [materias, setMaterias] = useState([]);
    const [nuevaMateria, setNuevaMateria] = useState({ nombre: '', carrera: '' });
    const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
    const [materiaActualizada, setMateriaActualizada] = useState({ nombre: '', carrera: '' });

    useEffect(() => {
        obtenerMaterias();
    }, []);

    const obtenerMaterias = async () => {
        try {
            const response = await fetch('http://localhost:8000/materias');
            if (!response.ok) {
                throw new Error('Hubo un problema al obtener las materias');
            }
            const data = await response.json();
            setMaterias(data);
        } catch (error) {
            console.error('Error al obtener las materias:', error);
        }
    };

    const crearMateria = async () => {
        try {
            const response = await fetch('http://localhost:8000/materias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevaMateria),
            });
            if (!response.ok) {
                throw new Error('Hubo un problema al crear la materia');
            }
            setNuevaMateria({ nombre: '', carrera: '' });
            obtenerMaterias();
        } catch (error) {
            console.error('Error al crear la materia:', error);
        }
    };

    // Resto del código para actualizarMateria y borrarMateria...

    return (
        <div>
            Materias
        </div>
    );
};

export default Materias;
