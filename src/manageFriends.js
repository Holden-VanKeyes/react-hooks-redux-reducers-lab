export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'friends/add':
      let newState = action.payload

      return {
        friends: [
          ...state.friends,
          {
            name: newState.name,
            hometown: newState.hometown,
            id: newState.id,
          },
        ],
      }
    case 'friends/remove':
      let friend = action.payload
      console.log(state.friends)
      return {
        friends: [...state.friends.splice(0, friend.id)],
      }

    default:
      return state
  }
}

// {friends: []}, action){

//   switch(action.type) {
//     case 'ADD_FRIEND':
//       return {
//         friends: [
//           // should output this
//           // { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 }
//         ]
//       }
//     case 'REMOVE_FRIEND':
//       return [
//         // remove friend
//       ]
//     default:
//       return state
//   }
