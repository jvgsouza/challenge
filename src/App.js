import './App.css';
import Banner from './components/banner/banner';
import Contact from './components/contact/contact';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import {HomeProvider} from './context/contextHome';

const  App = () => {
  return (
      <HomeProvider>
        <Header/>
        <Banner/>
        <Content/>
        <Contact/>
        <Footer/>
      </HomeProvider>
  );
}

export default App;
