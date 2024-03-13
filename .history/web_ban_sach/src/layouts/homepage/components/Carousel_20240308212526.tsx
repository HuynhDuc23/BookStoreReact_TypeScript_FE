import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { lay3SachMoiNhat } from "../../../api/SachAPI";
import CarouselItem from "./CorouselItem";
const Carousel:React.FC = ()=>{
    const [danhSachQuyenSach,setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] = useState<boolean>(true);
    const [loi,setBaoLoi] = useState(null);
    useEffect(()=>{
      lay3SachMoiNhat().then(data=>{
        setDanhSachQuyenSach(data)
        setDangTaiDuLieu(false) 
      }).
      catch(error=>{
         throw new Error(error)
          setBaoLoi(error.message);
      })
  },[])
    console.log(typeof danhSachQuyenSach);
    if(!dangTaiDuLieu){
        return (
            <>
                <div>
                    <h1>
                        Hiện Tại Đang Tải Dữ liệu 
                    </h1>
                </div>
            </>
        )
    }
    if(loi!=null){
      return (
        <>
            <div>
              <h1>
                 Error!
              </h1>
            </div>
        </>
      )
    }
        return (
            <>
                <div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                               <div className="carousel-item active" data-bs-interval="10000">
                           <CarouselItem key={0} sach={danhSachQuyenSach[0]}/>
                        </div>
                        <div className="carousel-item " data-bs-interval="10000">
                           <CarouselItem key={1} sach={danhSachQuyenSach[1]}/>
                        </div> 
                        <div className="carousel-item " data-bs-interval="10000">
                           <CarouselItem key={2} sach={danhSachQuyenSach[2]}/>
                        </div> 
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </>
        )
    }
export default Carousel;