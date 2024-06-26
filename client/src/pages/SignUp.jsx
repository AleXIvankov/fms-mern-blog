import { Link, useNavigate } from "react-router-dom";
import { Alert, Label, Spinner } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, SetLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Merci de remplir tous les champs");
    }
    try {
      SetLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      SetLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      SetLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20 ">
      <div className=" flex p-3 w-max-3xl mx-auto flex-col justify-center lg:items-center md:flex-row md:items-center gap-10">
        {/* left */}
        <div className="flex-1 max-w-xl">
          <Link to="/" className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-orange-400 via-blue-200 to-blue-700 rounded-lg text-white">
              FMS
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Ensemble, nous partageons nos connaissances, nos réussites et nos
            défis, dans le but de perfectionner nos compétences et d'atteindre
            l'excellence opérationnelle.
          </p>
        </div>
        {/* right */}
        <div className="flex-1 max-w-lg items-center">
          <form className="flex flex-col gap-4  " onSubmit={handleSubmit}>
            <h1 className="text-lg text-black dark:text-gray-200 text-center">
              Inscription
            </h1>
            <Label className="text-xs text-gray-400">
              Login:
              <TextInput
                type="text"
                id="username"
                placeholder="Login..."
                onChange={handleChange}
              />
            </Label>

            <Label className="text-xs text-gray-400">
              Votre email:
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </Label>
            <Label className="text-xs text-gray-400">
              Mot de passe:
              <TextInput
                type="password"
                placeholder="Mot de passe..."
                id="password"
                onChange={handleChange}
              />
            </Label>
            <div className="flex mx-auto   gap-8 justify-center mt-4">
              <Button
                gradientDuoTone="pinkToOrange"
                outline
                pill
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  `Confirmer l'inscription`
                )}
              </Button>
              <div className="items-center">
                <OAuth />
              </div>
            </div>
            <Link
              to="/Signin"
              className="flex justify-center items-center text-xs text-pink-500"
            >
              Je suis déjà inscrit
            </Link>
          </form>
          {errorMessage && (
            <Alert className="mt-5 mx-auto max-w-lg" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
