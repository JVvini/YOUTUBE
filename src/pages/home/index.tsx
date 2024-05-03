
import Categoria from "../../components/categoria";
import VideoComponent from "../../components/videoComponent";
import { Container, } from "../home/styles";

interface IProps {
    openMenu: boolean;
}


function Home( {openMenu}: IProps ){
    return ( 
       
            <Container openMenu={openMenu}>
                
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                
            </Container>
               
                
    )
} 
export default Home;