function UserProfile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      {props.user && (
        <div>
          /* <p>Name: {user.name}</p>
        //   <p>Email: {user.email}</p> */
             <p>Name: {props.user.name}</p>
          <p>Email: {props.user.email}</p>

        </div>
      )}
    </div>
  );
}

function App() {
const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com"
  };

  return (
    <div>
      <h1>Welcome</h1>
      <UserProfile user = {user} />
    </div>
  );
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// This is the final or correct I have fixed all the errors  in this code now this code is working fine 
