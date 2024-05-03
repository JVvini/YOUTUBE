import React from "react";
import {  Container, HedButton, HedIcon } from '../categoria/styles'



const item = [
   {name:'Texto'}, {name:'Jogos'}, {name:'Javascript'},  {name:'Matematica'}, {name:'Noticias'}, {name:'Astronomo'},
   {name:'Biologia'},{name:'Musica'}, {name:'Eletronica'},
];

function Categoria(){
    return(
        <Container>
            {item.map((item) => (
            <HedIcon>
                    <HedButton >{item.name}</HedButton>

            </HedIcon>
            ))}

        </Container>
    
       
    )
}
export default Categoria;