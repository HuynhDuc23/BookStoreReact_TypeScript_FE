import React, { useEffect, useState } from "react";
import SachModel from "../../models/SachModel";
import { layToanBoSach, timKiemSach } from "../../api/SachAPI";
import SachProps from "./components/SachProps";
import { PhanTrang } from "../utils/PhanTrang";
import { toUSVString } from "util";

interface DanhSachSanPhamProps {
  tuKhoaTimKiem: string;
}
const DanhSachSanPham: React.FC<DanhSachSanPhamProps> = (props) => {
  const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
  const [baoLoi, setBaoLoi] = useState(null);
  const [trangHienTai, setTrangHienTai] = useState<number>(1);
  const [tongSoTrang, setTongSoTrang] = useState<number>(0);
  const [tongSoSach, setTongSoSach] = useState<number>(0);
  useEffect(() => {
    if (props.tuKhoaTimKiem === "") {
      layToanBoSach(trangHienTai - 1)
        .then((kq) => {
          setDanhSachQuyenSach(kq.ketQua);
          setTongSoTrang(kq.tongSoTrang);
          setDangTaiDuLieu(false);
        })
        .catch((err) => {
          throw new Error(err);
          setBaoLoi(err);
        });
    } else {
      timKiemSach(props.tuKhoaTimKiem)
        .then((kq) => {
          setDanhSachQuyenSach(kq.ketQua);
          setTongSoTrang(kq.tongSoTrang);
          setDangTaiDuLieu(false);
        })
        .catch((err) => {
          setDangTaiDuLieu(false);
          setBaoLoi(err.message);
        });
    }
  }, [trangHienTai, props.tuKhoaTimKiem]);
  if (dangTaiDuLieu) {
    return (
      <>
        <div>
          <h1>Data is status loadings</h1>
        </div>
      </>
    );
  }
  if (baoLoi) {
    return (
      <>
        <div>
          <h1>Error ! ${baoLoi};</h1>
        </div>
      </>
    );
  }
  console.log("list " + danhSachQuyenSach);
  const hamPhanTrang = (trang: number) => setTrangHienTai(trang);
  return (
    <>
      <div className="container">
        <div className="row mt-4 mb-4">
          {danhSachQuyenSach.map((sach) => (
            <SachProps key={sach.maSach} sach={sach} />
          ))}
        </div>
        <PhanTrang
          trangHienTai={trangHienTai}
          tongSoTrang={tongSoTrang}
          phanTrang={hamPhanTrang}
        />
      </div>
    </>
  );
};
export default DanhSachSanPham;
