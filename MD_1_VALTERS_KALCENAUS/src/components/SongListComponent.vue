<template>
    <div class="song-list">
      <SongFilterComponent @filterChanged="applyFilter" />
  
      <table class="tableS">
        <thead class="tableHead">
          <tr>
            <th>Name</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in filteredSongs" :key="song.id">
            <td>{{ song.song }}</td>
            <td>{{ song.artist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  <script>
  import SongFilterComponent from '../components/SongFilterComponent.vue';
  import songsList from '../scriptsInJs/songs-data.js';
  
  export default {
    components: {
      SongFilterComponent
    },
    data() {
      return {
        all_songs: songsList,
        activeFilter: 'none',
      };
    },
    computed: {
      filteredSongs() {
        let songs = [...this.all_songs];
        if (this.activeFilter === 'name') {
          songs.sort((a, b) => a.song.localeCompare(b.song));
        } else if (this.activeFilter === 'artist') {
          songs.sort((a, b) => a.artist.localeCompare(b.artist));
        }
        return songs;
      }
    },
    methods: {
      applyFilter(filterType) {
        this.activeFilter = filterType;
      }
    }
  };
  </script>
  
  