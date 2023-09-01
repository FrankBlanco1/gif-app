import { getByRole, render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
//import { GifGridItem } from "../../components/GifGridItem";
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

        const mock_gifs = [{
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
            data: mock_gifs,
            loading: false
        });

        const category = 'One Piece';
        render(<GifGrid categtory={category}/>);

        // getByText('Loading...) will throw an error 'cause the text does not exist
        // In that way we must check the unexistence on other way

        // 1- queryByText will return null if the text does not exist
        expect(screen.queryByText('Loading...')).toBeNull()

        // 2- you can expect the error of the getByText
        expect(() => { return screen.getByText('Loading...')}).toThrow();

        // No se porque en GifGrid si le pongo data-testid al componente GifGridItem
        // no me lo agarra el getAllByTestId
        // Lo que hice fue ponerle el data-testid al div principal en el componente GifGridItem
        const gifs = screen.getAllByTestId('GifGridItem');
        expect(gifs.length).toBe(mock_gifs.length);

        // Comprobando cada uno de los gifs

        // Primero recordemos que la variable gifs referencia al div en GifGridItem
        // y que son dos elementos por tanto se acceden como gifs[0] y gifs[1]
        // ademas debemos buscar el <img> dentro de esos div y luego en los img preguntar por
        // las variables src para la url y alt para el titulo

        const img1 = getByRole(gifs[0], 'img');
        expect(img1.getAttribute('src')).toBe(mock_gifs[0].url);
        expect(img1.alt).toBe(mock_gifs[0].title);

        const img2 = getByRole(gifs[1], 'img');
        expect(img2.getAttribute('src')).toBe(mock_gifs[1].url);
        expect(img2.alt).toBe(mock_gifs[1].title);

    });

});
