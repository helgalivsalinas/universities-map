
$(function(){

	$('#step1').click(function () {
		$('#PSAT').toggle();
		$('#fafsa').hide();
		$('#apply').hide();
		$('#quote').hide();
	});

	$('#step2').click(function () {
		$('#PSAT').hide();
		$('#fafsa').hide();
		$('#apply').toggle();
		$('#quote').hide();
	});

	$('#step3').click(function () {
		$('#PSAT').hide();
		$('#apply').hide();
		$('#fafsa').toggle();
		$('#quote').hide();
	});

	$('.navigation, #graduate, #undocumented, h1, h2').click(function () {
		$('#PSAT').hide();
		$('#apply').hide();
		$('#fafsa').hide();
		$('#quote').show();
	});


});

$(function() {

    $('#map').usmap({
    showlabels:true,
    stateStyles: {fill: 'white', stroke: '#20A7DC', 'stroke-width': 2 },
    stateHoverStyles: {stroke: '#20A7DC' },
    stateSpecificHoverStyles: {
    	'CA': {fill:'#F15826'},
    	'LA': {fill: '#F15826'},
    	'NY': {fill:'#F15826'},
    	'GA': {fill: '#F15826'},
    	'KY': {fill: '#F15826'},
    	'FL': {fill: '#F15826'},
    	'WI': {fill: '#F15826'},
    	'OR': {fill: '#F15826'},
    	'MO': {fill: '#F15826'},
    	'WA': {fill: '#F15826'},
    	'OH': {fill: '#F15826'},
    	'MN': {fill: '#F15826'},
    	'VT': {fill: '#F15826'},
    	'TN': {fill: '#F15826'},
    	'TX': {fill: '#F15826'},
    	'MI': {fill:'#F15826'},
    	'MD': {fill: '#F15826'},
    	'DC': {fill: '#F15826'},
    	'IA': {fill: '#F15826'},
    	'VA': {fill: '#F15826'},
    	'ME': {fill: '#F15826'},
    	'NC': {fill: '#F15826'},
    	'NH': {fill: '#F15826'},
    	'IL': {fill: '#F15826'},
    	'RI': {fill: '#F15826'},
    	'CT': {fill: '#F15826'},
    	'PA': {fill: '#F15826'},
    	'MA': {fill: '#F15826'},
    	'NJ': {fill: '#F15826'},
    	'CO': {fill: '#F15826'},
    },
    
    stateHoverSpecificStyles: {
    	'ND': {fill:'white'},
    	'SD': {fill:'white'},
    	'AZ': {fill:'white'},
    	'UT': {fill:'white'},
    	'NV': {fill:'white'},
    	'NM': {fill:'white'},
    	'OK': {fill:'white'},
    	'MT': {fill:'white'},
    	'KS': {fill:'white'},
    	'NE': {fill:'white'},
    	'WY': {fill:'white'},
    	'AR': {fill:'white'},
    	'SC': {fill:'white'},
    	'AK': {fill:'white'},
    	'HI': {fill:'white'},
    	'DE': {fill:'white'},
    	'AL': {fill:'white'},
    	'WV': {fill:'white'},
    	'MS': {fill:'white'},
    	'ID': {fill:'white'},
    },
    /*mouseoverState: {
    	'NY': function (event,data){
    		$('#state-name').text('New York');
    	},

    },
    mouseoutState: {
    	'NY': function (event,data){
    		$('#state-name').hide();
    	}
    },*/
  	clickState: {

  		'NY': function (event,data){
  			$('#where').html('<p>New York</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.new-york'
		  		});

		  
			});

  		},

  		'GA' : function (event,data){
  			$('#where').html('<p>Georgia</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.georgia'
		  		});
		  	});
  		},

  		'LA' : function (event,data){
  			$('#where').html('<p>Louisiana</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.louisiana'
		  		});
		  	});
  		},

  		'KY' : function (event,data){
  			$('#where').html('<p>Kentucky</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.kentucky'
		  		});
		  	});
  		},

  		'FL' : function (event,data){
  			$('#where').html('<p>Florida</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.florida'
		  		});
		  	});

  		},

  		'WI' : function (event,data){
  			$('#where').html('<p>Wisconsin</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.wisconsin'
		  		});
		  	});

  		},

  		'OR' : function (event,data){
  			$('#where').html('<p>Oregon</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.oregon'
		  		});
		  	});

  		},

  		'MO' : function (event,data){
  			$('#where').html('<p>Missouri</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.missouri'
		  		});
		  	});

  		},

  		'WA' : function (event,data){
  			$('#where').html('<p>Washington</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.washington'
		  		});
		  	});

  		},

  		'OH' : function (event,data){
  			$('#where').html('<p>Ohio</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.ohio'
		  		});
		  	});

  		},

  		'MN' : function (event,data){
  			$('#where').html('<p>Minnesota</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.minnesota'
		  		});
		  	});

  		},

  		'VT' : function (event,data){
  			$('#where').html('<p>Vermont</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.vermont'
		  		});
		  	});

  		},

  		'TN' : function (event,data){
  			$('#where').html('<p>Tennessee</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.tennessee'
		  		});
		  	});

  		},

  		'TX' : function (event,data){
  			$('#where').html('<p>Texas</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.texas'
		  		});
		  	});

  		},

  		'MI' : function (event,data){
  			$('#where').html('<p>Michigan</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.michigan'
		  		});
		  	});

  		},

  		'MD' : function (event,data){
  			$('#where').html('<p>Maryland</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.maryland'
		  		});
		  	});

  		},

  		'DC' : function (event,data){
  			$('#where').html('<p>DC</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.dc'
		  		});
		  	});

  		},

  		'IA' : function (event,data){
  			$('#where').html('<p>Iowa</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.iowa'
		  		});
		  	});

  		},

  		'IN' : function (event,data){
  			$('#where').html('<p>Indiana</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.indiana'
		  		});
		  	});

  		},

  		'VA' : function (event,data){
  			$('#where').html('<p>Virginia</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.virginia'
		  		});
		  	});

  		},

  		'ME' : function (event,data){
  			$('#where').html('<p>Maine</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.maine'
		  		});
		  	});

  		},

  		'NC' : function (event,data){
  			$('#where').html('<p>North Carolina</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.north-carolina'
		  		});
		  	});

  		},

  		'NH' : function (event,data){
  			$('#where').html('<p>New Hampshire</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.new-hampshire'
		  		});
		  	});

  		},

  		'IL' : function (event,data){
  			$('#where').html('<p>Illinois</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.illinois'
		  		});
		  	});

  		},

  		'RI' : function (event,data){
  			$('#where').html('<p>Rhode Island</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.rhode-island'
		  		});
		  	});

  		},

  		'CT' : function (event,data){
  			$('#where').html('<p>Connecticut</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.connecticut'
		  		});
		  	});

  		},

  		'PA' : function (event,data){
  			$('#where').html('<p>Pennsylvania</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.pennsylvania'
		  		});
		  	});

  		},

  		'MA' : function (event,data){
  			$('#where').html('<p>Massachusetts</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.massachusetts'
		  		});
		  	});

  		},

  		'NJ' : function (event,data){
  			$('#where').html('<p>New Jersey</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.new-jersey'
		  		});
		  	});

  		},

  		'CA': function (event,data){
  			$('#where').html('<p>California</p>');

  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.california'
		  		});
		  	});
  		},

  		'CO' : function (event,data){
  			$('#where').html('<p>Colorado</p>');
  			$(function(){
		  		var $container = $('#container');
			

		 		$container.isotope({
					filter : '.college.colorado'
		  		});
		  	});
  		},

  	},

	});
});

$(function(){
	$('#where').html('<p style="font-size:.5em;">All Universities and Colleges <span style="font-size:.4em; font-weight: 400;">Source: Forbes, StateUniversity.com</span></p>');
	$('body').click(function () {
		$('#where').html('<p style="font-size:.5em;"> All Universities and Colleges <span style="font-size:.4em; font-weight: 400;">Source: Forbes, StateUniversity.com</span></p>');
		var $container = $('#container');
			

		 		$container.isotope({
					filter : '*'
		  		});
	});
});