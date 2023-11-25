import report from "../assets/Report.png";
import hide from "../assets/hide.png";
import bookmark from "../assets/bookmark.png";
import details from "../assets/details.png";
import bookmarkRemoved from "../assets/bookmarkremoved.png";
import { useShortlistedInstitutionContext } from "../utilities/ShortlistInstitutionsContext";
import Rating from "./Rating"; 

const Card = ({ isWhite, institution, index, shortlistIcon }) => {
  //destructuring our properties
  const {
    description,
    name,
    rating,
    phone_number_1,
    phone_number_2,
    price,
    years_of_experience,
    no_of_projects,
  } = institution;
  // depending on button click lets change context
  const { data, setData } = useShortlistedInstitutionContext();
  const toggle = (index) => {
    if (data.includes(index)) {
      // Create a new array with the existing values
      setData(data.filter((item) => item !== index));
    } else {
      const newArray = [...data];
      // Add a new item to the new array
      newArray.push(index);
      setData(newArray);
    }
  };
  return (
    <div
      className={`box-border flex ${
        !isWhite ? "bg-[#FFFCF2]" : "bg-white"
      } p-12`}
    >
      <div className="box-border w-10/12 mr-2">
        <p className="text-2xl font-bold">{name}</p>
        <Rating rating={rating}></Rating>
        <p className="mb-5 mt-5">{description}</p>
        <div className="flex justify-between pr-9 box-border">
          <div>
            <p className="text-2xl font-extrabold ml-2">{no_of_projects}</p>
            <p className="text-sm font-semibold">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold ml-2">
              {years_of_experience}
            </p>
            <p className="text-sm font-semibold">Years</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold ml-2">
              {price === 0 ? "$$" : price}
            </p>
            <p className="text-sm font-semibold">Price</p>
          </div>
        </div>
        <div className="mt-[30px]">
          <p className="font-semibold text-xl">+91-{phone_number_1}</p>
          <p className="font-semibold text-xl">+91-{phone_number_2}</p>
        </div>
      </div>
      <div className="border-l-[1px] box-border pl-9 md:pl-[90px] sm:pl-22">
          <div className="mt-2 mb-8">
            <img className="pl-3" src={details} alt="details"></img>
            <p className="text-[#8D4337;]">Details</p>
          </div>
          <div className="mt-6 mb-8">
            <img className="pl-3" src={hide} alt="hide"></img>
            <p className="text-[#8D4337;] pl-2">Hide</p>
          </div>
          <div className="cursor-pointer mt-6 mb-8" onClick={() => toggle(index)}>
            <img className="pl-[13px]" src={ !shortlistIcon ? bookmarkRemoved :bookmark} alt="shortlist"></img>
            <p className="text-[#8D4337;]">Shortlist</p>
          </div>
          <div className="mt-6 mb-8">
            <img className="pl-4" src={report} alt="report"></img>
            <p className="text-[#8D4337;]">Report</p>
          </div>
        </div>
    </div>
  );
};
export default Card;
