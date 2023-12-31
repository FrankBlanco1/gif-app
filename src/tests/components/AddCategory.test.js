import {render, screen, fireEvent, getByRole } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

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

    test('Should change the text box value', () => {

        const setCategories = () => {};
        const new_text = "Hello World";

        render(<AddCategory setCategories={setCategories}/>)
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target : {value : new_text}});

        expect(input.value).toBe(new_text);

    });

    // Con respecto al video del tutorial:
    // expect(setCategories).not.toHaveBeenCalled() en este expect
    // el setCategory se llama una vez porque el hace los cambios sobre el mismo wrapper (render)
    // Nosotros hacemos render en cada prueba (porque si hacemos uno global nos da palo :( 

    test("Should not post the information on submit 'couse inputValue is empty", () => {

        const setCategories = jest.fn();
        render(<AddCategory setCategories={setCategories}/>);

        const input = screen.getByRole('textbox');
        fireEvent.submit(input);

        // Para saber si se llamo la funcion setCategories
        expect(setCategories).not.toHaveBeenCalled();
        expect(input.value).toBe('');

    });

    test('Should call the setCategory function adn clean the input value', () => {

        const setCategories = jest.fn();
        render(<AddCategory setCategories={setCategories}/>);
        const new_category = 'Dark Souls';

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value : new_category}});

        // Comprobar que cambia el valor del input
        expect(input.value).toBe(new_category);

        fireEvent.submit(input)

        // Conmprobar que llamo al setCategory porque es una categoria valida (no '')
        // y luego pone el valor del input ''
        expect(setCategories).toBeCalledTimes(1);
        expect(input.value).toBe('');

        // Para aseggurar que el argumento del setCategory sea una funcion
        // recordemos que en el componente el setCategories annade una categoria mediante 
        // el useState 
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

    });

});
