## <h1 align="center"># Student Job Tracker - Fullstack MERN App 🚀</h1>



🌌 Screenshots

### Home Page
![Home Page](/frontend/public/homepage.png)

### Jobtracker
![Jobtracker](/frontend/public/jobtracker.png)


## Overview
This is a full-stack "Student Job Tracker" web app.It helps students manage job applications with features like adding, listing, filtering, updating, and deleting entries. The app uses the MERN stack (MongoDB, Express.js, React, Node.js) and is deployed online.

- **Frontend**: React with Hooks, Tailwind CSS for responsive design.
- **Backend**: Node.js, Express.js for RESTful APIs.
- **Database**: MongoDB Atlas.
- **Deployment**: Frontend on Vercel, Backend on Render.

**## 🎉 Live Urls**:
- Frontend: [https://student-job-tracker-frontend-theta.vercel.app/](https://student-job-tracker-frontend-theta.vercel.app/)
- Backend API: [https://student-job-tracker-backend-d16d.onrender.com](https://student-job-tracker-backend-d16d.onrender.com)
- Backend Repo: [https://github.com/KAZI-AZAHAR-UDDIN/student-job-tracker-backend](https://github.com/KAZI-AZAHAR-UDDIN/student-job-tracker-backend)


---

## Features
1. **Add Job Application**: Form with Company, Role, Status (Applied/Interview/Offer/Rejected), Date, and Link.
2. **List Applications**: Displays jobs in responsive cards, with filtering by status and sorting by date.
3. **Update Status**: Change job status via dropdown, persists in the database.
4. **Delete Application**: Remove jobs with a button.

The UI is modern and responsive, with gradients, shadows, and animations for a premium feel.

---

## Tech Stack
- **Frontend**: React (Hooks), Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js, Mongoose, CORS
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## Local Setup
### Backend
1. Clone: `git clone https://github.com/KAZI-AZAHAR-UDDIN/student-job-tracker-backend.git`
2. Navigate: `cd student-job-tracker-backend`
3. Install: `npm install`
4. Add `.env`:

MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/studentJobTracker?retryWrites=true&w=majority
PORT=5001


5. Run: `npm start`

### Frontend
1. Clone: `git clone https://github.com/KAZI-AZAHAR-UDDIN/student-job-tracker-frontend.git`
2. Navigate: `cd student-job-tracker-frontend`
3. Install: `npm install`
4. Update API calls in `JobForm.js`, `JobList.js`, `JobItem.js` to use `https://student-job-tracker-backend-d16d.onrender.com/api/jobs`.
5. Run: `npm run dev`

---

## Deployment
- **Backend**: Deployed on Render from `student-job-tracker-backend` repo.
- Build Command: `npm install`
- Start Command: `npm start`
- Env Vars: `MONGO_URI` (Atlas connection string)
- **Frontend**: Deployed on Vercel from `student-job-tracker-frontend` repo.
- Framework: Vite
- API: Connected to Render backend URL

---

## PART 2: AI Tools & LLMs (Bonus)
I used Grok (xAI) to accelerate development while adding my own expertise.

### Prompts/Ways I Used AI
- "Set up React frontend with Hooks and Tailwind."
- "Fix status update not persisting after refresh."
- "Make the app responsive with modern Tailwind styling."

### How It Helped
- **Debugging**: Suggested async fixes for status updates, saving debugging time.
- **Design**: Inspired Tailwind styles (e.g., gradients), which I refined for a unique look.

### Manual Changes
- Organized files into `src/components`.
- Adjusted navbar padding (`pt-14` to `pt-12`) for mobile.
- Tweaked button colors (green to teal) and added modal toggle logic.
- Tested and debugged locally, ensuring API calls worked with Render.



## License 📄
MIT License - See LICENSE.md for details


## 👨‍💻 Author
**Kazi Azahar Uddin**  
*Software Engineer | Open to work*  

- **GitHub**: [KAZI-AZAHAR-UDDIN](https://github.com/KAZI-AZAHAR-UDDIN)  
- **LinkedIn**: [Kazi Azahar Uddin](https://www.linkedin.com/in/kazi-azahar-uddin-8b879b205/)  


