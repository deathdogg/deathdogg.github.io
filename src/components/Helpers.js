export const fetcher = async(...args) => {
  try{
   const serverData = await fetch(...args);
   const parsedData = await serverData.json();
   return parsedData;
  }
  catch{
   console.log("error");
  }   
 }
