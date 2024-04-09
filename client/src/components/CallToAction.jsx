import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border mt-5 border-teal-500 justify-center items-center gap-5 rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col gap-3">
        <h2 className="text-xl">Explorez notre portail d'informations</h2>
        <p className="text-gray-500 dark:text-gray-300 text-xs">
          "De la maintenance préventive à l'optimisation des processus"
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-md rounded-tr-none rounded-bl-none "
          size="xs"
        >
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            GO
          </a>
        </Button>
      </div>
      <div className="flex-1 p-5 rounded-2xl">
        <img
          src="../../img/callToAction.jpg"
          alt="Image"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
