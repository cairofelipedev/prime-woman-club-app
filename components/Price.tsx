import React from "react";
import { BsCheck } from "react-icons/bs";

const Price = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-300">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl text-black font-light md:text-4xl">
          Uma assinatura da <span className="text-yellow-600">Prime Womam Club</span> dá acesso completo ao nosso clube de vantagens
          </h2>
        </div>
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6 lg:p-8">
              <h3 className="text-2xl text-gray-700 font-semibold text-center">
                Assine agora por apenas
              </h3>
              <div>
                <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="text-8xl text-yellow-600 font-bold leading-0">
                      49,90
                    </span>
                    <div className="pb-2">
                      <span className="block text-xl text-gray-800 font-bold">
                        R$
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul
                role="list"
                className="w-max space-y-2 py-2 m-auto text-gray-600"
              >
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Descontos em toda rede</span>
                </li>
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Nails Designer</span>
                </li>
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Sobrancelhas</span>
                </li>
              </ul>
              
              <button
                type="submit"
                title="Submit"
                className="block w-full py-3 px-6 text-center rounded-xl transition bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800"
              >
                <span className="text-white font-semibold">
                  Assine Agora
                </span>
              </button>
<p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                <span>Dúvidas atraves</span>
                <a
                  href="tel:+24300"
                  className="flex space-x-2 items-center text-yellow-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </p>
            </div>
          </div>

          <div className="relative group md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
              <ul role="list" className="space-y-4 py-6 text-gray-600">
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Produtos premium</span>
                </li>
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Serviços de primeira qualidade</span>
                </li>
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Fitness</span>
                </li>
                <li className="space-x-2 flex">
                  <span className="text-yellow-600 font-semibold justify-center"><BsCheck  size={20}/></span>
                  <span>Salão de Beleza e muito mais...</span>
                </li>
              </ul>
              <p className="text-gray-700 pb-3">
              Obtenha os melhores descontos em qualquer serviço de nosso app. As empresas que usam nossa
              </p>
              <div className="mt-6 flex justify-between gap-6">
                <img
                  className="w-16 lg:w-24"
                  src="/clear.png"
                  loading="lazy"
                  alt="clear"
                />
                <img
                  className="w-8 lg:w-16"
                  src="/ultrex.jpg"
                  loading="lazy"
                  alt="ultrex"
                />
                <img
                  className="w-16 lg:w-24"
                  src="clear.png"
                  loading="lazy"
                  alt="clear"
                />
                <img
                  className="w-8 lg:w-16"
                  src="/ultrex.jpg"
                  loading="lazy"
                  alt="ultrex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
