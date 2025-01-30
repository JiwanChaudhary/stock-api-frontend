'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import DataTable from './table'
// import { useGetStockList } from '@/services/api-service/stock-list'
import { useRouter } from 'next/navigation'

const HomePage = () => {
    const [search, setSearch] = React.useState('')
    const router = useRouter()
    // const { data } = useGetStockList()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (search === '') return;
        router.push(`/stock/${search}`);
    };

    return (
        <section className='container pt-8'>
            <h1 className='text-white text-3xl text-center tracking-wide font-bold'>Stock Prediction</h1>
            <form onSubmit={handleSubmit} className='flex justify-center border border-white rounded-2xl p-2 mt-4'>
                <Input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Stock'
                    className='outline-none text-white text-xl border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none shadow-none placeholder:text-white'
                />
                <Button type='submit' className='bg-purple-800 hover:bg-purple-800 text-xl'>
                    Search
                </Button>
            </form>

            <div className='my-2'>Suggested stock symbols: <span>'TSLA', 'AAPL', 'GOOGL', 'MSFT', 'AMZN'</span></div>

            {/* <DataTable data={data} /> */}
        </section>
    )
}

export default HomePage