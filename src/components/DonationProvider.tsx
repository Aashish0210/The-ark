"use client";

import React, { createContext, useContext, useState } from 'react';
import DonationModal from './DonationModal';

interface DonationContextType {
  openDonation: (amount?: number) => void;
  closeDonation: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};

export default function DonationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const openDonation = (amt?: number) => {
    setAmount(amt);
    setIsOpen(true);
  };

  const closeDonation = () => {
    setIsOpen(false);
  };

  return (
    <DonationContext.Provider value={{ openDonation, closeDonation }}>
      {children}
      <DonationModal 
        isOpen={isOpen} 
        onClose={closeDonation} 
        initialAmount={amount} 
      />
    </DonationContext.Provider>
  );
}

