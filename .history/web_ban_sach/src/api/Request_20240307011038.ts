export async function requestEndPoint(endpoint:string){
    const response = await fetch(endpoint);
    if(!response.ok){
        throw new Error(`Cannot Access endpoint ${endpoint}`)
    }
    else{
          return response.json();
    }
}