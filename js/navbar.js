let navBar = `
<!-- Navigation Bar Component  -->
<div class="navbar">
    <a href="../html_pages/index.html">Home</a>
    <div class="dropdown">
      <button class="dropbtn">Assignments 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
            <a href="../html_pages/about_me.html">About Me</a>
            <a href="../html_pages/interest.html">My Sample Webpage</a>
          </div>
          <div class="column">
            <a href="../html_pages/fun_with_javascript.html">Fun With JavaScript</a>
            <a href="../html_pages/encrypt-it.html">Encrypt It</a>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <!-- Navigation Bar Component  -->
`

// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navBar);