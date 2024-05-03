import { 
    ChannelImage,
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from "../videoComponent/styles";



function VideoComponent( ) {
    return (
        <Container>
            <ImageBanner src="https://th.bing.com/th/id/OIP.uqWIge8Yo0psA8D1dNnC0wAAAA?rs=1&pid=ImgDetMain"/>
            <TitleContainer>
                <ChannelImage>
                    pv
                </ChannelImage>
                <TextContainer>
                    <Title>Marilia Mendoça - Me descupe Mas eu Sou fiel</Title>
                    <TextCard>Marilia Mendoça</TextCard>
                    <TextCard>109 mi de visualizações - há 2 meses</TextCard>
                </TextContainer>

            </TitleContainer>
        </Container>
    )
    
}

export default VideoComponent;
