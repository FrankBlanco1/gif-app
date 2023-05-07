import { getByRole, render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components/GifGridItem";

describe('Testing the GifGridItem component', () => {

    test('Must show the component correctly', () => {

        const title = 'test title';
        const url = 'https://localhost/test.jpg';

        render(<GifGridItem
            title={title}
            url={url}
        />);

        expect(screen.getByText(title)).toBeInTheDocument();

    });

    test('Testing the image ', () => {

        const title = 'test title';
        const url = 'https://localhost/test.jpg';

        render(<GifGridItem
            title={title}
            url={url}
        />);

        const img = screen.getByRole('img');

        expect(img.src).toBe(url);
        expect(img.alt).toBe(title);

    });

});
