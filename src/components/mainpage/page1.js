import React from 'react'
import Header from './header/header'
import Image from "./mainpageimage/image"
import Boxes from "./mainpageboxes/boxes"
import SmallCharts from "./Smallcharts/smallchar"
import ChartButtons from './Smallcharts/chartButtons'
import Akhbar from './footer/akhbar'
import Footer from './footer/footer'
import "./global.css"
import {BasicTable} from '../../mainchart/BasicTable'
const Page1 = ()=>{
    return(
        <div>
            <Header/>
            <Image/>
            <Boxes/>
            <SmallCharts/>
            <ChartButtons/>
            <BasicTable/>
            <Akhbar/>
            <Footer/>   
        </div>
    )
}
export default Page1