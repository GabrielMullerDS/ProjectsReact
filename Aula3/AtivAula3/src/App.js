import './App.css';
import Comida from './Contents/Comida';

function App() {
  return (
    <div>
      <Comida titulo='Abará'
      desc='O abará é um bolinho de feijão típico da Bahia.'
      link='https://www.tudogostoso.com.br/receita/13701-abara.html'/>
      <Comida titulo='Arroz-doce'
      desc='É uma sobremesa deliciosa, temperada com especiarias.'
      link='https://www.tudogostoso.com.br/receita/312-arroz-doce.html'/>
      <Comida titulo=''
      desc=''
      link='https://www.penaestrada.blog.br/comidas-tipicas-do-brasil/'/>
      <Comida titulo=''
      desc=''
      link='https://www.penaestrada.blog.br/comidas-tipicas-do-brasil/'/>
    </div>
    );
}

export default App;
