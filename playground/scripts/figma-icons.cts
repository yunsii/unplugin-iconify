// file id ref: https://iconify.design/docs/libraries/tools/import/figma/file-id.html
// https://www.figma.com/file/apsujesNT1XUHZkFJigmR6/HIX.AI-dashboard?type=design&node-id=24327%3A81658&mode=design&t=EamKaCRIZp63av0r-1

import path from 'node:path'

import { loadFigmaIconSets } from 'tailwindcss-plugin-iconify/figma-icon-sets/node'
import { config } from 'dotenv'

// 仅通过 .env.local 加载环境变量，当前需要的环境变量
// FIGMA_ICONS_TOKEN
config({
  path: path.resolve(process.cwd(), '.env.local'),
})

const FIGMA_ICONS_TOKEN = process.env.FIGMA_ICONS_TOKEN!

loadFigmaIconSets({
  import: {
    files: [
      {
        // ref: https://www.figma.com/file/PMVacJLndw38SM0MNyRXTy/Untitled?type=design&node-id=0%3A1&mode=design&t=iCPCkoSBt6QNqlOk-1
        id: 'PMVacJLndw38SM0MNyRXTy',
        pages: ['Page 1'],
        prefix: 'test',
      },
      {
        // ref: https://www.figma.com/file/PMVacJLndw38SM0MNyRXTy/Untitled?type=design&node-id=0%3A1&mode=design&t=iCPCkoSBt6QNqlOk-1
        id: 'PMVacJLndw38SM0MNyRXTy',
        pages: ['Page 2'],
        prefix: 'test',
      },
      {
        // ref: https://www.figma.com/file/PMVacJLndw38SM0MNyRXTy/Untitled?type=design&node-id=0%3A1&mode=design&t=iCPCkoSBt6QNqlOk-1
        id: 'PMVacJLndw38SM0MNyRXTy',
        pages: ['Page 3'],
        prefix: 'common',
      },
    ],
    token: FIGMA_ICONS_TOKEN,
    preserveColorsGroup: 'test-colored',
    cache: true,
  },
  write: {
    outputDir: path.join(process.cwd(), 'src', 'assets', 'figma'),
  },
})
