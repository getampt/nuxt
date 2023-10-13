import { http } from '@ampt/sdk'
import { IncomingMessage, ServerResponse } from 'node:http'
import { existsSync } from 'node:fs'
import { join } from 'path'

const BASE_PATH = '.output'
const APP_LOCATION = `${BASE_PATH}/server/index.mjs`

async function getHandler(): Promise<any | undefined> {
  try {
    const nuxtApp = join(process.env.LAMBDA_TASK_ROOT!, APP_LOCATION)
    if (existsSync(nuxtApp)) {
      const { handler: app } = await import(nuxtApp)
      return app
    } else {
      console.warn(`Nuxt app not found - did you run 'ampt:build'?`)
    }
  } catch (e) {
    console.error(e)
  }
}

http.node.use(async (req: IncomingMessage, res: ServerResponse) => {
  const app = await getHandler()

  if (app) {
    return app(req, res)
  }
})
