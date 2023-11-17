import './App.css';
import BookPage from './Components/BookPage'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer';

const App = ()=> {
  const bgColor = '#1b1c1d';
  return(
  <div style={{backgroundColor:`${bgColor}`}}>
    <BookPage/>
    <Carousel/>
    <Footer/>
  </div>
  );
}

export default App;
