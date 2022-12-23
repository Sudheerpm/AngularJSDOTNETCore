{

	"name": "c4c_poc5_rules",
	"attributes": [{
			"name": "LX_TCK_CF_KUT",
			"type": "string"
		},
		{
			"name": "ProductID",
			"type": "number"
		},
		{
			"name": "LX_TCK_LQ_KUT",
			"type": "string"
		}
	],
	"decisions": [{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000000"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		}, {
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000005"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000010"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000015"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		}, {
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "equal",
					"value": "9901000020"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000025"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000030"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000035"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000040"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000045"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000050"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000055"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000060"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000065"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000070"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000075"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000080"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000085"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000090"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000095"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000100"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000105"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000110"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000115"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000120"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000125"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000130"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000135"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000140"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000145"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000150"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		},
		{
			"conditions": {
				"all": [{
					"fact": "LX_TCK_CF_KUT",
					"operator": "equal",
					"value": "TRUE"
				}, {
					"fact": "ProductID",
					"operator": "notEqual",
					"value": "9901000155"
				}, {
					"fact": "LX_TCK_LQ_KUT",
					"operator": "notEqual",
					"value": "FALSE"
				}]
			},
			"event": {
				"type": "LX_TCK_LQ_KUT",
				"params": {
					"status": "FALSE"
				}
			}
		}

	],
	"config": {
		"isInnerObjectRequired": true,
		"field": {
			"name": "LX_TCK_LQ_KUT",
			"value": "FALSE"
		},
		"innerObject": {
			"name": "CountryCode",
			"value": "ServiceRequestUsedAddress"
		}
	}
}