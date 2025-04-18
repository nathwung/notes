# 📝 Notes Website

[![Built with Vue](https://img.shields.io/badge/Built%20with-Vue.js-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Powered by Firebase](https://img.shields.io/badge/Powered%20by-Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Deployed on Firebase Hosting](https://img.shields.io/badge/Hosted%20on-Firebase%20Hosting-FF5722?style=for-the-badge&logo=firebase&logoColor=white)](https://bulkynotes.web.app)

A note-taking web application built with **Vue.js** and the **Quasar Framework**, featuring secure user authentication, real-time note editing, and live tracking of writing statistics. Data is synced and stored using **Firebase Authentication** and **Cloud Firestore**, ensuring persistence and accessibility across devices.

---

## 🚀 Features

### 🔐 User Authentication
- Register and log in with email and password via **Firebase Authentication**
- Registration date and user info are securely stored
- Persistent sessions for returning users

### 📝 Note Management
- Create, edit, and delete notes
- Each note displays:
  - 🕓 Date & time created
  - 🔠 Live character count
- All changes (edits/deletes) sync instantly to **Cloud Firestore**

### 📊 Stats Dashboard
- Track total number of notes
- Monitor total characters written across all notes
- View character count per note in real time

### 💡 Real-time Sync
- Notes are automatically updated across sessions/devices using **Cloud Firestore**
- All changes reflect instantly in the database

### 📱 User Experience
- Responsive UI with **Quasar Framework**
- Clean layout for distraction-free note-taking

---

## 🛠 Tech Stack

- **Frontend**: Vue.js, Quasar Framework, HTML, CSS, JavaScript  
- **Database**: Cloud Firestore (Firebase)  
- **Authentication**: Firebase Authentication  
- **Hosting**: Firebase Hosting

---

## 🔗 Links

- 🌐 **Website**: [bulkynotes.web.app](https://bulkynotes.web.app/auth)  
- 🎥 **Video Demo**: [Watch on Google Drive](https://drive.google.com/file/d/1ZAPjlQmBcMLF33T6-6UGWJngLpqn1z1x/view)  
- 💻 **Source Code**: [GitHub Repository](https://github.com/nathwung/notes)
