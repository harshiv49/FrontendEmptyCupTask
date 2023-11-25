
import Card from "./Card";
import { useShortlistedInstitutionContext } from "../utilities/ShortlistInstitutionsContext";
const Shortlist=({designInstitutions})=>{
   
    const {data,setData}=useShortlistedInstitutionContext();
    console.log(data)
    const shortListedDesignInstitutions = designInstitutions
    .map((institution, index) => ({ ...institution, originalIndex: index })) // Include the original index in each object
    .filter((item, index) => data.includes(index)); // Filter the array based on the indexes from the context
    
    return(
    <>
        {shortListedDesignInstitutions.map((institution,index) => {
            return <Card key={index} index={institution.originalIndex} isWhite={index%2!=0} shortlistIcon={true} institution={institution} />;
        })}
    </>
    )
}
export default Shortlist;



/*

use context to loop over cards 

get context from global context filter our orignal array from it 
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const targetIndexes = [1, 3, 5]; // Define the target indexes

const filteredArray = myArray.filter((element, index) => {
  return targetIndexes.indexOf(index) !== -1; // Filter out elements based on the target indexes
});

console.log(filteredArray); // Output: [2, 4, 6]
based on filterer array loop cards over it 

*/