import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full">
  
        <footer className="flex flex-col items-center  text-center text-white bg-blue-50 dark:bg-slate-800 dark:text-neutral-200 ">
          <div className="container p-6">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              <div className="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
              <div className="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
              <div className="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
              <div className="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
              <div className="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
              <div className="mb-6 lg:mb-0">
                <img
                  src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                  className="w-full rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div className="w-full p-4 text-center text-neutral-700 bg-blue-50 dark:bg-slate-800 dark:text-neutral-200">
            © 2023 Copyright:
            <a
              className="dark:text-neutral-400"
              href="https://"
            >
              Premier Estates
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
