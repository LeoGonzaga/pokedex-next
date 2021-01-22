import Card from "../src/Components/Card";
import styled from "../styles/All.module.css";
function AllPokemons({ pokemons }) {
  return (
    <>
      <div className={styled.title}>
        <img
          width="200"
          src="https://i.pinimg.com/originals/5a/a3/53/5aa353f4889b591abe7a11c5e25db351.gif"
        />
      </div>

      <div className={styled.container}>
        {pokemons.results.map((pokemon, index) => (
          <>
            {/* <Card
              name={pokemon.name}
              photo={`https://pokeres.bastionbot.org/images/pokemon/${
                index + 1
              }.png`}
            /> */}

            <Card
              name={pokemon.name}
               photo={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
                 index + 1
               }.gif`}
              //photo={`https://pokeres.bastionbot.org/images/pokemon/${
                //index + 1
              //}.png`}
            />
          </>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0"
  );
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}

export default AllPokemons;
