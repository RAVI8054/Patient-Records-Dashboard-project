import { useState } from 'react'

export default function AddPatientForm({ onClose, onAdd }) {
    const [form, setForm] = useState({
        name: '',
        age: '',
        contact: '',
        email: '',
        address: '',
        company: '',
        notes: '',
    })

    function change(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function submit(e) {
        e.preventDefault()
        if (!form.name || !form.contact) return alert('Please provide name and contact')
        onAdd({
            ...form,
            age: form.age ? Number(form.age) : 30
        })
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
            <form onSubmit={submit} className="bg-white rounded-lg shadow-lg z-10 max-w-md w-full mx-4 p-6">
                <h3 className="text-lg font-semibold mb-3">Add New Patient</h3>

                <div className="space-y-2">
                    <input name="name" value={form.name} onChange={change} placeholder="Full name" className="w-full px-3 py-2 border rounded" />
                    <div className="flex gap-2">
                        <input name="age" value={form.age} onChange={change} placeholder="Age" type="number" className="w-1/3 px-3 py-2 border rounded" />
                        <input name="contact" value={form.contact} onChange={change} placeholder="Contact" className="flex-1 px-3 py-2 border rounded" />
                    </div>
                    <input name="email" value={form.email} onChange={change} placeholder="Email" className="w-full px-3 py-2 border rounded" />
                    <input name="address" value={form.address} onChange={change} placeholder="Address" className="w-full px-3 py-2 border rounded" />
                    <input name="company" value={form.company} onChange={change} placeholder="Company / Source" className="w-full px-3 py-2 border rounded" />
                    <textarea name="notes" value={form.notes} onChange={change} placeholder="Notes" className="w-full px-3 py-2 border rounded" rows="3"></textarea>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                    {/* Cancel / Close Button (Red) */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-3 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200"
                    >
                        Cancel
                    </button>

                    {/* Add Button (Green) */}
                    <button
                        type="submit"
                        className="px-3 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200"
                    >
                        Add
                    </button>

                </div>
            </form>
        </div>
    )
}
