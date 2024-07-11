import PropTypes from "prop-types";
const CelebrityCard = (props) => {
  return (
    <>
        <div className="w-[250px] h-[550px] mb-[10%] mr-[2%]"  key={props.id}>
          <div className="h-[300px] w-full  mb-4">
                <img className="h-full w-full object-fit rounded-lg" src={props.celebimage} alt="clothing"/>
          </div>
          <div className="flex justify-between items-center">
            <a href="https://www.myntra.com/kurtas?f=Color%3ABlack_36454f%3A%3AGender%3Amen%20women%2Cwomen">
            <div className="font-bold border border-width-0 p-2 rounded-2xl text-pink-600 text-[80%]">SIMILAR PRODUCTS {">>"}</div>
            {/* <button className="bg-pink-600 text-white rounded-md p-1 text-xs">EXPLORE</button> */}
            </a>
          </div>
          <div className="h-[200px] w-full flex justify-between mt-3">
              <a href={props.link1}>
                <div >
                    <img className='h-[120px] w-[120px] bg-black rounded-md mb-3' src={props.relimage1} alt='similar'/>
                    <p className="text-[21px] font-bold">{props.about1}</p>
                    <p className="font-bold">Under ₹ {props.price1}</p>
                </div>
              </a>
              <a href={props.link2}>
                <div>
                    <img className='h-[120px] w-[120px] bg-black rounded-md mb-3' src={props.relimage2} alt='similar'/>
                    <p className="text-[21px] font-bold">{props.about2}</p>
                    <p className="font-bold">Under ₹ {props.price2}</p>
                </div>
              </a>
          </div>
        </div>
    </>
  )
}

CelebrityCard.propTypes = {
  id: PropTypes.number,
  celebimage: PropTypes.string,
  relimage1: PropTypes.string,
  relimage2: PropTypes.string,
  about1:PropTypes.string,
  about2:PropTypes.string,
  price1: PropTypes.string,
  price2:PropTypes.string,
  link1:PropTypes.string,
  link2:PropTypes.string
};

export default CelebrityCard