import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

// Thunk: fetch mock users from JSONPlaceholder and augment them
export const fetchPatients = createAsyncThunk(
    'patients/fetchPatients',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!res.ok) throw new Error('Network response was not ok')
            const users = await res.json()
            // map to patient objects and add random age + phone fallback
            const patients = users.map(u => ({
                id: String(u.id),
                name: u.name,
                email: u.email,
                contact: u.phone || u.email,
                age: 20 + (u.id % 60), // deterministic-ish age for demo
                address: `${u.address.suite}, ${u.address.street}, ${u.address.city}`,
                company: u.company.name,
                notes: `Patient from ${u.company.name}`,
            }))
            return patients
        } catch (err) {
            return rejectWithValue(err.message || 'Failed to fetch')
        }
    }
)

const patientsSlice = createSlice({
    name: 'patients',
    initialState: {
        list: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
        searchQuery: '',
        selectedPatient: null,
    },
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload
        },
        selectPatient(state, action) {
            state.selectedPatient = action.payload
        },
        clearSelectedPatient(state) {
            state.selectedPatient = null
        },
        addPatient(state, action) {
            const newPatient = { id: nanoid(), ...action.payload }
            state.list.unshift(newPatient)
        },
        updatePatient(state, action) {
            const idx = state.list.findIndex(p => p.id === action.payload.id)
            if (idx !== -1) state.list[idx] = action.payload
        },
        removePatient(state, action) {
            state.list = state.list.filter(p => p.id !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPatients.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchPatients.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.list = action.payload
            })
            .addCase(fetchPatients.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || 'Failed to load patients'
            })
    }
})

export const {
    setSearchQuery, selectPatient, clearSelectedPatient,
    addPatient, updatePatient, removePatient
} = patientsSlice.actions

export default patientsSlice.reducer
