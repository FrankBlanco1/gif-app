import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test for the useFetchGifs custom hooks', () => {

    test('Should return the initial state', () => {

        const {result} = renderHook(() => useFetchGifs('One Piece'));    
        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

});
