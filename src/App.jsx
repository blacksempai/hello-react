import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation'
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
      <div className="App" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundRepeat: 'repeat',
      }}>
        <div className="container">
          <Header />
          <Navigation />
          <Content data={props.data}/>
        </div>
      </div>
  );
}

export default App;
