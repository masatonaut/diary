# Diary App

This is a Diary App built with Angular for the frontend and Laravel for the backend. The application allows users to keep track of their diary entries, including creating, editing, and viewing entries.

## Features

- **Navigation bar** with links to the Home, Diary, New Entry, and About pages.
- **Main page** displaying a welcome message, an image, and the number of diary entries with the earliest and latest entry dates.
- **Diary page** listing all diary entries with options to edit each entry.
- **New Entry page** for adding new diary entries through a form.
- **Edit Entry page** for editing existing diary entries through a prefilled form.
- **About page** showing the author's details.

## Getting Started

### Prerequisites

- Node.js and npm installed
- PHP and Composer installed
- SQLite installed (or another database of your choice)

### Installation

1. **Set up the backend (Laravel):**

   ```sh
   cd server
   composer install
   ```

   - Create a `.env` file in the `server` directory and configure your database settings. Example for SQLite:

     ```env
     DB_CONNECTION=sqlite
     DB_DATABASE=/path/to/database/database.sqlite
     ```

   - Generate an application key:

     ```sh
     php artisan key:generate
     ```

   - Run the migrations to create the database tables:

     ```sh
     php artisan migrate
     ```

   - Start the Laravel development server:
     ```sh
     php artisan serve
     ```

2. **Set up the frontend (Angular):**

   ```sh
   cd ../client
   npm install
   ```

   - Start the Angular development server:
     ```sh
     ng serve
     ```

3. **Access the application:**

   - The backend will be running on `http://localhost:8000`
   - The frontend will be running on `http://localhost:4200`

## Directory Structure

- **server/**: Laravel backend

  - **app/**: Application code
    - **Http/**: Controllers
    - **Models/**: Eloquent models
  - **database/**: Database migrations and seeds
  - **public/**: Publicly accessible files
  - **resources/**: Views and assets
  - **routes/**: API routes
  - **.env**: Environment configuration

- **client/**: Angular frontend
  - **src/**: Source code
    - **app/**: Angular application code
      - **components/**: Application components
      - **assets/**: Static assets
    - **styles.css**: Global styles
  - **angular.json**: Angular configuration
  - **package.json**: Node.js dependencies

## API Endpoints

- `GET /api/diaries`: Retrieve all diary entries
- `GET /api/diaries/{id}`: Retrieve a specific diary entry
- `POST /api/diaries`: Create a new diary entry
- `PUT /api/diaries/{id}`: Update a specific diary entry
- `DELETE /api/diaries/{id}`: Delete a specific diary entry
