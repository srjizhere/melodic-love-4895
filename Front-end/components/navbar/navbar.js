export default function navb() {
  return `   
        <!--------------Bonus-Area--------------->
        <div class="bonus">
            <p>
                <strong>Winter Sale is on now! </strong>
                Save up to 60% through February 27.
                <a href="#">Sale.</a>
            </p>
            <button class="India">
                <img src="https://n.nordstrommedia.com/alias/IN.gif" alt="Flag">
                <a id="India" href="">India</a>
            </button>
        </div>

        <div id="nav2">
 <!----------------Logo-Area----------->
            <div id="logo"> <img src="https://i.ibb.co/BVspTR3/Fashion-removebg-preview.png" alt=""> </div>
<!----------------Logo-Area----------->

            
            <div id="sear">   <input type="text" name="" id="" placeholder="Search for products or brands" >
            </div>
            

                <div id="access"> 
                    <div class="accessChild" id="loginBtn"><i class="fa-solid fa-user-tie fa-2xl"></i>
                        <p>Login</p>
                    </div>
                    <div class="accessChild" id="logOutBtn"><i class="fa-solid fa-right-from-bracket fa-2xl"></i>
                        <p>LogOut</p>
                    </div>
                    <div class="accessChild"><i class="fa-solid fa-cart-shopping fa-2xl"></i><p>Cart</p></div>
                    <div class="accessChild"><i class="fa-sharp fa-solid fa-clock-rotate-left fa-2xl"></i><p>Purchases</p></div>

             </div>
            
            </div>



        <!--------------Navigation-Bar-------->
        <div id="nav">
            <ul class="navLinks">
                <li id="sale"><a href="#">All</a>
                </li>
                <li id="women"><a href="/women/women.html">Women</a>
                </li>
                <li id="men"><a href="/men/men.html">Men</a>
                </li>
                <li id="kids"><a href="/kids/kid.html">Kids</a>
                </li>
               
                <li id="Activewear"><a href="#">Active Wear</a>
                </li>

                <li id="home"><a href="/index.html">Home</a>
                </li>
                <li id="beauty"><a href="/beauty/beauty.html">Beauty</a>
                </li>
              
            </ul>
        </div>
    <!-- navbar ended -->
    <!-- login start -->
        
    <div id="loginPopup" class="popup">
      
      <div class="popup-content">
        <span class="close">&times;</span>
        <h2>Login</h2>
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br>
          
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required><br>

          
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#" id="signupLink">Signup</a></p>
      </div>
    </div>

    <div id="signupPopup" class="popup">
      <div class="popup-content">
        <span class="close">&times;</span>
        <h2>Signup</h2>
        <form>
          <label for="sname">Name:</label>
          <input type="text" id="sname" name="name" required>
          
          <label for="semail">Email:</label>
          <input type="email" id="semail" name="email" required>
          
          <label for="spassword">Password:</label>
          <input type="password" id="spassword" name="password" required>
          
          <label for="srole">Role:</label>
          <select id="srole" name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <a href="#" id="loginLink">Login</a></p>
      </div>
    </div>
      <div class="popup" id="SucessfullMessage">
      <button id="SucessfullMessagebtn" class="SucessfullMessagebtn"></button>
    </div>

    `;
}
