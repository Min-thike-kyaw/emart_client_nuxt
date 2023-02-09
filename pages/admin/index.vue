<template>
  <div>
    <button @click="logout()">Logout</button>
    <div class="grid gap-6 mb-6 md:grid-cols-2">

      <div>
        <label for="order_by">Order By</label>
        <input type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-on:keyup="changeForm($event, 'order_by')">
      </div>
      <div>
        <label for="order_by">Status</label>
        <input type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          @change="changeForm($event, 'status')">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" @change="fileUpload">
      </div>
      

    </div>
    <div>

    </div>
    <button @click="submit" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>    <!-- <input type="button" value="submit" @click="submit"> -->
    <vue-good-table :columns="columns" :rows="rows" />
  </div>
</template>

<script>
import JWTService from '~/core/JWTService';

var FormData = require('form-data');
export default {
  name: 'my-component',
  middleware: 'auth',
  data() {
    return {
      form: new FormData(),
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id: 1, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
  methods: {
    fileUpload(event) {
      let file = event.target.files[0];
      this.form.set("file", file);
      console.log(this.form.get('file'), 'file')

    },
    changeForm(event, input) {
      this.form.set(input, event.target.value)
      console.log(this.form.get(input), input);
    },
    submit() {
      console.log(this.form);
      this.$axios.post('/categories', this.form).then(function (res) {
        console.log(res);
      })
    },
    logout(){
      JWTService.removeToken(this);
      this.$store.commit("auth/removeAuth");
      this.$router.push('/');
    }
  
  }
};
</script>
