import React from "react";
import SachModel from "../models/SachModel";

async function requestEndPoint(endpoint:string){
    const response = await fetch(endpoint);
    if(!response.ok){
        throw new Error(`Cannot Access endpoint ${endpoint}`)
    }
    else{
          return response.json();
    }
}
export async function layToanBoSach():Promise<SachModel[]>{
    const ketQua:SachModel[] = [];

    const duongDan:string = "http://localhost:8080/sach";

    const response =   await requestEndPoint(duongDan);
    const responseData = response._embedded.saches;
    for(const key in responseData){
        ketQua.push({
            maSach : responseData[key].maSach ,
            tenSach : responseData[key].tenSach ,
            giaBan: responseData[key].giaBan ,
            giaNiemYet : responseData[key].giaNiemYet ,
            moTa : responseData[key].moTa ,
            soLuong : responseData[key].soLuong ,
            tenTacGia : responseData[key].tenTacGia ,
            trungBinhXepHang : responseData[key].trungBinhXepHang
        })
    }
    return ketQua ;
}