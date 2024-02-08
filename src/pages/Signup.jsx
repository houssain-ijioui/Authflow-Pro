import { Link } from "react-router-dom";
import GoogleBtn from "../components/GoogleBtn";
import InputField from "../components/InputField";
import Button from "../components/Button";



const Signup = () => {
  return (
    <>
        <div className="grid grid-cols-5 gap-4">
          <div className="lg:col-span-2 col-span-full py-14 pl-32">
            <div className="flex mb-3">
                <h1 className="text-lg font-medium mr-4">Déja inscris ? </h1>
                <Link to={"/login"}><h1 className="text-lg font-medium text-lightBlue hover:underline">Se connecter</h1></Link>
            </div>
            <GoogleBtn text={"S'inscrire avec Google"}  />
            <div className="mt-8 flex flex-row ">
                <div class="border-t-2 border-gray-500 w-2/12 min-w-32 mr-7"></div>
                <div className="text-gray-500 relative bottom-4 mr-7 text-base font-medium">Ou</div>
                <div class="border-t-2 border-gray-500 w-2/12 min-w-32"></div>
            </div>
            <div className="flex flex-col">
              <InputField placeholderText={"Nom"} />
              <InputField placeholderText={"Prénom"} />
              <InputField placeholderText={"Adresse Email"} />
              <InputField placeholderText={"Mot de passe"} />
              <Button text={"Sign up"} />
              <a href="#" className="hover:underline">Mot de passe oublié ?</a>
            </div>
          </div>
          <div className="bg-lightBlue w-full lg:col-span-3 h-dvh hidden sm:block">
          </div>
        </div>
    </>
  )
}

export default Signup