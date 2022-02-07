import Head from 'next/head'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaGithub,
  FaRegEnvelope,
  FaEnvelope
} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md' 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl"> 
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-yellow-500">Fog</span>Boost
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-yellow-500 mb-2 shadow-2x1">
              Cadastre-se
            </h2>
            <div className="border-2 w-10 border-yellow-500 inline-block mb-2">

            </div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGithub className="text-sm" />
              </a>
              </div>{/* Login / Login com redes sociais */}
              <p className="text-gray-400 my-3"> Entre com email</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm
                 flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                  <MdLockOutline className="text-gray-400 m-2" />
                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm
                 flex-1" />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="checkbox" id="lembrar" className="mr-1"/> Lembrar-me
                    </label>
                    <a href="#" className="text-xs">Esqueceu sua senha?</a>
                </div>
                <a href="#" className="border-2 border-yellow-500 text-yellow-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-500 hover:text-white">Login</a>
              </div>
          </div>
        </div>  
        {/* Cadastre-se */}
        <div className="w-2/5 bg-yellow-500 rounded-tr-2xl rounded-br-2xl py-36 px12">
        <h2 className="text-3xl font-bold mb-2">Seja Bem Vindo !</h2>
        <div className="border-2 w-10 border-black inline-block mb-2"></div>
        <p className="mb-2">Atinja tudo que lhe foi dado, FPS sem limites!</p>
        <a href="#" className="border-2 border-white-500 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-yellow-500">Cadastre-se</a>
          </div>
          {/* Cadastro */}
        </div>
      </main>
    </div>
  );
}
