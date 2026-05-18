# 🕌 Egypt Prayer Times (مواقيت الصلاة في مصر)

A modern, fast, and fully responsive web application specifically designed to fetch and display accurate prayer times for all Egyptian cities .

🌐 **Live Demo:** [Click here to experience the app](https://mostafa-ibrahem-eg.github.io/Mawaquit-ElSalat/)

---

## 🚀 Features

- 🇪🇬 **All Egyptian Cities:** Easily select and view prayer times for any governorate in Egypt.
- 🕒 **Real-time Fetching:** Gets accurate, up-to-date data instantly from the Aladhan API.
- 📱 **Fully Responsive:** Beautifully designed grid layout that works seamlessly on mobiles, tablets, and desktops.
- ⚡ **Single Page Experience:** Updates prayer times instantly on city change without reloading the page.
- 🎨 **Enhanced Readability:** Built with a custom linear gradient overlay over an atmospheric background for clear text contrast.

---

## 🛠️ Tech Stack

- **HTML5 & CSS3:** Core structure and page elements.
- **Tailwind CSS:** Modern utility-first framework used for responsive layout, spacing, and styling.
- **JavaScript (Vanilla JS):** Handles dynamic DOM manipulation, city selection logic, and data binding.
- **Axios:** Lightweight HTTP client used to fetch async data from the external API over secure HTTPS.
- **GitHub Pages:** Used for live hosting and deployment.

---

## 💡 Technical Challenges & Solutions

### 🔒 The Mixed Content Error
- **Challenge:** During deployment on GitHub Pages (HTTPS), the API requests were blocked because the initial endpoint was configured using insecure HTTP.
- **Solution:** Successfully resolved the `Mixed Content Error` by updating the API end-point to use secure HTTPS (`https://api.aladhan.com/...`), ensuring smooth data fetching in production.

### 📦 Development Optimization
- **Challenge:** Avoiding heavy local dependencies (like `node_modules`) in the production environment while maintaining third-party libraries.
- **Solution:** Excluded `node_modules/` via `.gitignore` and extracted only the essential compiled production files (like `axios.min.js`) into the local `js/` directory to ensure fast loading speeds.

---

## 📂 Project Structure

```text
Mawaquit-ElSalat/
├── css/
│   ├── output.css      # Compiled Tailwind CSS styles
│   └── style.css       # Custom styles
├── js/
│   ├── axios.min.js    # Production Axios library
│   └── main.js         # Core JavaScript application logic
├── node_modules        # node_modules
├── index.html          # Main application entry point
├── package.json        # Project metadata & scripts
└── tailwind.config.js  # Tailwind CSS configuration
