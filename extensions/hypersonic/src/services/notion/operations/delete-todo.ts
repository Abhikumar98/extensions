import { notion } from '../client'

export async function deleteTodo(pageId: string): Promise<any> {
  const notionClient = await notion()

  await notionClient.pages.update({
    page_id: pageId,
    archived: true,
  })

  return true
}
