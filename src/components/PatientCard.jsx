import React from 'react'

export default function PatientCard({ patient, onView }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-lg font-semibold">{patient.name}</div>
                    <div className="text-sm text-gray-500">{patient.company}</div>
                </div>
                <div className="text-sm text-gray-600">{patient.age} yrs</div>
            </div>

            <div className="mt-3 text-sm">
                <div className="text-gray-600"><strong>Contact:</strong> {patient.contact}</div>
                <div className="text-gray-600"><strong>Email:</strong> {patient.email}</div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
                <button
                    onClick={onView}
                    className="px-3 py-1.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200"
                >
                    View Details
                </button>


            </div>
        </div>
    )
}
