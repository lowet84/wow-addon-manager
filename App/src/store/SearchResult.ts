export interface TimeCreated {
  _seconds: number
  _nanoseconds: number
}

export interface TimeUpdated {
  _seconds: number
  _nanoseconds: number
}

export interface Name {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface Status {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface Summary {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface HighlightResult {
  name: Name
  status: Status
  summary: Summary
}

export interface SearchResult {
  url: string
  addonImage: string
  index: boolean
  name: string
  publish: boolean
  status: string
  submittedById: string
  summary: string
  timeCreated: TimeCreated
  timeUpdated: TimeUpdated
  updated: boolean
  willBeUpdated: boolean
  objectID: string
  _highlightResult: HighlightResult
}
