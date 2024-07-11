import profile from "../../assets/profile.png"
import logo from "../../assets/logo.png"
import bag from "../../assets/bag.png"
import wishlist from "../../assets/wishlist.png"
import search from "../../assets/search.png"

const Navbar = () => {
  return (
    <>
    <div className='relative w-full h-[75px] z-10'>
        <div className='flex fixed w-full shadow top-0 items-center pl-[4%] pr-[4%] h-[75px] bg-white'>
            <div className="mr-[5%]">
                <img className='h-10 w-15' src={logo} alt="logo"/>
            </div>
            <div className="w-[35%] h-[100%] mr-[6%] flex items-center font-bold text-xs">
                <p>MEN</p>
                <p className='ml-6'>WOMEN</p>
                <p className='ml-6'>KIDS</p>
                <p className='ml-6'>HOME & LIVING</p>
                <p className='ml-6'>BEAUTY</p>
                <p className='ml-6'>STUDIO<sup className='text-[70%] text-pink-600 font-bold'>NEW</sup></p>
            </div>
            <div className="flex w-[36.5%] bg-slate-100 mr-12 rounded-md">
                <div className='w-[7%] flex items-center justify-center'>
                    <img className='h-4 w-5' src={search} alt="search"/>
                </div>
                <input className='rounded-r-md border-l-2 bg-slate-100 border-l-white h-8 w-[93%] placeholder-slate-600 pl-4'  placeholder="Search for products,brands and more"></input>
            </div>
            <div className="flex text-[80%] font-bold w-[10%] items-center justify-between pt-2">
                <div className="">
                    <img className='h-5 w-5 mx-3' src={profile} alt="profile"/>
                    <p>Profile</p>
                </div>
                <div>
                    <img className='h-5 w-6 mx-3' src={wishlist} alt="wishlist"/>
                    <p>Wishlist</p>
                </div>
                <div>
                    <img className='h-5 w-5' src={bag} alt="bag"/>
                    <p>Bag</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar