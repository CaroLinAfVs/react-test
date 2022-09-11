import { useState } from "react";
import MiApi from "./componentes/MiApi";


function App() {
  const [habitat, setHabitat] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="App">
      <h1>Animal List</h1>
      <div className="inputFilter">
          <p>Enter their habitat</p>
          <p><span>(Write with capital lleter)</span></p>
          <input className="input"
            onChange={(e) => setHabitat(e.target.value)}
            placeholder="Desert,Rivers,Forest..."
          /> 
          <p>Enter the type of animal</p>
          <p><span>(Write with capital lleter)</span></p>
          <input className="input"
            onChange={(e) => setType(e.target.value)}
            placeholder="Reptile,Mammal,Bird..."
          />
        
      </div>

      <MiApi sort={sort} habitat={habitat} type={type} />
    </div>
  );
}

export default App;
