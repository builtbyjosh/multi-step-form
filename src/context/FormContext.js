import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { paymentPlans } from '../data/paymentPlans';
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const { handleSubmit, register, errors, setValue } = useForm();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(paymentPlans.monthly[0]);
  const [addOnCharges, setAddOnCharges] = useState([]);

  return (
    <FormContext.Provider
      value={{
        addOnCharges,
        setAddOnCharges,
        selectedPlan,
        setSelectedPlan,
        isYearly,
        setIsYearly,
        formStep,
        setFormStep,
        handleSubmit,
        register,
        errors,
        setValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
