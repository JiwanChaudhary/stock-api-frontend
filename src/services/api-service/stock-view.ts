import { isAxiosError } from "axios";
import httpClient from "../axios-service";
import { api } from "../end-point/api.endpoints";
import { useQuery } from "@tanstack/react-query";

export interface StockViewProps {
  symbol: string;
  name: string;
  latest_price: number;
  rf_predicted_action: string;
  xgb_predicted_action: string;
  historical_data: HistoricalDataProps[];
}

export interface HistoricalDataProps {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  rsi: number;
  sma_5: number;
  sma_10: number;
  sma_20: number;
  bb_upper: number;
  bb_lower: number;
  bb_width: number;
}

const getStockView = async (symbol: string) => {
  try {
    const res = await httpClient.get<StockViewProps>(
      api.stock.detailView(symbol)
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
