<template>
    <div>
 
      <button :class="btnClass" @click="methGeneralEvent" >{{ label }}</button>
    
    </div>
  </template>
  
  <script>
  export default {
  
      props: {
          label: String, 
          backgroundColor: String,
         
      }, 
      methods: {
          methGeneralEvent() {
         
              this.$emit('generalEventBtn');
          }
      },
      computed: {
          btnClass() {
  
          return {
  
              'details-btn': this.backgroundColor === 'details',
  
              'red-btn': this.backgroundColor === 'red',
  
              'blue-btn': this.backgroundColor === 'blue'
  
            }
  
          }
      }
  
  }
  </script>
  
  <style>
  .details-btn {
      background:none;
      color: black;
      border:none;
      text-decoration: underline;
  }
  .red-btn {
      background-color: red;
      color: white;
      border-radius: 15%;
      padding: 5px;
      border:0;
  }
  .blue-btn {
      background-color: rgb(0, 204, 255);
      color: white;
      border-radius: 15%;
      padding: 5px;
      border:0;
  }
  
  </style>