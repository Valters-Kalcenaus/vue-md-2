<template>
  <div class="titleButton">
  <h1>ABOUT ME</h1> 
  <button class="editButtonStyle" :class="buttonActive ? 'active-button' : ''" @click="toggleButtonState">
      {{ buttonLabel }}
  </button>
</div>
  <FormComponent :isDisabled="!buttonActive" />
</template>

  
  <script>
 import FormComponent from '../components/FormComponent.vue';

export default {
  components: {
    FormComponent
  },
  data() {
    return {
      buttonActive: false 
    };
  },
  computed: {
    buttonLabel() {
      return this.buttonActive ? 'CANCEL' : 'EDIT FORM';
    }
  },
  methods: {
    toggleButtonState() {
      this.buttonActive = !this.buttonActive;
    }
  }
};

  </script>

  
  