const initialState = {
  task: '',
  tasks: []
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        // Spread syntax 配列をその場で展開
        ...state,
        // JSのconcatは配列をつないで新しい配列を返す。
        // 単純なPUSHだと配列の箱自体が変化しない。
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}
