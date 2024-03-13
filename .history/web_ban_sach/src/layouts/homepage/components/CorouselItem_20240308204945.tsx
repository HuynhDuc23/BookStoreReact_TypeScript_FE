import { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { lay1AnhCuaMotSach } from "../../../api/HinhAnhAPI";
import HinhAnhModel from "../../../models/HinhAnhModel";

interface CarouselItemInterface {
    sach: SachModel;
    key : number;
}
const CarouselItem: React.FC<CarouselItemInterface> = (props) => {
    console.log(props.key);
    const maSach:number = props.key;
    const [danhSachHinhAnh,setDanhSachHinhAnh] = useState<HinhAnhModel[]>([]);
    const [DangTaiDuLieu,setDangTaiDuLieu] =  useState<boolean>(true);
    const [baoLoi,setBaoLoi]= useState(null);
    useEffect(()=>{
          lay1AnhCuaMotSach(maSach).then((hinhAnhData)=>{
            setDanhSachHinhAnh(hinhAnhData)
            setDangTaiDuLieu(false)
          })
          .catch((error)=>{
              setDangTaiDuLieu(false);
              throw new Error(error);
              setBaoLoi(error);
          })
    },[])
    if(DangTaiDuLieu){
        return (
            <>
               <div>
                   <h1>
                        Data is Update
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
                       Cant Not Access 
                   </h1>
               </div>
            </>
        )
    }

    let duLieuAnh:string="";
    if(danhSachHinhAnh[0] && danhSachHinhAnh[0].duLieuAnh){
        duLieuAnh = danhSachHinhAnh[0].duLieuAnh;
    }
    
  return (
    <>
      <div className="row align-items-center">
        <div className="col-5 text-center">
          <img
            src={duLieuAnh}
            className="float-end"
            style={{ width: "150px" }}
          />
        </div>
        <div className="col-7">
          <h5>{props.sach.tenSach}</h5>
          <p>{props.sach.moTa}</p>
        </div>
      </div>
    </>
  );
};
export default CarouselItem ;
