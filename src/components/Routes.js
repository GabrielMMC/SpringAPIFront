import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddCourse from './Course/AddCourse';
import EditCourse from './Course/EditCourse';
import ListCourse from './Course/ListCourse';
import AddTeacher from './Teacher/AddTeacher';
import EditTeacher from './Teacher/EditTeacher';
import ListTeacher from './Teacher/ListTeacher';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path={"course/list"} element={<ListCourse />} />
      <Route path={"course/add"} element={<AddCourse />} />
      <Route path={"course/edit/:id"} element={<EditCourse />} />

      <Route path={"teacher/list"} element={<ListTeacher />} />
      <Route path={"teacher/add"} element={<AddTeacher />} />
      <Route path={"teacher/edit/:id"} element={<EditTeacher />} />
      <Route path={"/*"} element={<ListCourse />} />
    </Routes>
  )
}

export default RoutesContainer