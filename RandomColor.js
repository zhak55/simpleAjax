var randColor = {
	
  rV  :  function(val) {
		return Math.floor(Math.random() * val);
	},
  get :  function() {
         var r = this.rV(255).toString(16);
	     if(r.length < 2)
			r = "0" + r;
	 var g = this.rV(255).toString(16);
	     if(g.length < 2)
			g = "0" + g;
	 var b = this.rV(255).toString(16);
	     if(b.length < 2)
		    	 b = "0" + b;
      return "#" + r + g + b;
   }
} 
