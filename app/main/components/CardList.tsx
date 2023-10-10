import Card from "@/components/Card";
import { Skeleton } from "@mui/material";
import React from "react";
import usePaginationMain from "../hooks/usePaginationMain";
import { TableInterface } from "@/redux/context/tableSlice";

interface CardListProps {
  tables: TableInterface[];
  isLoadingTables: boolean;
}

export default function CardList({ tables, isLoadingTables }: CardListProps) {
  return (
    <>
      {isLoadingTables
        ? [0, 0, 0].map((_, i) => (
            <Skeleton key={i} variant="rounded" width={208} height={288} />
          ))
        : tables.map((e: TableInterface, i: number) => (
            <Card cards={e.cards} key={i} />
          ))}
    </>
  );
}
