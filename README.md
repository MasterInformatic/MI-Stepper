
# mi-stepper

A Material Stepper.

[Demo](https://masterinformatic.github.io/MI-Stepper/)


Features:

- Linear stepper
- Non linear stepper
- Works without *dependencies*
- No **jQuery** needed

## Table of contents

- [Install](#install)
- [How to use it](#how-to-use-it)
- [Parameters](#parameters)
- [Methods](#methods)
- [Events](#events)
- [License](#license)

## Install

### CDN

Download de files

CDN | Link
------------ | -------------
js minified | Soon...
css minified | Soon...

## How to use it

### HTML markup

Include the CSS file:

```html
<link rel="stylesheet" href="mi-stepper.min.css">
```

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


### JavaScript

In HTML before the end of the `<body>` tag

```html
<script src="mi-stepper.min.js"></script>
```

### Create a stepper

You should wait for the document ready event and create a new instance of `Stepper`.
Put this before de end the body tag

Vanilla JS

```js
document.addEventListener('DOMContentLoaded', function () {
	var step = new Stepper({
		onChange: function(event, index){
			console.log("Current index => " + index);
		},
		onFinish: function(){
			console.log("Last step");
		}, 
		onFinished: function(){
			console.log("Submit");
		}
	});
	
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
	
		var step = new Stepper({
			onChange: function(event, index){
				console.log("Current index => " + index);
			},
			onFinish: function(){
				console.log("Last step");
			}, 
			onFinished: function(){
				console.log("Submit");
			}
		});
		
		step.init();
		
	});
</script>
</body>
</html>
```

## Parameters
default value:

  ```js
  {
    linear: false,
  }
  ```

| Parameter | Description | Type |
| --- | --- | --- |
| `linear` | Enable or disable the posibility of click in the steps (1,2,3). | Boolean | 

## Methods

### constructor

Create an instance of `Stepper`, accepts two parameters.

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
		onChange: function(event, index){
			console.log("Current index => " + index);
			if(index == 1){
				//code here..
			}else if(index ==2){
				//code here...
			}
		},
		onFinish: function(){
			//Example: Disable back button
			console.log("This is the last step");
		}, 
		onFinished: function(){
			//Example: form.submit();
			console.log("Submit");
		}
	});
	
	step.init();
})
```

## License

[MIT](https://github.com/MasterInformatic/MI-Stepper/blob/master/LICENSE)