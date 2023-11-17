import { Segment, Header, Container } from 'semantic-ui-react'

const pStyle = {
  textAlign: 'justify'
}

const Footer = ()=> {
  return (
    <Segment inverted size='small'>
      <Container textAlign='center'>
        <Header inverted content='TODOS LOSM DERECHOS RESERVADOS' size='tiny'/>
        <Header inverted content='©2023 Computer Graphics Laboratory' size='tiny'/>
        <p style={{...pStyle}}>
        “Este producto es comercializado con el apoyo de Hotmart. 
        La plataforma no realiza un control editorial previo de los productos vendidos,
         ni evalúa el tecnicismo y la experiencia de quienes los elaboran. 
         La existencia de un producto y su adquisición, 
         a través de la plataforma, no puede considerarse garantía de calidad de contenido y resultado,
          en ningún caso. Al adquirirlo, el comprador declara conocer esta información. 
          Puedes acceder a los términos y políticas de Hotmart <a href='https://hotmart.com/es/legal'>aquí</a> , 
          incluso antes de finalizar la compra «.
        </p>
      </Container>
    </Segment>
  );
};

export default Footer;

