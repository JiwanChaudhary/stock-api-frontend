import { isAxiosError } from "axios";
import httpClient from "../axios-service";
import { api } from "../end-point/api.endpoints";
import { useQuery } from "@tanstack/react-query";
import { StockListProps } from "./stock-list";

const getStockSearch = async (query: string) => {
  try {
    const res = await httpClient.get<StockListProps>(
      api.stock.search(query.toUpperCase())
    );
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("Something went wrong! Try again later");
    }
  }
};

export const useGetStockSearch = (query: string) => {
  return useQuery({
    queryKey: [api.stock.search, query],
    queryFn: () => getStockSearch(query),
    select: (data) => data?.data,
  });
};