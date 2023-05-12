import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// Esto es para simular la data del useFetchGifs
jest.mock("../../hooks/useFetchGifs")

describe('Tests for the GifGrid component', () => {

    test('Should show the component correctly', () => {

        useFetchGifs.mockReturnValue({
            // Se utiliza 'data falsa' para hacer los test
            // El parametro es un objeto con la data esperada

            // En este caso que es cuando se inicializa por defecto el componente
            // es una data vacia y loading: true
            data: [],
            loading: true
        });

        const category = 'One Piece';
        render(<GifGrid categtory={category}/>);

        expect(screen.getByText('Loading...')).toBeInTheDocument()

    });

    test('Should show the information with the gifs', () => {

        // Para hacer esta prueba debemos simular sucesos
        // en este caso suponer que el useFetchGifs retorno las imagenes

        const gifs = [{
            id: '0001',
            url: 'https://localhost/gif1.jpg',
            title: 'Gif 1'
        },
        {
            id: '0002',
            url: 'https://localhost/gif2.jpg',
            title: 'Gif 2'
        }];

        useFetchGifs.mockReturnValue({
            // Se utiliza 'data falsa' para hacer los test
            // El parametro es un objeto con la data esperada

            // En este caso probamos con posible data recibida del useFetchGifs
            // a direfencia del caso pasado
            data: gifs,
            loading: false
        });

        const category = 'One Piece';
        render(<GifGrid categtory={category}/>);

        //expect(screen.getByText('Loading...')).not.toBeInTheDocument()

    });

});
