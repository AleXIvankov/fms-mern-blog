import { Link } from "react-router-dom";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20 ">
      <div className=" flex p-3 w-max-3xl mx-auto flex-col justify-center lg:items-center md:flex-row md:items-center gap-10">
        {/* left */}
        <div className="flex-1 max-w-xl">
          <Link to="/" className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-300 via-blue-700 to-orange-400 rounded-lg text-white">
              FMS
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vel
            fugiat eveniet harum alias
          </p>
        </div>
        {/* right */}
        <div className="flex-1 max-w-lg">
          <form className="flex flex-col gap-4  ">
            <h1 className="text-lg text-black text-center">Inscription</h1>
            <Label className="text-xs text-gray-400">
              Login:
              <TextInput type="text" id="username" placeholder="Login..." />
            </Label>

            <Label className="text-xs text-gray-400">
              Votre email:
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </Label>
            <Label className="text-xs text-gray-400">
              Mot de passe:
              <TextInput
                type="password"
                placeholder="Mot de passe..."
                id="password"
              />
            </Label>
            <div className="flex gap-8 justify-center mt-4">
              <Button gradientDuoTone="pinkToOrange" outline pill type="submit">
                Confirmer l'inscription
              </Button>
            </div>
            <Link
              to="/Sign-in"
              className="flex justify-center items-center text-xs text-black"
            >
              Je suis déjà inscrit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
