import { CATFACT_SUB_URL } from "src/common/constants";
import { axiosApi } from "./axiosApi";

export type CatFact = {
  fact: string;
  length: number;
};

export async function getCatFact() {
  // return 타입이 왜 Promise로 인식하는 건지 이해불가능
  try {
    // return await axios.get<CatFact>("https://catfact.ninja/fact");
    const result = await axiosApi.get<CatFact>(CATFACT_SUB_URL.fact);
    console.log("getCatFact", result);
    const { data } = result;
    console.log("getCatFact data", data);
    return data;
  } catch (error) {
    throw new Error(`error`);
    // console.error(error);
  }
}

type LoginParm = {
  id: string;
  pw: string;
};
export async function login(loginParam: LoginParm) {
  try {
    const result = await axiosApi.post("/login", loginParam, {
      withCredentials: true,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}

type ListParam = {
  page: number;
  filter: string;
};

export async function getList(listParams: ListParam) {
  try {
    const result = await axiosApi.get("/list", {
      params: listParams,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
