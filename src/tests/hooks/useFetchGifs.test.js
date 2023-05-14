import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test for the useFetchGifs custom hooks', () => {

    test('Should return the initial state', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Piece'));    
        const {data, loading} = result.current;

        // Esta funcion es para simular cambios en el custom hook
        // Por culpa de la conexion del PDPE ponemos que espere hasta 10 segundos para simular el cambio
        // en este caso es hacer el fetch a la api de gifs

        // Aun esperando este tiempo hay veces en que se parte DPEPDPE 
        await waitForNextUpdate({timeout: 10000});

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('Should return an array of images and the loading property equal to false', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Piece')); 
        await waitForNextUpdate({timeout: 10000});
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });

});
