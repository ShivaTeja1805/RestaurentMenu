const initialstate = []

export default function orderreducer(state= initialstate, action){
    const {type, payload} = action;
     switch(type){
        case 'PLACEORDER':
            return [...state, payload]
        case 'REMOVEORDER':
            return state.filter(order => order.id !== payload.id || order.table_number !== payload.table_number);

        default:
            return state
     }
}