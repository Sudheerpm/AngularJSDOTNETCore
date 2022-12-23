exports = async function(ticket_root_entityIdIn) {

    // ----- C4C calls for some extra information Start -------- //

    //const subscription_key = context.values.get("apim-c4c-proxy-key");
    const subscription_key = '70efce3ea7b2405c89f888479b3a3700';
    console.log("subscription_key ===>" + subscription_key);

    const headers = {
        "Ocp-Apim-Subscription-Key": [subscription_key],
        "Accept": ["Application/json"]
    };

	// Need to explore how we can utilize select query // otherwise we can use axios
    Response = await context.http.get({
      scheme: "https",
      host: "api-staging.eluxmkt.com",
      path: "/external/sap-integration/test/c4c-r2d2/cust/v1/srvtkt/ServiceRequestCollection",
      query: {
          "$select": ["LX_TKT_SCEN_KUT,ServiceExecutionTeamPartyID,ActivityServiceIssueCategoryID,ID,Name"],
          "ObjectID": [`${ticket_root_entityIdIn}`]
      },
        headers: headers

    });

    const c4cResponse = EJSON.parse(Response.body.text());
    console.log("Response from C4C ID", JSON.stringify(c4cResponse.d.results[0].ID))
    console.log("Response from C4C ID", JSON.stringify(c4cResponse.d.results[0].Name))
    // console.log("Response from C4C ==> " + JSON.stringify(c4cResponse));
    console.log("Response from C4C ServiceExecutionTeamPartyID,ActivityServiceIssueCategoryID,LX_TKT_SCEN_KUT ==> ",JSON.stringify(c4cResponse.d.results[0].ServiceExecutionTeamPartyID),JSON.stringify(c4cResponse.d.results[0].ActivityServiceIssueCategoryID),JSON.stringify(c4cResponse.d.results[0].LX_TKT_SCEN_KUT));
   
    const ServiceExecutionTeamPartyIDIn = c4cResponse.d.results[0].ServiceExecutionTeamPartyID;
    const ActivityServiceIssueCategoryIDIn = c4cResponse.d.results[0].ActivityServiceIssueCategoryID;
    const LX_TKT_SCEN_KUT = c4cResponse.d.results[0].LX_TKT_SCEN_KUT;

    return [ServiceExecutionTeamPartyIDIn, ActivityServiceIssueCategoryIDIn, LX_TKT_SCEN_KUT];
};