# 🎫 SupportDesk — Customer Support Ticket System  

<p align="center">
  <b>🚀 Cloud-Native Support Platform built at Cloudverse Hackathon</b><br>
  <i>Sri Eshwar College of Engineering</i>
</p>

---

## ✨ Overview  

SupportDesk is a **modern cloud-native ticket management system** that enables users to raise issues and allows support agents to manage them efficiently through a **real-time dashboard** powered by AWS.

---

## 🎯 Problem Statement  

Traditional support systems often suffer from:  
- ❌ Poor scalability  
- ❌ Lack of real-time updates  
- ❌ Inefficient tracking  

👉 Our solution ensures:  
- ⚡ Faster response times  
- 📊 Better visibility  
- ☁️ Scalable cloud architecture  

---

## 🏗️ Architecture  

```
User / Agent
     ↓
S3 (React Frontend)
     ↓ API calls
ALB (Application Load Balancer)
     ↓
ECS Fargate (Node.js Backend) ← ECR (Docker Image)
     ↓           ↓          ↓           ↓
MongoDB      DynamoDB      SES      CloudWatch
Atlas       (Audit Logs)  (Emails)   (Logs)
```

---

## 🛠️ Tech Stack  

### 🎨 Frontend  

| ⚙️ Technology | 💡 Purpose |
|--------------|----------|
| React.js | User Interface |
| Socket.io Client | Real-time Updates |
| AWS S3 | Static Hosting |

---

### ⚙️ Backend  

| ⚙️ Technology | 💡 Purpose |
|--------------|----------|
| Node.js + Express | REST API |
| Socket.io | WebSockets |
| JWT | Authentication |
| Docker | Containerization |

---

### ☁️ AWS Services  

| ☁️ Service | 💡 Purpose |
|-----------|----------|
| ECS Fargate | Serverless Containers |
| ECR | Image Registry |
| ALB | Load Balancing |
| S3 | Frontend Hosting |
| MongoDB Atlas | Primary DB |
| DynamoDB | Audit Logs |
| SES | Email Notifications |
| CloudWatch | Monitoring |

---

## 🚀 Key Features  

- 🎫 **Ticket Management System**  
- 📊 **Agent Dashboard**  
- ⚡ **Real-time Updates (WebSockets)**  
- 📧 **Email Notifications (AWS SES)**  
- 🔐 **Role-Based Access Control**  
- 🧾 **Audit Logging (DynamoDB)**  
- ☁️ **Cloud-Native Architecture**  
- 🐳 **Dockerized Deployment**  
- 📈 **Monitoring with CloudWatch**  

---

## 📁 Project Structure  

```
ticket-system/
├── backend/
├── frontend/
└── README.md
```

---

## ⚙️ Local Setup  

### 📌 Prerequisites  

- Node.js v18+  
- Docker Desktop  
- MongoDB (Local / Atlas)  
- AWS Account  

---

### 🔧 Backend Setup  

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

---

### 🎨 Frontend Setup  

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

---

## 🐳 Docker  

```bash
cd backend
docker build -t ticket-backend .
docker run -p 5000:5000 --env-file .env ticket-backend
```

---

## ☁️ Deployment (AWS)  

### 🚀 Steps  

1. Push Docker image to ECR  
2. Deploy using ECS Fargate  
3. Configure ALB  
4. Upload frontend to S3  

---

## 🔌 API Endpoints  

### 🔐 Auth  

| Method | Endpoint | Description |
|--------|---------|------------|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Current User |

---

### 🎫 Tickets  

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/api/tickets` | Get Tickets |
| POST | `/api/tickets` | Create Ticket |
| PUT | `/api/tickets/:id` | Update Ticket |
| DELETE | `/api/tickets/:id` | Delete Ticket |

---

## 📊 Audit Logs (DynamoDB)  

- 🆕 Ticket Created  
- 🔄 Ticket Updated  
- ✅ Ticket Closed  
- ❌ Ticket Deleted  
- 💬 Comment Added  

---

## 📧 Notifications  

- ✉️ Ticket Created → Confirmation  
- 🔄 Status Updated → Alert  
- ✅ Ticket Closed → Resolution  

---

## 🔐 Roles & Permissions  

| Action | 👤 User | 🧑‍💻 Agent | 👑 Admin |
|--------|--------|-----------|---------|
| Submit Ticket | ✅ | ✅ | ✅ |
| View All Tickets | ❌ | ✅ | ✅ |
| Update Status | ❌ | ✅ | ✅ |
| Delete Ticket | ❌ | ❌ | ✅ |

---

## 👥 Team  

| Name | Role |
|------|-----|
| Naveen Prasanth | Full Stack + AWS |
| Poojana S | Full Stack + AWS |
---

## 🏆 Hackathon  

- 🏁 Event: Cloudverse Hackathon  
- 🎓 College: Sri Eshwar College of Engineering  
- 🌍 Platform: MLH Global Hackathons  

---

## 📄 License  

📜 MIT License — Free to use and modify  
