exports = async function (request, response) {
    try {
      // 1. Parse data from the incoming request
      if (request.body === undefined) {
            throw new Error(`Request body was not defined.`)
        }
        const body = JSON.parse(request.body.text());
       
        //Get ticket_root_entityId from request to fetch corresponding collection.
          const ticket_root_entityIdIn = body.data['root-entity-id'];
        // const ticket_root_entityIdIn = '00163EAB6A1F1EDBB1F096AC2C75F0DD';
        // console.log(bodyN.data.Changes[0])
        const old_Market_type = ((body.Changes && body.Changes[0].ChangedFields[0].Fieldname )) ? (body.Changes[0].ChangedFields[0].New) : '';
         
        if (old_Market_type != 102 || old_Market_type != '102'){
          console.log('calling c4c_isp2_get_fn starts============>');
          const c4cResult ='';
          const [ServiceExecutionTeamPartyIDIn, ActivityServiceIssueCategoryIDIn,LX_TKT_SCEN_KUT] = await context.functions.execute("c4c_isp2_isp4_get_fn", ticket_root_entityIdIn);
          console.log(ServiceExecutionTeamPartyIDIn, ActivityServiceIssueCategoryIDIn,LX_TKT_SCEN_KUT)
          if (LX_TKT_SCEN_KUT != 102){
            console.log('calling execute_rule_fn starts============>');
            const ispRuleResult ='';
            let ispRuleResponse = await context.functions.execute("execute_rule_function_isp2_isp4", ServiceExecutionTeamPartyIDIn, ActivityServiceIssueCategoryIDIn, LX_TKT_SCEN_KUT, ispRuleResult);
            console.log('calling rule engine ends ==============>' + JSON.parse(ispRuleResponse).length );
        if(JSON.parse(ispRuleResponse).length == 0){
            return 'C4C Claims Type Field is not updated, Please check with Admin '
        } else{
            let finalRuleResponse = JSON.stringify(JSON.parse(ispRuleResponse.slice(1, -1)).params.LX_TKT_SCEN_KUT);
            console.log('finalResponse for C4C patch-->' + finalRuleResponse);
            console.log('calling c4c_isp2_patch_fn starts============>');
            let resp;
            let c4cPatchResponse = await context.functions.execute("c4c_isp2_isp4_patch", finalRuleResponse, ticket_root_entityIdIn, resp);
            console.log('c4cPatchResponse ==>' + JSON.stringify(c4cPatchResponse));
            
            return c4cPatchResponse;
        }
          }else{
             return 'C4C Claims Type Field is not updated, Please check with Admin'
          }
        }else{
          return 'C4C Claims Type Field is not updated, Please check with Admin'
        }
      }
    catch (error) {
        console.log('error is', error)
    }
}