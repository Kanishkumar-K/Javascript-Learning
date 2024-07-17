# Javascript
--- 


## Browser Object Model

## Window Object

- Window Object represents the browser's window.

### Window size properties

- 1. Window Width
        It determines the inner width of the browser window 

- 2. Window Height
        It determines the inner height of the browser window 

![Screenshot 2024-07-17 154136](https://github.com/user-attachments/assets/1a627d6d-f424-48ac-a4ba-8cabf6a8c1df)

- 3. Open()
        - Opens a new window

- 4. Close()
        - Closes the current window

              <!DOCTYPE html>
              <html>
              <body>
  
              <p id="demo"></p>
  
              <script>
              var myWindow;
  
              function openWindow(){
                  myWindow = window.open("https://amazon.in");
              }
  
              function closeWindow() {
                  if (myWindow) {
                      myWindow.close();
                  }
              }
              </script>
  
              <button onclick="openWindow();">Open</button>
              <button onclick="closeWindow();">Close</button>
              </body>
              </html>
            

- 5. Moveto() 
        - Move the current window

- 6. Resize()
        - Resize the window screen
    
    
