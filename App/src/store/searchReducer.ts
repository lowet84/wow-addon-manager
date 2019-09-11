import { parseHTML } from 'cheerio'
import { parse } from 'querystring'
import { readFileSync } from 'fs'
import { RootState } from '.'
import { useDispatch } from 'react-redux'

export interface SearchResult {
  name: string
  image: string
  description: string
  link: string
  tags: string[]
}

export type SearchAction = { type: 'setSearchResults'; input: SearchResult[] }
export type SearchState = { searchResults: SearchResult[] }

export function setSearchResults(input: SearchResult[]): SearchAction {
  return { type: 'setSearchResults', input }
}

export const getSearchResults = (state: RootState) => {
  return state.search.searchResults
}

export function search(
  state: SearchState = { searchResults: [] },
  action: SearchAction
) {
  switch (action.type) {
    case 'setSearchResults':
      return { ...state, searchResults: action.input }
    default:
      return state
  }
}

const parseRow = (html: string): SearchResult => {
  var tags = html.split('><')
  if (tags.length < 31) return
  var image = tags[3].match(/data-original="(.*?)"/)[1]
  var link = tags[7].match(/href="(.*?)"/)[1]
  var name = tags[7].match(/>(.*?)</)[1]
  var description = tags[9].match(/>(.*?)</)[1].trim()
  return { name, image, tags, description, link }
}

export const loadSearchResults = async () => {
  const dispatch = useDispatch()
  //   var response = await fetch('https://legacy-wow.com/classic-addons/')
  //   var html = await response.text()
  var html = readFileSync('./test.html', 'utf8')
  var parsed = html.split('\n')
  var longest = parsed.sort((a, b) => (a.length > b.length ? -1 : 1))[0]
  var rows = longest.split('</tr>')
  var items = rows.map(r => parseRow(r)).filter(d => !!d)
  dispatch(setSearchResults(items))
}
