# Javascript

## History of JS 



## ECMAScript



## Browser Object Model



## 1. Window Object

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

---

## 2. Window Location
- It is used to get the current location (URL) and redirects to new location.
  
**window.location.href**
 - Returns the href (URL) of the current page
   
**window.location.hostname** 
 - Returns the domain name of the web host
   
**window.location.pathname**
 - Returns the pathname of the current page
   
**window.location.protocol**
 - Returns the web protocol used ( Example: http, https )

---

## 3. Window Screen
  - Tells information about user screen

**screen.width**
  - Returns the users screen width

**screen.height** 
  - Returns the users screen height

**screen.availWidth**
  - Returns the users screen width excluding interface feautures like taskbar.
    
**screen.availHeight** 
  - Returns the users screen height excluding interface feautures like taskbar.
    
**screen.pixelDepth**
  -  It returns the pixel depth of the screen.

--- 



    
