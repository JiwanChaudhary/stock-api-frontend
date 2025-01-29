import { isAxiosError } from "axios";
import httpClient from "../axios-service";
import { api } from "../end-point/api.endpoints";
import { useQuery } from "@tanstack/react-query";

export interface StockListProps {
  symbol: string;
  name: string;
  price: number;
  high: number;
  low: number;
  open: number;
  close: number;
}

const getStockList = async () => {
  try {
    const res = await httpClient.get<StockListProps[]>(api.stock.list);
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("Something went wrong! Try again later");
    }
  }
};

export const useGetStockList = () => {
  return useQuery({
    queryKey: [api.stock.list],
    queryFn: getStockList,
    select: (data) => data?.data,
  });
};
