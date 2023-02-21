<script setup>
// import FormInput from './components/FormInput.vue';
// import FormLabel from './components/FormLabel.vue';
import * as Form from "./form-components.js";
</script>

<template>
  <!-- <FormInput/>
<FormLabel>
  Deneme
</FormLabel> -->
<div>
  <Form.Input />
  <Form.Label>
    Deneme
    <Form.Select/>
  </Form.Label>
</div>
</template>