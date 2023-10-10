"use client";
import SideBar from "@/components/SideBar";
import React from "react";
import useMain from "./hooks/useMain";
import CardList from "./components/CardList";
import TextInputController from "@/components/TextInputController";
import ButtonSubmit from "@/components/buttons/ButtonSubmit";

export default function Main() {
  const {
    tables,
    isLoadingTables,
    handleAddTable,
    control,
    handleSubmit,
    errors,
  } = useMain();

  return (
    <SideBar>
      <div className="p-5 px-44 w-full max-sm:p-5 ">
        <div className="w-[30%]">
          <form
            className="flex gap-2 items-end"
            onSubmit={handleSubmit((data: any) => handleAddTable(data))}
          >
            <TextInputController
              control={control}
              errors={errors}
              name="cant"
              label=""
            />
            <ButtonSubmit>Add</ButtonSubmit>
          </form>
        </div>
        <div className="flex flex-row flex-wrap gap-10 mt-10 max-sm:justify-center ">
          <CardList tables={tables} isLoadingTables={isLoadingTables} />
        </div>
      </div>
    </SideBar>
  );
}
