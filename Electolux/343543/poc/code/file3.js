exports = async function(claims_type, ticket_root_entityIdIn, patchResponse = {}) {

	//----- Update the Market Type to the C4C collection Starts -------- //
	let res;
	const headers = {
		'Ocp-Apim-Subscription-Key': '70efce3ea7b2405c89f888479b3a3700',
		'Content-Type': 'application/json'
	}

	const axios = require('axios');
	let patchBody = '{"LX_TKT_SCEN_KUT":' + `${claims_type}` + '}'

	//ticket_root_entityIdIn='00163EAB6A1F1EDC98AF7657E4D9BF21'
	const patchUrl = "https://api-staging.eluxmkt.com/external/sap-integration/test/c4c-r2d2/cust/v1/srvtkt/ServiceRequestCollection('" + ticket_root_entityIdIn + "')";

	const config = {
		method: 'patch',
		url: patchUrl,
		headers: {
			'Ocp-Apim-Subscription-Key': '70efce3ea7b2405c89f888479b3a3700',
			'Content-Type': 'application/json'
		},
		data: patchBody
	};

	axios(config)
		.then(function(response) {
			patchResponse.status = "204";
			patchResponse.body = "C4C claims type Updated successfully";
		})
		.catch(function(error) {
			console.log(error);
			patchResponse.status = "500";
			patchResponse.body = "C4C claims type Not Updated";
		});
	//----- Update the Market Type to the C4C collection Ends -------- //

	return patchResponse;

};