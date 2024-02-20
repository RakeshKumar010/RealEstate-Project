import React from "react";

const Price = () => {
  return (
    <>
      <div className="dark:text-white">
        <div className="text-center mb-3">
          <p className="md:text-4xl text-2xl font-bold text-custom-orange">
            Flat Price
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            We offer Furnished Flat Within Quotated Price
          </p>
        </div>

        <table className="table-auto md:w-full w-full mx-auto text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Carpet Area</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Price Breakup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">2BHK</td>
              <td className="border px-4 py-2">
                669-776 Sq.ft.
                <span className="block md:hidden">(Carpet Area)</span>
              </td>
              <td className="border px-4 py-2">87.50 Lac</td>
              <td className="border px-4 py-2">
                <button className="bg-custom-orange hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                  Price Breakup
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3BHK</td>
              <td className="border px-4 py-2">
                987 - 1120 Sq.ft.
                <span className="block md:hidden">(Carpet Area)</span>
              </td>
              <td className="border px-4 py-2"> 1.07 cr - 1.28 cr</td>
              <td className="border px-4 py-2">
                <button className="bg-custom-orange hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                  Price Breakup
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4BHK</td>
              <td className="border px-4 py-2">
                1342 Sq.ft Sq.ft.
                <span className="block md:hidden">(Carpet Area)</span>
              </td>
              <td className="border px-4 py-2">1.42 cr - 1.44 cr</td>
              <td className="border px-4 py-2">
                <button className="bg-custom-orange hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
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
