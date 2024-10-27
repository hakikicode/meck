# Meck: Medical Record Management on Blockchain

Meck is a blockchain-based platform designed to securely store and manage medical records, allowing only verified doctors and patients to access them. Additionally, AI is integrated to help flag potential health issues based on the data entered.

## Features
- **Blockchain Security:** Medical records are stored on a blockchain, ensuring immutability and unauthorized access prevention.
- **AI Analysis:** The platform provides AI-driven health insights, flagging possible anomalies in medical records.
- **Verified Doctors:** Only verified doctors can add or modify a patient's medical records.
- **Patient Privacy:** Patients control who has access to their data, and certain sensitive records can be hidden from the patient while still accessible to doctors.

## Project Structure

/meck-project │ ├── /backend │ │ ├── server.js (Express server setup) │ │ ├── routes.js (API endpoints) │ │ ├── ai.js (AI logic for health insights) │ │ ├── /smartContract (Smart contract files) │ │ └── /controllers (Controller logic) │ ├── /frontend │ │ ├── /css (CSS for styling) │ │ ├── /js (JavaScript for client-side interactivity) │ │ └── /pages (HTML pages: login, dashboard) │ └── package.json (Node project configuration)

markdown
Copy code

## Setup Instructions

### Prerequisites
- **Node.js** installed on your machine.
- **Vercel CLI** (if you are deploying the project to Vercel).

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/meck-project.git
cd meck-project
Step 2: Install Dependencies
bash
Copy code
npm install
This will install all necessary dependencies including express, web3, and others required for the backend.

Step 3: Start the Development Server
To run the backend locally:

bash
Copy code
npm run dev
By default, the server will run on port 5000, and the frontend will be available via static HTML pages served locally.

Step 4: Running Smart Contract
Deploy the smart contract on the Ethereum test network (Sepolia or Goerli).
Use a tool like Remix or Hardhat to compile and deploy MeckContract.sol.
Once deployed, integrate the contract's address into your backend to interact with it for storing and retrieving medical records.
Step 5: Frontend
The frontend is built using static HTML5, CSS, and JavaScript and can be accessed by opening index.html in your browser. The main features of the frontend include:

Landing page: Introduces Meck and provides navigation to login or sign up as a patient or doctor.
Dashboard: A personalized view for patients and doctors to view/add medical records.
Step 6: Deploying on Vercel
Install Vercel CLI:

bash
Copy code
npm install -g vercel
Link the project and deploy:

bash
Copy code
vercel
Follow the prompts to configure and deploy the project to Vercel. After deployment, you'll get a live URL where the application is hosted.

Project API Endpoints
POST /api/addRecord

Adds a new medical record for a patient.
Request body example:
json
Copy code
{
  "publicAddress": "0x12345...",
  "record": {
    "bloodPressure": 150,
    "cholesterol": 220,
    "glucose": 180
  }
}
Response: A success message with any flagged issues detected by the AI.
GET /api/getRecord/:address

Fetches all medical records for a given public address.