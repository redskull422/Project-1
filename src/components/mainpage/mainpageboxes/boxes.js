import React from "react"

const Boxes =()=>{
    return(
        <div className="flex flex-inline flex-col sm:flex-row-reverse justify-center items-center select-none"> 
            <div id="box1" className="bg-gray-200 w-1/3 m-8 p-6 rounded-lg hover:text-red-900 ">
                <h1 className="flex justify-end font-bold">بلاک چین</h1>
                <p className="font-thin flex justify-end mr-4">.......به زودی</p>
                <i><img src="/images/Bitcoin.png" alt="." className="w-20 h-20 absolute mr-2 opacity-75"/></i>
            </div>
            <div id="box2" className="bg-gray-200 w-1/3 h-1/3 m-8 p-6 rounded-lg hover:text-red-900 static">
                <h1 className="font-bold flex justify-end">ارز پایدار</h1>
                <p className="font-thin flex justify-end mr-4">......به زودی</p>
                <i><img src="/images/Menu.png" alt="." className="w-16 h-16 absolute opacity-75"/></i>
            </div>
            
            <span id="box3" className="bg-gray-200 w-1/3 h-1/3 m-8 p-6 rounded-lg hover:text-red-900 ">
                <h1 className="font-bold flex justify-end">افزایش امنیت</h1>
                <p className=" font-thin flex justify-end mr-4">......به زودی</p>
                <i><img src="/images/Shield.png" alt="." className="w-16 h-16 absolute opacity-75"/></i>
            </span>
           
        </div>
    )
}
export default Boxes