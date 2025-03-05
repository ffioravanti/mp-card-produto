import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
const CardProduto = () => {
  return (
    <div className="bg-white flex flex-col max-w-70 sm:max-w-100 shadow-lg shadow-neutral-400 rounded-xl">
      <Image
        src="/static/images/image-card.png"
        alt="product image"
        width={200}
        height={200}
        unoptimized={true}
        className="rounded-t-lg size-full object-cover"
      />
      <div className="flex flex-col p-6 sm:p-8 gap-4 sm:gap-6">
        <h1 className="font-bold text-xl sm:text-3xl">Nike Air Max 90</h1>
        <p className="text-sm">
          Eleve seu estilo com o clássico reinventado. Conforto supremo encontra
          design inovador
        </p>

        <div className="flex items-center">
          <svg
            className="size-3 sm:size-4 text-amber-400 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="size-3 sm:size-4 text-amber-400 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="size-3 sm:size-4 text-amber-400 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="size-3 sm:size-4 text-amber-400 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="size-3 sm:size-4 ms-1 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ml-2 ms-2 text-xs sm:text-sm font-bold text-gray-900">
            4.95
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
          <a
            href="#"
            className="text-xs sm:text-sm font-medium text-gray-900 underline hover:no-underline"
          >
            73 avaliações
          </a>
        </div>
        <div className="flex w-full justify-between items-center sm:flex-row">
          <data
            value="89900"
            className="text-md text-3xl sm:text-3xl text-sky-500 font-bold"
            itemProp="price"
          >
            R$ 899,00
          </data>
          <button className="bg-white text-black relative bottom-57 left-3 sm:left-0 sm:bottom-0 hover:opacity-80 hover:underline hover:cursor-pointer sm:bg-gradient-to-r sm:from-sky-500 sm:to-indigo-900/50 rounded-full sm:text-white sm:py-2 p-2 sm:p-4">
            <LuPlus className="sm:hidden size-6" />
            <p className="hidden sm:inline">Comprar agora</p>
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <FaTruck className="text-neutral-400" />
          <p className="text-neutral-400 text-xs sm:text-base">
            Frete grátis para todo o Brasil
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
