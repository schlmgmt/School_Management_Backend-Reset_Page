# Reset Password Page

A responsive React application for resetting user passwords in the School Management system.

## Features

- **Password Reset Form**: Two-field form for entering new password and confirming it
- **Token-based URL**: Accepts reset token from URL parameter (`/token=<token>`)
- **API Integration**: Connects to the school management backend API for password reset
- **Success Page**: Displays success message after password reset
- **Error Handling**: Shows error messages on validation or API failure
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices
- **Modern UI**: Clean, gradient-based design with smooth animations

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Navigate to the project directory:
```bash
cd ResetPasswordForSchlMgmt
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will open at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Usage

### Accessing the Reset Password Page

Navigate to your application with a token parameter:
```
http://localhost:5173/token=your_reset_token_here
```

### Form Validation

The form validates:
- Both fields are required
- Password must be at least 6 characters long
- Passwords must match

### API Configuration

The application sends requests to:
```
https://school-management-backend-apis.onrender.com/api/v1/auth/reset-password
```

**Request Body:**
```json
{
  "token": "reset_token",
  "newPassword": "new_password",
  "confirmPassword": "confirm_password"
}
```

## Project Structure

```
ResetPasswordForSchlMgmt/
├── src/
│   ├── pages/
│   │   ├── ResetPassword.jsx      # Main password reset form
│   │   ├── ResetPassword.css      # Form styles
│   │   ├── Success.jsx            # Success page
│   │   └── Success.css            # Success page styles
│   ├── App.jsx                    # Main app component with routing
│   ├── App.css                    # Global styles
│   └── main.jsx                   # React entry point
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## Features Explained

### Reset Password Page (`/token=<token>`)
- Displays a form with two password input fields
- Validates password match and minimum length
- Calls the backend API with token and passwords
- Shows error messages on failure
- Redirects to success page on success

### Success Page (`/success`)
- Displays a checkmark icon with success message
- Informs user they can now login with the app
- Beautiful animated success indicator

## Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: Full-width optimized layout
- **Tablet**: Adjusted padding and font sizes
- **Mobile (480px)**: Compact form with smaller elements
- **Small Mobile (320px)**: Ultra-compact layout for very small screens

## Error Handling

- Network errors display generic error message
- API errors display the message from backend
- Form validation errors appear inline
- User-friendly error messages for all scenarios

## Technologies Used

- **React 18**: UI library
- **React Router DOM v6**: Routing
- **Vite**: Build tool and development server
- **CSS3**: Styling with responsive design and animations
