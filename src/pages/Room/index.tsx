import Game from '../../components/game'

const Room:React.FC = (props:any) => {
    const {id} = props.match.params
    const testPlayers=[
        {id:'asdfasdf',name:'たろう'},
        {id:'hsdasdf2',name:'はなこ'}
    ]
    return (
        <div>
            {id}
            <Game players={testPlayers}/>
        </div>
    )
}

export default Room