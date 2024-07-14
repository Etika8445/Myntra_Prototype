import PropTypes from "prop-types";
const Virtualproduct = (props) => {
  return (
    <div className="h-[320px] w-[200px] mb-[4%] mr-[2.5%] bg-[#faf9f9] " key={props.id}>
      <div className='h-[235px] w-full flex justify-center items-center'>
        <img className='w-full h-full' alt="category" src={props.img}/>
      </div>
      <div>
        <p className='text-xl font-semibold leading-tight mt-2 mb-1'>{props.name}</p>
        <p className="text-md text-slate-500 leading-tight" >{props.about}</p>
        <p className="text-sm flex w-[179px] justify-between mb-2 mt-2"><b>Rs. 887</b><p className="text-slate-500 flex font-normal line-through">Rs. 1799</p> <p className="text-red-400">(66% OFF)</p></p>
      </div>
    </div>
  )
}

export default Virtualproduct

Virtualproduct.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    about:PropTypes.string,
    name:PropTypes.string,
  };