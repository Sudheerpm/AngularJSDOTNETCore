exports = async function (ServiceExecutionTeamPartyIDIn,ActivityServiceIssueCategoryIDIn,LX_TKT_SCEN_KUT, response) {

    //----- Start Rule Engibe Evaluate the Market Type from the received collected -------- // 
    const { Engine } = require('json-rules-engine')
    let engine = new Engine()
    const wildcard = require('wildcard')
    
    console.log("ServiceExecutionTeamPartyID ,ActivityServiceIssueCategoryID,LX_TKT_SCEN_KUT ", ServiceExecutionTeamPartyIDIn,ActivityServiceIssueCategoryIDIn,LX_TKT_SCEN_KUT);
   
    if (ActivityServiceIssueCategoryIDIn == ''){
      ActivityServiceIssueCategoryIDIn = 'null'
    }
    if (LX_TKT_SCEN_KUT == ''){
      LX_TKT_SCEN_KUT = 'null'
    }
    // Fetching Rule from Mongo Collection -----

    const ruleCollection = await context.services
        .get("mongodb-atlas")
        .db("c4c")
        .collection("RuleCollectionExtOne");

    const query = {
      "name": "isp2_isp4_update"
    };
    const projection = {
      "name": "isp2_isp4_update",
      "attributes": 1,
      "decisions": 1
    };

    let data = await ruleCollection.findOne(query, projection)
        .then(response => {
            data = response;
            delete data._id;
            //delete data['name'];
            return data;
        })

    const processEngine = (inputs, decisions) => {
        // Pass the decisions into Engine constructor
        const engineEmp = new Engine(decisions);
        //custom operator
        engineEmp.addOperator('starts', (factValue, jsonValue) => {
            let a = jsonValue;
            a = a.replace(/'/g, '"');
            let jsonValueArray = JSON.parse(a);
            if (!factValue.length) return false
            
            for (let i = 0; i < jsonValueArray.length; i++) {
              let check = wildcard(jsonValueArray[i], factValue)
              if (jsonValueArray[i] == factValue || check != false) 
              {
                return true;
              }
            }
        })

        // Pass the inputs here
        return engineEmp.run(inputs)
            .then(results => {
                setValue(JSON.stringify(results.events));
                return results.events;
            })
    };

    // Creating input parameter
    const inputs = { ServiceExecutionTeamPartyID: `${ServiceExecutionTeamPartyIDIn}`, ActivityServiceIssueCategoryID: `${ActivityServiceIssueCategoryIDIn}`, Claims_Type: `${LX_TKT_SCEN_KUT}` };
    // Pass the decisions property from employeesalary rule object
    await Promise.all([
        processEngine(inputs, data.decisions)
    ])
    function setValue(output) {
        response = output;
        console.log('response is: ' + response);
    }
    return response;
}