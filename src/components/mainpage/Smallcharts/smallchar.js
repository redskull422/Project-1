import React, {useState} from "react"
import coins from "./coinsdata"

const SmallCharts=()=>{
    return(
        <div className="flex justify-center w-screen p-12 select-none">
            <table className="w-1/2 p-4 shadow-lg border-b-2 border-gray-300">
                <tr>
                    <th className="p-3">ترند ها تا این لحظه<img src="/images/star.png" className="w-12 h-12 inline" alt="icon"/></th>
                </tr>
                <td className="absolute p-3">
                    <tr>5%</tr>
                </td>
                <tr>
                    <td className="p-3 tracking-wider">name icon 1</td>
                </tr>
                <td className="absolute p-3">
                    <tr>5%</tr>
                </td>
                <tr>
                    <td className="p-3 tracking-wider"> name icon 1</td>
                </tr>
                <td className="absolute p-3">
                    <tr>5%</tr>
                </td>
                <tr>
                    <td className="p-3 tracking-wider"> name icon 1</td>
                </tr>
            </table>
            <table className="w-1/2 shadow-lg border-b-2 border-gray-300">
                <tr className="text-right">
                    <th className="p-3">درحال رشد<img src="/images/Arrow.png" className="w-12 h-12 inline" alt="icon"/></th>
                </tr>
                <td className="absolute p-3">
                    <tr>5%</tr>
                </td>
                <tr>
                    <td className="p-3 tracking-wider"> name icon 1</td> 
                </tr>
                <td className="absolute p-3">
                    <tr>5%</tr>
                </td>
                <tr>
                    <td className="p-3 tracking-wider"> name icon 1</td>
                </tr>
                <td className="absolute p-3">
                    <tr>5%</tr>
                </td>
                <tr>
                    <td className="p-3 tracking-wider"> name icon 1</td>
                </tr>

            </table>
        </div>
        
    )
}
export default SmallCharts