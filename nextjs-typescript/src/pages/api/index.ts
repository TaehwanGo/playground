import axios from "axios";

type CatFact = {
  fact: string;
  length: number;
};

export const catFactData: CatFact = async () => {
  try {
    const result = await axios.get("https://catfact.ninja/fact");
  } catch (error) {
    console.error(error);
  }
  return result as CatFact;
};
