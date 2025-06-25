# 📰 The Daily Pulse – Live News Headlines Website

Welcome to **The Daily Pulse**, a simple and interactive web application built using **HTML**, **CSS**, and **JavaScript** that delivers real-time news headlines from around the world. The app fetches and displays news articles using the **NewsAPI**.

---

## 🔍 Features

* 🌓 **Theme Toggle** – Toggle between light and dark themes for better viewing experience
* 🌐 **Top Headlines** – Displays the latest news headlines based on country or category
* 🔎 **Keyword Search** – Search for news articles using custom search terms
* 🧭 **Category Filters** – Easily switch between categories like Business, Sports, Technology, etc.
* 🧾 **Source and Author Display** – See where the news came from and who wrote it
* 💻 **Responsive Layout** – Optimized for desktops, tablets, and mobile screens

---

## 🚀 Live Demo

👉 [Click here to try The Daily Pulse live](https://github.com/UMAYAL-N/The-Daily-Pulse/blob/main/news.html)

---

## ⚙️ How It Works

1. JavaScript fetches the latest news using the **NewsAPI** based on country or search input
2. JSON response is parsed and formatted into visually styled news cards
3. Cards include title, description, author, source, and a link to the full article

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* [NewsAPI.org](https://newsapi.org/)

---

## 📁 Project Structure

```
newscast/
├── news.html
├── news.css
├── news.js
└── README.md
```

---

## 🔐 API Key Note

This app uses **NewsAPI**, which requires a free API key.
For safety, it’s best to store your key in a separate file and **not upload it** publicly.

```js
// ap_Key.js
const NEWS_API_KEY = "your_news_api_key_here";
const countryname = "countryname_here";
```

Then use it in your JS:

```js
fetch(`https://newsapi.org/v2/top-headlines?country=${countryname}&apiKey=${NEWS_API_KEY}`);
```

---

## 📦 Future Improvements

* 📱 Add voice-based search support
* 🌎 Support for multi-country and multi-language headlines
* 📅 Filter news by date range

---

## 🙋‍♀️ About Me

I’m a passionate learner working on improving my front-end skills by building practical, real-world projects like this.

* 🔗 Connect with me on [LinkedIn](https://www.linkedin.com/in/umayal-n-1a606631b/)
* 🧑‍💻 Check out more of my work on [GitHub](https://github.com/UMAYAL-N)

---

## 📃 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and share with attribution.
