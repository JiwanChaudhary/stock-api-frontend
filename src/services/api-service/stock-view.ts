import { isAxiosError } from "axios";
import httpClient from "../axios-service";
import { api } from "../end-point/api.endpoints";
import { useQuery } from "@tanstack/react-query";
import { StockListProps } from "./stock-list";

const getStockView = async (symbol: string) => {
  try {
    const res = await httpClient.get<StockListProps>(
      api.stock.detailView(symbol.toUpperCase())
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

export const useGetStockView = (symbol: string) => {
  return useQuery({
    queryKey: [api.stock.detailView, symbol],
    queryFn: () => getStockView(symbol),
    select: (data) => data?.data,
    enabled: !!symbol,
  });
};
