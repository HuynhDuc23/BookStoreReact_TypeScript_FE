import React from "react";
import { requestEndPoint } from "./Request";
import HinhAnhModel from "../models/HinhAnhModel";

export async function layToanBoHinhAnhCuaMotSach(maSach:number):Promise<HinhAnhModel[]>{
    const ketQua:HinhAnhModel[] = [];
    const duongDan:string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;
    const response =  await requestEndPoint(duongDan);
    const responseData = response._embedded.hinhAnhs ;

    for(const key in responseData){
        ketQua.push({

        })
    }
    return ketQua ;
}
