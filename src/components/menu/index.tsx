import { ButtonIcon,  Container, MenuItem,} from "../menu/stayles";

import { useNavigate } from "react-router-dom";
import historico from '../../assets/historical.png';
import inicio from '../../assets/home.png';
import Shorts from '../../assets/boton-de-play.png';




const items = [
    {name:'inicio', link:'/' , URL: inicio },
    {name: 'Biblioteca', link: '/library', URL: Shorts},
    {name: 'Historico', link: '/history', URL: historico }
] 



    
interface IProps {
    openMenu: boolean,
}

function Menu({openMenu}: IProps ){
    const navigate = useNavigate();
    
    return( 
        <Container openMenu={openMenu}>
            {items.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonIcon src={item.URL}/>
                
                <span>{item.name}</span>
            </MenuItem>
            ))}
       
        </Container>        
    )
}

export default Menu;