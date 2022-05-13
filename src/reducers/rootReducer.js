import students from "../components/students";
import { CarsData } from "../dataArrays/carsData";
import { NewsData } from "../dataArrays/newsData";
import { PostsData } from "../dataArrays/postsData";
import { StudentsData } from "../dataArrays/studentsData";


const initialState = {
    posts: PostsData,
    news: NewsData,
    students: StudentsData,
    cars: CarsData
}




const rootReducer = (state = initialState, action) => {
    // console.log(action)

    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts: newPosts

        }
    }

    if (action.type === 'DELETE_NEWS') {
        let newNews = state.news.filter(news => {
            return action.id != news.id
        });

        return {
            ...state,
            news: newNews
        }
    }

    if (action.type === 'DELETE_STUDENT') {
        let newStudent = state.students.filter(students => {
            return action.id != students.id
        });

        return {
            ...state,
            students: newStudent
        }
    }

    if (action.type = "DELETE_CAR") {
        let newCar = state.cars.filter(car => {
            return action.id != car.id
        });

        return{
            ...state,
            cars: newCar
        }
    }


    return state;
}


export default rootReducer;