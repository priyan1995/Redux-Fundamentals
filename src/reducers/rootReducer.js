import students from "../components/students";

const initialState = {
    posts: [
        {
            id:'1', 
            title: 'Lorem Ipsum', 
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
            id:'2', 
            title: 'Finibus Bonorum et Malorum', 
            body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
        },
        {
            id:'3', 
            title: 'occaecati cupiditate non provident', 
            body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. '
        }
    ],
    news: [
        {
            id:'1', 
            title: 'News 1', 
            body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
            id:'2', 
            title: 'News 2', 
            body: 'Sed ut perspiciatis unde omnis iste natus error. '
        },
       
    ],
    students: [
        {
            id:'1',
            name: 'John Wick',
            subject: 'English',
            university: 'Harvard University'
        },
        {
            id:'2',
            name: 'Jack Sparrow',
            subject: 'Science',
            university: 'Harvard University'
        },
        {
            id:'3',
            name: 'Martin Sam',
            subject: 'Maths',
            university: 'Harvard University'
        }
    ],
    cars: [
        {
            id:'1',
            brand: 'Toyota',
            name: 'Corolla',
            seats: '4',
            engineCapacity: '2500cc'
        },
        {
            id:'2',
            brand: 'Mitsubishi',
            name: 'Lancer',
            seats: '4',
            engineCapacity: '2800cc'
        },
        {
            id:'3',
            brand: 'Subaru',
            name: 'STI',
            seats: '4',
            engineCapacity: '2200cc'
        },
        {
            id:'4',
            brand: 'Suzuki',
            name: 'WeagonR',
            seats: '4',
            engineCapacity: '800CC'
        },
        {
            id:'5',
            brand: 'Mazda',
            name: 'CRZ',
            seats: '4',
            engineCapacity: '3200cc'
        },
        {
            id:'6',
            brand: 'Toyota',
            name: 'Land Cruiser Prado',
            seats: '6',
            engineCapacity: '4200cc'
        }
    ]
} 



const rootReducer = (state = initialState, action) => {
    // console.log(action)

    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter( post => {
            return action.id !== post.id
        });

        return{
            ...state,
            posts: newPosts
            
        }        
    }

    if(action.type === 'DELETE_NEWS'){
        let newNews = state.news.filter ( news => {
            return action.id != news.id
        });

        return{
            ...state,
            news: newNews
        }
    }

    if(action.type === 'DELETE_STUDENT'){
        let newStudent = state.students.filter ( students => {
            return action.id != students.id
        });

        return{
            ...state,
            students: newStudent
        }
    }


    return state;  
}


export default rootReducer;