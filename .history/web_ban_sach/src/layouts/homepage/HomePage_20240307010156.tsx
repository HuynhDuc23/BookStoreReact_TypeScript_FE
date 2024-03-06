import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

import DanhSachSanPham from "../product/DanhSachSanPham";
function HomePage() {
    return (
         <>
             <Banner/>
             <Carousel/>
             {/* <List /> */}
             <DanhSachSanPham/>
             
         </>
    )
};
export default HomePage ;