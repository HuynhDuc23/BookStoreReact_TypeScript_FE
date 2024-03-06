import React from "react";
import SachModel from "../models/SachModel";

async function requestEndPoint(endpoint:string){
    const response = await fetch(endpoint);
    if(!response.ok){
        throw new Error(`Cannot Access endpint ${endpoint}`)
    }
    else{
          return await response.json();
    }
}
export async function layToanBoSach():Promise<SachModel[]>{
    const ketQua: SachModel[] = [];

    const duongDan:string = "http://localhost:8080/sach";

    const response =  requestEndPoint(duongDan);
    console.log(response);

    return ketQua ;
}