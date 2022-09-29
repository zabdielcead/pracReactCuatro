import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs"
import { GifGridItem } from "./GifGridItem";




export const GifGrid = ({category}) => {

const { images, isLoading } = useFetchGifs(category);

console.log({images, isLoading});


    //const [images, setImages] = useState([]);


// const getImages = async() => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
// }


// useEffect( () => {
//      getImages();

//   }, []);

  return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                ? ( <h2>Cargando...</h2>)
                : null
            }
            <div className="card-grid">
                    {
                        images.map( (image) => (
                            <GifGridItem  key={ image.id } 
                                {...image}
                            />
                        ))
                    }
            </div>
           
        </>

  )
}
