"use client";

export default function ProgressBar({ currentStep, totalSteps }) {
  const steps = [
    "Personal Info",
    "Address",
    "Account",
    "Review"
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between relative">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-0">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
            style={{ 
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` 
            }}
          ></div>
        </div>

        {/* Steps */}
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${isCompleted ? 'bg-green-500' : ''}
                ${isActive ? 'bg-blue-600 ring-4 ring-blue-300' : ''}
                ${!isCompleted && !isActive ? 'bg-gray-200 dark:bg-gray-600' : ''}
                transition-colors duration-300`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className={`text-sm font-medium ${
                    isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {stepNumber}
                  </span>
                )}
              </div>
              <span className={`text-xs mt-2 text-center ${
                isActive ? 'font-medium text-blue-600 dark:text-blue-400' : 
                isCompleted ? 'text-green-600 dark:text-green-400' : 
                'text-gray-500 dark:text-gray-400'
              }`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}