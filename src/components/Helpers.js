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

export const shuffle = (arr, currentIndex = arr.length) => {
  while(currentIndex !== 0){
    //Get a random index
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    //Swap the values
    let temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  
  return arr;
}