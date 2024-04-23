const initialstate = {
    category:'All-items'
}

export default function filterreducer(state = initialstate, action){
    const {type, payload} = action;

    switch(type){
        case 'SETFILTER':
            return {...state, category:payload}
        case 'RESETFILTER':
            return {...state, category:'All-items'}
        default:
            return state
    }
} 