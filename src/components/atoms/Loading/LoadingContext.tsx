// // LoadingContext.tsx
// import React, { ReactNode, createContext, useContext, useState } from 'react';

// interface LoadingContextProps {
//   isLoading: boolean;
//   startLoading: () => void;
//   stopLoading: () => void;
//   children: ReactNode;
// }

// const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

// export const LoadingProvider: React.FC<LoadingContextProps> = ({ children }: LoadingContextProps) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const startLoading = () => setIsLoading(true);
//   const stopLoading = () => setIsLoading(false);

//   return (
//     <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading , children }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// export const useLoading = (): LoadingContextProps => {
//   const context = useContext(LoadingContext);

//   if (!context) {
//     throw new Error('useLoading must be used within a LoadingProvider');
//   }

//   return context;
// };
