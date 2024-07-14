import banner from "../assets/largebanner.png"
import coupon from "../assets/coupon.png"
import code1 from "../assets/code100.png"
import code2 from "../assets/code200.png"
import Information from "../shared/api/Information"
import HomeCard from "../components/HomeCard"
import CelebInfo from "../shared/api/CelebInfo"
import CelebrityCard from "../components/CelebrityCard"
import { useNavigate } from "react-router-dom"
const Homepage = () => {
    const navigate= useNavigate();
    const update=()=>{
        navigate('/celebrity');
    }
  return (
    <>
    <div className='pl-[4%] pr-[4%] mb-[3%] pt-[2.5%]'>
        <img src={banner} alt="banner"/>
    </div>
    <div className="h-[73px] flex justify-center items-center w-full">
        <img className=" h-[73px] w-[450px]" src={coupon} alt="coupon"/>
    </div>
    <div className="flex h-[26%] w-full pl-[3%] pr-[3%] mt-5">
        <div className="w-[48%] mr-[6%]">
            <img src={code1} alt="code100"/>
        </div>
        <div className="w-[49%]">
            <img src={code2} alt="code200"/>
        </div>
    </div>
    <div className="flex justify-center items-center w-full mt-[6%] mb-[6%]">
        <p className="pl-[4%] pr-[4%] font-bold text-5xl">SHOP BY CATEGORY</p>
    </div> 
    <div className='flex justify-center items-center flex-wrap mt-[2%] pl-[4%] pr-[2%]'>
        {Information.map((info,key)=>{
            return <HomeCard key={key} img={info.image} about={info.about} offer={info.offer}/>
        })}
    </div>
    <div className="flex m-[4%] justify-between">
        <p className="font-bold text-5xl pb-[2%] relative">Look Who&#39;s Wearing What<sup className='text-[40%] text-pink-600 font-bold mt-4 absolute'>NEW</sup></p>
        <button className="bg-pink-600 text-white rounded-md mr-[1%] w-[130px] h-[45px] text-xl" onClick={update}>EXPLORE</button>
    </div>
    <div className='flex justify-center items-center flex-wrap mt-[3%] pl-[3%] pr-[2%]'>
        {CelebInfo.map((info,key)=>{
            return <CelebrityCard key={key} {...info}/>
        })}
    </div>
    </>
  )
}

export default Homepage