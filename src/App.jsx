import './App.css';
import Content from './content/Content';
import Header from './header/Header';
import Navigation from './navigation/Navigation'

const App = () => {
  return (
    <div className="App"  style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
      backgroundRepeat: 'repeat',
    }}>
      <div className="container">
        <Header />
        <Navigation />
        <Content />
      </div>
    </div>
  );
}

export default App;
