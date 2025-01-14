/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const treatAddress = "0x5d0915f929FC090fd9c843a53e7e30335dD199bc";
const treatAbi = () => { 
    return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ruler","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ruler_","type":"address"}],"name":"setRuler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
};

const marketAddress = "0x0225960D274966524C4Fafe3804386Df0F6B8742";
const marketAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"GovernorUnstuckOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"admin_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"MarketAdminManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"token_","type":"address"}],"name":"TokenManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"gifted_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingObject","name":"object_","type":"tuple"}],"name":"WLVendingItemGifted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"purchaser_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingObject","name":"object_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"collector_","type":"address"}],"name":"G_setRegistrationCollector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"G_setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver_","type":"address"}],"name":"G_withdrawMESfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"O_setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setPriceController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"superGovernor_","type":"address"}],"name":"O_setSuperGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setTokenController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"PriceController","outputs":[{"internalType":"contract IPriceController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"SG_SetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"SG_SetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"SG_SetStuckOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TokenController","outputs":[{"internalType":"contract ITokenController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToMESRegistry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToMarketAdminsApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenImageOfContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenNameOfContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenOfContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getFixedPriceOfItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLVendingObject","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingObject","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingObjectsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingObject[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"address","name":"giftedAddress_","type":"address"}],"name":"giftPurchaserAsMarketAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"sender_","type":"address"}],"name":"isContractOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageMarketAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"raw_getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"raw_getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationCollector","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superGovernorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://polygonscan.com/tx/`;
const correctChain = 137;
const tokenImgURL = "https://github.com/kevinrufino/dogewood-whitelist-market/blob/main/images/treat-icon.png?raw=true";


if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to browse listings!');
    loadInfuraListings();
}

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// Initiate Contracts
const treat = new ethers.Contract(treatAddress, treatAbi(), signer);
const market = new ethers.Contract(marketAddress, marketAbi(), signer);

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const loadingDiv = `<div id="ex1" class="partner-collection example">
                        <div class="cover">
                            <button class="button loading" onclick="connect()">LOADING<span class="one">.</span><span class="two">.</span><span class="three">.</span></button>
                        </div>
                        <img class="collection-img" src="./images/silhouette.png">
                        <div class="collection-info">
                            <h3>???</h3>
                            <h4>???/??? Purchased
                            <br>
                            ??? <img src="${tokenImgURL}" class="token-icon">
                            <br>
                            <span class="end-time">Ends MM/DD/YYYY HH:MM AM</span>
                            </h4>
                            <div class="inside-text collection-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare neque ut aliquam lobortis. Morbi non tellus dui. Proin pellentesque nisl non augue volutpat, eu convallis nibh pretium.
                            </div>
                            <button class="button">PURCHASE</button>
                        </div>
                    </div>`

// Approval Functions

const approveTokenToMarket = async() => {
    await treat.approve(marketAddress, maxInt).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkTokenApproval = async() => {
    const userAddress = await getAddress();

    if (Number(await treat.allowance(userAddress, marketAddress)) >= maxInt) {
        $("#approval-container").addClass("hidden");
    }
    else {
        $("#approval-container").removeClass("hidden");
    }
};

const updateTokenBalance = async() => {
    const userAddress = await getAddress();
    let balance = Number(formatEther((await treat.balanceOf(userAddress)))).toFixed(1);
    $("#token-balance").html(`${balance}`);
    $("#mobile-balance").html(`${balance}`);
}

const purchase = async(tokenAddress, id) => {
    try {
        if (!discordSet) {
            await displayErrorMessage("Error: Must set Discord ID to associate with purchases!")
            await promptForDiscord();
        }
        else {
            await market.purchaseWLVendingItem(tokenAddress, id).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("Already purchased")) {
            await displayErrorMessage(`Error: You already purchased a slot!`);
        }
        else if ((error.message).includes("Not started yet")) {
            await displayErrorMessage(`Error: Listing not started yet!`);
        }
        else if ((error.message).includes("This WLVendingItem does not exist!")) {
            await displayErrorMessage(`Error: Item does not exist!`);
        }
        else if ((error.message).includes("No more WL remaining")) {
            await displayErrorMessage(`Error: No spots left!`);
        }
        else if ((error.message).includes("Passed deadline")) {
            await displayErrorMessage(`Error: Listing expired!`);
        }
        else if ((error.message).includes("Not enough tokens")) {
            await displayErrorMessage(`Error: Not enough $TREAT!`);
        }
        else if ((error.message).includes("transfer amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market not approved to spend $TREAT!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

const splitArrayToChunks = (array_, chunkSize_) => {
    let _arrays = Array(Math.ceil(array_.length / chunkSize_))
    .fill()
    .map((_, index) => index * chunkSize_)
    .map((begin) => array_.slice(begin, begin + chunkSize_));

    return _arrays;
};

var loadedCollections = false;

const loadCollections = async() => {
    const userAddress = await getAddress();
    const numCollections = Number( await market.getWLVendingItemsLength(treatAddress) );
    let allItems;
    if (numCollections > 0) {
        allItems = await market.getWLVendingObjectsPaginated( treatAddress, 0, numCollections - 1);
    }
    else {
        allItems = [];
    }
    let allItemIds = Array.from(Array(numCollections).keys());
    const chunks = splitArrayToChunks(allItemIds, 5);
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    let idToLiveJSX = new Map();
    let idToPastJSX = new Map();
    for (const chunk of chunks) {
        await Promise.all( chunk.map( async(id) => {
            // WL data from contract
            let WLinfo = allItems[id];
            let collectionPrice = Number(formatEther(WLinfo.price));
            let purchased = await market.contractToWLPurchased(treatAddress, id, userAddress);

            // Data from JSON file
            let maxSlots = WLinfo.amountAvailable;
            let minted = WLinfo.amountPurchased;
            // let valid =  WLinfo.deadline > (Date.now()/1000);
            let started = (Date.now()/1000) > WLinfo.startTime;
            let valid =  WLinfo.endTime > (Date.now()/1000);
            let imageUri = (WLinfo.imageUri).includes("https://") ? WLinfo.imageUri : `https://${WLinfo.imageUri}`;
            let projectUri = (WLinfo.projectUri).includes("https://") ? WLinfo.projectUri : `https://${WLinfo.projectUri}`;

            let dateString = "";
            if (started && valid) {
                dateString = `Ends ${(new Date(WLinfo.endTime*1000)).toLocaleDateString()} ${(new Date(WLinfo.endTime*1000)).toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}`;
            }
            else {
                dateString = `Starts ${(new Date(WLinfo.startTime*1000)).toLocaleDateString()} ${(new Date(WLinfo.startTime*1000)).toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}`;
            }

            if (minted != maxSlots && valid) {
                numLive += 1;
                let button;
                if (purchased) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED</button>`;
                }
                else {
                    button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="purchase('${treatAddress}', ${id})">PURCHASE</button>`;
                }
                let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                <h4><span class="end-time">${dateString}</span></h4>
                                <img class="collection-img" src="${imageUri}">
                                <div class="collection-info">
                                    <h3><a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;">${WLinfo.title}⬈</a></h3>
                                    <h4>${collectionPrice} <img src="${tokenImgURL}" class="token-icon">
                                    <br>
                                    <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased
                                    </h4>
                                    <div class="inside-text collection-description">
                                    ${(WLinfo.description).replaceAll("\n", "<br>")}
                                    </div>
                                </div>
                                ${button}
                                </div>`

                idToLiveJSX.set(id, fakeJSX);
            }
            else {
                numPast +=1;
                let button;
                if (purchased) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED!</button>`;
                }
                else if (!valid) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">EXPIRED</button>`;
                }
                else if (minted == maxSlots) {
                    button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">SOLD OUT</button>`;
                }
                let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                <img class="collection-img" src="${imageUri}">
                                <div class="collection-info">
                                    <h3><a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;">${WLinfo.title}⬈</a></h3>
                                    <h4>${collectionPrice} <img src="${tokenImgURL}" class="token-icon"> <br> <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased</h4>
                                    <div class="inside-text collection-description">
                                    ${(WLinfo.description).replaceAll("\n", "<br>")}
                                    </div>
                                </div>
                                ${button}
                                </div>`

                idToPastJSX.set(id, fakeJSX);
            }
        }));
    }

    let liveIds = Array.from(idToLiveJSX.keys()).map(Number).sort(function(a, b){return b-a});
    let pastIds = Array.from(idToPastJSX.keys()).map(Number).sort(function(a, b){return b-a});
    for (const liveId of liveIds) {
        liveJSX += idToLiveJSX.get(liveId);
    }
    for (const pastId of pastIds) {
        pastJSX += idToPastJSX.get(pastId);
    }

    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(liveJSX);
    $("#past-collections").append(pastJSX);
    $("#num-live").html(`<br>(${numLive})`);
    $("#num-past").html(`<br>(${numPast})`);

    if (numLive > 3 && $("#live-button").hasClass("active")) {
        $("#scroll-indicator").removeClass("hidden");
    }
    else if (numPast > 3 && $("#past-button").hasClass("active")) {
        $("#scroll-indicator").removeClass("hidden");
    }

    if (numLive == 0) {
        $("#live-collections").append("<div id='no-live-msg'><h2>No active listings.<br>Join our discord to see what's next!</h2><br><a href='https://discord.com/invite/zcZEQ5VcjP' target='_blank'><button class='button'>JOIN DISCORD</button></a></div>");
    }

    loadedCollections = true;
}

const updateSupplies = async() => {
    let userAddress = await getAddress();
    let numListings = Number(await market.getWLVendingItemsLength(treatAddress));
    for (let id = 0; id < numListings; id++) {
        let buyers = await market.getWLPurchasersOf(treatAddress, id);
        let WLinfo = await market.contractToWLVendingItems(treatAddress, id);
        let maxSlots = WLinfo.amountAvailable;
        let minted = WLinfo.amountPurchased;
        let purchased = buyers.includes(userAddress);
        if (purchased) {
            $(`#${id}-mint-button`).text("PURCHASED");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        else if (minted == maxSlots ) {
            $(`#${id}-mint-button`).text("SOLD OUT");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        $(`#${id}-supply`).text(minted);
    }
}

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("TreatMarketPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("TreatMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("TreatMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR POLYSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON POLYSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateSupplies();
    }
}

const updateInfo = async () => {
    await checkTokenApproval();
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,7)}..`);
    $("#account").addClass(`connected`);
    $("#mobile-account").text(`${userAddress.substr(0,7)}...`);
};

setInterval( async() => {
    await updateTokenBalance();
    await updateInfo();
    if (loadedCollections) {
        await updateSupplies();
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

window.onload = async() => {
    if (!(await getAddress())) {
        // const connectPrompt = ` <div id="ex1" class="partner-collection example">
        //                             <div class="cover">
        //                                 <button class="button connect" onclick="connect()">CONNECT</button>
        //                             </div>
        //                             <img class="collection-img" src="./images/question.jpeg">
        //                             <div class="collection-info">
        //                                 <h3>???</h3>
        //                                 <h4>???/??? Purchased
        //                                 <br>
        //                                 ??? <img src="${tokenImgURL}" class="token-icon">
        //                                 <br>
        //                                 Ends MM/DD/YYYY
        //                                 </h4>
        //                                <div class="inside-text collection-description">
        //                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit augue, ultrices aliquam ante. Duis sodales eros consequat magna efficitur, non ullamcorper mauris tristique.
        //                                 </div>
        //                                 <button class="button">PURCHASE</button>
        //                             </div>
        //                         </div>`
        // $("#live-collections").empty();
        // $("#past-collections").empty();
        // $("#live-collections").append(connectPrompt);
        // $("#past-collections").append(connectPrompt);
        console.log("using infura")
        await loadInfuraListings();
    }
    else {
        console.log("using wallet")
        await updateInfo();
        let userAddress = await getAddress();
        // if (userAddress == (await treat.ruler()) || await market.contractToControllersApproved(treatAddress, userAddress)) {
        if ((await market.isAuthorized(treatAddress, userAddress))) {    
            $("#workshop").removeClass("hidden");
            $("#workshop-mobile").removeClass("hidden");
        }
        await loadCollections();
        await updateTokenBalance();
    }
    // await updateInfo();
    // await loadCollections();
    // await updateTokenBalance();
};

window.onunload = async()=>{
    cachePendingTransactions();
}