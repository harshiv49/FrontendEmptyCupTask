import Card from "./Card";
import { useShortlistedInstitutionContext } from "../utilities/ShortlistInstitutionsContext";
const Body=({designInstitutions})=>{
   const {data}=useShortlistedInstitutionContext();
   return(
    <>
         {designInstitutions.map((institution, index) => {
                return <Card key={index} index={index} isWhite={index % 2 != 0} shortlistIcon={data.includes(index)} institution={institution} />;
            })}
    </>
   )
}

export default Body;