# Smart Registration System

A simple and user-friendly registration form built using **HTML, CSS, and JavaScript**. The system provides real-time input validation and a live character counter for the Bio field.

## 📌 Features

* 📝 Registration form with Name, Email, Password, and Bio fields
* ✅ Real-time validation using JavaScript `input` events
* 👤 Name validation to ensure the field is not empty
* 📧 Email format validation
* 🔐 Password validation with a minimum of 6 characters
* ✍️ Bio field with a maximum limit of 200 characters
* 🔢 Real-time Bio character counter
* 🚫 Register button remains disabled until all required fields are valid
* ⚠️ Displays appropriate validation and error messages
* 🎉 Displays a registration success popup after successful submission
* 👋 Shows the registered username on the success screen
* 🔄 Allows the user to return to a fresh registration form
* 📱 Responsive design for desktop and mobile devices

## 🛠️ Technologies Used

* **HTML5** – Structure of the registration form
* **CSS3** – Styling and responsive design
* **JavaScript** – Form validation, DOM manipulation, character counting, and registration logic

## 📂 Project Structure

```text
Smart-Registration-System/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

### 1. Name Validation

The Name field is validated in real time.

If the field is empty, an error message is displayed:

```text
Name is required
```

### 2. Email Validation

The Email field checks whether the entered email follows a valid format.

Example:

```text
example@gmail.com
```

### 3. Password Validation

The password must contain at least **6 characters**.

Passwords with fewer than 6 characters are rejected.

### 4. Bio Character Counter

The Bio field allows a maximum of **200 characters**.

The character counter updates automatically while typing:

```text
80 / 200 characters
```

### 5. Register Button

The Register button remains disabled until all required fields are valid.

Once all validations are successfully completed, the button becomes enabled.

### 6. Registration Success

After clicking the Register button:

* A success popup is displayed.
* The registration form is hidden.
* A success screen is displayed.
* The registered username is shown dynamically.

Example:

```text
🎉 Registration Successful!

Vaithees, your registration is successful.
```

The user can click **Back to Registration** to return to a fresh, empty registration form.

## 🚀 How to Run

No installation or additional software is required.

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any modern web browser.

That's it! The application runs directly in the browser.

## 🌐 Live Demo

The project can be hosted using **GitHub Pages**.

Once GitHub Pages is enabled, the project can be accessed through the generated GitHub Pages URL.

## 🎯 Project Purpose

This project was created to practice fundamental **frontend web development concepts**, including:

* HTML form creation
* CSS styling
* Responsive web design
* JavaScript event handling
* Real-time form validation
* DOM manipulation
* Conditional logic
* Character counting
* Dynamic content updates

## 👨‍💻 Author

**Vaithees**
