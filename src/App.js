import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar";
import './App.css'
import IconBar from "./components/IconBar";
import Body from "./components/Body";
import Shortlist from "./components/Shortlist";
import { ShortListedInstitutionProvider } from "./utilities/ShortlistInstitutionsContext";

const App=()=>{
    const [designInstitutions,setDesignInstitutions]=useState([]);
    const [isShortList,setIsShortList]=useState(false); //change name

    const fetchData=async ()=>{
        // async function 
        // fetch returns a promise
        console.log("called me")
        const response=await fetch(`/api/institutions/list/`);
        const json=await response.json();
        const data=JSON.parse(json)
        const institutionsData = data.map(item => item.fields)
        setDesignInstitutions(institutionsData)
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    return(
            <ShortListedInstitutionProvider>
                <div>
                    <Navbar/>
                    <hr></hr>
                    <IconBar shortlist={setIsShortList}/>
                    <hr/>
                    {!isShortList?<Body designInstitutions={designInstitutions} />:<Shortlist designInstitutions={designInstitutions} />}
                </div>
            </ShortListedInstitutionProvider>
    );
}
// default export
// set the root div(DOM region where React will operate)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
export default App;



/* 
    Seemed complicate to work with props
    {!isShortList? designInstitutions.map((institution, index) => {
    const isWhite = index % 2 === 0 ? false : true; // Check if the index is even or odd
    return <Card key={index} isWhite={isWhite} institution={institution} />;
}):filteredDesignInstitutions.map((institution, index) => {
    const isWhite = index % 2 === 0 ? false : true; // Check if the index is even or odd
    return <Card key={index} isWhite={isWhite} institution={institution} />;
})} */