import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Welcome to Jarurat Care</h2>
            <p className="text-gray-600 mb-4">
                This dashboard helps you view and manage patient records. Click below to view patients.
            </p>
            <Link to="/patients" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Go to Patients</Link>
        </div>
    )
}
