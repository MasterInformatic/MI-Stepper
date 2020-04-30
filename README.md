
# mi-stepper


A Material Stepper.

![enter image description here](https://masterinformatic.github.io/MI-Stepper/img/demo.gif)

[Demo](https://masterinformatic.github.io/MI-Stepper/)


Features:
	
 - [x] Linear Stepper
 - [x] No linear Stepper
 - [x] Works without *dependencies*
 - [x] No **jQuery** needed
 - [ ] Vertical Stepper

 
## Table of contents

- [Install](#install)
- [How to use it](#how-to-use-it)
- [Parameters](#parameters)
- [Methods](#methods)
- [Events](#events)
- [License](#license)

# Install

Download the files, this files are in the `dist` folder

```
 dist/js/mi-stepper.min.js
 dist/css/mi-stepper.min.css
```
# How to use it

### CSS

Include the CSS file:
 
```html
<link rel="stylesheet" href="dist/css/mi-stepper.min.css">
```

### JavaScript

In HTML before the end of the `<body>` tag

```html
<script src="dist/js/mi-stepper.min.js"></script>
```
### HTML
Add the following HTML:

```html
	<div class="stepContainer">
		<div class="stepIndicator">
			<div class="step">
				<a href="#" data-target="one">
					1
				</a>
			</div>
			<div class="step" >
				<a href="#" data-target="two">
					2
				</a>
			</div>
			<div class="step" >
				<a href="#" data-target="tree">
					3
				</a>
			</div>
		</div>
		
		<div class="tabs">
			<div class="tab" id="one">
				<!-- CONTENT -->
				<br><br><h1>1</h1><br><br>
				<!-- END CONTENT -->
			</div>
			<div class="tab" id="two">
				<!-- CONTENT -->
				<br><br><h1>2</h1><br><br>
				<!-- END CONTENT -->
			</div>
			<div class="tab" id="tree">
				<!-- CONTENT -->
				<br><br><h1>3</h1><br><br>
				<!-- END CONTENT -->
			</div>			
		</div>
		
		<div class="stepAction">
			<button class="stpbtn" id="stepPrev">Atras</button>
			<button class="stpbtn" id="stepNext">Siguiente</button>
			<button class="stpbtn" id="stepSave">Guardar</button>
		</div>

	</div>
```
### Create a stepper

You should wait for the document ready event and create a new instance of `Stepper`.
Put this before de end the body tag

Vanilla JS

```js
document.addEventListener('DOMContentLoaded', function () {
	var step = new Stepper();
	step.init();
})
```

Full example integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MI - Stepper</title>
	<link rel="stylesheet" type="text/css" href="dist/css/mi-stepper.min.css">
</head>
<body>
	
<div class="container">

	<div class="stepContainer">
		<div class="stepIndicator">
			<div class="step">
				<a href="#" data-target="one">
					1
				</a>
			</div>
			<div class="step" >
				<a href="#" data-target="two">
					2
				</a>
			</div>
			<div class="step" >
				<a href="#" data-target="tree">
					3
				</a>
			</div>
		</div>
		<div class="tabs">
			<div class="tab" id="one">
				<br><br><h1>1</h1><br><br>
			</div>
			<div class="tab" id="two">
				<br><br><h1>2</h1><br><br>
			</div>
			<div class="tab" id="tree">
				<br><br><h1>3</h1><br><br>
			</div>
		</div>
		<div class="stepAction">
			<button class="stpbtn" id="stepPrev">Atras</button>
			<button class="stpbtn" id="stepNext">Siguiente</button>
			<button class="stpbtn" id="stepSave">Guardar</button>
		</div>
	</div>
	
</div>
	
<script type="text/javascript" src="dist/js/mi-stepper.min.js"></script>
<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function () {
		var step = new Stepper();
		step.init();
	});
</script>
</body>
</html>
```

# Parameters

> *All parameters are optional*

default value:

  ```js
  {
    linear: false,
    onChange: function(event, index){}, 
    onFinish: function(){}, 
    onFinished: function(){}
  }
  ```

For more information about the functions, check: [Events section](https://github.com/MasterInformatic/MI-Stepper#events)

| Parameter | Description | Type |
| --- | --- | --- |
| `linear` | Enable or disable the posibility of click in the steps (1,2,3). | Boolean | 

## Methods

### constructor

Create an instance of `Stepper`, accepts four parameters.

## Events


| Event | Description | Returns |
| --- | --- | --- |
| `onChange(event, Index)` | This event returns the current index and an event, when the "next" button, "previous" button or any step is pressed. | Event, Integer | 
| `onFinish()` | This event is executed when you are in the last step. | -  |
| `onFinished()` |   This event will be executed when the save button is pressed. | - |


Example:

```js
document.addEventListener('DOMContentLoaded', function () {
	var step = new Stepper({
		linear: false,
		//launched every time any step changes
		onChange: function(event, index){
			if(index == 1){
				//code here..
			}else if(index == 2){
				//code here...
			}
		},
		//launched when you are in the last step
		onFinish: function(){
			//Example: Disable back button
			//Example: show data to confirm
			console.log("This is the last step");
		}, 
		//launched when you press the button 'save'
		onFinished: function(){
			//Example: form.submit();
			console.log("Submit");
		}
	});
	
	step.init();
})
```

## Validate Steps

Only works when the parameter **`linear`** is **`true`**

```js
{
linear:true,
...
}
```

You can add `return false` if you wants prevent change to next step

```js
document.addEventListener('DOMContentLoaded', function () {
	var step = new Stepper({
		linear: true,//required for validate steps
		onChange: function(event, index){
			if(index == 2){
				if(!yourCustomValidation()){
					return false;//this prevent change
				}
			}
		}
	});
	step.init();
})
```

## License

[MIT](https://github.com/MasterInformatic/MI-Stepper/blob/master/LICENSE)