import produce from 'immer';

export default function Order(state = [], action){
    switch(action.type){
        case 'ADD_ORDER': 
            return produce(state, draft => {
                const ItemIndex =  state.findIndex(item => item.id === action.item.id);
                 
                if(ItemIndex >=0){
                    draft[ItemIndex].amount += 1;
                }else {
                    draft.push({
                        ...action.item,
                        amount: 1,
                    })
                }

            })
        case 'REMOVE_ORDER':
            return produce(state, draft => {
                const ItemIndex =  state.findIndex(item => item.id === action.id);
                 
                if(ItemIndex >=0){
                   draft.splice(ItemIndex, 1)
                }
            })
            case 'UPDATE_ORDER':
            if(action.amount <= 0){
                return state;
            }
            return produce(state, draft => {
                const ItemIndex =  state.findIndex(item => item.id === action.id);
                 
                if(ItemIndex >=0){
                   draft[ItemIndex].amount = Number(action.amount);
                }
            })
            case 'RESET':
                return state = [];
        
        default:
            return state;    
    }
}