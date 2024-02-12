import { createSlice } from "@reduxjs/toolkit";

const loadStudentsData = () => {
  try {
    const serializedData = localStorage.getItem("studentsData");
    return serializedData ? JSON.parse(serializedData) : [];
  } catch (error) {
    console.error("Local storage error:", error);
    return [];
  }
};

const studentsData = loadStudentsData();

const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: studentsData,
    searchQuery: "", // Qidiruv so'rovi uchun yangi holat
  },
  reducers: {
    addStudent: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("studentsData", JSON.stringify(state.value));
    },
    updateStudent: (state, action) => {
      state.value = state.value.map((upstudent) =>
        upstudent.id === action.payload.id
          ? { ...upstudent, ...action.payload }
          : upstudent
      );
      localStorage.setItem("studentsData", JSON.stringify(state.value));
    },
    deleteStudent: (state, action) => {
      state.value = state.value.filter(
        (destudent) => destudent.id !== action.payload.id
      );
      localStorage.setItem("studentsData", JSON.stringify(state.value));
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, setSearchQuery } =
  studentSlice.actions;
export default studentSlice.reducer;
