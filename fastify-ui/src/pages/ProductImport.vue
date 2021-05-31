<template>
  <div class="container mt-5">
    <h5>Import products from excel file</h5>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-file filled v-model="selected_file" label="Filled" @change="eventListener" />
      <div class="btns">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
<style>
  .container {
    width: 50%;
    margin: auto;
    margin-top: 10%;
  }

  h5 {
    text-align: center;
  }

  .container div.btns {
    display: flex;
    justify-content: center;
  }
</style>
<script>
  import XLSX from 'xlsx';
  import { api } from 'boot/axios'

  export default {
    data () {
      return {
        selected_file: null,
      }
  },


  methods: {

    eventListener(event){
        selectedFile = event.target.files[0];
        console.log(this.selected_file);
    },


    onSubmit () {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(this.selected_file);
      fileReader.onload = (event)=>{
        let data = event.target.result;
        let workbook = XLSX.read(data,{type:"binary"});
        console.log(workbook);
        workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            rowObject.forEach(row => {
              this.send(JSON.parse(JSON.stringify(row)));
            });
        });
      };
      this.$router.push({path: '/products'});
    },

    send: async function (object) {
        await api.post('http://localhost:3000/products', object).then(function (response) {
            console.log(response);
          }.bind(this)
        );
    },

    onReset () {
      this.selected_file = null
    }
  }
  }
</script>

