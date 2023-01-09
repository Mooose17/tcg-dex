import axios from "axios";

export const GetCardsByName = async (name) => {
  try {
    const res = await axios.get(
      `https://api.pokemontcg.io/v2/cards/?q=name:${name}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
