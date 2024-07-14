import filter from "../assets/filter.png"
import Virtualproduct from "../components/Virtualproduct"
import Products from "../shared/api/Products"
const Allproduct = () => {
    return (
        <>
            <p className="p-[4%] pb-[1%] pt-[2%] cursor-pointer">Home/Clothing/kurtis/<b>Black Kurti</b></p>
            <p className="pl-[4%]"><b>Black kurti</b> - 612 items</p>
            <div className="flex">
                <div className="w-[240px] ml-[2.5%] mt-[2%] mb-[4%]">
                    <img src={filter}></img>
                </div>
                <div className="flex justify-center items-center flex-wrap mt-[2%] pl-[3%] pr-[2%] w-[85%] ">
                    {Products.map((info, key) => {
                        return <Virtualproduct key={key} {...info} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Allproduct