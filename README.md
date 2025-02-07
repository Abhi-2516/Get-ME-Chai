# Get Me A Chai - Crowdfunding Platform

A modern and fully functional **crowdfunding platform** built using the **MERN stack with Next.js**. This platform allows users to create, manage, and contribute to crowdfunding campaigns securely with authentication and an integrated payment gateway.

## Features
- **User Authentication**: Secure login and signup using JWT/Auth providers.
- **Campaign Creation**: Users can create crowdfunding campaigns with descriptions, images, and funding goals.
- **Secure Payment Gateway**: Integrated payment processing (Stripe/Razorpay/PayPal).
- **Real-Time Updates**: Campaign progress updates dynamically as contributions are made.
- **Dashboard**: Personalized dashboard for users to track their campaigns and contributions.
- **Responsive UI**: Optimized for both mobile and desktop users.
- **Admin Panel**: Manage campaigns, users, and payments efficiently.

## Technologies Used
- **Frontend**: Next.js, React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Token (JWT) or OAuth
- **Payment Gateway**: Stripe / Razorpay / PayPal
- **State Management**: React Context API / Redux

## Installation

### Clone the Repository
```sh
git clone https://github.com/Abhi-2516/get-me-a-chai.git
cd get-me-a-chai
```

### Install Dependencies
#### Install both client and server dependencies
```sh
npm install
cd client && npm install
cd ../server && npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and configure the necessary environment variables:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Run the Application
#### Start Backend Server
```sh
cd server
npm start
```
#### Start Frontend
```sh
cd client
npm run dev
```
The application will be accessible at `http://localhost:3000/`.

## Usage
1. **Sign up / Log in** to your account.
2. **Create a crowdfunding campaign** by providing details like title, description, and funding goal.
3. **Share your campaign** with potential donors.
4. **Accept contributions** through the secure payment gateway.
5. **Monitor campaign progress** via the dashboard.
6. **Withdraw funds** once the goal is met.

## API Routes
- **User Authentication**
  - `POST /api/auth/signup` - Register a new user
  - `POST /api/auth/login` - Authenticate and login user
- **Campaigns**
  - `GET /api/campaigns` - Fetch all campaigns
  - `POST /api/campaigns` - Create a new campaign
- **Payments**
  - `POST /api/payment` - Process a donation via Stripe



## Contact
For inquiries, contact me at: [2516abhi43@gmail.com](mailto:2516abhi43@gmail.com)

