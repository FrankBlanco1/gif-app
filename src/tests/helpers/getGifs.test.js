import { getGifs } from "../../helpers/getGifs";

describe('Testing the getGifs.js file', () => {

    test('Must return 10 elements from the gifs', async() => {

        const gifs = await getGifs('One Piece');
        expect(gifs.length).toBe(10);

    });

    test('Must return 0 elements from no category', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });

});
