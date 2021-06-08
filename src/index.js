const yargs = require("yargs")
const { main } = require("./miner")
const { log } = require("console")

const args =
   yargs
    .usage("npm start -- [options]")
    .options({
       "a": {
          type: "string",
          demandOption: true,
          describe: "host:port",
          alias: "address"
       },
       "u": {
          type: "string",
          demandOption: true,
          describe: "username",
          alias: "user"
       },
       "p": {
          type: "string",
          demandOption: true,
          describe: "password",
          alias: "pass"
       },
       "w": {
          type: "string",
          demandOption: true,
          describe: "miner's wallet",
          alias: "wallet"
       },
       "t": {
          type: "number",
          demandOption: true,
          describe: "threads",
          alias: "threads",
          default: 1
       }
    })
    .help()
    .argv

main(args).subscribe(null, log)