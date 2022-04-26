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

    return state;
  
}

export default rootReducer;