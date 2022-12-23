exports = async function (request, response) {
    try {

        // 1. Parse data from the incoming request
      if (request.body === undefined) {
            throw new Error(`Request body was not defined.`)
        }
        
        const body = JSON.parse(request.body.text());
        console.log('body===========',body)
        console.log('body.data======', JSON.stringify(body.data))
        //Get ticket_root_entityId from request to fetch corresponding collection.
        const ticket_root_entityIdIn = body.data['root-entity-id'];
        console.log('ticket_root_entityIdIn==',ticket_root_entityIdIn)
        // const ticket_root_entityIdIn = '00163E6BEB421EDA90EDC5B9F2D00FF0';

         console.log('calling c4c_isp_get_fn starts============>');
         
        const c4cResult ='';
        const [ServiceExecutionTeamPartyIDIn, ActivityServiceIssueCategoryIDIn, LX_TKT_ISPTYPIn] = await context.functions.execute("c4c_isp_get_fn", ticket_root_entityIdIn);
        
        console.log('calling c4c ends ServiceExecutionTeamPartyIDIn ==============>' + ServiceExecutionTeamPartyIDIn);
        console.log('calling c4c ends ActivityServiceIssueCategoryIDIn ==============>' + ActivityServiceIssueCategoryIDIn);
        console.log('calling c4c ends LX_TKT_ISPTYPIn ==============>' + LX_TKT_ISPTYPIn);
        console.log('calling execute_rule_fn starts============>');
        const ispRuleResult ='';
        const ispRuleResponse = await context.functions.execute("execute_rule_fn", ServiceExecutionTeamPartyIDIn, ActivityServiceIssueCategoryIDIn, LX_TKT_ISPTYPIn, ispRuleResult);
        console.log('calling rule engine ends ==============>' + JSON.parse(ispRuleResponse).length );
        if(JSON.parse(ispRuleResponse).length == 0){
            return 'C4C marketType Not Updated '
        } else{
            var finalRuleResponse = JSON.stringify(JSON.parse(ispRuleResponse.slice(1, -1)).params.LXT_TKT_ISPTYP);
            console.log('finalResponse for C4C patch-->' + finalRuleResponse);
         
            console.log('calling c4c_isp_patch_fn starts============>');
            let resp;
            const c4cPatchResponse = await context.functions.execute("c4c_isp_patch_fn", finalRuleResponse, ticket_root_entityIdIn, resp);
             
            console.log('c4cPatchResponse ==>' + JSON.stringify(c4cPatchResponse));
         
            return c4cPatchResponse;
         
        }
       
      }
    catch (error) {
        console.log('error is', error)
    }
}