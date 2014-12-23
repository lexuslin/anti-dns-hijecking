

$(function(){
	var config = {
		selector : ':not([anti-hijecking])', // selector for invalid dom
		server : 'http://mstats.vip.com/stats/dns_activity_360' // http://domain/dns/activity_name
	}
	new AntiHijecking(config);
});

