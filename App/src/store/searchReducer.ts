import { parseHTML } from 'cheerio'
import { parse } from 'querystring'
import { readFileSync } from 'fs'
import { RootState } from '.'
import { useDispatch } from 'react-redux'
import { SearchResult } from './SearchResult'

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

// const parseRow = (html: string): SearchResult => {
//   var tags = html.split('><')
//   if (tags.length < 31) return
//   var image = tags[3].match(/data-original="(.*?)"/)[1]
//   var link = tags[7].match(/href="(.*?)"/)[1]
//   var name = tags[7].match(/>(.*?)</)[1]
//   var description = tags[9].match(/>(.*?)</)[1].trim()
//   return { name, image, tags, description, link }
// }

// export const loadSearchResultsLegacyWow = async () => {
//   const dispatch = useDispatch()
//   //   var response = await fetch('https://legacy-wow.com/classic-addons/')
//   //   var html = await response.text()
//   var html = readFileSync('./test.html', 'utf8')
//   var parsed = html.split('\n')
//   var longest = parsed.sort((a, b) => (a.length > b.length ? -1 : 1))[0]
//   var rows = longest.split('</tr>')
//   var items = rows.map(r => parseRow(r)).filter(d => !!d)
//   dispatch(setSearchResults(items))
// }

export const loadSearchResultWillItClassic = async () => {
  const dispatch = useDispatch()
  var response = await fetch(
    'https://z5siwzm9sq-3.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia&x-algolia-application-id=Z5SIWZM9SQ&x-algolia-api-key=32b0718cc703a7774d1859efd4321ffd',
    {
      method: 'POST',
      body:
        '{"requests":[{"indexName":"addons","params":"query= &hitsPerPage=10000&page=0&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%5D&tagFilters="}]}'
    }
  )
  var json = await response.json()
  var items: SearchResult[] = json.results[0].hits
  dispatch(setSearchResults(items))
}
