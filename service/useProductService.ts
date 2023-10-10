import { TABLES_API } from "@/const/Api";
import { useGet, usePost } from "@/utils/fetch";
import { addTables, setTables } from "@/redux/context/tableSlice";

export const useGetTables = () => useGet({ 
  url: TABLES_API, 
  store: 'tableReducer', 
  itemList: 'tables',
  setItem: setTables 
})

export const usePostTables = () => usePost({
  url: TABLES_API,
  setItem: addTables
})


