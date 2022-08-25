
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "${ your_api_key}",
    authDomain: "${your_auth_domain}",
    projectId: "${your_prpject_id}",
    storageBucket: "${your_storage_bucket}",
    messagingSenderId: "${your_messaging_sender_id}",
    appId: "${your_app_id}"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;
