import { Link, useNavigate } from "react-router-dom";
import { Alert, Label, Spinner } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return dispatch(signInFailure("Merci de remplir tous les champs"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vel
            fugiat eveniet harum alias
          </p>
        </div>
        {/* right */}
        <div className="flex-1 max-w-lg">
          <form className="flex flex-col gap-4  " onSubmit={handleSubmit}>
            <h1 className="text-lg text-black text-center">Inscription</h1>
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
              Mot de passe:
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </Label>
            <div className="flex gap-8 justify-center mt-4">
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
                  "Connexion"
                )}
              </Button>
            </div>
            <Link
              to="/SignUp"
              className="flex justify-center items-center text-xs text-black"
            >
              Je n'ai pas de compte
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
