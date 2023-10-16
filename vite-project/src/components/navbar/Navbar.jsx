import { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";

import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";

function Navbar() {
  const context = useContext(myContext);
  console.log(context);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/Catlog"}
                    className="text-sm font-medium text-gray-900 "
                  >
                    Catlog
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={"/BuyDesk"}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      BuyDesk
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link
                      to={"/dashboard"}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Dashboard
                    </Link>
                  </div>

                  <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      Logout
                    </a>
                  </div>
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Simfoni E-cart Website
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1 className=" text-2xl font-bold text-black  px-2 py-1 rounded">
                      Simfoni
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="relative">
                  <div className="absolute flex items-center ml-2 h-full">
                    <svg
                      className="w-4 h-4 fill-current text-primary-gray-dark"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="searchkey"
                    id="searchkey"
                    placeholder="Search here"
                    className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                  />
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/IntersT"}
                    className="group -m-2 flex items-center p-2"
                  >
                    <BiWallet />

                    <span className="ml-2 text-sm font-medium text-gray-700 group-">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>

                  {/*like*/}
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                  >
                    <AiOutlineHeart />

                    <span className="ml-2 text-sm font-medium text-gray-700 group-">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>

                  {/*like*/}
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={"/"} className="group -m-2 flex items-center p-2">
                    <AiOutlineShoppingCart />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={"/"} className="group -m-2 flex items-center p-2">
                    <GrNotification />

                    <span className="ml-2 text-sm font-medium text-gray-700 group-">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a className="ml-3 block text-sm font-medium">Harsha</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
