interface BlockstreamAddress {
  "address":string,
  "chain_stats":{
    "funded_txo_count":number,
    "funded_txo_sum":number,
    "spent_txo_count":number,
    "spent_txo_sum":number,
    "tx_count":number
  },
  "mempool_stats":{
    "funded_txo_count":number,
    "funded_txo_sum":number,
    "spent_txo_count":number,
    "spent_txo_sum":number,
    "tx_count": number
  }
}

export default async function getBTCBalance(address:string) {
  const response = await fetch(`https://blockstream.info/api/address/${address}`)
  return response.json() as Promise<BlockstreamAddress>
 }