import axios from 'axios'
import Router from "./router";
import { mapActions } from 'vuex'

const instance = axios.create({
	baseURL: 'http://hanirunk.cafe24app.com'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
