export const settablenum = (value)=> async dispatch =>{
    dispatch({
        type : 'SETTABLENUM',
        payload:value
    })
}

export const resettablenum = ()=> async dispatch=>{
    dispatch({
        type: 'RESETTABLENUM'
    })
}

export const setfilter = (value)=> async dispatch =>{
    dispatch({
        type: 'SETFILTER',
        payload:value
    })
}

export const resetfilter = ()=> async dispatch =>{
    dispatch({
        type: 'RESETFILTER'
    })
}

export const placeorder = (id,name,prize,table_number, url)=>async dispatch=>{
    dispatch({
        type: 'PLACEORDER',
        payload:{
            id:id,
            name:name,
            prize:prize,
            table_number:table_number,
            url : url
        }

    })
}

export const removeorder = (id, table_number)=> async dispatch =>{
    dispatch({
        type :'REMOVEORDER',
        payload: {
            id:id,
            table_number:table_number
        }

    })
}