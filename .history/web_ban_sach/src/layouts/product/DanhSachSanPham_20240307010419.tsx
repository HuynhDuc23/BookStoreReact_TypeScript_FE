import React, { useEffect, useState } from "react"
import SachModel from "../../models/SachModel"
import { layToanBoSach } from "../../api/SachAPI";
import SachProps from "./components/SachProps";
const DanhSachSanPham:React.FC = () => {
    const [danhSachQuyenSach,setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] =  useState<Boolean>(true);
    const [baoLoi , setBaoLoi] =  useState(null);
    useEffect(()=>{
        layToanBoSach().then(
            data =>{
                setDanhSachQuyenSach(data);
                setDangTaiDuLieu(false);
            }
        )
        .catch(err =>{
           throw new Error(err);
           setBaoLoi(err);
        })
    })
    if(dangTaiDuLieu){
        return (
            <>
               <div>
                   <h1>
                       Data is status loadings
                   </h1>
               </div>
            </>
        )
    }
    if(baoLoi){
        return (
            <>
               <div>
                   <h1>
                      Error ! ${baoLoi};
                   </h1>
               </div>
            </>
        )
    }
    return (
        <>
            <div className="container">
            <div className="row mt-4">
                {
                    danhSachQuyenSach.map((sach) => (
                            <SachProps key={sach.maSach}  sach={sach} />
                        )
                    )
                }
            </div>
        </div>
        </>
    )
    
}
export default DanhSachSanPham ;