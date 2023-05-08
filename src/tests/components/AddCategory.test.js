import {render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/addCategory";

describe("Testing the AddCategory component", () => {

    test('Should show the component correctly', () => {

        // Esta funcion es solo por motivos de testear, no representa el segundo elemento del
        // useState en el componente real
        const setCategories = () => {};

        render(<AddCategory setCategories={setCategories}/>)
        const input = screen.getByRole('textbox');

        // Default value of the input text
        expect(input.value).toBe('');
        expect(input.type).toBe('text');

    });

});