import { CATFACT_URL } from "@common/constants";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: CATFACT_URL,
  timeout: 2500,
});
