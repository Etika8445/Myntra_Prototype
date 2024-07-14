import { useNavigate } from "react-router-dom";
import like from "../assets/wishlist.png"
import PropTypes from "prop-types";
const SimilarCard = (props) => {
  const navigate =useNavigate();
  const update=(value)=>{
    if(value==='Stylum'){
      navigate("/black-kurti");
    }
  }
  const show=(value)=>{
    if(value==='Stylum'){
      navigate("/kurti-stylum");
    }
  }
  return (
    <>
      <div className="mb-[6%] mr-[8%] h-[175%] w-[330px] block justify-center items-center bg-[#faf9f9]">
        <div className=" h-[350px] w-full">
            <img  className="h-[300px] w-full bg-black rounded-lg" src={props.celebimage} alt="celebrity"/>
            <div className=" h-[45px] flex items-center font-bold relative">
                <img className="h-[60%] w-[35px] " src={like} alt=""/><p>567 likes</p>
                <p className="right-0 absolute mr-3">Related - 6789 items</p>
            </div>
        </div>
        <div className=" h-[500px] pt-2  top-0">
        <div className="font-bold w-[50%] border border-width-2 border-slate-400 p-2 rounded-2xl text-pink-600 text-[80%] mb-4 cursor-pointer" onClick={()=>{update(props.about4)}}>SIMILAR PRODUCTS {">>"}</div>

            <p className="font-bold md:text-3xl  sm:text-lg">Wanna Try that Look</p>
            
            <div className=" w-full flex flex-wrap justify-center  mt-3">
                <div className="mr-[5%]">
                    <img className='h-[120px] md:w-[120px] w-[100px] bg-black rounded-md mb-3' src={props.relimage3} alt='similar'/>
                    <p className="text-[21px] font-bold">{props.about3}</p>
                    <p className="font-bold pb-4">Under ₹ {props.price3}</p>
                </div>
                <div className="mr-[5%]" onClick={()=>{show(props.about4)}}>
                    <img className='h-[120px] md:w-[120px] w-[100px] bg-black rounded-md mb-3' src={props.relimage4} alt='similar'/>
                    <p className="text-[21px] font-bold">{props.about4}</p>
                    <p className="font-bold pb-4">Under ₹ {props.price4} </p>
                </div>
                <div className=" mr-[5%]">
                    <img className='h-[120px] md:w-[120px] w-[100px] bg-black rounded-md mb-3' src={props.relimage1} alt='similar'/>
                    <p className="text-[21px] font-bold">{props.about1}</p>
                    <p className="font-bold pb-4">Under ₹ {props.price1}</p>
                </div>
                <div className="mr-[5%]">
                    <img className='h-[120px] md:w-[120px] w-[100px] bg-black rounded-md mb-3' src={props.relimage2} alt='similar'/>
                    <p className="text-[21px] font-bold">{props.about2}</p>
                    <p className="font-bold pb-4">Under ₹ {props.price2}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

SimilarCard.propTypes = {
  id: PropTypes.number,
  celebimage: PropTypes.string,
  relimage1: PropTypes.string,
  relimage2: PropTypes.string,
  relimage3: PropTypes.string,
  relimage4: PropTypes.string,
  about1:PropTypes.string,
  about2:PropTypes.string,
  about3:PropTypes.string,
  about4:PropTypes.string,
  price1: PropTypes.string,
  price2:PropTypes.string,
  price3:PropTypes.string,
  price4:PropTypes.string,
  link1:PropTypes.string,
  link2:PropTypes.string
};

export default SimilarCard