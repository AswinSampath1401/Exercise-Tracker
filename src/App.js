import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

// import components
import Navbar from './components/navbar.component';
import CreateUser from './components/create-user.component';
import CreateExercise from './components/create-exercise.component';
import EditExercise from './components/edit-exercise.component';
import ExerciseList from './components/exercises-list.component';
function App() {
  return (
    <div className="bg-warning pt-3 container">
    <BrowserRouter>
      <Navbar />
        <Route path="/" exact component = {ExerciseList}></Route>
        <Route path = "/create" component = {CreateExercise}></Route>
        <Route path = "/edit/:id" component = {EditExercise}></Route>
        <Route path="/users" component={CreateUser}></Route>
        
    </BrowserRouter>
      </div>
  );
}

export default App;
