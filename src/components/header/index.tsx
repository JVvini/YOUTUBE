
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import NotificationIcon from '../../assets/sino.png';
import VideoIcon from '../../assets/video.png';
import { ButtonContainer, ButtonIcon, Container,  HeaderButton, LogoContainer, SearchButton, SearchContainer, SearchInput, SearchInputContainer } from '../header/styles';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void,
}

function Header({openMenu, setOpenMenu }: IProps){
    const { login } = useContext(UserContext);

    const navigate = useNavigate();

    return(
        

        <Container>
            <LogoContainer>
                <ButtonContainer onClick={()=> setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{cursor:'pointer', width:'100px'}}
                alt=''
                src={Logo}/>
           </LogoContainer>
           <SearchContainer>
            <SearchInputContainer>
                <SearchInput placeholder="Pesquisa"/>
            </SearchInputContainer>
            <SearchButton >
                <ButtonIcon alt="" src={SearchIcon}/>
            </SearchButton>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt=""  src={MicIcon}/>
            </ButtonContainer>

           </SearchContainer>

           <HeaderButton >
             <ButtonContainer margin='0 0 0 10px'>
                  <ButtonIcon alt=""  src={VideoIcon}/>
              </ButtonContainer>

             <ButtonContainer margin='0 0 0 10px'>
                 <ButtonIcon alt=""  src={NotificationIcon}/>
             </ButtonContainer>
             
            {login?
                <ButtonContainer margin='0 0 0 10px'>
                    p
                </ButtonContainer>

                :

                <button onClick={()=> navigate('/login')}>Fazer Login</button>
            }
           </HeaderButton>
        </Container>
  
  
    )
};

export default Header;
