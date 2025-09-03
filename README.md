# Angular Bug Tracker

A modern Angular application for tracking and managing software bugs with role-based authentication and filtering capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Authentication & Authorization](#authentication--authorization)
- [API Integration](#api-integration)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **User Authentication**: Secure JWT-based login system
- **Role-Based Access Control**: ADMIN role requirements for bug access
- **Bug Management**: View and filter bug reports
- **Advanced Filtering**: Filter bugs by status and priority
- **Responsive Design**: Modern, clean UI that works on all devices

### Security Features
- JWT token authentication
- HTTP interceptors for automatic token injection
- Route guards for protected pages
- Role-based authorization system

### User Experience
- Clean, professional interface
- Real-time filtering without page refresh
- Loading states and error handling
- Intuitive navigation and logout functionality

## 🔧 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Angular CLI** (v15 or higher)
- **Backend API** running on `http://localhost:8080`

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adrin-Bershik-C-J/angular-day6-proj1.git
   cd angular-day6-proj1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Access the application**
   Navigate to `http://localhost:4200` in your browser

## ⚙️ Configuration

### Backend API Configuration

The application expects a REST API running on `http://localhost:8080` with the following endpoints:

#### Authentication Endpoints
- `POST /api/auth` - User login
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

#### Bug Management Endpoints
- `GET /api/bugs/search` - Retrieve all bugs or filtered bugs
- `GET /api/bugs/search?status=Open&priority=High` - Filter bugs by status and priority

### Environment Variables

To modify API endpoints, update the service files:
- Authentication: `src/app/services/auth.service.ts`
- Bug Service: `src/app/services/bug.service.ts`

## 🚀 Usage

### Login Process
1. Navigate to the login page
2. Enter valid credentials (must have ADMIN role)
3. Successful authentication redirects to the bugs dashboard

### Bug Management
1. **View Bugs**: All bugs are displayed in a tabular format
2. **Filter Bugs**: Use dropdown filters for status and priority
3. **Clear Filters**: Reset all filters to view all bugs
4. **Logout**: Securely logout and return to login page

### Available Filters
- **Status**: Open, In Progress, Closed
- **Priority**: High, Medium, Low

## 📁 Project Structure

```
src/
├── app/
│   ├── bugs/                 # Bug management component
│   ├── guards/               # Route protection guards
│   │   ├── auth.guard.ts     # Authentication guard
│   │   └── role.guard.ts     # Role-based authorization guard
│   ├── interceptors/         # HTTP interceptors
│   │   └── jwt.interceptors.ts # JWT token injection
│   ├── login/                # Login component
│   ├── services/             # Business logic services
│   │   ├── auth.service.ts   # Authentication service
│   │   └── bug.service.ts    # Bug management service
│   ├── pages/register/       # Registration component (placeholder)
│   ├── app.routes.ts         # Application routing
│   ├── app.config.ts         # Application configuration
│   └── unauthorized.component.ts # Unauthorized access component
├── index.html                # Main HTML file
├── main.ts                   # Application bootstrap
└── styles.css               # Global styles
```

## 🔐 Authentication & Authorization

### Authentication Flow
1. User submits credentials via login form
2. Application sends POST request to `/api/auth`
3. Backend validates credentials and returns JWT token
4. Token is stored in localStorage and used for subsequent requests

### Authorization Levels
- **Public Routes**: Login page
- **Protected Routes**: Bug dashboard (requires authentication + ADMIN role)
- **Unauthorized Access**: Users without proper roles are redirected to unauthorized page

### JWT Token Structure
The application expects JWT tokens with the following payload structure:
```json
{
  "role": "ADMIN",
  "username": "string",
  "exp": 1234567890
}
```

## 🌐 API Integration

### HTTP Interceptors
- Automatically injects JWT tokens into all HTTP requests
- Handles authentication headers seamlessly

### Error Handling
- Comprehensive error handling for API failures
- User-friendly error messages
- Automatic retry mechanisms where appropriate

### Data Models
```typescript
interface Bug {
  id: number;
  title: string;
  status: 'Open' | 'In Progress' | 'Closed';
  assignee: string;
  project: string;
  priority: 'High' | 'Medium' | 'Low';
}
```

## 🛠️ Development

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200`. The application will automatically reload if you change any source files.

### Building for Production
```bash
ng build --prod
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests
```bash
ng test
```

### Running End-to-End Tests
```bash
ng e2e
```

### Code Scaffolding
```bash
ng generate component component-name
ng generate service service-name
ng generate guard guard-name
```

## 🎨 Styling & UI

### Design System
- Modern, clean interface with professional color scheme
- Responsive design that works on desktop, tablet, and mobile
- Consistent spacing and typography
- Hover effects and smooth transitions

### Key UI Components
- **Top Navigation**: Application title and logout functionality
- **Filter Bar**: Dropdown filters with clear button
- **Data Table**: Sortable table with status and priority badges
- **Login Form**: Clean, centered login interface

## 🚨 Error Handling

The application includes comprehensive error handling:
- **Network Errors**: Connection failures and timeouts
- **Authentication Errors**: Invalid credentials and expired tokens
- **Authorization Errors**: Insufficient permissions
- **Data Validation**: Form validation and input sanitization

## 🔧 Troubleshooting

### Common Issues

1. **Login Fails**
   - Ensure backend API is running on `http://localhost:8080`
   - Verify credentials have ADMIN role
   - Check browser console for network errors

2. **Bugs Not Loading**
   - Verify JWT token is valid and not expired
   - Check API endpoint availability
   - Ensure user has proper role permissions

3. **Routing Issues**
   - Clear browser localStorage
   - Refresh the application
   - Check route guard configurations

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with Angular 15+ and modern web technologies**
