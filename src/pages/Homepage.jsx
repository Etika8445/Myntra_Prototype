import banner from "../assets/largebanner.png"
import coupon from "../assets/coupon.png"
import code1 from "../assets/code100.png"
import code2 from "../assets/code200.png"
import cate from "../assets/shop.png"
const Homepage = () => {
  return (
    <>
    <div className='pl-[4%] pr-[4%] mb-[3%] pt-[2.5%]'>
        <img src={banner} alt="banner"/>
    </div>
    <div className="h-[73px] flex justify-center items-center w-full">
        <img className=" h-[73px] w-[30%]" src={coupon} alt="coupon"/>
    </div>
    <div className="flex h-[170px] w-full pl-[3%] pr-[3%] mt-5">
        <div className="h-[170px] w-[48%] mr-10">
            <img src={code1} alt="code100"/>
        </div>
        <div className="h-[150px] w-[49%]">
            <img src={code2} alt="code200"/>
        </div>
    </div>
    <div className="h-[73px] flex justify-center items-center w-full mt-9 mb-10">
        <img className=" h-[70px] w-[35%]" src={cate} alt="category"/>
    </div>
    </>
  )
}

export default Homepage