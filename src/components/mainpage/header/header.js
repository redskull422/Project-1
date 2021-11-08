import React from "react"
import {Menu}from "@headlessui/react"
import "./header.css"
import SearchBar from"./SearchBar"
const Header = ()=>{
    return(
        <div className="bg-gray-200 select-none">
            <div className="flex-col-reverse flex-wrap w-screen justify-end flex sm:flex-row sm:justify-end items-end sm:mr-2 inline-flex lg:justify-end">
                <div className="flex items-center m-4 p-4"><SearchBar/></div>
                <div><button className="m-4 p-4 bg-blue-500 rounded-full text-blue-200">ساخت حساب</button></div>
                <div><button id="loginbttn" className="m-4 p-4 text-left text-blue-500 hover:border-b-2">ورود به حساب </button></div>
                <Menu as="div">
                    <Menu.Button className="m-4 p-4 block">▼ ارتباط با ما</Menu.Button>
                
                    <Menu.Items className="bg-white rounded-lg w-32 shadow-2xl absolute">
                        <ul className="py-2 px-4 leading-loose text-right">
                            <Menu.Item><li className="hover:bg-indigo-500 hover:text-white p-2 rounded-lg"><a href="#">...به زودی</a></li></Menu.Item>
                            <Menu.Item><li className="hover:bg-indigo-500 hover:text-white p-2 rounded-lg"><a href="#">... به زودی</a></li></Menu.Item>
                        </ul>
                    </Menu.Items> 
     
                </Menu>
                <Menu as="div">
                    <Menu.Button className="m-4 p-4">▼ قانون گذاری </Menu.Button> 
                    <Menu.Items className="bg-white rounded-lg w-32 shadow-2xl absolute">
                        <ul className="py-4 px-4 leading-loose text-right">
                            <Menu.Item><li className="hover:bg-indigo-500 hover:text-white rounded-lg p-2"><a href="#">.....به زودی</a></li></Menu.Item>
                            <Menu.Item><li className="hover:bg-indigo-500 hover:text-white rounded-lg p-2"><a href="#"></a>.....به زودی</li></Menu.Item>
                            <Menu.Item><li className="hover:bg-indigo-500 hover:text-white rounded-lg p-2"><a href="#">......به زودی</a></li></Menu.Item>
                        </ul>
                    </Menu.Items> 
                </Menu>
                <div><button className="m-4 p-4">آموزش ارز دیجیتال</button></div>
                <div><button className="m-4 p-4">استخراج</button></div>
                <div><button className="m-4 p-4">مقالات </button></div>
                <div><button className="m-4 p-4">خانه</button></div>
                <div><a  href="#"><img type="icon" src="/images/Saly-1.png" alt="logo" className="w-24"/></a></div>
                
            </div>  
        </div>

    )
}
export default Header

