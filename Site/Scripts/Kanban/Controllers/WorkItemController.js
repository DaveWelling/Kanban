'use strict';

kanbanApp.controller('WorkItemController', function WorkItemController($scope) {
	$scope.workitem = {
		title: 'Create kanban app',
		SLA: 'blue',
		assignee: 'david.welling',
		id: 1
	};
});