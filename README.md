# Libroo 📚

**Libroo** is a modern web application that allows you to track the books you've read, helping you stay organized and motivated in your reading journey.

## ✨ Features

- 📖 Add, edit, and delete books you've read  
- 🗂️ Organize your reading list  
- 🔍 Search and filter books  
- 📊 Visual overview of your reading activity

## 🛠️ Tech Stack

This project was built using the following technologies:

- **Frontend**: [React](https://reactjs.org/) + [Bootstrap](https://getbootstrap.com/) + [Vite](https://vitejs.dev/)  
- **Backend**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chamered/libroo.git
   ```

2. **Install dependencies:**

   ```bash
   cd libroo
   npm install
   ```

3. **Start the development servers:**

   ```bash
   # Start both frontend and backend
   npm run start
   ```

   If the above command doesn't work try this one:

   ```bash
   # Start frontend
   cd frontend/
   npm run dev

   # In a new terminal tab/window, start backend
   cd backend/
   node server.js
   ```

   - Frontend will run on [http://localhost:5173](http://localhost:5173)  
   - Backend will run on [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
libroo/
│
├── backend/
│   ├── routes/
│   │   └── dashboard.js
│   ├── books.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── icon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddBookForm.jsx
│   │   │   ├── BookCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Tab.jsx
│   │   ├── css/
│   │   │   ├── App.css
│   │   │   └── index.css
│   │   ├── pages/
│   │   │   ├── Dashbard.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── node_modules/
├── .gitignore
├── LICENSE
├── package.lock.json
├── package.json
└── README.md
```

## 📡 API
The backend provides a simple REST API for managing your book list. It interacts with a `books.json` file and supports basic CRUD operations. It is developed using express' router and all the routes are defined in the [route handlers folder](./backend/routes/).

**Base URL:** `http://localhost:3001`
### Endpoints
- **GET `/dashboard`**  
    Returns the list of all books.
    
- **POST `/dashboard`**  
    Adds a new book.  
    **Body JSON:**
     ```javascript
     {
        "id": 1,            // Unique ID
        "title": "Title",   // Book title
        "author": "Author", // Author of the book
        "status": 3,        // 1: "To Read", 2: "Reading", 3: "Read"
        "rating": 4,        // Range 0-5
        "notes": "Notes"    // Optional notes
     }
     ```
    
- **DELETE `/dashboard/:id`**  
    Deletes the book with the specified `id`.

## 📌 TODO

- [ ] Login system  
- [x] Add book system
- [ ] Edit book system
- [x] Delete book system 
- [ ] Responsive design improvements

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Happy reading with **Libroo**! 📚
