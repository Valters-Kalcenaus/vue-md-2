<template>
    <form>
      <div class="input-group">
        <label>First name</label>
        <input 
          type="text" 
          v-model="localUser.firstName" 
          :disabled="isDisabled" 
          :class="{ disabled: isDisabled }"
        />
      </div>
      
      <div class="input-group">
        <label>Last name</label>
        <input 
          type="text" 
          v-model="localUser.lastName" 
          :disabled="isDisabled" 
          :class="{ disabled: isDisabled }"
        />
      </div>
  
      <div class="input-group">
        <label>Student code</label>
        <input 
          type="text" 
          v-model="localUser.studentCode" 
          :disabled="isDisabled" 
          :class="{ disabled: isDisabled }"
        />
      </div>
  
      <div class="input-group">
        <label>Logged in at</label>
        <p v-for="timestamp in localUser.loggedAt" :key="timestamp">{{ timestamp }}</p>
      </div>
      <button class="editButtonStyle" type="button" @click="save">Save</button>
    </form>
  </template>

<script>
import { ref, watch } from 'vue';
import store from '../scriptsInJs/store.js';

export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const localUser = ref({ ...store.state.user });

    const save = () => {
      store.state.user.firstName = localUser.value.firstName;
      store.state.user.lastName = localUser.value.lastName;
      store.state.user.studentCode = localUser.value.studentCode;
      console.log(store.state.user.loggedInStatus);
    };

    watch(localUser, (newVal) => {
      store.state.user = newVal;
    });

    return { localUser, save };
  }
};
</script>

<style>
.input-group {
  margin-bottom: 1rem;
}

input.disabled {
  background-color: #e0e0e0; 
}
</style>


  