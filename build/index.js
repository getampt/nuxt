#!/usr/bin/env node
import fse from 'fs-extra'

async function main() {
  fse.moveSync('.output/public/', 'static/', { overwrite: true })
  fse.removeSync('.output/public')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
