import {createRoot} from "react-dom/client"; 
import { GifExpertApp } from "./GifExpertApp";

import './styles.css';
/*
se creo el proyecto con npx create-react-app my-app



*/



const root = createRoot(document.querySelector('#root'));


root.render(<GifExpertApp />); 