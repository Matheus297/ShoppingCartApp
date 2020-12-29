export function AddCart(item){
    return {
        type: 'ADD_ORDER',
        item
    }
}


export function removeCart(id){
    return {
        type: 'REMOVE_ORDER',
        id
    }
}

export function updateOrder(id, amount){
    return {
        type: 'UPDATE_ORDER',
        id,
        amount
    }
}

export function resetCart(item){
    return {
        type: 'RESET',
        item,
    }
}