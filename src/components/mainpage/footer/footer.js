import React from 'react'

const Footer=()=>{
    return(
        <div className="flex justify-center items-center select-none flex-wrap ">
            <div className="bg-gray-200 rounded-sm w-screen h-1/2 m-4 p-4">
                <div className="flex flex-col sm:flex-row justify-center">
                  <a className="m-8 opacity-75 hover:text-blue-900" href="#"> مقالات</a>
                  <a className="m-8 opacity-75 hover:text-blue-900" href="#"> استخراج</a>
                  <a className="m-8 opacity-75 hover:text-blue-900" href="#"> آموزش ارز دیجیتال</a>
                  <a className="m-8 opacity-75 hover:text-blue-900" href="#"> قانون گذاری</a>
                </div>
                <div className="flex justify-center items-start">
                    <h2 className="p-4 mt-2 text-sm text-bold text-blue-800">
                        تمامی حقوق این وبسایت محفوظ میباشد1400 
                    </h2>
                </div>    
            </div>

        </div>
    )
}
export default Footer