import React,{useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMN } from './Column'

export const BasicTable = () => {
    const columns = useMemo(()=>COLUMN,[])
    const data = useMemo(()=>MOCK_DATA,[])
    const tableInstance=useTable({
        columns:columns,
        data : data, 
    })
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableInstance
    return (
        <table {...getTableProps()} className="w-full shadow-lg rounded-lg border-2 border-gray-300 mr-8 select-none">
            <thead>
                {headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()} className="text-purple-600">
                                {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                ))}
                                
                            </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                    prepareRow(row)
                    return(
                    <tr {...row.getRowProps()} className="p-3">
                        {row.cells.map((cell)=>{
                            return(
                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            )
                        })}
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}