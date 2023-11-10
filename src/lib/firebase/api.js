import app from "./config";

import { getFirestore, doc, setDoc,collection,addDoc, getDocs } from 'firebase/firestore';

const db = getFirestore(app);

export async function addData(collectionName,data){
    let result = null;
    let error = null;
    
    try{
            result = await addDoc(collection(db,collectionName),data);
        
        
    }catch(e){
        error = e;
    }

    return {result, error};
}



export async function getDocById(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getAllDocs(collectionName){
    const querySnapShot = await getDocs(collection(db,collectionName));
    return querySnapShot;
}

export async function get(collectionName){
    let data = [];
    const querySnapShot = await getAllDocs(collectionName);
    querySnapShot.forEach((element)=>{
        data.push({...element.data(),id:element.id});
    });
    return data;
}