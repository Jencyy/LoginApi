# 🎓 Student-Teacher-Principal Management API

A RESTful API for managing hierarchical roles (**Admin**, **Principal**, **Teacher**, **Student**) with JWT-based authentication and role-based authorization.

---

## 🚀 Features

- 🔐 **Authentication**: Secure login and signup using JWT.
- 🛡️ **Role Management**: Hierarchical control for Admin, Principal, Teacher, and Student.
- 🗂️ **CRUD Operations**: Manage users and resources.

---


## 🔐 Authentication
| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| POST   | `/register`    | ✍️ Register a new user  |
| POST   | `/login`       | 🔑 Login and get a JWT  |

---

## 🛠️ Role-Based Endpoints

### 👑 Top Management (Admin)
| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/principal`           | 👀 View all principals       |
| GET    | `/principal/:id`       | 👀 View a specific principal |
| POST   | `/principal`           | ➕ Add a principal            |
| PUT    | `/principal/:id`       | ✏️ Update a principal         |
| DELETE | `/principal/:id`       | ❌ Delete a principal         |

### 🎓 Principal
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | `/faculty`             | 👀 View all teachers |
| POST   | `/faculty`             | ➕ Add a teacher      |
| PUT    | `/faculty/:id`         | ✏️ Update a teacher   |
| DELETE | `/faculty/:id`         | ❌ Delete a teacher   |

### 👩‍🏫 Teacher
| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| GET    | `/students`            | 👀 View all students  |
| POST   | `/students`            | ➕ Add a student       |
| PUT    | `/students/:id`        | ✏️ Update a student    |
| DELETE | `/students/:id`        | ❌ Delete a student    |

## 🔄 Middleware
- **`authenticateToken`**: Verifies JWT and ensures access control based on user roles:
  - `["TopManagement"]` for top-level management tasks.
  - `["TopManagement", "Principal"]` for principal-related operations.
  - `["TopManagement", "Principal", "Faculty"]` for student management.

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
