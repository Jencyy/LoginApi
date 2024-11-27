# 🎓 Student-Teacher-Principal Management API

A RESTful API for managing hierarchical roles (**Admin**, **Principal**, **Teacher**, **Student**) with JWT-based authentication and role-based authorization.

---

## 🚀 Features

- 🔐 **Authentication**: Secure login and signup using JWT.
- 🛡️ **Role Management**: Hierarchical control for Admin, Principal, Teacher, and Student.
- 🗂️ **CRUD Operations**: Manage users and resources.

---

## 🛠️ Tech Stack

- **Node.js**, **Express.js**, **MongoDB**, **JWT**

---

## 🚀 API Endpoints

### 🔐 Authentication
| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| POST   | `/auth/signup` | ✍️ Register a new user  |
| POST   | `/auth/login`  | 🔑 Login and get a JWT  |

### 🛠️ Admin
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | `/admin/principals`    | 👀 View principals   |
| POST   | `/admin/principals`    | ➕ Add a principal    |

### 🎓 Principal
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | `/principal/teachers`  | 👀 View teachers     |
| POST   | `/principal/teachers`  | ➕ Add a teacher      |

### 👩‍🏫 Teacher
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | `/teacher/students`    | 👀 View students     |
| POST   | `/teacher/students`    | ➕ Add a student      |

---

## ⚙️ Setup

1. Clone and install dependencies:
   ```bash
   git clone https://github.com/your-username/project.git
   cd project
   npm install
``

2. Run the server:
```bash
  npm start
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss potential changes.
