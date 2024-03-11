import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl text-gray-700 dark:text-gray-300 my-5 font-light">
        Créer un post
      </h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Titre"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Choisir une catégorie</option>
            <option value="default">Défaillance</option>
            <option value="idea">Suggestion d'amélioration</option>
            <option value="info">Info</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-2 border-sky-600 border-dashed p-3">
          <FileInput type="file" accept="image/*" />
          <Button type="button" gradientMonochrome="cyan" size="sm" outline>
            Télécharger
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Votre text..."
          className="h-60 mb-10"
          required
        />
        <Button type="submit" gradientMonochrome="cyan" outline>
          Publier
        </Button>
      </form>
    </div>
  );
}
