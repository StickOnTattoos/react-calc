const cartReducer = (state=[] , action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload]
    }
}