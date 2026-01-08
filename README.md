🩸 Blood Connect

A full-stack Blood Bank Management System with AI-based blood sample analysis, donor & recipient management, and a powerful Admin Dashboard.
Built using HTML, CSS, JavaScript, Node.js, Express, MongoDB, and Python (AI model).

🚀 Features
👤 User / Donor Side

Donor registration with:

Name, Email, Age, Blood Group

Blood sample image upload

AI-powered blood sample analysis

Detects whether blood is Normal / Infected

Shows confidence score

Donor details submitted only if AI result is normal

Blood request form for recipients

Contact & message submission

Responsive modern UI (Glassmorphism design)

🧠 AI Integration

Image uploaded → sent to backend

Python AI model (predict.py) analyzes blood sample

Backend returns:

{
  "result": "normal",
  "confidence": 0.87,
  "imagePath": "uploads/filename.jpg"
}


Result shown instantly on frontend without page reload

🔐 Admin Dashboard

Secure admin-only access

Dashboard statistics:

Total requests

Pending / Approved / Rejected

Manage:

🩸 Blood requests (Approve / Reject)

👥 Users

🩺 Donors (only AI-normal donors shown)

💬 User messages (Reply)

🔔 Announcements (Urgent / Normal)

Live donor data fetched from MongoDB

Fully dynamic sidebar navigation

🏗️ Tech Stack
Frontend

HTML5

CSS3 (Glassmorphism UI)

Vanilla JavaScript (Fetch API)

Backend

Node.js

Express.js

MongoDB (Mongoose)

Multer (image upload)

CORS

AI / ML

Python

TensorFlow / Keras (blood analysis model)

child_process.execFile for AI execution

📂 Project Structure
bloodbankmanagementsystem/
│
├── backend/
│   ├── server.js
│   ├── uploads/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── donors.js
│   │   ├── analyze.js
│   │   ├── bloodRequest.js
│   │   ├── messages.js
│   │   ├── users.js
│   │   └── announcements.js
│   └── models/
│       └── Donor.js
│
├── frontend/
│   ├── index.html
│   ├── donate.html
│   ├── need-blood.html
│   ├── admin-dashboard.html
│   ├── css/
│   └── assets/
│
├── ai-model/
│   └── predict.py
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/blood-bank-system.git
cd bloodbankmanagementsystem

2️⃣ Backend Setup
cd backend
npm install
node server.js


Server runs at:

http://localhost:3000

3️⃣ MongoDB

Make sure MongoDB is running locally:

mongodb://127.0.0.1:27017/bloodbank

4️⃣ AI Model Setup

Install Python dependencies

Ensure python command is available in PATH

Place trained model inside ai-model/

5️⃣ Access Frontend

Open in browser:

http://localhost:3000/donate.html


⚠️ Important:
Do NOT open via Live Server for AI image upload.
Always open through Express static server.

⚠️ Known Issue (Resolved)
❌ Problem

Using VS Code Live Server caused page refresh on image upload

AI result did not show

✅ Solution

Serve frontend using Express:

app.use(express.static("frontend"));


Access pages via:

http://localhost:3000/donate.html

📊 Donor Filtering Logic

Only donors with:

ai_result === "normal"


are shown in Admin → Donors section.

🔒 Security

Admin access restricted via role check

AI analysis runs server-side only

No direct DB access from frontend

🌟 Future Enhancements

Deployment (Render / Railway)

JWT authentication

AI retraining dashboard

Blood availability analytics

Email notifications

👨‍💻 Author

Arnav Dewan
