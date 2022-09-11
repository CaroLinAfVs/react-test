import React, { useState, useEffect } from "react";
import Card from "./Card";

function MiApi(props) {
  const [animals, setAnimals] = useState([]);
  const [activeTime, setActiveTime] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function getAnimals() {
      try {
        const response = await fetch(
          "https://zoo-animal-api.herokuapp.com/animals/rand/10"
        );
        const data = await response.json();
        console.log(data);
        setAnimals(data);
      } catch (error) {
        alert(error);
      }
    }

    getAnimals();
  }, []);

  return (
    <div>
      <ul>
        {animals
          .filter((animal) => {
            if (!animal.habitat.includes(props.habitat)) {
              return false;
            }

            if (!animal.animal_type.includes(props.type)) {
              return false;
            }

            return true;
          })
          .sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          })
          .map((animal) => (
            <li className="lista" key={animal.id}>
              <Card title={animal.name} image={animal.image_link} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MiApi;
