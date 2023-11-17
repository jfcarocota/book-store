import Slider from "react-slick";
import { Container, Header, Image } from 'semantic-ui-react'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2100,
  speed: 1000
};

const Carousel = ()=> {

  return (
    <Container>
      <Header inverted textAlign="center" size="huge">¿QUÉ  LIBROS TRAE EL PROGRAMA?</Header>
      <Slider {...settings}>
        <div>
        <Image
            src='https://imakersagency.com/wp-content/uploads/2023/11/mockup-cuadrado-psicologia-1.webp'
            as='a'
            size='large'
            fluid
            centered
          />
        </div>
        <div>
        <Image
            src='https://imakersagency.com/wp-content/uploads/2023/07/5.webp'
            as='a'
            size='large'
            fluid
            centered
          />
        </div>
        <div>
        <Image
            src='https://imakersagency.com/wp-content/uploads/2023/07/3.webp'
            as='a'
            size='large'
            fluid
            centered
          />
        </div>
        <div>
        <Image
            src='https://imakersagency.com/wp-content/uploads/2023/07/4.webp'
            as='a'
            size='large'
            fluid
            centered
          />
        </div>
      </Slider>
    </Container>
  );
}

export default Carousel;