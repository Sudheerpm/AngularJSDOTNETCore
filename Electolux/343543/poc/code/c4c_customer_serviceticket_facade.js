exports = async function (request, response) {
    try {
            if (request.body === undefined) {
                throw new Error(`Request body was not defined.`)
            }
      const c4c_claimtype_rule_name = "update_isp_to_isp2";
      const c4c_itstatus_rule_name = "c4c_poc3_rules";
      const c4c_market_type_rule_name = "isp2_isp4_update";
      const c4cPatchResponse ='';
      //Get ticket_root_entityId from request to fetch corresponding collection.
      const ticket_root_entityIdIn = body.data['root-entity-id'];
      const patchBody = '';
      
      switch (request.params["rule_name"]) {
        case c4c_claimtype_rule_name: {
             let claims_type = "";
             let projection = {"name": c4c_claimtype_rule_name, "attributes": 1, "decisions": 1 };   
             patchBody = '{"LX_TKT_SCEN_KUT":' + `${claims_type}` + '}';
             c4cPatchResponse = await context.functions.execute("c4c_customer_serviceticket_facts", 
             ticket_root_entityIdIn, patchBody, projection,c4c_claimtype_rule_name );
             console.log('c4cPatchResponse ==>' + JSON.stringify(c4cPatchResponse));
        }
        case c4c_itstatus_rule_name: {
             patchBody = '{ "ServiceRequestUserLifeCycleStatusCode": "Z6" }';
             let projection = {"name": c4c_itstatus_rule_name, "attributes": 1, "decisions": 1 };
             c4cPatchResponse = await context.functions.execute("c4c_customer_serviceticket_facts", 
             ticket_root_entityIdIn, patchBody,projection, c4c_claimtype_rule_name);
             console.log('c4cPatchResponse ==>' + JSON.stringify(c4cPatchResponse));
        }
        case c4c_market_type_rule_name: {
             let marketType = "102";
             patchBody = '{"LX_TKT_ISPTYP":'+`${marketType}` +'}';
             let projection = {"name": c4c_market_type_rule_name, "attributes": 1, "decisions": 1 };
             c4cPatchResponse = await context.functions.execute("c4c_customer_serviceticket_facts", 
             ticket_root_entityIdIn, patchBody,projection,c4c_claimtype_rule_name);
             console.log('c4cPatchResponse ==>' + JSON.stringify(c4cPatchResponse));
        }
        default: {
            console.log('Unknown incoming rule', error)
        }
      }
    }
    catch (error) {
        console.log('error is', error)
    }




      const old_Service_RequestUser_LifeCycle_StatusCode = ((body.Changes && body.Changes[0].ChangedFields[0].Fieldname)) ? (body.Changes[0].ChangedFields[0].New) : '';
  
      if (old_Service_RequestUser_LifeCycle_StatusCode != "Z6" || old_Service_RequestUser_LifeCycle_StatusCode != 'Z6') {
        console.log('calling c4c_isp2_get_fn starts============>');
        const c4cResult = '';
        const getFnResponse = await context.functions.execute("c4c_itsetstatus_get", ticket_root_entityIdIn);
        console.log("getFnResponse", getFnResponse);
        if (old_Service_RequestUser_LifeCycle_StatusCode != "Z6") {
          console.log('calling execute_rule_fn starts============>');
          const ispRuleResult = '';
          let ispRuleResponse = await context.functions.execute("c4c_itsetstatus_executerule", getFnResponse, ispRuleResult);
          console.log('calling rule engine ends ==============>' + JSON.parse(ispRuleResponse).length);
          if (JSON.parse(ispRuleResponse).length == 0) {
            return 'C4C Service Request User Life Cycle Status Code is not updated, Please check with Admin '
          } else {
            let finalRuleResponse = JSON.stringify(JSON.parse(ispRuleResponse.slice(1, -1)).params.ServiceRequestUserLifeCycleStatusCodeText);
            console.log('finalResponse for C4C patch-->' + finalRuleResponse);
            console.log('calling c4c_isp2_patch_fn starts============>');
            let resp;
            let c4cPatchResponse = await context.functions.execute("c4c_itsetstatus_patch", ticket_root_entityIdIn, resp);
            console.log('c4cPatchResponse ==>' + JSON.stringify(c4cPatchResponse));
  
            return c4cPatchResponse;
          }
        } else {
          return 'C4C Claims Type Field is not updated, Please check with Admin'
        }
      } else {
        return 'C4C Claims Type Field is not updated, Please check with Admin'
      }
    }
    catch (error) {
      console.log('error is', error)
    }
  }