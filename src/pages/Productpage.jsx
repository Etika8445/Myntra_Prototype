import { Shareproduct } from "../components/Shareproduct"
import rating from "../assets/rating.png"
import option from "../assets/option.png"
const Productpage = () => {
  return (
    <>
     <p className="p-[4%] pb-[2%] pt-[2%] cursor-pointer">Home/Clothing/Women Clothing/Kurtas/<b>Stylum Kurtas</b></p>
     <div className="w-full flex pl-[4%] pr-[4%] cursor-pointer">
        <div className=" flex">
            <Shareproduct/>
        </div>
        <div className="w-[40%] pl-[2%] leading-7">
            <p className="text-xl font-bold">Stylum</p>
            <p className="text-slate-400 mb-2 ">Black & Gold Ethnic Motifs Anarkali kurta with Dupattav</p>
            <img className="h-8 mb-4" src={rating} alt="rating"></img>
            <hr/>
            <p className="text-lg font-bold flex w-[230px] justify-between mb-2 mt-3">₹887 <p className="text-slate-400 flex font-normal">MRP <p className="line-through">₹3699</p></p> <p className="text-red-400">(76% OFF)</p></p>
            <p className="text-sm text-green-600 font-semibold">inclusive of all taxes</p>
            <p className="font-bold text-sm mt-4 mb-3">MORE COLOR</p>
            <img className="h-[90px] mb-5" src={option} alt="more"></img>
            <p className="font-bold text-sm flex relative">SELECT SIZE <p className="text-xs text-pink-500 bottom-0 absolute ml-[135px]">SIZE CHART &gt;</p> </p>
            <div className="flex w-[290px] justify-between mt-7 mb-7"> 
                <div className="rounded-full  border-2 h-12 w-12 flex justify-center items-center font-bold text-xs">S</div>
                <div className="rounded-full  border-2 h-12 w-12 flex justify-center items-center font-bold text-xs">M</div>
                <div className="rounded-full  border-2 h-12 w-12 flex justify-center items-center font-bold text-xs">L</div>
                <div className="rounded-full  border-2 h-12 w-12 flex justify-center items-center font-bold text-xs">XL</div>
                <div className="rounded-full  border-2 h-12 w-12 flex justify-center items-center font-bold text-xs">XXL</div>
            </div>
            <button className="w-[48%] bg-pink-600 text-white h-[47px] font-semibold rounded-md mb-4 ">ADD TO BAG</button> <button className="w-[48%] rounded-md font-semibold border-2 h-[47px] ml-3">WISHLIST</button>
            <hr></hr>

        </div>
     </div>
    </>
  )
}

export default Productpage