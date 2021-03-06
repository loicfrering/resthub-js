define(['lib/controller'], function(Controller) {
	return Controller.extend("Widget1Controller", {
			
		destroy: function() {
			console.debug('Controller removed');
			CONTROLLER_TEST_REMOVED = true;
			this._super();
		},
		
		eventHandler: function() {
			CONTROLLER_TEST_EVENT_TRIGGERED = true;
		},
		
		init: function() {
			this.template = 'widget1.html';
			this.render({user:{login:'hsimpson', username:'Homer Simpson'}});
			this.subscribe('myEvent', 'eventHandler');
		}
	});
});
