# Work Planner Application

The Work Planner Application is a desktop app that allows you to plan and track your work schedule conveniently. It provides a user-friendly interface for managing your daily tasks and home office days.

## Features

- Plan your work schedule by selecting specific days for home office.
- Add notes to each day for additional information or reminders.
- Visualize your work schedule in a monthly calendar view.
- Save and load your work schedule data for easy access.

## Getting Started

To use the Work Planner Application, follow these steps:

1. Install Node.js (https://nodejs.org) on your machine if you haven't already.

2. Clone the repository to your local machine.

3. Navigate to the project directory.

4. Install the project dependencies by running the following command:

`npm install`


5. Start the development server by running the following command:

`npm start`


6. Open your web browser and access the application at http://localhost:3000.

## Building the Desktop App

If you prefer to use the Work Planner Application as a standalone desktop app, you can build it using the Nativefier tool. Follow the instructions below for your desired platform:

- For Windows:

nativefier --name "Work Planner for Windows" --platform windows --arch x64 http://localhost:3000/


- For macOS:

nativefier --name "Work Planner for Mac" --platform darwin --arch arm64 http://localhost:3000/


The above commands will create a standalone desktop app for your respective platform with the specified name.


## License

This project is licensed under the [MIT License](LICENSE).