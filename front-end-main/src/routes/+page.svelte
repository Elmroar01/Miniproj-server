<script>
    import "../app.postcss";
    import { onMount } from "svelte";

    onMount(async function fetchData() {
    const LoginButton = document.getElementById('loginbutton');
    LoginButton.addEventListener('click', fetchItems);
  });
  async function fetchItems() {
    try {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const userData = {
            Email: emailInput.value,
            Password: passwordInput.value,
    };
    console.log(userData)
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        body: JSON.stringify(userData
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (response.ok) {
        // Successful login
        const token = data.token; // Assuming the token is returned in the response
        // Store the token in local storage or a cookie
        localStorage.setItem('jwtToken', token);
        console.log("Login successful");
        routeToPage()
        // Redirect to another page or perform other actions
      } else {
        // Failed login
        console.log("Login failed:", data.error);
        // Display an error message or perform other actions
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  function routeToPage() {
    window.location.href = '/dashboard';
   console.log("1")
}
</script>

<section class="bg-gray-50 dark:bg-gray-900">
    <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
        <a
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PTT-01.svg/512px-PTT-01.svg.png"
                class="mr-3 h-8 sm:h-9"
                alt="Flowbite Logo"
            />
            PTT TAS
        </a>
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                >
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="/">
                    <div>
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Your email</label
                        >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required=""
                        />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Password</label
                        >
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                />
                            </div>
                            <div class="ml-3 text-sm">
                                <label
                                    for="remember"
                                    class="text-gray-500 dark:text-gray-300"
                                    >Remember me</label
                                >
                            </div>
                        </div>
                        <a
                            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        />
                    </div>
                    <button
                        type="submit"
                        id = "loginbutton"
                        class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >Sign in</button
                    >
                    <p
                        class="text-sm font-light text-gray-500 dark:text-gray-400"
                    >
                        Don’t have an account yet? <a
                            href="/register"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >Sign up</a
                        >
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
