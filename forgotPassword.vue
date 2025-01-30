<template>
    <div class="min-h-75vh flex justify-center items-center">
    <div>
    <div class="max-w-[350px] bg-custom-gradien rounded-2xl mx-auto my-0 border-2 border-gray-300 py-12 px-8">
        <div class="mb-6">
        <h1 class="text-left text-[22px] font-[700] text-[#000] mb-2">Forgot Password</h1>
        <p class="text-left text-sm ">No Problem! Enter your username below and we will send you an LINK to reset your password.</p>
    </div>
        <div class="mb-2 text-left">
            <label class="text-sm">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username"
            />

          </div>
          <button
            type="submit"
            class="w-full bg-[#212658] text-white py-2 px-4 mt-4 rounded-xl mb-2"
          >
            Submit
          </button>
          <div class="text-right text-sm cursor-pointer">
            <router-link to="/">Back To Login</router-link>
          </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  name: "forgotPassword",
};
</script>