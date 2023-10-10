import { handleGetProductPagination } from '@/service/useProductService';
import {useState, useEffect} from 'react'

export default function usePaginationMain() {
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const debounce = (func:any, delay: number) => {
    let timeoutId: any;
    return function (...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const loadMore = async () => {
    if (isLoadingMore || !hasMore) {
      return;
    }
    setIsLoadingMore(true);
    try {
      const { data } = await handleGetProductPagination(page + 1, 2);
      if (data.data.length === 0) {
        setHasMore(false);
        return;
      }
      console.log(data.data.length)
      setPage(data.current_page + 1);
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handleScroll = debounce(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadMore();
    }
  }, 300); 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isLoadingMore
  }
}
