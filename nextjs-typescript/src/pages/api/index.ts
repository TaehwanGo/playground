import axios, { AxiosResponse } from "axios";
import { CATFACT_URL } from "../../common/constants";

export type CatFact = {
  fact: string;
  length: number;
};

export async function getCatFact() {
  // return 타입이 왜 Promise로 인식하는 건지 이해불가능
  try {
    // return await axios.get<CatFact>("https://catfact.ninja/fact");
    const result = await axios.get<CatFact>(CATFACT_URL);
    console.log("getCatFact", result);
    const { data } = result;
    console.log("getCatFact data", data);
    return data;
  } catch (error) {
    throw new Error(`error`);
    // console.error(error);
  }
}
