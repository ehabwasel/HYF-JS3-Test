// FUNCTION TO FETCH DATA
export async function fetchData(url){
  try{
    const response = await fetch(url);
    return await response.json();
  }
  catch(error){
    console.log(error.message);
  };
};