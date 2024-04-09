import { Label, Button, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Alex",
          from_email: form.email,
          to_email: "alekseiivankov8787@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
      });
  };

  return (
    <div className="h-[50rem] w-full relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full h-full">
        <section className=" relative flex lg:flex-row flex-col p-5 max-w-3xl items-center mx-auto min-h-screen gap-2">
          <div className="flex-1 min-w-[40%] flex flex-col items-center gap-2">
            <h1 className="text-center text-3xl text-gray-700 dark:text-gray-300 my-5 font-light">
              Contactez-nous
            </h1>
          </div>
          <form
            className="w-full flex flex-1 flex-col gap-5 mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 justify-between">
              <Label className="text-gray-400 dark:text-gray-500 text-xs">
                Nom
                <TextInput
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Entrez votre nom.."
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="input "
                />
              </Label>

              <Label className="text-gray-400 dark:text-gray-500 text-xs">
                Votre email:
                <TextInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  autoComplete="off"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="email"
                />
              </Label>
              <Label className="text-gray-400 dark:text-gray-500 text-xs">
                Message
                <Textarea
                  name="message"
                  placeholder="Votre message..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="textarea bg-slate-100 dark:bg-slate-600"
                />
              </Label>
            </div>

            <Button
              type="submit"
              className=" w-full h-10"
              gradientDuoTone="purpleToBlue"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Envoyer"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
