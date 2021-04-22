<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <form method="POST" id="form">
      <div class="form-group  mytextareaDiv" id="blockMsg"> 
        <div class="form-control ">
          <input type="text" name="yourName" id="nameInput" >
        </div>
        <div>
          <textarea class="form-control" rows="10" placeholder="Type your message" cols="70" id="mytexteare" name="comment" ></textarea> 
        </div>
        <div id="sendBtn" style="display:none">
          <input type="submit" class="sentMSG" onclick="sendMessage()" onchange="inputChanged()" id="btn">
        </div>
      </div>
    </form>
    <div id="content">
      <div class="container d-flex justify-content-center">
        <div class="card mt-5">
            <div class="d-flex flex-row justify-content-between p-3 adiv text-white"> <i class="fas fa-chevron-left"></i> <span class="pb-3">Live chat</span> <i class="fas fa-times"></i> </div>
            <div id="msgContent">
              <div id="addName">
              
              </div>
              <div class="d-flex flex-row p-3" id="addMessage">
                
              </div>
            </div>
            
          
        </div>
    </div>
    
  </div>
  
    
    <script src="script.js"></script>
    <script src="jquery.js"></script>


  </body>
</html>