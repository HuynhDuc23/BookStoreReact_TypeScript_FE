import React, { useState } from "react"
import SachModel from "../../models/SachModel"
const danhSachSanPham: React.FC = () => {
    const [danhSachQuyenSach,setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] =  useState<boolean>(true);
    const [baoLoi , setBaoLoi] =  useState(null);

    if(dangTaiDuLieu){
        return (
            <>
               <div>
                   <h1>
                       Đang Tải Dữ Liệu 
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