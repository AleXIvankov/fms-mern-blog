import React from "react";
import {
  Label,
  Button,
  TextInput,
  Textarea,
  Datepicker,
  Select,
  Checkbox,
  Table,
} from "flowbite-react";
import { useState } from "react";

export default function Preventif() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };
  return (
    <div className="flex flex-col sm:flex-row min-h-screen gap-10 sm:gap-16 mx-auto p-8 max-w-5xl">
      <div className="flex-1 shadow-lg shadow-blue-500/50 rounded-3xl p-8 dark:shadow-zinc-500 border-1 border dark:border-zinc-500">
        <h2 className="text-3xl text-center uppercase">5S</h2>
        <form
          className="w-full flex flex-1 flex-col gap-5 mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 justify-between">
            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Nom
              <TextInput
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Entrez votre nom.."
                required
                className="input "
              />
            </Label>
            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Date:
            </Label>
            <Datepicker />

            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Équipe:
              <Select id="team" required>
                <option>Matin</option>
                <option>Soir</option>
                <option>Nuit</option>
              </Select>
            </Label>

            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              5S :
              <Select id="5s" required>
                <option>OK</option>
                <option>NOK</option>
              </Select>
            </Label>
            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Message
              <Textarea
                name="message"
                placeholder="Votre message..."
                rows={5}
                required
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
      </div>
      <div className="flex-1 shadow-lg shadow-blue-500/50 rounded-3xl p-8 dark:shadow-zinc-500 border-1 border dark:border-zinc-500">
        <h2 className="text-3xl text-center uppercase">Prevéntif</h2>
        <form
          className="w-full flex flex-1 flex-col gap-5 mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 justify-between">
            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Nom
              <TextInput
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Entrez votre nom.."
                required
                className="input "
              />
            </Label>
            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Date:
            </Label>
            <Datepicker />

            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Équipe:
              <Select id="team" required>
                <option>Matin</option>
                <option>Soir</option>
                <option>Nuit</option>
              </Select>
            </Label>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-4"></Table.HeadCell>
                <Table.HeadCell>Nom de station</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Station N°1
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Station N°2
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Station N°3
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Label className="text-gray-400 dark:text-gray-300 text-xs">
              Message
              <Textarea
                name="message"
                placeholder="Votre message..."
                rows={2}
                required
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
      </div>
    </div>
  );
}
