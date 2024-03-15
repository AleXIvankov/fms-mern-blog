import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border mt-5 border-teal-500 justify-center items-center gap-4 rounded-tl-2xl rounded-br-2xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-xl">Portail d'information</h2>
        <p className="text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-md rounded-tr-none rounded-bl-none "
          size="xs"
        >
          <a href="/" target="_blank" rel="noopener noreferrer">
            GO
          </a>
        </Button>
      </div>
      <div className="flex-1">
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
    </div>
  );
}
