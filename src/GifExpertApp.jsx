import { useState } from "react";

///import { AddCategory } from "./components/AddCategory"
///import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    //const [categories, setCategories] = useState(["One Punch", "Segona categoria"]);
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategoria = (value) => {
        if ( categories.includes(value)){ 
            alert('Ja existeix la categoria');
            return; 
        }

        setCategories([value, ...categories ])
    }
    
	return (
		<>
			<h1>GifExperApp</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategoria(value) }
            />

            { 
                categories.map( ( categoria ) => ( 
                    <GifGrid 
                        key={ categoria } 
                        categoria={ categoria }
                    />
                )) 
            }
		</>
	);
};