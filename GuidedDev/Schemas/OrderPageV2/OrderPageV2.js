define("OrderPageV2", [], function() {
	return {
		entitySchemaName: "Order",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "remove",
				"name": "Client",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "insert",
				"name": "STRINGee22f24a-9be8-4c6b-a97a-6839a31e3304",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "OrderProductTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "OrderPassportTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "OrderDeliveryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "OrderResultsTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "OrderHistoryTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "OrderVisaTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "OrderGeneralInformationTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "FileNotesTab",
				"values": {
					"order": 7
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
