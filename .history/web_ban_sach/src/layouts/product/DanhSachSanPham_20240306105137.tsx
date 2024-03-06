import React, { useEffect, useState } from "react"
import SachModel from "../../models/SachModel"
import { layToanBoSach } from "../../api/SachAPI";
const DanhSachSanPham: React.FC = () => {
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
            
        </>
    )
    
}