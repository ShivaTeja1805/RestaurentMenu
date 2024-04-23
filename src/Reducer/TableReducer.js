const initialstate = {
    table_num : null
}

export default function tablereducer(state = initialstate, action){
    const {type, payload} = action;

    switch(type){
        case 'SETTABLENUM':
            return{...state, table_num:payload}
        case 'RESETTABLENUM':
            return{...state, table_num:null}
        default:
            return state
    }
}