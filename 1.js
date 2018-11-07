	function AAA(){
		this.num = 1;
		this.run = function(){
			console.log("run"+this.num);
		}
	}

	var o = new AAA();
	o.run();
	var p = {num:2};
	o.run.call(p);
	console.log(p)
	AAA.call(p);
	p.run()