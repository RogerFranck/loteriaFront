import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import ButtonPrimary from "./ButtonPrimary";

interface ButtonFormInterface {
  onClose: () => void;
}

export default function ButtonForm({ onClose }: ButtonFormInterface) {
  return (
    <div className="flex flex-row justify-between items-center gap-10">
      <ButtonPrimary onClick={onClose}>Cancelar</ButtonPrimary>
      <ButtonSubmit>Guardar Producto</ButtonSubmit>
    </div>
  );
}
