import { instance } from "../server/axios/instance";
import { POKE } from "./constants";

const getPokeBaseUrls = async (limit: number) => {
  return await instance.get(POKE.GET_ALL(limit));
};

const getPokeById = async (id: number) => {
  return await instance.get(POKE.GET_BY_ID(id));
};

export { getPokeBaseUrls, getPokeById };
