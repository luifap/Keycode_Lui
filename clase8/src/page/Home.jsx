import { useState } from "react";

import imgen1 from "../assets/img1.jpg";
import imgen2 from "../assets/img2.jpg";
import imgen3 from "../assets/img3.jpg";


import "../styles/home.css";

function Home() {
    // Variables
    const [imagenState, setImagenState] = useState(imgen3); // Estado de las imagenes
    const ListaImagenes = [imgen1, imgen2, imgen3,]; // Lista de las imagenes

    // Generar un numero aleatorio
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Manejador del evento del boton
    const handlerButton = () => {
        const aleatorio = getRandomInt(2); // Obtenemos el numero aleatorio
        setImagenState(ListaImagenes[aleatorio]); // Asignamos al estado el valor de la imagen, en el indice del numero aleatorio
    };

    return (
        <main>
            <figcaption>
                <img src={imagenState} />
            </figcaption>

            <button onClick={handlerButton}>Cambiar imagen</button>
        </main>
    );
}

export default Home;