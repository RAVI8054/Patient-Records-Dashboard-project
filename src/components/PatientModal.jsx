import React from 'react'
import { useDispatch } from 'react-redux'
import { clearSelectedPatient } from '../store/patientsSlice'

export default function PatientModal({ patient, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg z-10 max-w-lg w-full mx-4 p-6">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{patient.name}</h3>
                    <button className="text-gray-500" onClick={onClose}>✕</button>
                </div>

                <div className="mt-4 text-sm text-gray-700">
                    <p><strong>Age:</strong> {patient.age}</p>
                    <p className="mt-1"><strong>Contact:</strong> {patient.contact}</p>
                    <p className="mt-1"><strong>Email:</strong> {patient.email}</p>
                    <p className="mt-1"><strong>Address:</strong> {patient.address}</p>
                    <p className="mt-1"><strong>Company:</strong> {patient.company}</p>
                    <p className="mt-1"><strong>Notes:</strong> {patient.notes}</p>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-3 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
                    >
                        Close
                    </button>

                </div>
            </div>
        </div>
    )
}
