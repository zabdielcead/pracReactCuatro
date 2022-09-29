


/* recursos 
https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
https://es.reactjs.org/docs/faq-structure.html
*/

import { useState} from 'react';
import { AddCategory } from './components';
import { GifGrid } from './components';

export const GifExpertApp = () => {
//ctrl space  usestate
    const [categories, setCategories] = useState(['one ponch']);

    const onAddCategory = (newCategory) => {

            if( categories.includes(newCategory) ) return;

           setCategories( [newCategory, ...categories ] );
           
    }

    return (
        <>
            {/* titulo */}
            <h1>
                <AddCategory    
                    // setCategories={setCategories}
                    onNewCategory={(value) => onAddCategory(value)}
                />
            </h1>
            {/* input */}
            <button onClick={onAddCategory}>agregar</button>
            
                { categories.map( (category) => (
                    // return <li key={ category }>{category}</li>

                        <GifGrid    key={category}  
                                    category={category} />
                ) ) }
             
            
            {/* listado de tarjetas */}
        </>
    );
}