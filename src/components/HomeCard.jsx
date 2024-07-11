import PropTypes from "prop-types";
const HomeCard = ({key, img, about, offer}) => {
  return (
    <>
    <div className="layout" key={key}>
      <div className='h-[215px] w-full flex justify-center items-center'>
        <img className='w-[185px] h-[200px]' src={img} alt="category"/>
      </div>
      <div className='text-white text-center'>
        <p className='text-[110%] font-semibold leading-tight'>{about}</p>
        <p className="text-2xl font-extrabold leading-tight" >{offer}% OFF</p>
        <p className="text-[105%] leading-tight font-semibold">Shop Now</p>
      </div>
    </div>
    </>
  )
}
HomeCard.propTypes = {
  key: PropTypes.number,
  img: PropTypes.string,
  about: PropTypes.string,
  offer: PropTypes.string
};


export default HomeCard