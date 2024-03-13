import React from "react";
import { requestEndPoint } from "./Request";
import HinhAnhModel from "../models/HinhAnhModel";
import SachModel from "../models/SachModel";

async function layAnhCuaMotSach(duongDan:string):Promise<SachModel[]>{
    const ketQua:SachModel[]=[];
    const response =  await requestEndPoint(duongDan);
    const responseData =  response._embedded.hinhAnhs ;
    for(const key in responseData){
        ketQua.push(
            {

            }
        )
    }
    return ketQua ;
}


export async function layToanBoHinhAnhCuaMotSach(maSach:number):Promise<HinhAnhModel[]>{
    const ketQua:HinhAnhModel[] = [];
    const duongDan:string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;
    const response =  await requestEndPoint(duongDan);
    const responseData = response._embedded.hinhAnhs ;

    for(const key in responseData){
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh : responseData[key].tenHinhAnh ,
            laIcon : responseData[key].laIcon ,
            duongDan : responseData[key].duongDan ,
            duLieuAnh : responseData[key].duLieuAnh
        })
    }
    return ketQua ;
}

