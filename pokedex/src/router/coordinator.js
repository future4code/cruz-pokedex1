export const goToHome = (history) => {
    history.push("/");
  };
  
  export const goToListPokemon = (history) => {
    history.push("/listpokemon");
  };

  export const goToDetails = (history, id) => {
    history.push(`/detailspokemon/${id}`);
  };

  export const goToBack = (history) => {
    history.goBack()
  };