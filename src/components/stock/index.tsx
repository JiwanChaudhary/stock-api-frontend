'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from 'react-chartjs-2';
import { Button } from '../ui/button';
import { useGetStockView } from '@/services/api-service/stock-view';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement, LineElement);

const StockPage = () => {
    const params = useParams()
    const router = useRouter()
    const stock = params?.stock

    const { data: stockDetail } = useGetStockView(stock as string)

    console.log(stockDetail, "detail of stock");


    const labels = Array.from({ length: 50 }, (_, i) => `Day ${i + 1}`);

    return (
        <section className='container py-8'>
            <div className='grid grid-cols-3 border-b pb-2 mb-2'>
                <Button type='button' variant='outline' className='w-max' onClick={() => router.back()}>Back</Button>
                <p className='text-center text-2xl font-medium'>{stock}</p>
            </div>
            <div className='h-[700px] w-full'>
                {/* <Line
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom',
                                title: {
                                    display: true,
                                    text: 'Date',
                                    color: 'white',
                                    font: {
                                        size: 24,
                                        weight: 500
                                    },
                                }
                            },
                            y: {
                                type: 'linear',
                                position: 'left',
                                title: {
                                    display: true,
                                    text: 'Price',
                                    color: 'white',
                                    font: {
                                        size: 24,
                                        weight: 500
                                    },
                                    // weight: 500
                                }
                            }
                        },
                        color: 'white',
                    }}
                    data={{
                        datasets: [{
                            label: 'Stock Price',
                            data: [
                                { x: 1, y: 150 },
                                { x: 2, y: 152 },
                                { x: 3, y: 148 },
                                { x: 4, y: 149 },
                                { x: 5, y: 151 },
                                { x: 6, y: 153 },
                                { x: 7, y: 155 },
                                { x: 8, y: 154 },
                                { x: 9, y: 156 },
                                { x: 10, y: 157 },
                                { x: 11, y: 158 },
                                { x: 12, y: 159 },
                                { x: 13, y: 160 },
                                { x: 14, y: 161 },
                                { x: 15, y: 162 },
                                { x: 16, y: 163 },
                                { x: 17, y: 164 },
                                { x: 18, y: 165 },
                                { x: 19, y: 166 },
                                { x: 20, y: 167 },
                                { x: 21, y: 168 },
                                { x: 22, y: 169 },
                                { x: 23, y: 170 },
                                { x: 24, y: 171 },
                                { x: 25, y: 172 },
                                { x: 26, y: 173 },
                                { x: 27, y: 174 },
                                { x: 28, y: 175 },
                                { x: 29, y: 176 },
                                { x: 30, y: 177 },
                                { x: 31, y: 178 },
                                { x: 32, y: 179 },
                                { x: 33, y: 180 },
                                { x: 34, y: 181 },
                                { x: 35, y: 182 },
                                { x: 36, y: 183 },
                                { x: 37, y: 184 },
                                { x: 38, y: 185 },
                                { x: 39, y: 186 },
                                { x: 40, y: 187 },
                                { x: 41, y: 188 },
                                { x: 42, y: 189 },
                                { x: 43, y: 190 },
                                { x: 44, y: 191 },
                                { x: 45, y: 192 },
                                { x: 46, y: 193 },
                                { x: 47, y: 194 },
                                { x: 48, y: 195 },
                                { x: 49, y: 196 },
                                { x: 50, y: 197 },
                            ],
                            borderColor: 'white',
                            backgroundColor: 'blue',
                            fill: true,
                        }],
                    }}
                /> */}
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
                                position: 'bottom',
                                text: `${stock} Stock Price of last 1 month`,
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
                                    color: 'white',
                                    font: {
                                        size: 18,
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
                                    color: 'white',
                                    font: {
                                        size: 18,
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
                                label: stock as string,
                                data: [
                                    150, 152, 148, 149, 151, 153, 155, 154, 156, 157,
                                    158, 159, 160, 161, 162, 163, 164, 165, 166, 167,
                                    168, 169, 170, 171, 172, 173, 174, 175, 176, 177,
                                    178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
                                    188, 189, 190, 191, 192, 193, 194, 195, 196, 197
                                ],
                                fill: true,
                                borderColor: 'white',
                                backgroundColor: 'blue',
                            },
                        ],
                    }} />
            </div>
            <div className='grid grid-cols-3 items-start justify-start gap-4 mt-4'>
                <aside className='flex flex-col items-center gap-y-2'>
                    <p>Model Alpha</p>
                    <div className='flex gap-2'>
                        <Button className='bg-red-500 hover:bg-red-600'>Buy</Button>
                        <Button className='bg-green-600 hover:bg-green-700'>Sell</Button>
                    </div>
                </aside>
                <aside className='flex flex-col gap-y-2 items-center'>
                    <p>Model Beta</p>
                    <div className='flex gap-2'>
                        <Button className='bg-red-500 hover:bg-red-600'>Buy</Button>
                        <Button className='bg-green-600 hover:bg-green-700'>Sell</Button>
                    </div>
                </aside>
                <aside className='flex flex-col items-center gap-y-2'>
                    <p>Model Gamma</p>
                    <div className='flex gap-2'>
                        <Button className='bg-red-500 hover:bg-red-600'>Buy</Button>
                        <Button className='bg-green-600 hover:bg-green-700'>Sell</Button>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default StockPage