'use client';
import { useState, useEffect } from "react";

export const useDebounceValue = (delay: number, term?: string) => {
    const [debouncedValue, setDebouncedValue] = useState(term);
      useEffect(() => {
        const timer = setTimeout(() => {
          setDebouncedValue(term);
        }, delay)
    
        return () => clearTimeout(timer)
      }, [term, delay])
    
      return debouncedValue
    }