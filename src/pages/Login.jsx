import { Link } from "react-router-dom";
import GoogleBtn from "../components/GoogleBtn";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../state/auth/authSlice";

const Login = () => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const dispatch = useDispatch();


  const handleLoggin = () => {
    dispatch(login({email, password}));
  }


  return (
    <>
        <div className="grid grid-cols-5 gap-4">
          <div className="lg:col-span-2 col-span-full py-24 pl-32">
            <div className="flex mb-10">
                <h1 className="text-lg font-medium mr-4">Nouveau ? </h1>
                <Link to={"/signup"}><h1 className="text-lg font-medium text-lightBlue hover:underline">S'inscrire</h1></Link>
            </div>
            <GoogleBtn text={"Se connecter avec Google"}  />
            <div className="mt-8 flex flex-row ">
                <div className="border-t-2 border-gray-500 w-2/12 min-w-32 mr-7"></div>
                <div className="text-gray-500 relative bottom-4 mr-7 text-base font-medium">Ou</div>
                <div className="border-t-2 border-gray-500 w-2/12 min-w-32"></div>
            </div>
            <div className="flex flex-col">
              <InputField value={email} setValue={setEmail} placeholderText={"Adresse email"} />
              <InputField value={password} setValue={setPassword} placeholderText={"Mot de passe"} />
              <Button onClick={handleLoggin} text={"Login"} />
              <a href="#" className="hover:underline">Mot de passe oublié ?</a>
            </div>
          </div>
          <div className="bg-lightBlue w-full lg:col-span-3 h-dvh">
          </div>
        </div>
    </>
  )
}


export default Login;