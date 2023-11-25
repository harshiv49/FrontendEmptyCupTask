import starempty from '../assets/starempty.png'
import starfull from '../assets/starfull.png'
import starhalffull from '../assets/starhalffull.png'
const Rating=({rating})=>{
    return(
        <div className='flex mt-2'>
            <img className="pr-1" src={rating>=1 ? starfull :rating>=0.5 ? starhalffull:starempty}></img>
            <img className="pr-1" src={rating>=2 ? starfull :rating>=1.5 ? starhalffull:starempty}></img>
            <img className="pr-1" src={rating>=3 ? starfull :rating>=2.5 ? starhalffull:starempty}></img>
            <img className="pr-1" src={rating>=4 ? starfull :rating>=3.5 ? starhalffull:starempty}></img>
            <img className="pr-1" src={rating===5 ? starfull :rating>=4.5 ? starhalffull:starempty}></img>
        </div>
    )
}


export default Rating;

