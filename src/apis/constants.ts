export const POKE = {
  GET_ALL: (limit: number) => `/pokemon?limit=${limit}`,
  GET_BY_ID: (id: number) => `/pokemon/${id}`,
};
