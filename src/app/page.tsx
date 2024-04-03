"use client";
import { useRouter } from 'next/navigation';
import { CheckIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [inputE, setInputEmail] = useState("");
  const [inputN, setInputName] = useState("");
  const [inputD, setInputDescription] = useState("");
  const router = useRouter();

  const [boolean, setBoolean] = useState(false);

  const handleInputChangeEmail = (e: any) => setInputEmail(e.target.value);
  const handleInputChangeName = (e: any) => setInputName(e.target.value);
  const handleInputChangeDescription = (e: any) =>
    setInputDescription(e.target.value);

  function handleSubmit() {
    if (emailError || nameError || descriptionError) {
      setBoolean(true);
      setTimeout(() => {
        setBoolean(false);
      }, 1000);
    } else {
      router.push('/dashboard');
    }
  }

  const emailError = inputE === "";
  const nameError = inputN === "";
  const descriptionError = inputD === "";
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-5">
      <h1 className="text-3xl text-orange-300">Bienvenido {inputN}</h1>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        className={`w-1/3 ${
          emailError || nameError || descriptionError
            ? "border-red-500"
            : "border-lime-500"
        }`}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" className="text-lg" textAlign="left">
                Completa tu usuario
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <FormControl>
              <div className="flex flex-col gap-2">
                <div>
                  <FormLabel>Email</FormLabel>
                  <Input isInvalid={emailError}
                    placeholder="Pon tu email aqui"
                    type="email"
                    value={inputE}
                    onChange={handleInputChangeEmail}
                  />
                  {!emailError ? (
                    <span className="flex gap-1 items-end">
                      <FormHelperText color="green">Completado</FormHelperText>
                      <CheckIcon color="green"/>
                    </span>
                  ) : (
                    <span className="text-red-500 text-sm">Email es requerido.</span>
                  )}
                </div>
                <div>
                  <FormLabel>Nombre</FormLabel>
                  <Input isInvalid={nameError}
                    placeholder="Pon tu nombre aqui"
                    type="text"
                    value={inputN}
                    onChange={handleInputChangeName}
                  />
                  {!nameError ? (
                    <span className="flex gap-1 items-end">
                    <FormHelperText color="green">Completado</FormHelperText>
                    <CheckIcon color="green"/>
                  </span>
                  ) : (
                    <span className="text-red-500 text-sm">El nombre es requerido.</span>
                  )}
                </div>
                <div>
                  <FormLabel>Descripcion</FormLabel>
                  <Textarea isInvalid={descriptionError}
                    value={inputD}
                    onChange={handleInputChangeDescription}
                    placeholder="Cuentame sobre ti"
                  />
                  {!descriptionError ? (
                     <span className="flex gap-1 items-end">
                     <FormHelperText color="green">Completado</FormHelperText>
                     <CheckIcon color="green"/>
                   </span>
                  ) : (
                    <span className="text-red-500 text-sm">
                      La descripcion es requerida.
                    </span>
                  )}
                </div>
              </div>
            </FormControl>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <button
        onClick={handleSubmit}
        className="py-1 px-3 bg-orange-300 text-white rounded text-lg"
      >
        Ingresar
      </button>
      {boolean ? (
        <span className="absolute top-2">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Falta informacion</AlertTitle>
            <AlertDescription>
              Faltan campos por completar en el formulario
            </AlertDescription>
          </Alert>
        </span>
      ) : null}
    </div>
  );
}
