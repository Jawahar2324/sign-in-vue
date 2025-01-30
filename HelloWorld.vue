<template>
  <section class="min-h-100vh flex items-center bg-white">
    <div class="grid grid-cols-2 gap-x-8 items-center">
      <div class="left-side w-[90%] ml-auto flex items-center min-h-100vh">
        <img
          class="w-full h-auto"
          src="../assets/login-page/login-page-img.png"
          alt="img"
        />
      </div>
      <div class="right-side">
        <div
          class="form-group relative z-10 max-w-[350px] bg-custom-gradien rounded-2xl mx-auto my-0 border-2 border-gray-300 py-12 px-8 "
        >
          <div class="lis-logo text-center mb-[40px]">
            <img src="../assets/login-page/labsquire-logo.svg" alt="logo" />
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              :class="[
            'w-full px-3 py-2 border rounded-lg',
            errors.username ? 'border-red-500' : 'border-gray-300'
          ]"
              placeholder="Enter your username"
              v-model="username"
              @blur="handlechange"
            />
            <p v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</p>
          </div>
          <div class="mb-2">
            <input
              type="password"
              id="password"
              name="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
          <div class="text-right mb-4 text-sm cursor-pointer">
            <router-link to="/forgotpassword">Forgot password</router-link>
          </div>
         
          <button
            type="submit"
            class="w-full bg-[#212658] text-white py-2 px-4 mt-4 rounded-xl"
            @click="onLogin"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async onLogin() {

      this.errors.username = "";
      this.errors.password = "";

      if (!this.username) {
        this.errors.username = "Username is required.";
      }
      if (!this.password) {
        this.errors.password = "Password is required.";
      }
      if (this.errors.username || this.errors.password) {
        return;
      }

      const payload = {
        username: this.username,
        password: this.password,
      };

      try {
        const response = await axios.post(
          "https://dev-api.labsquire.com/v2.0/signin",
          payload
        );
        console.log(payload);
        if (response.data.success) {
          console.log("Login successful:", response.data);

          this.$router.push("/dashboard");
        } else {
          console.error("Invalid login credentials");
          alert("Invalid username or password");
        }
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("An error occurred during login. Please try again.");
      }
    },
  },
};
</script>

<style scoped></style>
