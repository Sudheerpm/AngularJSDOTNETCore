exports = async function (ticket_root_entityId, patchBody,projection, c4c_claimtype_rule_name) {
    //----- Start Rule Engibe Evaluate the Market Type from the received collected -------- // 
    const { Engine } = require('json-rules-engine')  
    console.log("request", JSON.stringify(request));
    if (!request) {
      throw new Error(`Request data not available`);
    }
    // ----- C4C calls for some extra information Start -------- //
    const subscription_key = context.values.get("c4c_itset_prediction_values").subscription_key;
    console.log("subscription_key ===>" + subscription_key);
    const headers = {
        "Ocp-Apim-Subscription-Key": [subscription_key],
        "Accept": ["Application/json"]
    };
    // Need to explore how we can utilize select query // otherwise we can use axios
    Response = await context.http.get({
        scheme: "https",
        host: context.values.get("c4c_itset_prediction_values").proxy_host,
        path: context.values.get("c4c_itset_prediction_values").proxy_path,
        query: {
            "ObjectID": [`${ticket_root_entityIdIn}`],
            "$expand": [context.values.get("c4c_itset_prediction_values").get_fn_guery_param]
        },
        headers: headers
    });
    console.log(Response.body.text());
    const c4cResponse = EJSON.parse(Response.body.text());
    console.log("c4cResponse.d", c4cResponse.d);
    console.log("Response.body", typeof Response.body);
    console.log("Response from C4C get fn ==> " + JSON.stringify(c4cResponse));
    c4cResponse.d.results[0]
    // Fetching Rule from Mongo Collection -----  
    console.log("Rulecollection instantiation");
    const ruleCollection = await context.services
    .get("mongodb-atlas")
    .db(context.values.get("c4c_itset_prediction_values").db_name)
    .collection(context.values.get("c4c_itset_prediction_values").rules_collection_name);
    console.log("query formation");  
       
    let data = await ruleCollection.findOne(query, projection)
          .then(response => {
            data = response;
            delete data._id;
            console.log("ruleCollection ==> " + JSON.stringify(data));
            return data;
          });
      
        const processEngine = (inputs, decisions) => {
          // Pass the decisions into Engine constructor
          console.log("processEngine ==> " + JSON.stringify(decisions));
          const engineEmp = new Engine(decisions);
          console.log("inputs ==> " + JSON.stringify(inputs));
          // Pass the inputs here
          return engineEmp.run(inputs)
            .then(results => {
              console.log("engineEmp.run ==> " + JSON.stringify(results));
              setValue(JSON.stringify(results.events));
              return results.events;
            })
        };
      
        // Creating input parameter
        let inputData = {};
        if (data && data.attributes && data.attributes.length > 0) {
          data.attributes.map((element) => {
            if (element.name === 'CountryText') {
              const ServiceRequestUsedAddress = request['ServiceRequestUsedAddress'];
              console.log("ServiceRequestUsedAddress", JSON.stringify(ServiceRequestUsedAddress));
              inputData[element.name] = ServiceRequestUsedAddress[element.name] ? ServiceRequestUsedAddress[element.name] : '';
            } else {
              inputData[element.name] = request[element.name] ? request[element.name] : '';
            }
            console.log("inputData", element.name, request[element.name]);
          });
        }
        console.log("inputData", JSON.stringify(inputData));
        //const inputs = { "Country/Region": `${request.CountryText}`, "Resolution Code": `${request.ResolutionCode_KUTText}`, "Claim Status (SP)": `${request.LX_TKT_CLMSTS_KUT}`, "Service Category ID": `${request.ServiceIssueCategoryID}`, "Status": `${request.ServiceRequestUserLifeCycleStatusCodeText}`, "Approval Status": `${request.ApprovalStatusCodeText}`, "Resolution Category ID": `${request.ActivityServiceIssueCategoryID}` };
        // Pass the decisions property from employeesalary rule object
        await Promise.all([
          processEngine(inputData, data.decisions)
        ])
        function setValue(output) {
          response = output;
          console.log('response is: ' + response);
        }
         response
         context.http.patch({
            url: context.values.get("c4c_itset_prediction_values").proxy_url + "('" + ticket_root_entityIdIn + "')",
            body: JSON.stringify({ "ServiceRequestUserLifeCycleStatusCode": "Z6" }),
            headers: {
                'Ocp-Apim-Subscription-Key': [context.values.get("c4c_itset_prediction_values").subscription_key],
                'Content-Type': ['application/json'],
                'Authorization': [context.values.get("c4c_itset_prediction_values").authorization_key]
            }
        })
            .then((response) => {
                console.log("patch api response", JSON.stringify(response));
                patchResponse.status = "204";
                patchResponse.body = "C4C It status updated successfully";
            })
            .catch(function (error) {
                console.log(error);
                patchResponse.status = "500";
                patchResponse.body = "C4C It status not updated";
            });
    
        //----- Update the Service Request User Life Cycle Status Code to the C4C collection Ends -------- //
    
        return patchResponse;

      
