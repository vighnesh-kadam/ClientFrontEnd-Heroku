const Home = () => {
    return ( <div>
        <h1 className="mb-0 smalldisplay landing" >Welcome to Client Manager</h1>
        <p className="para">
            An application to manage all your clients and their details in one place.It allows the user create an account and login giving them access to various actions such as :
</p>

<p className="para">
    <b>ADD CLIENT</b>: Allows user to add a new client along with its details
</p>
<p className="para" >
    <b>DISPLAY CLIENT</b>: Displays all the clients stored by that respective user
</p>
<p className="para" >
    <b>UPDATE CLIENT</b>: Lets the user update data about a specific client 
</p>
<p className="para" >
  <b>DELETE CLIENT</b>: Deletes the selected client
</p>
<p className="para" >
 <b> DISPLAY CLIENT BY REVENUE </b>: Displays clients in decreasing revenue order
</p>


    </div> );
}
 
export default Home;