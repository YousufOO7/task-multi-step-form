"use client";

export default function Summary({ formData }) {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-2 dark:text-white">
          Personal Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Name:</span> {formData?.fullName}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Email:</span> {formData?.email}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Phone:</span> {formData?.phone}
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-2 dark:text-white">
          Address Details
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Street:</span> {formData?.street}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">City:</span> {formData?.city}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Zip Code:</span> {formData?.zipCode}
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-2 dark:text-white">
          Account Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Username:</span> {formData?.username}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Password:</span> {formData?.password}
        </p>
      </div>
    </div>
  );
}