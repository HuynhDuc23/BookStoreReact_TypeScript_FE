import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { lay3SachMoiNhat } from "../../../api/SachAPI";
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

    if(!setDangTaiDuLieu){
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
    if(setBaoLoi!=null){
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
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src='https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp' className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src='https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
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