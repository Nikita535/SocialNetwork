const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
/******************************************
 * константы для минимизации ошибок в коде, так как гребаный vs code не подсказываем мне нихрена
 */

const dialogsReducer = (state, action) => {
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;
       case SEND_MESSAGE:
           let body = state.newMessageBody;
           state.newMessageBody = '';
           state.messages.push({id: 6, message: body});
           return state;
       default:
           return state;
   }
}

/********************************
 * две вспомогательные ф-ии, которые просто возвращают объект action 
 */
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;