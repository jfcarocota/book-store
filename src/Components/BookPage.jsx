import { Container, Image, Header, Segment } from 'semantic-ui-react'

const impactColor = '#af7217';

const pStyle = {
  fontStyle:'italic'
}

const BookPage = ()=>{
  return(
    <Segment size='massive' inverted>
      <Container>
        <Header inverted textAlign='center' size='medium'>
          <p style={{...pStyle}}>
          ¡ <em style={{color:`${impactColor}`}}>EVITA</em> QUE TE MANIPULEN CON EL PROGRAMA TRUCOS DE PSICOLOGÍA,
            APRENDE A IDENTIFICAR Y A DEFENDERTE DE UN MANIPULADOR/A EN POCAS SEMANAS!
          </p>
        </Header>
        <Header as='h4' inverted textAlign='center'>
          <p style={{...pStyle}}>
          <em style={{color:`${impactColor}`}}>Aplica para</em> cualquier tipo de relación 
          (pareja,familia,amigos,trabajo,conocidos)
          </p>
        </Header>
        <Image
          src='https://imakersagency.com/wp-content/uploads/2023/11/mockup-principal-de-trucos.webp'
          as='a'
          size='large'
          href='https://pay.hotmart.com/K82565366K?off=rw6atdqj&checkoutMode=10&offDiscount=50DESCUENTO&bid=1700158152147'
          target='_blank'
          fluid
          centered
        />
        <Header as='h3' inverted textAlign='center'>
          <p style={{...pStyle}}>
          <strong style={{color:`${impactColor}`}}>No importa </strong>
            tu tipo de personalidad, edad o género,
          aprender de psicología oscura es para todo el mundo.
          </p>
        </Header>
      </Container>
    </Segment>
  );
}

export default BookPage;