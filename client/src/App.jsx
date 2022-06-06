import './App.css';
import ContentContainer from './components/content/ContentContainer';
import Header from './components/header/Header';
import NavigationContainer from './components/navigation/NavigationContainer';

const App = (props) => {
  return (
      <div className="container">
        <Header />
        <NavigationContainer />
        <ContentContainer/>
      </div>
  );
}

export default App;
