// import { createSlice } from "@reduxjs/toolkit";

// const studentsData = [
//   {
//     id: 1,
//     name: "Aziz",
//     email: "az1z.bakht1yarvich@gmail.com",
//     phone: "930766923",
//     status: "N32",
//   },
// ];

// const studentSlice = createSlice({
//   name: "student",
//   initialState: {
//     value: studentsData,
//   },
//   reducers: {
//     addStudent: (state, action) => {
//       state.value.push(action.payload);
//     },
//     updateStudent: (state, action) => {
//       state.value.map((upstudent) => {
//         if (upstudent.id == action.payload.id) {
//           upstudent.name = action.payload.name;
//           upstudent.status = action.payload.status;
//           upstudent.email = action.payload.email;
//           upstudent.phone = action.payload.phone;
//         }
//       });
//     },
//     deleteStudent: (state, action) => {
//       state.value = state.value.filter(
//         (destudent) => destudent.id !== action.payload.id
//       );
//     },
//   },
// });

// export const { addStudent, updateStudent, deleteStudent, viewStudent } =
//   studentSlice.actions;
// export default studentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// const studentsData = [
//   {
//     id: 1,
//     name: "Aziz",
//     email: "az1z.bakht1yarvich@gmail.com",
//     phone: "930766923",
//     status: "N32",
//   },
// ];

// Function to load data from local storage
const loadStudentsData = () => {
  try {
    const serializedData = localStorage.getItem("studentsData");
    if (serializedData === null) {
      return [];
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error loading data from local storage:", error);
    return [];
  }
};

const studentsData = loadStudentsData();

const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: studentsData,
  },
  reducers: {
    addStudent: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("studentsData", JSON.stringify(state.value));
    },
    updateStudent: (state, action) => {
      state.value = state.value.map((upstudent) => {
        if (upstudent.id === action.payload.id) {
          return {
            ...upstudent,
            name: action.payload.name,
            status: action.payload.status,
            email: action.payload.email,
            phone: action.payload.phone,
          };
        }
        return upstudent;
      });
      localStorage.setItem("studentsData", JSON.stringify(state.value));
    },
    deleteStudent: (state, action) => {
      state.value = state.value.filter(
        (destudent) => destudent.id !== action.payload.id
      );
      localStorage.setItem("studentsData", JSON.stringify(state.value));
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, viewStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
