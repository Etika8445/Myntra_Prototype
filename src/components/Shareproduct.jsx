import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import share from "../assets/share.svg"
export const Shareproduct = () => {
  return (
    <>
      <div className="flex mb-[4%]">
        <img className="h-[520px] w-[440px] mr-[3%]" src={product1} alt="product"></img>
        <div className="relative">
          <img className="h-[520px] w-[440px]" src={product2} alt="product"></img>
          <div className="rounded-full bg-white absolute bottom-4 left-4 border-2 h-9 w-9 flex justify-center items-center">
            <img className="h-5" src={share} alt="share" />
          </div>
        </div>
      </div>
    </>
  )
}
