export const api = {
  stock: {
    list: "/stocks/",
    detailView: (symbol: string) => `/stocks/${symbol}/`,
    search: (query: string) => `/stock/?search=${query}`,
  },
};
