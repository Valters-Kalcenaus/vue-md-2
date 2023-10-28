<template>
  <div class="homeContent">
    <h1>HOME</h1>

    <SongListComponent :songs="filteredSongs"/>
  </div>
</template>

<script>
import SongListComponent from '../components/SongListComponent.vue';
import songsList from '../scriptsInJs/songs-data';

export default {
  components: {
    SongListComponent
  },
  data() {
    return {
      songs: songsList,
      filteredSongs: []
    };
  },
  created() {
    this.filteredSongs = [...this.songs];
  },
  methods: {
    onFilterChange(filterType) {
      if (filterType === 'none') {
        this.filteredSongs = [...this.songs];
      } else if (filterType === 'name') {
        this.filteredSongs = [...this.songs].sort((a, b) => a.song.localeCompare(b.song));
      } else if (filterType === 'artist') {
        this.filteredSongs = [...this.songs].sort((a, b) => a.artist.localeCompare(b.artist));
      }
    }
  }
};
</script>
