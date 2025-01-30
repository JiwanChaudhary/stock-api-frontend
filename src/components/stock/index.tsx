'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '../ui/button';
import { useGetStockView } from '@/services/api-service/stock-view';
import LineChart from './line-chart';
import { cn } from '@/lib/utils';

const StockPage = () => {
    const params = useParams()
    const router = useRouter()
    const stockParam = params?.stock

    const getFormattedDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const date = new Date();

    const { data: stockDetail, error, isLoading } = useGetStockView(stockParam as string)

    if (error) return <p>The stock symbol "{stockParam}" is not valid. Please check the symbol and try again.</p>

    return (
        <section className='container py-8'>
            {isLoading && <p>Loading...</p>}
            <div className='grid grid-cols-3 border-b pb-2 mb-2'>
                <Button type='button' variant='outline' className='w-max' onClick={() => router.back()}>Back</Button>
                <p className='text-center text-2xl font-medium'>{stockDetail?.symbol?.toUpperCase() ?? stockParam}</p>
                <p className='text-center text-2xl font-medium'>Latest Price: {stockDetail?.latest_price?.toFixed(3)}</p>
            </div>
            {/* chart */}
            <LineChart stockDetail={stockDetail} />

            <div className='flex flex-col items-center mt-4'>
                <p className='text-2xl text-gray-950 font-semibold pb-2'>Prediction for date {getFormattedDate(date)}:</p>
                <div className='flex flex-col gap-4'>
                    <p className=' text-lg flex justify-between items-center gap-2'>Random Forest Prediction: <span className={cn(stockDetail?.rf_predicted_action === 'Buy' ? 'bg-green-600' : 'bg-red-500', 'px-4 py-2 rounded-xl text-white')}>{stockDetail?.rf_predicted_action}</span></p>
                    <p className=' text-lg flex justify-between items-center gap-2'>XGBoost Prediction: <span className={cn(stockDetail?.xgb_predicted_action === 'Buy' ? 'bg-green-600' : 'bg-red-500', 'px-4 py-2 rounded-xl text-white')}>{stockDetail?.xgb_predicted_action}</span></p>
                </div>
            </div>

            {/* <div className='grid grid-cols-3 items-start justify-start gap-4 mt-4'>
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
            </div> */}
        </section>
    )
}

export default StockPage