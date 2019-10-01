

let nextItemId = 0
export const addItem = text => ({
    type: 'ADD_ITEM',
    id: nextItemId ++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleItem = id => ({
    type: 'TOGGLE_ITEM',
    id
})

export const removeItem = (id, item) => ({
    type: 'REMOVE_ITEM',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_HAVE: 'SHOW_HAVE',
    SHOW_NEED: 'SHOW_NEED',
    REMOVE_ITEM: 'REMOVE_ITEM'
}