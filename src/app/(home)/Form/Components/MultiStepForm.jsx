"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/Utils/Schemas";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Summary from "./Summary";
import ProgressBar from "./ProgressBar";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    resolver: zodResolver(
      step === 1
        ? formSchema.shape.personalInfo
        : step === 2
        ? formSchema.shape.address
        : formSchema.shape.account
    ),
  });

  const onSubmit = (data) => {
    if (step < totalSteps) {
      setFormData((prev) => ({ ...prev, ...data }));
      setStep(step + 1);
    } else {
      console.log("Form submitted:", { ...formData, ...data });
      alert("Form submitted successfully!");
      reset();
      setStep(1);
      setFormData({});
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 register={register} errors={errors} />}
        {step === 2 && <Step2 register={register} errors={errors} />}
        {step === 3 && <Step3 register={register} errors={errors} />}
        {step === 4 && <Summary formData={formData} />}

        <div className="flex justify-between mt-6">
          {step > 1 && step < 4 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-[#f3981b] text-white rounded hover:bg-[#f3991bbb] ml-auto"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-[#f3981b] text-white rounded hover:bg-[#f3991bbb] ml-auto"
            >
              Review
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}