export interface User {
    id:string
    name:string
    playRoom:string
}

export type Tile = 'moon' | 'leaf' | 'sun' | 'snow' | 'dream' | 'first'
export type Line = Tile[]

export interface Board {
    lines:Line[]
}

export interface Work{
    lines:Line[]
    overs:string[]
}

export interface Player {
    id:string
    name:string
    board:Board
    work:Work
}

export type Group = Tile[]

export interface Table {
    groups:Group[]
    center:Tile[]
}

export interface Game {
    id:string
    players:Player[]
    table:Table
    nowPlaying:string // player id
}