# neumorfic
neumorfic framework provides Neumorphic design elements (Button, TextBox, Radio, Checkbox, Switch, Nav Button, Progress Bar, Dropdown list) for your webpage.
```
git clone https://github.com/aqeelshamz/neumorfic.git
```
clone into your project directory.

Add neumorfic to your webpage: 

```
<link rel="stylesheet" href="./neumorfic/style.css">
<script src="./neumorfic/jquery.min.js"></script>
<script src="./neumorfic/min.js"></script>
```

Elements:
# Button
Add .button class to the element.

eg: ```<input type="button" value="Login" class="button">```

# TextBox
Add .textbox class to the element.

eg: ```<input type="text" class="textbox">```

# CheckBox
Use checkbox tag with input (type must be checkbox) and label inside.

eg: 
```
<checkbox>
   <input type="checkbox" id="check">
   <label for="check"></label>Check
</checkbox>
```
You can add multiple checkboxes. just change the value of 'id' and 'for' accordingly.

eg:
```
<checkbox>
    <input type="checkbox" id="check">
    <label for="check"></label>Apple
</checkbox>
<checkbox>
    <input type="checkbox" id="check2">
    <label for="check2"></label>Mango
</checkbox>
```
# Radio
Use radio tag with input (type must be radio) and label inside.

eg:
```
<radio>
    <input type="radio" id="apple" name="fruits" checked="checked">
    <label for="apple">Apple</label>
</radio>
```
You can add multiple radio. just change the value of 'id' and 'for' accordingly. Use the same 'name' for radios in the same group.
eg:
```
<!--Group 1-->
<radio>
    <input type="radio" id="apple" name="fruits" checked="checked">
    <label for="apple">Apple</label>
</radio>
<radio>
    <input type="radio" id="orange" name="fruits" checked="">
    <label for="orange">Orange</label>
</radio>
<!--Group 2-->
<radio>
    <input type="radio" id="dodge" name="cars" checked="checked">
    <label for="dodge">Dodge</label>
</radio>
<radio>
    <input type="radio" id="ferrari" name="cars" checked="">
    <label for="ferrari">Ferrari</label>
</radio>
```
# Switch
Use switch tag with input (type must be checkbox) inside.

eg:
```
<switch>
   <input type="checkbox" name="">
</switch>
```
# Navigation Buttons
Use classes .nav-up, .nav-down, .nav-right, .nav-left :

Navigation up:

```
<input type="button" value="" class="nav-up">
```
Navigation down:

```
<input type="button" value="" class="nav-down">
```
Navigation right:

```
<input type="button" value="" class="nav-right">
```
Navigation left:

```
<input type="button" value="" class="nav-left">
```

# Progress Bar
Use the code below:
```
<div class="progress-bar">
    <div class="progress" style="width: 75%;">
        <div class="percentage pg-toggle">
            <p class="pg-text">75%</p>
        </div>
    </div>
</div>
```
You just need to change the width of '.progress' using CSS. You don't need to update '.pg-text'. It will be updated automatically. 
You can change the color of progress bar by changing 'background' property of '.progress' class.

CSS code eg:
```
.progress{
   background: blue; //makes the progress bar blue in color
}
```

# Dropdown Menu
Use the code below:
```
<div class="dropdown">
   <input type="button" value="Dropdown" class="button dropbtn">
   <div class="list listtoggle">
       <input type="button" value="Option 1" class="button d-list">
       <input type="button" value="Option 2" class="button d-list">
       <input type="button" value="Option 3" class="button d-list">
       <input type="button" value="Option 4" class="button d-list">
   </div>
</div>
```

Add options inside div '.list listtoggle' by using input type=button:
```
<input type="button" value="Option" class="button d-list">
```

