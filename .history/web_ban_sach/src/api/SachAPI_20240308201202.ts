import React from "react";
import SachModel from "../models/SachModel";
import { requestEndPoint } from "./Request"; 
async function laySach(duongDan:string):Promise<SachModel[]>{
    const ketQua:SachModel[] =[];
    const response = await requestEndPoint(duongDan);
    const responseData =  response._embedded.saches ;
    for(const key in responseData){
         ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan ,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia:responseData[key].tenTacGia,
            trungBinhXepHang:responseData[key].trungBinhXepHang
         })
    }
    return ketQua ;
}
export async function layToanBoSach():Promise<SachModel[]>{
    const duongDan:string = "http://localhost:8080/sach?sort=maSach,desc";
    return laySach(duongDan);
}
export async function lay3SachMoiNhat():Promise<SachModel[]>{
    const duongDan:string = "http://localhost:8080/sach?sort=maSach,desc&page=0&size=3";
    console.log("Sach Hay"+laySach(duongDan));
    return laySach(duongDan);
}
