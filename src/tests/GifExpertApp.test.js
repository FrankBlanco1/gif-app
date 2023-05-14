import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Testing the GifExpertApp component', () => {

    test('Shold show the component correctly', () => {

        const categories = ['One Piece', 'Dark Souls'];

        render(<GifExpertApp defaultCategories={categories} />);

        const gifGrids = screen.getAllByTestId('GifGrid');
        expect(gifGrids.length).toBe(categories.length);

        //expect(screen.getByRole('heading')).toBe('GifExpertApp');


    });

});
