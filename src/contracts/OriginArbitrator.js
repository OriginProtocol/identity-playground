module.exports = {
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "arbitratorExtraData",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_disputeID",
                    "type": "uint256"
                },
                {
                    "name": "_ruling",
                    "type": "uint256"
                }
            ],
            "name": "rule",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "disputes",
            "outputs": [
                {
                    "name": "listingID",
                    "type": "uint256"
                },
                {
                    "name": "offerID",
                    "type": "uint256"
                },
                {
                    "name": "marketplace",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "arbitrator",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "listingID",
                    "type": "uint256"
                },
                {
                    "name": "offerID",
                    "type": "uint256"
                }
            ],
            "name": "createDispute",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_arbitrator",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_arbitrator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_disputeID",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_rulingOptions",
                    "type": "string"
                }
            ],
            "name": "Dispute",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_arbitrator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_disputeID",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_ruling",
                    "type": "uint256"
                }
            ],
            "name": "Ruling",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_arbitrator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_disputeID",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_party",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_evidence",
                    "type": "string"
                }
            ],
            "name": "Evidence",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_contractHash",
                    "type": "bytes32"
                }
            ],
            "name": "ContractHash",
            "type": "event"
        }
    ],
    "data": "608060405234801561001057600080fd5b506040516020806109ae833981018060405281019080805190602001909291905050508060206040519081016040528060008152506000826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816001908051906020019061009d929190610127565b507f1892820d22f2ab2b60795935d39550f42562bf8862a0b3c2193b095baa40af218160405180826000191660001916815260200191505060405180910390a150505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101cc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b6101c991905b808211156101c55760008160009055506001016101ad565b5090565b90565b6107d3806101db6000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c7ac7b614610072578063311a6c5614610102578063564a565d146101395780636cc6cde1146101b4578063f26999cd1461020b575b600080fd5b34801561007e57600080fd5b50610087610256565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100c75780820151818401526020810190506100ac565b50505050905090810190601f1680156100f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561010e57600080fd5b5061013760048036038101908080359060200190929190803590602001909291905050506102f4565b005b34801561014557600080fd5b50610164600480360381019080803590602001909291905050506103ac565b604051808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b3480156101c057600080fd5b506101c96103f6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021757600080fd5b50610240600480360381019080803590602001909291908035906020019092919050505061041c565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102ec5780601f106102c1576101008083540402835291602001916102ec565b820191906000526020600020905b8154815290600101906020018083116102cf57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561034f57600080fd5b813373ffffffffffffffffffffffffffffffffffffffff167f394027a5fa6e098a1191094d1719d6929b9abc535fcc0c8f448d6a4e75622276836040518082815260200191505060405180910390a36103a88282610676565b5050565b60026020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c13517e160016040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200180602001828103825260048152602001807f307830300000000000000000000000000000000000000000000000000000000081525060200192505050602060405180830381600087803b1580156104ea57600080fd5b505af11580156104fe573d6000803e3d6000fd5b505050506040513d602081101561051457600080fd5b810190808051906020019092919050505090506060604051908101604052808581526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681525060026000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f775071bee3f2d409883bcb9dfcef6befa9343668ab341f76fcc5817b52a126116040518080602001828103825260168152602001807f42757965722077696e733b53656c6c65722077696e730000000000000000000081525060200191505060405180910390a38091505092915050565b6000806002600085815260200190815260200160002091508160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663dd00867283600001548460010154866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018381526020018281526020019350505050600060405180830381600087803b15801561073c57600080fd5b505af1158015610750573d6000803e3d6000fd5b505050506002600085815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050505050505600a165627a7a723058204fd02c9185c68f725fd1de24ef121916d5afa9e69217cf48de0f93fa64ba81fd0029"
}