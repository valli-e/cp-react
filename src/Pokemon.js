import React, { useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState("");

  function handleInput(event) {
    const newVal = even.target.value;
    setPokemon(newVal);
  }

  function handleClick() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        setData({ error: "pokemon not found" });
      });
  }
  return (
    <div>
      <input type="text" value={pokemon} onChange={handleInput} />
      <button onClick={handleClick}>Search</button>

      {data && !data.error && (
        <div>
          <h1>{data.name} </h1>
          <img src={data.sprites.front_default} alt="" />
          <p>{data.abilities[0].ability.name}</p>
          <p> {data.abilities[1].ability.name}</p>
        </div>
      )}
      {data && data.error && (
        <div>
          <h1>{data.erorr}</h1>
        </div>
      )}
    </div>
  );
}
