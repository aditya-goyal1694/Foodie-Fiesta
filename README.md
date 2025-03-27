# Foodie Fiesta

Foodie Fiesta is a smart restaurant platform that enhances the dining experience with an AI-powered chatbot, **Chat-à-la-Carte**. This chatbot enables users to explore the menu, place orders, modify their selections, and track their orders in real time.

## Features
- **Interactive Chatbot**: Order food through an NLP-Based assistant.
- **Diverse Menu**: Explore Italian, North Indian, South Indian, and Street Food options.
- **Seamless Ordering**: Modify and track your orders easily.
- **FastAPI Backend**: Efficient backend powered by Python’s FastAPI.
- **MySQL Database**: Stores menu and order details.
- **Responsive UI**: Built with React & Tailwind CSS.

---

## Tech Stack
### **Frontend:**
- React + Vite
- Tailwind CSS
- Lucide Icons

### **Backend:**
- FastAPI (Python)
- MySQL
- Uvicorn Server

### **AI & Deployment:**
- Dialogflow for chatbot
- ngrok for secure API tunneling
- Docker & Docker Compose for containerization

---

## Getting Started
### **Clone the Repository**
```sh
git clone https://github.com/aditya-goyal1694/Foodie-Fiesta.git
cd Foodie-Fiesta
```

### **Run the Application**

#### **1. Start the Docker Container**
```sh
docker-compose up --build
```

#### **2. Expose Backend via ngrok**
```sh
ngrok http 8000
```
Copy the HTTPS URL and update it in **Dialogflow Fulfillment**.

#### **3. Update Dialogflow Fulfillment:**
1. Visit: [Dialogflow Console](https://dialogflow.cloud.google.com/#/agent/j-a-r-v-i-s-ef9d/fulfillment)
2. Replace the webhook URL with the **ngrok HTTPS URL**.
3. Click **Save**.

---

## Future Enhancements
- User Authentication
- Order History & Recommendations
- Payment Integration

---

## Developer
**Aditya Goyal**  
Email: [adityamr.1694@gmail.com](mailto:adityamr.1694@gmail.com)  
GitHub: [aditya-goyal1694](https://github.com/aditya-goyal1694)  
LinkedIn: [aditya-goyal18](https://www.linkedin.com/in/aditya-goyal18/)

---

## License
This project is licensed under the **MIT License**.

---

