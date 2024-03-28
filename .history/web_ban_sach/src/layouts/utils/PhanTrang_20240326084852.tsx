import React from "react";
interface PhanTrangInterface {
  trangHienTai: number;
  tongSoTrang: number;
  phanTrang: any;
}
export const PhanTrang: React.FC<PhanTrangInterface> = (props) => {
  // Luu duoc so trang sau nay duyet list ra
  const danhSachTrang = [];
  // Trang hien tai === 1 , TH1
  if (props.trangHienTai === 1) {
    danhSachTrang.push(props.trangHienTai);
    // Add them trang 2 va 3
    if (props.tongSoTrang >= props.trangHienTai + 1) {
      danhSachTrang.push(props.trangHienTai + 1);
    }
    if (props.tongSoTrang >= props.trangHienTai + 2) {
      danhSachTrang.push(props.trangHienTai + 2);
    }
  } else if (props.trangHienTai > 1) {
    if (props.trangHienTai >= 3) {
      // trang -2
      danhSachTrang.push(props.trangHienTai - 2);
    }
    if (props.trangHienTai >= 2) {
      // trang -1
      danhSachTrang.push(props.trangHienTai - 1);
    }
    // ban than no
    danhSachTrang.push(props.trangHienTai);
    //  2 trang dang sau
    if (props.tongSoTrang > props.trangHienTai + 1) {
      danhSachTrang.push(props.trangHienTai + 1);
    }
    if (props.tongSoTrang > props.trangHienTai + 2) {
      danhSachTrang.push(props.trangHienTai + 2);
    }
  }
  return (
    <>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item" onClick={props.phanTrang(1)}>
            <button className="page-item" aria-disabled="true">
              Trang Đầu
            </button>
          </li>
          {danhSachTrang.map((trang) => {
            <li className="page-item" onClick={props.phanTrang(trang)}>
              <button className="page-item">{trang}</button>
            </li>;
          })}
          <li className="page-item">
            <a className="page-item" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li
            className="page-item"
            onClick={props.phanTrang(props.tongSoTrang)}
          >
            <button className="page-link">Trang Cuối</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
