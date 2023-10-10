/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query'

interface axiosUrlProps {
  url: string;
  id? :string
  data?: any
}

interface useGetProps {
  url: string;
  store: string;
  itemList: string;
  setItem: any
}

interface useMutationProps {
  url: string;
  setItem: any
  id?:string
  successMsg?:string;
  errorMsg?:string;
}

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});


export const axiosGet = ({ url }: axiosUrlProps) => instance.get(url);
export const axiosPost = ({ url, data }: axiosUrlProps) => instance.post(url, data);
export const axiosDelete = ({ url }: axiosUrlProps) => instance.delete(url);
export const axiosPut = ({ url, data }: axiosUrlProps) => instance.put(url ,data);

export const useGet = ({ url, store, itemList, setItem }: useGetProps) => {
  const selector = (state: any) => state[store][itemList]
  const itemArray = useAppSelector(selector);
  const dispatch = useAppDispatch();
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorResponse, setError] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosGet({ url });
        dispatch(setItem(response.data)); 
      } catch (error) {
        setError(error)
        toast.error('Error');
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, [url, dispatch]);

  return { data: itemArray, isLoading, errorResponse, };
};

export const usePost = ({ url, setItem, successMsg = "Agregado con exito!!", errorMsg = "Error" }: useMutationProps) => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const response = await axiosPost({url, data})
        dispatch(setItem(response.data)); 
        toast.success(successMsg);
      return response.data
      } catch (error) {
        toast.error(errorMsg);
      }
    },
  })  
};

export  const useDelete = ({ url, setItem }: useMutationProps) => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async (id: any) => {
      try {
        const response = await axiosDelete({url: `${url}/${id}`})
        dispatch(setItem(id)); 
        toast.success('Eliminación exitosa!!');
        return response.data
      } catch (error) {
        toast.error('Error');
      }
     
    },
  })  
}

export const usePut = ({ url, setItem }: useMutationProps) => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async ( { id, data} : any) => {
      try {
        const response = await axiosPut({url: `${url}/${id}`, data})
        dispatch(setItem(response.data)); 
        toast.success('Edición exitosa!!');
        return response.data
      } catch (error) {
        toast.error('Error');
      }
      
    },
  })  
};