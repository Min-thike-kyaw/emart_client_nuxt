<template>
  <div>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Flowbite
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div class="mt-6">
            <span v-if="error" class="text-red-500">{{ error }}</span>
          </div>
          <div class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" v-model="form.email" required="">
            </div>
            <div>
              <label for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" v-model="form.password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  
                </div>
                <div class="ml-3 text-sm">
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot
                password?</a>
            </div>
            <button  @click="signin" type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
              in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ApiService from '~/core/ApiService';
import JWTService from '~/core/JWTService';

export default {
  name: 'Login',
  middleware: 'no-auth',
  data(){
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
    }
  },
  methods: {
    async signin(){
      let self = this;
      // self.$router.push('/');
      await this.$axios.post('/api/login',this.form).then(function(res){
        JWTService.saveToken(self,res.data.data.token);
        ApiService.init(self)
        let user = res.data.data;
        self.$store.commit("auth/setAuth", {
            token: res.data.data.token,
            user
        });
      }).then((res)=>{
        if (self.$route.query.r) {
          self.$router.push(decodeURIComponent(self.$route.query.r));
        } else {
          self.$router.push("/");
        }
      }).catch(function(error) {
        console.log(error);
        self.error = error.response ? error.response.data.message: '';
        console.log(error, "response errorfdal")
      })
    }
  }
}
</script>
