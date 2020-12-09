// TODO: Create action creators as defined in tests
export const addQuote = quote => {

    return {
        type: "ADD_QUOTE",
        quote
    }
}

export const removeQuote = quoteId => {
   
    return {
        type: "REMOVE_QUOTE",
        quoteId
    }
}
export const updateQuote = quoteId => {
    return {
        type: "UPDATE_QUOTE",
        quoteId
    }
}
export const downvoteQuote = quoteId => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}
export const upvoteQuote = quoteId => {
    console.log(quoteId)
        return {
            type: "UPVOTE_QUOTE",
            quoteId
        }
}