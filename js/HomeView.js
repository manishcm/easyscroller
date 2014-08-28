define(['jquery', 'underscore', 'backbone', 'easyScroller'], function($, _, Backbone, EasyScroller) {
	var HomeView = Backbone.View.extend({
		template: _.template("<div data-i18n='view.name'></div>"),
		render: function() {
			this.$el.html(this.template);
			console.log(window.Scroller);
			new EasyScroller(this.el, {scrollingX: false, scrollingY: true});
		}
	});

	return HomeView;
});

