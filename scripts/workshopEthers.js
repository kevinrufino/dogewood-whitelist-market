// a saintmaxi joint
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

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser and connect to use workshop!');
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const treat = new ethers.Contract(treatAddress, treatAbi(), signer);
const market = new ethers.Contract(marketAddress, marketAbi(), signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

// --- WORKSHOP FUNCTIONS ---

// --- CREATE FUNCTIONS ---

const generateCreate = async() => {
    let mode = "create";
    let title = $(`#${mode}-input #listing-title`).val();
    let image = $(`#${mode}-input #listing-image`).val();
    let site = ($(`#${mode}-input #listing-site`).val()).includes("https://") ? $(`#${mode}-input #listing-image`).val() : `https://${$(`#${mode}-input #listing-image`).val()}`;
    let description = $(`#${mode}-input #listing-description`).val();
    let amount = Number($(`#${mode}-input #listing-amount`).val());
    let start = $(`#${mode}-input #listing-start`).val();
    let deadline = $(`#${mode}-input #listing-deadline`).val();
    let price = Number($(`#${mode}-input #listing-price`).val());

    // $(`#${mode}-template #ex-title`).html(title);
    // $(`#${mode}-template #ex-image`).attr("src", image);
    // $(`#${mode}-template #ex-site`).attr("href", site);
    // $(`#${mode}-template #ex-description`).html(description.replaceAll("\n", "<br>"));
    // $(`#${mode}-template #ex-amount`).html(amount);
    // $(`#${mode}-template #ex-remaining`).html(0);
    // $(`#${mode}-template #ex-deadline`).html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    // $(`#${mode}-template #ex-price`).html(price);
    if (start > deadline) {
        await displayErrorMessage("Error: Start time must be before deadline!");
    }
    else {
        $(`#${mode}-template #ex-title`).html(title.toUpperCase());
        $(`#${mode}-template #ex-image`).attr("src", image);
        $(`#${mode}-template #ex-site`).attr("href", site);
        $(`#${mode}-template #ex-description`).html(description.replaceAll("\n", "<br>"));
        $(`#${mode}-template #ex-amount`).html(amount);
        $(`#${mode}-template #ex-remaining`).html(0);
        $(`#${mode}-template #ex-start`).html(`${(new Date(start*1000)).toLocaleDateString()} ${(new Date(start*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#${mode}-template #ex-deadline`).html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#${mode}-template #ex-price`).html(price);
    }
}

const addListing = async() => {
    try {
        // let title = $("#create-input #listing-title").val();
        // let image = $("#create-input #listing-image").val();
        // let site = ($("#create-input #listing-site").val()).includes("https://") ? $("#create-input #listing-site").val() : `https://${$("#create-input #listing-site").val()}`;
        // let description = $("#create-input #listing-description").val();
        // let amount = Number($("#create-input #listing-amount").val());
        let start = Number($("#create-input #listing-start").val());
        let deadline = Number($("#create-input #listing-deadline").val());
        // let price = parseEther($("#create-input #listing-price").val());
        // if (!(title && image && (site != null) && (description != null) && amount && deadline && price)) {
        //     await displayErrorMessage("Missing fields!")
        if (start > deadline) {
            await displayErrorMessage("Error: Start time must be before deadline!");
        }
        else {
            // await market.addWLVendingItem(treatAddress, title, image, site, description, amount, deadline, price).then( async(tx_) => {
            //     await waitForTransaction(tx_);
            // });
            let title = $("#create-input #listing-title").val();
            let image = $("#create-input #listing-image").val();
            let site = ($("#create-input #listing-site").val()).includes("https://") ? $("#create-input #listing-site").val() : `https://${$("#create-input #listing-site").val()}`;
            let description = $("#create-input #listing-description").val();
            let amount = Number($("#create-input #listing-amount").val());
            let price = parseEther($("#create-input #listing-price").val());
            if (!(title && image && (site != null) && (description != null) && amount && start && deadline && price)) {
                await displayErrorMessage("Missing fields!")
            }
            else {
                await market.addWLVendingItem(treatAddress, [title, image, site, description, amount, 0, start, deadline, price]).then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
        }
    }
    catch (error) {
        if ((error.message).includes("You are not Authorized for this ERC20 Contract!")) {
            await displayErrorMessage(`You are not authorized to add listings for $TREAT!`);
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

// --- MODIFY FUNCTIONS ---

const loadListings = async() => {
    let fakeJSX = "";
    // let listings = await market.getWLVendingItemsAll(treatAddress);
    let listings = await market.raw_getWLVendingItemsAll(treatAddress);
    for (let i = 0; i < listings.length; i++) {
        let WLinfo = listings[i];
        // let valid =  WLinfo.deadline > (Date.now()/1000);
        // if (valid) {
        //     fakeJSX += `<option value="${i}">${WLinfo.title}</option>`;
        // }
        fakeJSX += `<option value="${i}">${WLinfo.title}</option>`;
    }
    $("#listing-select").append(fakeJSX);
}

var currentlySelected;
var currentlySelectedWLinfo;

const selectListing = async(id) => {
    currentlySelected = Number(id);
    currentlySelectedWLinfo = await market.contractToWLVendingItems(treatAddress, id);
    let title = currentlySelectedWLinfo.title;
    let image = currentlySelectedWLinfo.imageUri;
    let site = (currentlySelectedWLinfo.projectUri).includes("https://") ? currentlySelectedWLinfo.projectUri : `https://${currentlySelectedWLinfo.projectUri}`;
    let description = currentlySelectedWLinfo.description;
    let amount = currentlySelectedWLinfo.amountAvailable;
    let purchased = currentlySelectedWLinfo.amountPurchased;
    // let deadline = currentlySelectedWLinfo.deadline;
    let start = currentlySelectedWLinfo.startTime;
    let deadline = currentlySelectedWLinfo.endTime;
    let price = Number(formatEther(currentlySelectedWLinfo.price));

    $("#modify-template #ex-title").html(title);
    $("#modify-template #ex-image").attr("src", image);
    $("#modify-template #ex-site").attr("href", site);
    $("#modify-template #ex-description").html(description.replaceAll("\n", "<br>"));
    $("#modify-template #ex-amount").html(amount);
    $("#modify-template #ex-remaining").html(purchased);
    $(`#modify-template #ex-start`).html(`${(new Date(start*1000)).toLocaleDateString()} ${(new Date(start*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    $("#modify-template #ex-deadline").html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    $("#modify-template #ex-price").html(price);
}

const generateModify = async() => {
    let mode = "modify";
    let title = $("#modify-input #listing-title").val() ? $("#modify-input #listing-title").val() : currentlySelectedWLinfo.title;
    let image = $("#modify-input #listing-image").val()? $("#modify-input #listing-image").val() : currentlySelectedWLinfo.imageUri;
    let site = $("#modify-input #listing-site").val() ? $("#modify-input #listing-site").val() : currentlySelectedWLinfo.projectUri;
    let siteFormatted = site.includes("https://") ? site : `https://${site}`;
    let description = $("#modify-input #listing-description").val() ? $("#modify-input #listing-description").val() : currentlySelectedWLinfo.description;
    let amount = $("#modify-input #listing-amount").val() ? Number($("#modify-input #listing-amount").val()) : currentlySelectedWLinfo.amountAvailable;
    let purchased = currentlySelectedWLinfo.amountPurchased;
    // let deadline = $("#modify-input #listing-deadline").val() ? Number($("#modify-input #listing-deadline").val()) : currentlySelectedWLinfo.deadline;
    let start = $("#modify-input #listing-start").val() ? Number($("#modify-input #listing-start").val()) : currentlySelectedWLinfo.startTime;
    let deadline = $("#modify-input #listing-deadline").val() ? Number($("#modify-input #listing-deadline").val()) : currentlySelectedWLinfo.endTime;
    let price = $("#modify-input #listing-price").val() ? $("#modify-input #listing-price").val() : Number(formatEther(currentlySelectedWLinfo.price));

    // $(`#${mode}-template #ex-title`).html(title);
    // $(`#${mode}-template #ex-image`).attr("src", image);
    // $(`#${mode}-template #ex-site`).attr("href", siteFormatted);
    // $(`#${mode}-template #ex-description`).text(description);
    // $(`#${mode}-template #ex-amount`).html(amount);
    // $(`#${mode}-template #ex-remaining`).html(purchased);
    // $(`#${mode}-template #ex-deadline`).html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
    // $(`#${mode}-template #ex-price`).html(price);
    if (start > deadline) {
        await displayErrorMessage("Error: Start time must be before deadline!");
    }
    else {
        $(`#${mode}-template #ex-title`).html(title.toUpperCase());
        $(`#${mode}-template #ex-image`).attr("src", image);
        $(`#${mode}-template #ex-site`).attr("href", siteFormatted);
        $(`#${mode}-template #ex-description`).html(description.replaceAll("\n", "<br>"));
        $(`#${mode}-template #ex-amount`).html(amount);
        $(`#${mode}-template #ex-remaining`).html(purchased);
        $(`#${mode}-template #ex-start`).html(`${(new Date(start*1000)).toLocaleDateString()} ${(new Date(start*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#${mode}-template #ex-deadline`).html(`${(new Date(deadline*1000)).toLocaleDateString()} ${(new Date(deadline*1000)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`);
        $(`#${mode}-template #ex-price`).html(price);
    }
}

const modifyListing = async() => {
    try {
        let title = $("#modify-input #listing-title").val() ? $("#modify-input #listing-title").val() : currentlySelectedWLinfo.title;
        let image = $("#modify-input #listing-image").val()? $("#modify-input #listing-image").val() : currentlySelectedWLinfo.imageUri;
        let site = $("#modify-input #listing-site").val() ? $("#modify-input #listing-site").val() : currentlySelectedWLinfo.projectUri;
        let siteFormatted = site.includes("https://") ? site : `https://${site}`;
        let description = $("#modify-input #listing-description").val() ? $("#modify-input #listing-description").val() : currentlySelectedWLinfo.description;
        let amount = $("#modify-input #listing-amount").val() ? Number($("#modify-input #listing-amount").val()) : currentlySelectedWLinfo.amountAvailable;
        let purchased = currentlySelectedWLinfo.amountPurchased;
        // let deadline = $("#modify-input #listing-deadline").val() ? Number($("#modify-input #listing-deadline").val()) : currentlySelectedWLinfo.deadline;
        let start = $("#modify-input #listing-start").val() ? Number($("#modify-input #listing-start").val()) : currentlySelectedWLinfo.startTime;
        let deadline = $("#modify-input #listing-deadline").val() ? Number($("#modify-input #listing-deadline").val()) : currentlySelectedWLinfo.endTime;
        let price = $("#modify-input #listing-price").val() ? parseEther($("#modify-input #listing-price").val()) : currentlySelectedWLinfo.price;
        if (!(title && image && (site != null) && (description != null) && amount && start && deadline && price && (purchased != null))) {
            await displayErrorMessage("Missing fields!")
        }
        else if (amount < purchased) {
            // await displayErrorMessage("Can't have less spots than already sold!")
            await displayErrorMessage("Error: Can't have less spots than already sold!")
        }
        else if (start > deadline) {
            await displayErrorMessage("Error: Start time must be before deadline!");
        }
        else {
            // await market.modifyWLVendingItem(treatAddress, currentlySelected, [title, image, siteFormatted, description, amount, purchased, deadline, price]).then( async(tx_) => {
            await market.modifyWLVendingItem(treatAddress, currentlySelected, [title, image, siteFormatted, description, amount, purchased, start, deadline, price]).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("You are not Authorized for this ERC20 Contract!")) {
            await displayErrorMessage(`You are not authorized to add listings for $TREAT!`);
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

// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});


// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("MartianMarketPendingTxs");

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
    localStorage.removeItem("MartianMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MartianMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR POLYSCAN</div></a><br>`;
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
}

setInterval(async()=>{
    await updateInfo();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,7)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,7)}...`);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await loadListings();
    let userAddress = await getAddress();
    // if (userAddress == (await treat.ruler()) || await market.contractToControllersApproved(treatAddress, userAddress)) {
        if ((await market.isAuthorized(treatAddress, userAddress))) {
        $("#workshop").removeClass("hidden");
        $("#workshop-mobile").removeClass("hidden");
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}
