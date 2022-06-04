import React from "react";

function Scoreboard({ userData, inputValue, inputHandler, submitHandler, disableButton }) {
  // User plays the game, they're sent to leaderboards, they input a name/anonymous and their score is stored.
  // Once they submit input, then it is stored in state <- every time state is updated, this is added to a collection doc in Firestore
  // User data is displayed by grabbing the stored data in Firestore collection
  // I think I can use just FIRESTORE for this.
  // List that shows username/anonymous, and time required to finish
  // Properly order them
  console.log(disableButton);
  if (!userData) {
    return (
      <div>retrieving data</div>
    )
  };
  console.log(disableButton);
  const tempStyle = {
    color: 'white'
  }
  const mapScoreboard = () => {
    return userData.map((user) => {
      return (
        <li key={user.id} data-user-list>
          <div style={tempStyle}>
            <span>{user['user']} </span>
            <span>{`${user.time[1]} : ${user.time[0] < 10 ? '0' + user.time[0] : user.time[0]}`}</span>
          </div>
        </li>
      )
    })
  }
  const userList = mapScoreboard();

  return (
    <div>
      <label htmlFor='scoreboard-input' >
        What should we call you?
        <input required onChange={inputHandler} value={inputValue} type='text' id='scoreboard-input'></input>
        <button disabled={disableButton} onClick={submitHandler} type="submit" >SUBMIT</button>
      </label>
      <ul>
        {userList}
      </ul>
    </div>
  )
};

export default Scoreboard;