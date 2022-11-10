import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'; 

function App() {


  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Ir na academia', done: true}
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

          <AddArea/>

         

         {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))} 
      </C.Area>
    </C.Container>
  );
}

export default App;
