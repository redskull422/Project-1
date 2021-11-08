import React,{useState} from "react"

const Akhbar=()=>{
    const[email,setEmail]=useState("ایمیل خود را وارد کنید")
    const clickHandler=()=>{
        setEmail("")
    }
    const handleChange=(event)=>{
        setEmail(event.target.value)
    }
    return(
        <div className="flex justify-center items-center select-none">
            <i><img src="/images/Saly-1.png" className="w-1/2" alt="icon"/></i>
            <div className="w-screen p-6 m-4 bg-white text-right inline">
                <h1 className="text-right font-bold text-2xl text-blue-900"> اولین نفری باشید که هر روز از اخبار رمزنگاری مطلع می شوید</h1>   
                <h3 className="m-4 font-light">دریافت تجزیه و تحلیل رمزنگاری ، اخبار و به روزرسانی ها را مستقیماً در صندوق ورودی خود دریافت کنید</h3> 
                <p className="m-4 font-light">اینجا ثبت نام کنید تا حتی یک خبرنامه را هم از دست ندهید</p>
                <button type="submit" className="font-medium bg-blue-500 rounded-lg w-24 h-8 text-white">مشترک شدن</button>
                <input className="font-hairline bg-gray-200 w-48 h-8 rounded-lg text-right ml-2  p-4 opacity-50 border-2 text-sm" onClick={clickHandler} onChange={handleChange} type="email" value={email}></input>
            </div>

        </div>
    )
}
export default Akhbar