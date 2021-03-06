(function() {

  this.Stepper = function() {

	this.direction  = '';
	this.currentTab = 0;
	this.indicators = document.getElementsByClassName("step");
	this.tabs 		= document.getElementsByClassName("tab");
	this.aaa 		= document.querySelectorAll("div.step > a");
	
	var defaults = {
	  linear: false,
	  onChange: function(event, index){},
	  onFinished: function(){},
	  onFinish: function(){}
	}

	if (arguments[0] && typeof arguments[0] === "object") {
	  this.options = extendDefaults(defaults, arguments[0]);
	}else{
		this.options = extendDefaults(defaults, defaults);
	}

  }

  Stepper.prototype.init = function() {
	eventListeners.call(this);
  }

  Stepper.prototype.next = function() {
	next.call(this);
  }

  Stepper.prototype.prev = function() {
	prev.call(this);
  }

  function eventListeners(){
	var _ = this;
	document.getElementById("stepNext").addEventListener("click", next.bind(_));
	document.getElementById("stepPrev").addEventListener("click", prev.bind(_));
	for (var i = this.aaa.length - 1; i >= 0; i--) {
		this.aaa[i].addEventListener("click", targetTab.bind(_, this.aaa[i]));
	}
	document.getElementById("stepSave").addEventListener("click", finished.bind(_));
	showTab.call(this);
  }

  function next(){
	this.direction = 'next';
	  showTab.call(this);
  }

  function prev(){
	this.direction = 'prev';
	  showTab.call(this);
  }


  function showTab(index){

	  	var validate = true;
	  	if(this.options.linear){
		  	if(this.options.onChange(event, this.currentTab) == false){
		  		validate = false;
		  	}
	  	}

		if(this.direction === 'next'){
			if(validate){
				this.currentTab = this.currentTab + 1;
				if(this.currentTab >= this.tabs.length){
					this.currentTab = (this.tabs.length-1);
				}
				this.tabs[this.currentTab-1].style.display = 'none';
			}
		}else if(this.direction === 'prev'){
			this.currentTab = this.currentTab - 1;
			if(this.currentTab <= 0){
				this.currentTab = 0;
			}
			this.tabs[this.currentTab+1].style.display = 'none';
		}else if(this.direction === 'target'){
			this.tabs[this.currentTab].style.display = 'none';
			this.tabs[index].style.display = 'block';
			this.currentTab = index;
		}else{
			this.tabs[this.currentTab].style.display = 'none';
		}

		this.tabs[this.currentTab].style.display = 'block';
		setIndicator.call(this);
		this.options.onChange(event, this.currentTab);
		butonHandle.call(this);
		finish.call(this);
  }

  function butonHandle(){
  	if(this.direction == 'next'){
  		if(this.currentTab > 0){
  			document.getElementById("stepPrev").style.display = 'block';
  		}
  	}else if(this.direction == 'prev'){
  		document.getElementById("stepSave").style.display = 'none';
  		document.getElementById("stepNext").style.display = 'block';
  		if(this.currentTab == 0){
  			document.getElementById("stepPrev").style.display = 'none';
  		}
  	}else if(this.direction == 'target'){
  			document.getElementById("stepSave").style.display = 'none';
  		if(this.currentTab == 0){
  			document.getElementById("stepNext").style.display = 'block';
  			document.getElementById("stepPrev").style.display = 'none';
  		}else{
  			document.getElementById("stepNext").style.display = 'block';
  			document.getElementById("stepPrev").style.display = 'block';
  		}

  	}

  }

  function setIndicator(){
	
	for (var i = 0; i < (this.indicators.length); i++) {
	  this.indicators[i].classList.remove("active");
	  this.indicators[i].classList.remove("done");
	}

	for (var i = 0; i <= (this.currentTab); i++) {
	  this.indicators[i].classList.add("active");
	  if( i < this.currentTab){
	   this.indicators[i].classList.add("done");
	  }
	}
  }

  function targetTab(element){
  	if(!this.options.linear){
		this.direction = 'target';
		for (var i = 0; i < (this.tabs.length); i++) {
		  if(this.tabs[i].getAttribute("id") == element.dataset.target){
			showTab.call(this, i);
		  }
		}
  	}
  }

  function finish(){
	if(this.currentTab == (this.tabs.length-1)){
		this.options.onFinish.call();
	  	document.getElementById("stepNext").style.display = 'none';
	  	document.getElementById("stepSave").style.display = 'block';
	}
  }

  function finished(){
	this.options.onFinished.call();
  }

  function extendDefaults(source, properties) {
	var property;
	for (property in properties) {
	  if (properties.hasOwnProperty(property)) {
		source[property] = properties[property];
	  }
	}
	return source;
  }

}());