import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return <Fragment>
        <h2>GifExpertApp</h2>

        <AddCategory 
            setCategories={setCategories}
        />

        <hr />

        <ol>
            {
                categories.map((category, i) => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    );
                })
            }
        </ol>

    </Fragment>

}