import NavBaR from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBaR texto='soy un texto'/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
