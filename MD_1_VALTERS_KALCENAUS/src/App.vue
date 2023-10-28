<template>
  <div> 
    <HeaderComponent @login="showContent" @logout="hideContent" />
    <div class="Page" v-if="!loggedIn"><router-view />
</div>
    <div class="Page" v-if="loggedIn">
      <div class="NavBox">
        <NavigationComponent />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import store from './scriptsInJs/store';



export default {
  components: {
    HeaderComponent,
    NavigationComponent,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    showContent() {
      this.loggedIn = true;
    },
    hideContent() {
      store.resetUser();
      this.loggedIn = false;
    },
  }
};
</script>
