const initialState = {
  list: [
    {
      name: "JavaScript"
    },
    {
      name: "React"
    },
    {
      name: "NextJS"
    },
    {
      name: "TypeScript"
    }
  ],
  search: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        list: [{name: action.payload}, ...state.list],
      }
    case "SEARCH":
      return {
        ...state,
        search: action.payload
      }  
  
    default:
      return state;
  }
}