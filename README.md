
Shopique E-Commerce Project

This is a full-stack e-commerce project with a Laravel backend and a React frontend.

---

Tech Stack

- Backend: Laravel (PHP), MySQL
- Frontend: React, Axios

---

How to Run the Project

Backend (Laravel)

1. Clone the repo:  
   https://github.com/Bihari-Fernando/Shopique_Online_Clothing_Store.git

2. Change to backend directory:  
   cd backend

3. Install PHP dependencies with Composer:  
   composer install

4. Copy `.env.example` to `.env` and update your database and app settings:  
   cp .env.example .env

5. Generate the app key:  
   php artisan key:generate

6.Generate JWT Secret Key
   php artisan jwt:secret

7.Create a symbolic link to make storage public 
   php artisan storage:link

8. Run database migrations:  
   php artisan migrate

9. (Optional) Seed the database:  
   php artisan db:seed

10. Start the Laravel development server:  
   php artisan serve

   The backend API will be available at http://127.0.0.1:8000.

---

Frontend (React)

1. Change to frontend directory:  
   cd frontend

2. Install Node.js dependencies:  
   npm install

3. Create a `.env` file and set your API base URL (adjust if needed):  
   VITE_API_BASE_URL=http://127.0.0.1:8000

4. Start the React development server:  
   npm run dev

   The frontend will be available at http://localhost:5173 (or as shown in your terminal).

---

Notes

- Make sure your Laravel backend is running before starting the frontend, so API calls work.
- Adjust environment variables as needed for production or deployment.
- You can deploy backend and frontend separately on platforms like Railway (backend) and Netlify (frontend).

---

Contact

If you want to collaborate or have questions, feel free to reach out!

