import app from "./firebase/config";

import { getStorage, ref,getDownloadURL } from "firebase/storage";



export  async function  getFileUrl (path){
    const storage = getStorage(app);
    const fileRef = ref(storage,path);
    try{
        const url = await getDownloadURL(fileRef)
        console.log(url);
    }catch(e){
        console.log(e);
    }

}


