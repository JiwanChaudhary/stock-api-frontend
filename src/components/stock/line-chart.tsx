import React from 'react'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from 'react-chartjs-2';
import { StockViewProps } from '@/services/api-service/stock-view';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = ({ stockDetail }: { stockDetail: StockViewProps | undefined }) => {

    const labels = stockDetail?.historical_data.map((data) => data.date) ?? [];

    return (
        <div className='h-[750px] w-full'>
            <Line options={
                {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top' as const,
                            title: {
                                color: 'white',
                                display: true,
                                font: {
                                    size: 18,
                                    weight: 500,
                                }
                            },
                            labels: {
                                color: 'white',
                                font: {
                                    size: 14,
                                    weight: 500,
                                }
                            }
                        },
                        title: {
                            display: true,
                            position: 'top',
                            text: `${stockDetail?.name?.toUpperCase()} Stock Price from ${stockDetail?.historical_data[0]?.date} to ${stockDetail?.historical_data[stockDetail?.historical_data.length - 1]?.date}`,
                            font: {
                                size: 18,
                                weight: 500,
                            },
                            color: 'white',
                        },
                    },
                    scales: {
                        x: {
                            // type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Date',
                                color: 'black',
                                font: {
                                    size: 20,
                                    weight: 500,
                                },
                            },
                            ticks: {
                                color: 'white',
                                font: {
                                    size: 14,
                                    weight: 500,
                                }
                            }
                        },
                        y: {
                            // type: 'linear',
                            position: 'left',
                            title: {
                                display: true,
                                text: 'Price',
                                color: 'black',
                                font: {
                                    size: 20,
                                    weight: 500,
                                },
                            },
                            ticks: {
                                color: 'white',
                                font: {
                                    size: 14,
                                    weight: 500,
                                }
                            }
                        }
                    }
                }
            }
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Close Price',
                            data: stockDetail?.historical_data.map((data) => data.close) ?? [],
                            fill: true,
                            borderColor: 'white',
                            backgroundColor: 'yellow',
                        },
                        {
                            label: 'Open Price',
                            data: stockDetail?.historical_data.map((data) => data.open) ?? [],
                            fill: true,
                            borderColor: 'white',
                            backgroundColor: 'blue',
                        },
                        {
                            label: 'High Price',
                            data: stockDetail?.historical_data.map((data) => data.high) ?? [],
                            fill: true,
                            borderColor: 'white',
                            backgroundColor: 'green',
                        },
                        {
                            label: 'Low Price',
                            data: stockDetail?.historical_data.map((data) => data.low) ?? [],
                            fill: true,
                            borderColor: 'white',
                            backgroundColor: 'red',
                        },
                    ],
                }} />
        </div>
    )
}

export default LineChart