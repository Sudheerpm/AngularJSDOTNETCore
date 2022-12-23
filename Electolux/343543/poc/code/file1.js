exports = async function (ServiceExecutionTeamPartyIDIn,ActivityServiceIssueCategoryIDIn,LX_TKT_ISPTYPIn, response) {

    //----- Start Rule Engibe Evaluate the Market Type from the received collected -------- // 
    const { Engine } = require('json-rules-engine')
    let engine = new Engine()
    const wildcard = require('wildcard')

    console.log("ServiceExecutionTeamPartyID = " + ServiceExecutionTeamPartyIDIn);
    console.log("ActivityServiceIssueCategoryID = " + ActivityServiceIssueCategoryIDIn);
    console.log("LX_TKT_ISPTYPIn",LX_TKT_ISPTYPIn)
    if (ActivityServiceIssueCategoryIDIn == ''){
      ActivityServiceIssueCategoryIDIn = 'null'
    }
    if (LX_TKT_ISPTYPIn == ''){
      LX_TKT_ISPTYPIn = 'null'
    }
    // Fetching Rule from Mongo Collection -----

    const ruleCollection = await context.services
        .get("mongodb-atlas")
        .db("c4c")
        .collection("RuleCollectionExtOne");

    const query = {
        "name": "update_isp_to_isp2"
    };
    const projection = {
        "name": "update_isp_to_isp2",
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

    console.log(JSON.stringify(data))

    const processEngine = (inputs, decisions) => {

        // Pass the decisions into Engine constructor
        const engineEmp = new Engine(decisions);

        //custom operator

        engineEmp.addOperator('starts', (factValue, jsonValue) => {

            var a = jsonValue;
            a = a.replace(/'/g, '"');
            let jsonValueArray = JSON.parse(a);

            if (!factValue.length) return false


            for (let i = 0; i < jsonValueArray.length; i++) {

                let check = wildcard(jsonValueArray[i], factValue)

                if (jsonValueArray[i] == factValue || check != false) {

                    return true;
                }
            }
        })

        // Pass the inputs here

        return engineEmp.run(inputs)
            .then(results => {
                console.log('result ==>' + JSON.stringify(results.events));
                setValue(JSON.stringify(results.events));
                return results.events;
            })
    };


    // Creating input parameter
    // const inputs = { ServiceExecutionTeamPartyID: 'NOXISPjhgjm', ActivityServiceIssueCategoryID: '' };
    const inputs = { ServiceExecutionTeamPartyID: `${ServiceExecutionTeamPartyIDIn}`, ActivityServiceIssueCategoryID: `${ActivityServiceIssueCategoryIDIn}`, Market_Type: `${LX_TKT_ISPTYPIn}` };

    // Pass the decisions property from employeesalary rule object
    await Promise.all([
        processEngine(inputs, data.decisions)
    ])

    function setValue(output) {
        console.log("output", output)
        response = output;
        console.log('response is: ' + response);
    }

    return response;
}