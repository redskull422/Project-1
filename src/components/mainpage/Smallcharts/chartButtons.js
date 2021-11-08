import React from 'react'

const ChartButtons=()=>{
    return(
        <div className="flex justify-end items-center">
            <div>
                <button><img src="/images/candle-2.png" className="w-12 h-12 bg-blue-100 rounded-lg flex my-4 mx-2 p-3 hover:bg-blue-200" alt="graph"/></button>
                <button><img src="/images/graph.png" className="w-12 h-12 bg-blue-100 rounded-lg flex my-4 mx-2 p-3 hover:bg-blue-200" alt="graph"/></button>
            </div>
        </div>
    )
}
export default ChartButtons