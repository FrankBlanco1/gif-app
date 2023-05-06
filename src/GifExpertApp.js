import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    // const categories = ['One Piece', 'Dark Souls'];
    const [categories, setCategories] = useState(['One Piece', 'Dark Souls']);

    // const handleAdd = () => {

    //     setCategories((categories) => {
    //         return [...categories, 'HunterXHunter']
    //     });

    // }

    return <Fragment>
        <h2>GifExpertApp</h2>

        <AddCategory 
            setCategories={setCategories}
        />

        <hr />

        <ol>
            {
                // map retorna dos objetos: el elemento y su indice
                // los key deben ser ids unicos, generalmente id de elementos de bases de datos
                categories.map((category, i) => {
                    return <li key={category}>{category}</li>;
                })
            }
        </ol>

    </Fragment>

}