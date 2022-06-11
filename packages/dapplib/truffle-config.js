require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember modify hidden climb outer super'; 
let testAccounts = [
"0xfd57bdf010c268fac4712c400c38c54ec952e7c10a763b30e737e94bdbdc9b5c",
"0xe9e8b24d1dc4849a1e6706e336ae926acf57bed408ed180ac28a518525189ab5",
"0xfb027f3d760363fd706de300befe7e87df434a78dd47e396c2149b49a05c9dac",
"0x2258845732b881a727fd748645982ba1ace8fcae73ed586eb86d9d25c6d72ddd",
"0x5b7122f4fb370f3aa5ffc3f9b087e096223524b8cc55a2f6eb156b2268b2c072",
"0x61cb07b3a4056bf7ef22174f6e08b327f039d651aab22ecec5751967df354578",
"0xf6134a35f85f7573f95fd16d0b0b3598c000a1f7d11003561897910368701b24",
"0x0714d6bf24113d4a5a5c71d94d6ff4e38e093277329d4dd2542750a13f20077e",
"0x8c5788e6ddd876b5ba1c201b4358a5d5400a349b2be9fbcc3d6024b66cd1b358",
"0xa28d25da6db200ba3cff8bba8a634962c8c4fe529bdf5fd769f27f8f7c2bdddf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

