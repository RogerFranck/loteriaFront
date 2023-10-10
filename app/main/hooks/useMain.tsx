import { useGetTables, usePostTables } from "@/service/useProductService";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function useMain() {
  const { data: tables, isLoading: isLoadingTables } = useGetTables();
  const addTableMutation = usePostTables();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddTable = (data: { cant: string }) => {
    try {
      addTableMutation.mutateAsync({ cant: data.cant });
    } catch (error) {
      toast.error("Error");
    }
  };

  return {
    tables,
    isLoadingTables,
    handleAddTable,
    control,
    handleSubmit,
    errors,
  };
}
