import { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { lay1AnhCuaMotSach } from "../../../api/HinhAnhAPI";

interface CarouselItemInterface {
    sach : SachModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {
    const maSach = props.sach.maSach ;

    const [danhSachHinhAnh,setDanhSachHinhAnh] = useState<SachModel[]>([]);
    const [DangTaiDuLieu,setDangTaiDuLieu] =  useState<boolean>(true);
    const [baoLoi,setBaoLoi]= useState(null);
    useEffect(()=>{
          lay1AnhCuaMotSach(maSach).then(hinhAnhData=>{
            setDanhSachHinhAnh(hinhAnhData)
            setDangTaiDuLieu(false)
          })
          .catch((error)=>{
              throw new Error(error);
              setBaoLoi(error);
          })
    },[])
    
  return (
    <>
      <div className="row align-items-center">
        <div className="col-5 text-center">
          <img
            src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp"
            className="float-end"
            style={{ width: "150px" }}
          />
        </div>
        <div className="col-7">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </>
  );
};
export default CarouselItem ;
