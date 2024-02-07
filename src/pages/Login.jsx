import { Link } from "react-router-dom";
import GoogleBtn from "../components/GoogleBtn";
import InputField from "../components/InputField";
import Button from "../components/Button";


const Login = () => {
  return (
    <>
        <div className="">
            <div className="flex mb-10">
                <h1 className="text-lg font-medium mr-4">Nouveau ? </h1>
                <Link to={"/signup"}><h1 className="text-lg font-medium text-lightBlue hover:underline">S'inscrire</h1></Link>
            </div>
            <GoogleBtn  />
            <div className="mt-8 flex flex-row ">
                <div class="border-t-2 border-gray-500 w-2/12 min-w-32 mr-7"></div>
                <div className="text-gray-500 relative bottom-4 mr-7 text-base font-medium">Ou</div>
                <div class="border-t-2 border-gray-500 w-2/12 min-w-32"></div>
            </div>
            <div className="flex flex-col">
              <InputField placeholderText={"Adresse email"} />
              <InputField placeholderText={"Mot de passe"} />
              <Button text={"Login"} />
            </div>
        </div>
    </>
  )
}


export default Login;