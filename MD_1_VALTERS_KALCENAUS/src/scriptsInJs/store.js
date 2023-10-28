

import songsList from './songs-data';
import { reactive } from 'vue';
import router from './router';

const store = reactive({
    state: {
        all_songs: songsList,
        user: {
            firstName: 'name',
            lastName: 'surname',
            studentCode: 'CODE1234',
            loggedAt: [],
            loggedInStatus: false
        }
    },
    login(firstName, lastName, studentCode) {
        this.state.user.firstName = firstName;
        this.state.user.lastName = lastName;
        this.state.user.studentCode = studentCode;

        const now = new Date();
        const timestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
        this.state.user.loggedAt.push(timestamp);
        this.state.user.loggedInStatus = true;
        console.log(this.state.user.loggedAt);

        router.push({ path: '/home' })
    },
    resetUser() {
        this.state.user = {
            firstName: 'name',
            lastName: 'surname',
            studentCode: 'CODE1234',
            loggedAt: [],
            loggedInStatus: false
        };
        router.push({ path: '/' })
    }
});


export default store;
