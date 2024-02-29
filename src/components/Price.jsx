import React, { useContext } from "react";
import { Mycontext } from "../App";

const Price = () => {
  const {price}=useContext(Mycontext)
  return (
    <>
      <div className="dark:text-white dark:bg-slate-800 md:px-20 w-full mx-auto " ref={price}>
        <div className="text-center mb-3">
          <p className="md:text-4xl text-2xl font-bold text-custom-orange">
            Flat Price
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            We offer Furnished Flat Within Quotated Price
          </p>
        </div>

        <table className="table-auto md:w-full w-full mx-auto text-center border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 md:text-base text-[11px]">Type</th>
              <th className="px-4 py-2 md:text-base text-[11px]">Carpet Area</th>
              <th className="px-4 py-2 md:text-base text-[11px]">Price</th>
              <th className="px-4 py-2 md:text-base text-[11px]">Price Breakup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 md:text-base text-[11px]">2BHK</td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                669-776 Sq.ft.
                <span className="block md:hidden">(Carpet Area)</span>
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">87.50 Lac</td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                <button className="bg-custom-orange  text-white font-bold py-2 px-4 rounded">
                  Price Breakup
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 md:text-base text-[11px]">3BHK</td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                987 - 1120 Sq.ft.
                <span className="block md:hidden">(Carpet Area)</span>
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]"> 1.07 cr - 1.28 cr</td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                <button className="bg-custom-orange  text-white font-bold py-2 px-4 rounded">
                  Price Breakup
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 md:text-base text-[11px]">4BHK</td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                1342 Sq.ft Sq.ft.
                <span className="block md:hidden">(Carpet Area)</span>
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">1.42 cr - 1.44 cr</td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                <button className="bg-custom-orange  text-white font-bold py-2 px-4 rounded">
                  Price Breakup
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Price;
