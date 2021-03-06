/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Team:{
		member:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		members:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Project:{
		cloudDeploymentStatus:{
			streamID:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sources:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Role: "enum",
	SetCloudDeploymentConfigInput:{
		secrets:{
			type:"Secret",
			array:true,
			arrayRequired:false,
			required:true
		},
		cors:{
			type:"SetCloudDeploymentConfigCorsInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateProject:{
		project:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		public:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AccountType: "enum",
	DeployCodeToCloudURIKind: "enum",
	Query:{
		checkoutData:{
			data:{
				type:"CheckoutDataInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		fileServerCredentials:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		findProjects:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			query:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		findProjectsByTag:{
			tag:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getNamespace:{
			slug:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getProject:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getTeam:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		getUser:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		listProjects:{
			sort:{
				type:"ProjectsSortInput",
				array:true,
				arrayRequired:false,
				required:false
			},
			owned:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		myTeams:{
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		predictCheckout:{
			data:{
				type:"PredictCheckoutInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	PaymentDate: "String",
	DeployCodeToCloudEnv: "enum",
	MemberOps:{
		update:{
			role:{
				type:"Role",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Secret:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		value:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FileServerCredentials: "String",
	VatInput:{
		number:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		companyName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		street:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		city:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		state:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		country:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		postCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Decimal: "String",
	CloudDeploymentStatus: "enum",
	Namespace:{
		project:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		projects:{
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	CheckoutDataInput:{
		coupon:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		successURL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		cancelURL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		planID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		quantity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		customer:{
			type:"CustomerInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		vat:{
			type:"VatInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PredictCheckoutInput:{
		planID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		quantity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		coupon:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	RFC3339Date: "String",
	DeployCodeToCloudInput:{
		env:{
			type:"DeployCodeToCloudEnv",
			array:false,
			arrayRequired:false,
			required:false
		},
		secrets:{
			type:"Secret",
			array:true,
			arrayRequired:false,
			required:true
		},
		node14Opts:{
			type:"DeployCodeToCloudNode14Opts",
			array:false,
			arrayRequired:false,
			required:false
		},
		codeURI:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		kind:{
			type:"DeployCodeToCloudURIKind",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ProjectOps:{
		deployCodeToCloud:{
			input:{
				type:"DeployCodeToCloudInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeSources:{
			files:{
				type:"String",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		renameSources:{
			files:{
				type:"RenameFileInput",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		setCloudDeploymentConfig:{
			input:{
				type:"SetCloudDeploymentConfigInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		update:{
			in:{
				type:"UpdateProject",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	SortOrder: "enum",
	TeamOps:{
		addMember:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			role:{
				type:"Role",
				array:false,
				arrayRequired:false,
				required:true
			},
			loginCallback:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createProject:{
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		member:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		members:{
			last:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		project:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	ChangeSubscriptionInput:{
		subscriptionPlanID:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		subscriptionID:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	SchemaSubscription:{
		watchJobStatus:{
			streamID:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		watchLogs:{
			streamID:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	RenameFileInput:{
		src:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		dst:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CustomerInput:{
		postCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		marketingConsent:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		country:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DeployCodeToCloudNode14Opts:{
		buildScript:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ProjectsSortInput:{
		slug:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		tags:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		team:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		},
		public:{
			type:"SortOrder",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	NewSource:{
		contentType:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		checksum:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		filename:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		contentLength:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Mutation:{
		changePassword:{
			oldPassword:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			newPassword:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		changeSubscription:{
			in:{
				type:"ChangeSubscriptionInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createCloudDeployment:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createProject:{
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createTeam:{
			namespace:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createUser:{
			namespace:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			public:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deployCodeToCloud:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			opts:{
				type:"DeployCodeToCloudInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deployToFaker:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeProject:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		runtimeLogs:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		setCloudDeploymentConfig:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"SetCloudDeploymentConfigInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		sync:{
			source:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			target:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		team:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateProject:{
			in:{
				type:"UpdateProject",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateSources:{
			project:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			sources:{
				type:"NewSource",
				array:true,
				arrayRequired:false,
				required:true
			}
		}
	},
	SetCloudDeploymentConfigCorsInput:{
		allowedMethods:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		allowCredentials:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		allowedOrigins:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		allowedHeaders:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Team:{
		id:"ID",
		member:"Member",
		members:"MemberConnection",
		name:"String",
		namespace:"Namespace",
		planID:"Int"
	},
	Project:{
		cloudDeploymentConfig:"CloudDeploymentConfig",
		cloudDeploymentStatus:"CloudDeploymentStatus",
		createdAt:"RFC3339Date",
		description:"String",
		enabled:"Boolean",
		endpoint:"Endpoint",
		id:"ID",
		inCloud:"Boolean",
		mocked:"Boolean",
		name:"String",
		owner:"User",
		public:"Boolean",
		slug:"String",
		sources:"FakerSourceConnection",
		tags:"String",
		team:"Team"
	},
	PredictCheckout:{
		price:"Float",
		trialDays:"Int"
	},
	SecretOutput:{
		name:"String",
		value:"String"
	},
	User:{
		accountType:"AccountType",
		id:"ID",
		namespace:"Namespace",
		subscriptions:"SubscriptionConnection",
		username:"String"
	},
	Query:{
		checkoutData:"String",
		emailVerified:"Boolean",
		fileServerCredentials:"FileServerCredentials",
		findProjects:"ProjectConnection",
		findProjectsByTag:"ProjectConnection",
		getNamespace:"Namespace",
		getProject:"Project",
		getTeam:"Team",
		getUser:"User",
		listProjects:"ProjectConnection",
		myTeams:"TeamConnection",
		payments:"Payment",
		predictCheckout:"PredictCheckout"
	},
	Member:{
		email:"String",
		role:"Role",
		username:"String"
	},
	MemberOps:{
		delete:"Boolean",
		update:"Boolean"
	},
	FakerSourceConnection:{
		pageInfo:"PageInfo",
		sources:"FakerSource"
	},
	Payment:{
		amount:"Decimal",
		currency:"String",
		date:"PaymentDate",
		receiptURL:"String",
		subscriptionID:"Int"
	},
	CloudCorsSetting:{
		allowCredentials:"Boolean",
		allowedHeaders:"String",
		allowedMethod:"String",
		allowedOrigins:"String"
	},
	Namespace:{
		project:"Project",
		projects:"ProjectConnection",
		public:"Boolean",
		slug:"String"
	},
	SourceUploadInfo:{
		filename:"String",
		headers:"Header",
		putUrl:"String"
	},
	SubscriptionConnection:{
		pageInfo:"PageInfo",
		subscriptions:"Subscription"
	},
	PageInfo:{
		last:"String",
		limit:"Int",
		next:"Boolean"
	},
	TeamConnection:{
		pageInfo:"PageInfo",
		teams:"Team"
	},
	ProjectConnection:{
		pageInfo:"PageInfo",
		projects:"Project"
	},
	MemberConnection:{
		members:"Member",
		pageInfo:"PageInfo"
	},
	ProjectOps:{
		createCloudDeployment:"String",
		delete:"Boolean",
		deployCodeToCloud:"String",
		deployToFaker:"Boolean",
		removeSources:"Boolean",
		renameSources:"Boolean",
		runtimeLogs:"String",
		setCloudDeploymentConfig:"Boolean",
		update:"Boolean"
	},
	Subscription:{
		cancelURL:"String",
		expiration:"String",
		quantity:"Int",
		seats:"UserConnection",
		status:"String",
		subscriptionID:"Int",
		subscriptionPlanID:"Int",
		updateURL:"String"
	},
	TeamOps:{
		addMember:"Member",
		createProject:"Project",
		delete:"Boolean",
		id:"ID",
		member:"MemberOps",
		members:"MemberConnection",
		name:"String",
		namespace:"Namespace",
		planID:"Int",
		project:"ProjectOps"
	},
	SchemaSubscription:{
		watchJobStatus:"CloudDeploymentStatus",
		watchLogs:"String"
	},
	FakerSource:{
		checksum:"String",
		contents:"String",
		filename:"String",
		getUrl:"String"
	},
	CloudDeploymentConfig:{
		cors:"CloudCorsSetting",
		secrets:"SecretOutput"
	},
	UserConnection:{
		pageInfo:"PageInfo",
		users:"User"
	},
	Header:{
		key:"String",
		value:"String"
	},
	Endpoint:{
		uri:"String"
	},
	Mutation:{
		changePassword:"Boolean",
		changeSubscription:"Boolean",
		createCloudDeployment:"String",
		createProject:"Project",
		createTeam:"TeamOps",
		createUser:"User",
		deleteAccount:"Boolean",
		deployCodeToCloud:"String",
		deployToFaker:"Boolean",
		removeProject:"Boolean",
		resendVerificationEmail:"Boolean",
		runtimeLogs:"String",
		setCloudDeploymentConfig:"Boolean",
		sync:"Boolean",
		team:"TeamOps",
		updateProject:"Boolean",
		updateSources:"SourceUploadInfo"
	}
}