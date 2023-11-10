import React, { useEffect } from "react";

import { getAllDocs } from "src/lib/firebase/api";

const useDataFromFirebase = (collectionName, setter)=>{
    useEffect(() =>{
        async function get(){
            let data = [];
            const querySnapShot = await getAllDocs(collectionName);
            querySnapShot.forEach((element)=>{
                data.push({...element.data(),id:element.id});
            });
            console.log(data);
            setter(data);
        }
        get();
        return ()=>{
            setter([]);
        }
    },[collectionName,setter])
}

export default useDataFromFirebase;