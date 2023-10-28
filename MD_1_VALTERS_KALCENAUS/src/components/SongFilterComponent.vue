<template>
    <div class="Buttoncomponent">
      <p>Sort by:</p>
      <button 
        @click="applyFilter('none')" 
        :class="{ activeRed: currentFilter === 'none' }">None
      </button>
      <button 
        @click="applyFilter('name')" 
        :class="{ activeRed: currentFilter === 'name' }">Name
      </button>
      <button 
        @click="applyFilter('artist')" 
        :class="{ activeRed: currentFilter === 'artist' }">Artist
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentFilter: 'none'
      };
    },
    methods: {
      applyFilter(filterType) {
        this.currentFilter = filterType;
        this.$emit('filterChanged', filterType);
      }
    }
  };
  </script>
  
  