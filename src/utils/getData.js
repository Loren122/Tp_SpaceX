const getData = async () => {
    try {
        const response = await fetch('https://api.spacexdata.com/v5/launches');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos de lanzamientos:', error);
        return [];
    }
};

export default getData;