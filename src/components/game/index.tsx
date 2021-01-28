import React,{useState,useEffect} from 'react'
import Center from '../ui/Center'
import {Image} from '@chakra-ui/react'

interface Wall {
    "1":string[]
    "2":string[]
    "3":string[]
    "4":string[]
    "5":string[]
}

interface Temp extends Wall{
    over:string[]
}

interface Field {
    center:string[]
    tables:string[][]
}

interface GamePlayer {
    id:string
    name:string
    isFirst:boolean
    score:number
    wall:Wall
    temp:Temp
}

interface Game {
    field:Field
    players:GamePlayer[]
    status:string
    turnerId:string
}

interface Props {
    players:Player[]
}

interface Player {
    id:string
    name:string
}

const GameComponent:React.FC<Props> = ({players}) => {
    const [game,setGame] = useState<Game>({status:'notStarted'} as Game)

    const initialField = () => {
        const center = ['first']
        const tiles = ['sun','snow','leaf','dream','moon']
        const createTable = () => {
            return [...Array(4)].map(()=>tiles[Math.floor(Math.random() * 5)])
        }
        const tableCount = players.length * 2 + 1 // プレイヤー人数×２+１の数だけテーブルを生成する
        const tables = [...Array(tableCount)].map(()=>createTable())
        return ({center,tables})
    }

    const initialize = () => {
        const defaultField = initialField()
        const firstPlayer = players[0].id
        const defaultPlayers = players.map((player,idx)=>{
            const wall = {'1':[],'2':[],'3':[],'4':[],'5':[]}
            const temp = {'1':[],'2':[],'3':[],'4':[],'5':[],over:[]}
            return ({
                id:player.id,
                name:player.name,
                isFirst:idx === 0,
                score:0,
                wall,
                temp
            })
        })
        setGame({field:defaultField,players:defaultPlayers,status:'selectTable',turnerId:firstPlayer})
    }
    useEffect(()=>{
        initialize()
    },[])

    const viewTable = (table:string[]) => {
        return table.map((tile,idx)=><Image key={idx} src={process.env.PUBLIC_URL+'/'+tile+'.png'} alt='logo' maxW='40px'/>)
    }

    if(game.status === 'notStarted'){
        return (<Center>Loading ...</Center>)
    }
    if(game.status === 'selectTable'){
        return (
            <div>
                {game.field.tables.map((table,idx)=><div key={idx} style={{display:'flex',margin:20}}>{viewTable(table)}</div>)}
            </div>
        )
    }
    return (
        <div>{}</div>
    )
}

export default GameComponent

