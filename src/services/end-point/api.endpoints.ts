export const api = {
  stock: {
    list: "/stocks/",
    detailView: (symbol: string) => `/stock/${symbol}/`,
    search: (query: string) => `/stock/?search=${query}`,
  },
};
