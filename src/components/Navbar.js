
import threeDots from '../assets/threedots.png';
import logo from '../assets/logo-small 1.png';
const Navbar=()=>{
    return(
        <div className='flex box-border justify-between px-7 pt-5 pb-5 md:px-14  sm:px-10'> 
             <img src={logo} alt="logo" className='w-8 h-8'></img>
             {/* color: ;
font-family: Chivo;
    */}
             <p className='text-2xl font-extrabold text-[#716966] font-Chivo'>EmptyCup</p>
             <img src={threeDots} alt="three-dots" className='w-8 h-8'></img>
        </div>
    )
}
export default Navbar;