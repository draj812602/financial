"use client";
import BannerPage from "./components/bannerPage/bannerPage";
import Indexes from "./components/Indexes/indexes";
import ProducsComp from "./components/Products/ourProducts";
export default function Home() {
  return (
    <div className="mt-4 ms-4 me-5">
      <div className="row">
        <div className="col-7">
          <BannerPage />
          <div className="fs-5 fw-bold text-primary my-4 mt-5">Index</div>
          <Indexes />
        </div>

        <div className="col-5 col-xl-4 fs-2 text-center">todays artical</div>

        <br />
        <div className="fs-5 fw-bold text-primary mb-4 mt-3">Our Products</div>
        <ProducsComp />
      </div>
    </div>
  );
}
