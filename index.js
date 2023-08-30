const { Order, default: BlockchainConnector } = require("@super-protocol/sdk-js");

const { blockchainConfig, actionAccountKey } = require('./config.js')

async function main() {

    await BlockchainConnector.getInstance().initialize(blockchainConfig);

    await BlockchainConnector.getInstance().initializeActionAccount(actionAccountKey);

    console.time('main');

    const result = [];

    for (let i = 0; i < 100; i++) {
        const order = new Order(i);
        result.push(
            order.updateOrderResult("0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f")
        );
    }

    await Promise.all(result);

    console.timeEnd('main')
}

main()
    .then(() => process.exit(0))
    .catch((err) => { console.error(err); process.exit(1) });
