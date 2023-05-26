import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(`username: ${username} password: ${password}`);
    fetch("http://localhost:5000/programming-languages");
    navigate('/mainpage')
  };




  return (
    <div class="flex justify-center h-screen">
    <div class="flex h-screen items-center justify-center">
    <div class="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
      <img class="rounded-full h-32 w-32" src="https://static.vecteezy.com/system/resources/previews/011/381/910/original/business-manager-3d-cartoon-avatar-portrait-png.png" alt="user avatar" />
      <form method="post" class="mt-8 mb-4">
        <div class="mb-4">
          <label for="userEmail" class="sr-only">Username</label>
          <input class="border-solid border border-gray-400 rounded px-2 py-3" type="text" placeholder="username" onChange={handleUsernameChange}  />
        </div>
        <div>
          <label for="userEmail" class="sr-only">Password</label>
          <input class="border-solid border border-gray-400 rounded px-2 py-3" type="text" placeholder="password" onChange={handlePasswordChange}  />
        </div>
        <div class="my-4 flex items-center">
          <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
          <label for="userRemember">Remember me</label>
        </div>
        <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" onClick={handleLogin}>Sign in</button>
      </form>
    </div>
  </div>
</div>

  
  );





}

export default App;