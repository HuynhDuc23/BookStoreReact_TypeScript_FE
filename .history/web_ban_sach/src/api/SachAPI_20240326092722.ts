import React from "react";
import SachModel from "../models/SachModel";
import { requestEndPoint } from "./Request";
interface ketQuaInterface {
  ketQua: SachModel[];
  tongSoTrang: number;
  tongSoSach: number;
}

async function laySach(duongDan: string): Promise<ketQuaInterface> {
  const ketQua: SachModel[] = [];
  const response = await requestEndPoint(duongDan);
  const responseData = response._embedded.saches;
  const tongSoTrang = response.page.totalPages;
  const tongSoSach = response.page.totalElements;
  for (const key in responseData) {
    ketQua.push({
      maSach: responseData[key].maSach,
      tenSach: responseData[key].tenSach,
      giaBan: responseData[key].giaBan,
      giaNiemYet: responseData[key].giaNiemYet,
      moTa: responseData[key].moTa,
      soLuong: responseData[key].soLuong,
      tenTacGia: responseData[key].tenTacGia,
      trungBinhXepHang: responseData[key].trungBinhXepHang,
    });
  }
  return {
    ketQua: ketQua,
    tongSoSach: tongSoSach,
    tongSoTrang: tongSoTrang,
  };
}
export async function layToanBoSach(): Promise<SachModel[]> {
  const duongDan: string = "http://localhost:8080/sach?sort=maSach,desc";
  return laySach(duongDan);
}
export async function lay3SachMoiNhat(): Promise<SachModel[]> {
  const duongDan: string =
    "http://localhost:8080/sach?sort=maSach,desc&page=0&size=3";
  return laySach(duongDan);
}
