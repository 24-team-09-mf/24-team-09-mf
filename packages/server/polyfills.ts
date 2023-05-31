import { Image } from 'canvas'
import { installGlobals } from '@remix-run/node'

export default () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  global.Image = Image
  installGlobals()
}
