var width = screen.width;
new_widht = screen.width - 70 ;
new_height = screen.height - 300 ;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchdown", my_touchdown);
    
    function my_touchdown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        touchEvent = "touchDown";
    }

    canvas.addEventListener("touchup", my_touchup);
    function my_touchup(e)
    {
        mouseEvent = "touchUP";
    }

    canvas.addEventListener("touchleave", my_touchleave);
    function my_touchleave(e)
    {
        mouseEvent = "touchleave";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        console.log("my_touchmove");
        current_position_of_touch_x = e.clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.clientY - canvas.offsetTop;

        if (touchEvent == "touchDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    
        }
        if(width < 992)
        {
            document.getElementById("mycanvas").width = new_width;
            document.getElementById("mycanvas").height = new_height;
            document.body.style.overflow = "hidden";
         }
       function my_touchstart(e) 
       {
           console.log("my_touchstart")
        
         last_position_of_x = e.youches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop
       }
    }


