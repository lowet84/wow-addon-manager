import { get } from 'https'
import { createWriteStream } from 'fs'

export const downloadFile = async (url: string, filePath: string) => {
  const file = createWriteStream(filePath)
  await new Promise<void>((resolve, reject) => {
    get(url, function(response) {
      var r = response.pipe(file)
      r.on('close', () => {
        resolve()
      })
    })
  })
}
