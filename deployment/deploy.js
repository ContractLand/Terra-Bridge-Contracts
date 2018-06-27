const fs = require('fs');

const deployHome = require('./src/home');
const deployForeign = require('./src/foreign');

async function main() {
  const foreign = await deployForeign();
  const home = await deployHome(foreign.foreignTokenForHomeNative)
  console.log("\n**************************************************")
  console.log("          Deployment has been completed.          ")
  console.log("**************************************************\n\n")
  console.log(`[ Foreign ] ForeignBridge: ${foreign.bridge} at block ${foreign.bridgeDeployedBlockNumber}`)
  console.log(`[ Foreign ] ForiegnTokenForHomeNative: ${foreign.foreignTokenForHomeNative}`)
  console.log(`[   Home  ] HomeBridge: ${home.bridge} at block ${home.bridgeDeployedBlockNumber}`)
  console.log(`[   Home  ] HomeTokenForHomeNative: ${home.homeTokenForForeignNative}`)
  fs.writeFileSync('./bridgeDeploymentResults.json', JSON.stringify({
    home: {
      ...home,
    },
    foreign: {
      ...foreign
    },
  },null,4));
  console.log('Contracts Deployment have been saved to `bridgeDeploymentResults.json`')
}
main()
