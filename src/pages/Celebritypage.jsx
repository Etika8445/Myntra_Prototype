import SimilarCard from "../components/SimilarCard"
import CelebSimilar from "../shared/api/CelebSimilar"

const Celebritypage = () => {
  return (
    <>
    <p className="p-[4%] pb-[2%] pt-[2%] cursor-pointer">Home/Trending/<b>Celebrity</b></p>
    <p className="p-[4%] pt-0 font-bold md:text-4xl text-lg">Explore to look Faishonable</p>
    <div className='flex justify-center items-center flex-wrap pl-[8%] cursor-pointer'>
        {CelebSimilar.map((info,key)=>{
            return <SimilarCard key={key} {...info}/>
        })}
    </div>
    </>
  )
}

export default Celebritypage