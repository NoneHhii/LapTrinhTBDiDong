import { useState, createContext, useContext, ReactNode } from 'react';

interface Product {
  name: string;
  manu: string;
  price: number;
  sale: number;
  rate: number;
  img: string;
  color: string;
  id: number;
}

interface FavorContextType {
  favorList: Product[];
  addToFavor: (product: Product) => void;
}

const FavorContext = createContext<FavorContextType | undefined>(undefined);

interface FavorProviderProp {
  children: ReactNode;
}

export const FavorProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [favorList, setFavorList] = useState<Product[]>([]);

  const addToFavor = (product: Product) => {
    setFavorList(prev => {
      const existFavor = prev.find(i => i.id === product.id);
      if (existFavor) {
        return [...prev];
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <FavorContext.Provider value={{ favorList, addToFavor }}>
      {children}
    </FavorContext.Provider>
  );
};

export const useFavor = () => {
  const context = useContext(FavorContext);
  if (!context) {
    throw new Error("useFavor must be used within FavorProvider");
  }
  return context;
};


