'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from 'next/navigation'
import { StockListProps } from '@/services/api-service/stock-list'

const DataTable = ({ data: stockData }: { data: StockListProps[] | undefined }) => {

    const router = useRouter()

    const tableCols = [
        'Name',
        'Price',
        'High',
        'Low',
        'Open',
        'Close',
    ]

    return (
        <section className='mt-4'>
            <Table className='border border-white rounded-3xl text-white/90'>
                <TableHeader>
                    <TableRow>
                        {tableCols.map((col, index) => (
                            <TableCell key={index} className='text-white text-xl font-medium'>{col}</TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        stockData?.map((stock, index) => (
                            <TableRow key={index} className='cursor-pointer' onClick={() => router.push(`/stock/${stock.name}`)}>
                                <TableCell>{stock.name}</TableCell>
                                <TableCell>{stock.price}</TableCell>
                                <TableCell>{stock.high}</TableCell>
                                <TableCell>{stock.low}</TableCell>
                                <TableCell>{stock.open}</TableCell>
                                <TableCell>{stock.close}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}

export default DataTable