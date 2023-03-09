import './App.css';
import Header from './header';
import { BrowserRouter} from 'react-router-dom';
import Router from './Router.js'


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Router/>
    </BrowserRouter>
  );
}

export default App;
