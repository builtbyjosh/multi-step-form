import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState();
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
