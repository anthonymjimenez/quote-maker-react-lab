export default (state = [], action) => {
  console.log(action.type == "REMOVE_QUOTE");
  if (action.type == "ADD_QUOTE") {
    console.log(action.quote);
    return [...state, action.quote];
  } else if (action.type == "REMOVE_QUOTE") {
    console.log(action.quoteId);
    return [...state.filter(({ id }) => id !== action.quoteId)];
  } else if (action.type == "UPVOTE_QUOTE") {
    let list = [...state];
    console.log(action.quoteId)
    let index = list.findIndex(({ id }) => id == action.quoteId);
    list[index] = {
      ...list[index],
      votes: list[index].votes + 1,
    };
    return [...list]
  } else if (action.type == "DOWNVOTE_QUOTE") {
    let list = [...state];
    let index = list.findIndex(({ id }) => id == action.quoteId);
    if(list[index].votes >= 1) {
    list[index] = {
      ...list[index],
      votes: list[index].votes - 1,
    };
  }
    return [...list];
  } else {
    return state;
  }
};
