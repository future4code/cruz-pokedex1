export const goToHome = (history) => {
    history.push("/");
  };
  
  export const goToListPokemon = (history) => {
    history.push("/listpokemon");
  };

  export const goToDetails = (history, id) => {
    history.push(`/listpokemon/${id}`);
  };