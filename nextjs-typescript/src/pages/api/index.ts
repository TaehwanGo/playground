import axios, { AxiosResponse } from "axios";

export type CatFact = {
  fact: string;
  length: number;
};

export async function getCatFact() {
  // return 타입이 왜 Promise로 인식하는 건지 이해불가능
  try {
    const result = await axios.get<CatFact>("https://catfact.ninja/fact");
    console.log("getCatFact", result);
    const { data } = result;
    console.log("getCatFact data", data);
    return data;
  } catch (error) {
    throw new Error(`error`);
    // console.error(error);
  }
}
