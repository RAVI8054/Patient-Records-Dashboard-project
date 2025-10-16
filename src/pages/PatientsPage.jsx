import { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery, selectPatient, clearSelectedPatient, addPatient } from '../store/patientsSlice'
import PatientCard from '../components/PatientCard'
import PatientModal from '../components/PatientModal'
import AddPatientForm from '../components/AddPatientForm'

export default function PatientsPage() {
    const dispatch = useDispatch()
    const { list, status, error, searchQuery, selectedPatient } = useSelector(s => s.patients)
    const [showAdd, setShowAdd] = useState(false)

    const filtered = useMemo(() => {
        if (!searchQuery) return list
        return list.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [list, searchQuery])

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h2 className="text-xl font-semibold">Patients</h2>
                <div className="flex items-center gap-3">
                    <input
                        value={searchQuery}
                        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                        placeholder="Search by name..."
                        className="px-3 py-2 border rounded-md"
                    />
                    <button
                        onClick={() => setShowAdd(true)}
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
                    >
                        Add New
                    </button>

                </div>
            </div>

            {/* Loading / Error */}
            {status === 'loading' && <div className="p-4 bg-white rounded-md shadow-sm">Loading patients...</div>}
            {status === 'failed' && <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(p => (
                    <PatientCard key={p.id} patient={p} onView={() => dispatch(selectPatient(p))} />
                ))}
            </div>

            {/* Empty state */}
            {status === 'succeeded' && filtered.length === 0 && (
                <div className="mt-6 p-4 bg-white rounded-md shadow-sm text-gray-600">No patients found.</div>
            )}

            {/* Modal */}
            {selectedPatient && <PatientModal patient={selectedPatient} onClose={() => dispatch(clearSelectedPatient())} />}

            {/* Add patient drawer/modal */}
            {showAdd && (
                <AddPatientForm
                    onClose={() => setShowAdd(false)}
                    onAdd={(data) => {
                        dispatch(addPatient(data))
                        setShowAdd(false)
                    }}
                />
            )}
        </div>
    )
}
