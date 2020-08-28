# neumorfic
neumorfic framework provides Neumorphic design elements (Button, TextBox, Radio, Checkbox, Switch, Nav Button, Progress Bar, Dropdown list) for your webpage.

git clone https://github.com/aqeelshamz/neumorfic.git

clone into your project directory.

Add neumorfic to your webpage: 

<link rel="stylesheet" href="./neumorfic/style.css">
<script src="./neumorfic/jquery.min.js"></script>
<script src="./neumorfic/min.js"></script>

Elements:
# Button
Add .button class to the element.

eg: <input type="button" value="Login" class="button">

#TextBox
Add .textbox class to the element.

eg: <input type="text" class="textbox">

# CheckBox
Use checkbox tag with input and label inside.

eg: 
<checkbox>
   <input type="checkbox" id="check">
   <label for="check"></label>Check
</checkbox>

You can add multiple checkboxes. just change the value of 'id' and 'for' accordingly.

eg:
<checkbox>
    <input type="checkbox" id="check">
    <label for="check"></label>Apple
</checkbox>
<checkbox>
    <input type="checkbox" id="check2">
    <label for="check2"></label>Mango
</checkbox>

#Radio
Use radio tag with input and label inside.

eg:
<radio>
    <input type="radio" id="apple" name="fruits" checked="checked">
    <label for="apple">Apple</label>
</radio>

You can add multiple radio. just change the value of 'id' and 'for' accordingly. Use the same 'name' for radios in the same group.
eg:
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
