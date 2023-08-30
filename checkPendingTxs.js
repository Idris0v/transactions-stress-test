const { default: BlockchainConnector } = require("@super-protocol/sdk-js");

const { blockchainConfig, actionAccountKey } = require('./config.js')

async function check() {
    await BlockchainConnector.getInstance().initialize(blockchainConfig);
    const address = BlockchainConnector.getInstance().getAddressByKey(actionAccountKey);
    console.log(
        (await BlockchainConnector.getInstance().getTransactionCount(address, "pending")) -
        (await BlockchainConnector.getInstance().getTransactionCount(address, "latest"))
    );
}

check()
    .then(() => process.exit(0))
    .catch((err) => { console.error(err); process.exit(1) });
