
# SkillBridge

SkillBridge is a MERN stack-based course website where users can browse and purchase courses. Currently, payment integration is not implemented but will be added in the future.

## Features
- User authentication (Signup, Signin, Logout)
- Browse available courses
- View course details and syllabus
- Purchase courses (Payment integration coming soon)

## Tech Stack
- **Frontend**: React.js (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: express-session


## Installation

### Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection

### Clone the Repository
```sh
git clone https://github.com/your-username/skillbridge.git
cd skillbridge
```

### Backend Setup
```sh
cd backend
npm install
```
#### Create a `.env` file in the `backend` directory and add:
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```
#### Run the Backend Server
```sh
npm start
```

### Frontend Setup
```sh
cd ../frontend
npm install
```
#### Run the Frontend
```sh
npm run dev
```

## Usage
1. Sign up or sign in.
2. Browse courses.
3. View course details.
4. Purchase courses (Payment integration coming soon).

## Future Enhancements
- Payment integration
- Course progress tracking
- Reviews & Ratings
- Instructor dashboard

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

