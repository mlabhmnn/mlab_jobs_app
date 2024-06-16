#

## Let Create A web world

## This file is come from OneDrive Document frontend and backend fiel

## I want to tweaks it here.. That why I copy it..

## 25/5/2024 10:20 PM (tweaks)

<!--

REACT_LIFE_PROJECT/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── counter/
│   │       └── counterSlice.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   ├── index.html
│   └── ...
├── package.json
└── ...

-->

<!--
    mlab: Mlab,
    // s_auth: s_AuthReducer,
    // form: Form,
    posts: postsSlice,
    counter: counterReducer,
    messages: messageReducer,a
    test: testReducer,
    messagechat: messageChatReducer, -->

job-finder-backend/
├── src/
│ ├── controllers/
│ │ ├── messageController.js
│ │ ├── authController.js
│ ├── middleware/
│ │ └── verifyToken.js
│ ├── routes/
│ │ ├── messageRoutes.js
│ │ ├── authRoutes.js
│ └── app.js
├── .env
└── package.json

CREATE DATABASE user_db;
USE user_db;

CREATE TABLE users (
id INT PRIMARY KEY,
username VARCHAR(50),
email VARCHAR(100),
password VARCHAR(255),
role VARCHAR(50),
email_verified BOOLEAN,
reset_token VARCHAR(255),
active BOOLEAN,
created_at DATETIME,
updated_at DATETIME,
phone VARCHAR(20)
);

INSERT INTO users (id, username, email, password, role, email_verified, reset_token, active, created_at, updated_at, phone) VALUES
(16, 'data', 'data@mlab.com', '$2b$10$f98s7/Iv7CYxJ56Rw7vb3ePYndPVzT6KcfSIuIPRLpvdxoG05Ux3S', 'user', 0, NULL, 1, '2024-05-30 22:47:44', '2024-05-30 22:47:44', NULL);
