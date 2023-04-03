import React from "react";
import Header from "./header";
import Layout from "@/pages/components/common/layout/Layout";
import Category1 from "./body/Category1";
import Category2 from "./body/Category2";

function CategoryPage() {
  return (
    <>
      <div className=" w-1700 mt-16 bg-slate-100 mr-28 rounded-3xl">
        <div className="">
          <Header />
        </div>
        <div className=" mt-28 mx-5">
          <Category1 />
        </div>
      </div>
      <div className="">
        <Category2 />
      </div>
    </>
  );
}

export default CategoryPage;
