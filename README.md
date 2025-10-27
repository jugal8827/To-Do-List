# To Do List

## Project Summary
- A lightweight and responsive To-Do List application developed using React
- Designed for efficient task management with real-time UI updates
- Implements clean component structure and modern React practices

## Features
- Add new tasks to the task list
- Manage task order using Move Up/Down actions
- Remove tasks instantly with a delete button
- Fully dynamic updates using React’s state management

## Technologies Used
- React.js
- Javascript
- HTML & CSS

## Component Details
- Uses useState() to manage:
  - Current list of task
  - New task input field value
- Key Functions:
  - handleInputChange() -> Updates input field state
  - handleAddTask() -> Adds a new task if not empty
  - handleDeleteTask() -> Remove selected task by index
  - handleMoveTaskUp() & handleMoveTaskDown() -> Reorders list item

## How to run the project
- Clone the repository
- Navigate into folder
  - cd To-Do-List
- Install dependencies
  - npm install
- Start development server
  - npm start

## Future Improvement
- Edit task functionality
- Store task in local storage
- Improved UI with animation
- Light/Drak mode toggle
- Search/filter functionality
