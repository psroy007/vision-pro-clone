# Requirements:
1) GSAP
2) SCROLL TRIGGER
3) LOCOMOTIVE
4) CANVAS

## Locomotive and scroll trigger cannot work together that's why we use:
 -->   locomotive scroll trigger code pen

## To use the canvas we have to follow few steps: 
1) Inspect and refresh the webpage
2) Then go to network, then go to img
3) Select your image then click copy
4) After that, click on copy all as HAR
5) Now go to console
6) Within console type --> var har = and paste the copied HAR here
7) Click on enter

# index.html:
1) At first create a main div to contain the webpage
2) Next we create div as #page1
3) Then we create the nav bar of #page1
4) Nav bar contains heading(h3) as Apple Vision Pro and a button of Notify me
5) Now we are adding a video as background of #page1
6) Set the video to muted
7) Page1 also contains a heading in image format which is stored in page1-bottom div (under page1)
8) Now create another div page2 which contains a video and a heading
9) The video must be set to autoplay, loop and muted
10) Now do the same for remaining pages,i.e, divs of page3,page4 and page5

## main --> acts a  wrapper
## Remember, video of page1 should be declared before nav else the video will overlap on nav

# style.css:


# script.js:
1) Copy and paste the js of locomotive scroll trigger code pen
2) Remove code from Red Panel upto each time the window updates line
3) Change .smooth-scroll to #main
4) Create a function named loco()
5) Now move the total code into the loco() function
6) Your Scroll-Trigger is now applied
7) Now we added gsap and scroll trigger to video of page1
8) Then we pin the page1
9) After fixing the page1 we need to fade the heading by making its opacity:0
10) Now page1 is ready let's go to page2
11) 

## Function declaration:
 --> function name_of_function()
     {

     }
     name_of_function()