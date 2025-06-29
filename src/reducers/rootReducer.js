import { DECREMENT_VALUE, INCREMENT_VLAUE } from "../actionTypes/actionType";
import students from "../components/students";
import { CarsData } from "../dataArrays/carsData";
import { CountriesData } from "../dataArrays/CountriesData";
import { IcecreamData } from "../dataArrays/iceCreamData";
import { NewsData } from "../dataArrays/newsData";
import { PostsData } from "../dataArrays/postsData";
import { StudentsData } from "../dataArrays/studentsData";


const initialState = {
    posts: PostsData,
    news: NewsData,
    students: StudentsData,
    cars: CarsData,
    iceCreams: IcecreamData,
    countries: CountriesData,
    incrementAmount: 100
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

    if (action.type === "DELETE_CAR") {
        let newCar = state.cars.filter(car => {
            return action.id != car.id
        });

        return {
            ...state,
            cars: newCar
        }
    }

    if (action.type === "DELETE_ICE_CREAM") {
        return {
            ...state,
            iceCreams: state.iceCreams - 1
        }

    }

    if (action.type === "ADD_ICE_CREAM") {
        return {
            ...state,
            iceCreams: state.iceCreams + 1
        }
    }

    if (action.type === "DELETE_COUNTRY") {

        let newCountry = state.countries.filter(country => {
            return action.id != country.id
        })

        return {
            ...state,
            countries: newCountry
        }
    }

    if (action.type === INCREMENT_VLAUE) {
        return {
            ...state,
            incrementAmount: state.incrementAmount + 100
        }
    }

    if (action.type === DECREMENT_VALUE) {
        return {
            ...state,
            incrementAmount: state.incrementAmount - 100
        }
    }



    return state;
}


export default rootReducer;