import styled from "../styles/Details.module.css";
import Graph from "../src/Components/Graph";
import Radial from "../src/Components/Radial";
import { Colors } from "../styles/Colors/color";

export default function Details({ pokemon }) {
  const types = [];
  const setColorsByType = () => {
    pokemon.types.map((i) => {
      Colors.map((item) => {
        console.log(i.type.name, item.name);
        if (i.type.name == item.name) {
          let test = {
            name: item.name,
            color: item.color,
          };
          types.push(test);
        }
      });
    });

    console.log("TIPO", types);
  };
  setColorsByType();

  return (
    <>
      <div
        className={styled.container}
        style={{ backgroundColor: types.length > 0 ? types[0].color : "red" }}
      >
        <a href="/all" className={styled.back}>
          Voltar
        </a>
        <div className={styled.card}>
          <img />
          <img
            className={styled.img}
            // src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
          />
          <h2 className={styled.text}>{pokemon.name}</h2>
          <p className={styled.text}>
            <strong>Peso:</strong> {pokemon.weight} KG
          </p>
          <p className={styled.text}>
            <strong>Altura:</strong> {pokemon.height}
          </p>
          <div className={styled.typeContainer}>
            <h2>Tipo:</h2>
            <div className={styled.typeRow}>
              {types.length > 0
                ? types.map((type) => {
                    console.log(type);
                    return (
                      <p
                        className={styled.type}
                        style={{ backgroundColor: type.color }}
                      >
                        {type.name}
                      </p>
                    );
                  })
                : null}
            </div>
          </div>

          <div className={styled.limit}>
            <Graph stast={pokemon.stats} color={types[0].color} />

            {/* <Radial stast={pokemon.stats} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0"
  );
  const data = await res.json();

  const paths = data.results.map((poke) => {
    return { params: { name: poke.name } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { name } = context.params;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};
