import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',        
        maxResults:25,
        key:'AIzaSyCO0JMIK1BWzdA5dQK0wI7zIxqqxQNbswE'
    }
})