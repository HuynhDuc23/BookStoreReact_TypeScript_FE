import React from "react";
import SachModel from "../../../models/SachModel";

interface SachPropsInterface {
    sach : SachModel ;
};
// interface trên có tác dụng dể xác định kiểu dữ liệu : việc dùng intarface dễ mở rộng
// không phụ thuộc
// Khi 1 compenent nhận 1 props thì compennt nhận được cần xác định kiểu giá trị 
// của prop đó để typescript hiểu được
const SachProps:React.FC<SachPropsInterface> = (props)=> {
    return (
        <div className="col-md-3 mt-2">
        <div className="card">
            <img
                src={""}
                className="card-img-top"
                alt={""}
                style={{ height: '200px' }}
            />
            <div className="card-body">
                <h5 className="card-title">{props.sach.tenSach}</h5>
                <p className="card-text">{props.sach.moTa}</p>
                <div className="price">
                    <span className="original-price">
                        <del>{props.sach.giaNiemYet}</del>
                    </span>
                    <span className="discounted-price">
                        <strong>{props.sach.giaBan}</strong>
                    </span>
                </div>
                <div className="row mt-2" role="group">
                    <div className="col-6">
                        <a href="#" className="btn btn-secondary btn-block">
                            <i className="fas fa-heart"></i>
                        </a>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger btn-block">
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SachProps ;