import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation'

const App = (props) => {
  return (
      <div className="container">
        <Header />
        <Navigation />
        <Content/>
      </div>
  );
}

export default App;
