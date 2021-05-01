import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'min(952px,100vh)',
        background: 'mintcream',
        marginTop: '-20px'
        // backgroundImage: 'url(https://th.bing.com/th/id/OIP.KBslR72zDojAnucztO7NxAHaEO?pid=ImgDet&rs=1)'
    },
    Linear:{
        width: '100vw'
    },
    canvasContainer: {
        border: '1px solid slategray',
        margin: '3vh',
        borderRadius: '15px',
        boxShadow: '0px 0px 5px 5px mistyrose',
        overflow: 'hidden',
    },
    clearButton: {
        width: 'min(200px,45vw)',
        height: '40px',
        margin:'5px',
        background:'tomato',
        border: '2px solid black',
        borderRadius: '25px',
    },
    text:{
        fontSize:18,
        color:'mintcream',
    },
    predText:{
        fontSize:20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'10px'
    },
    headText:{
        fontSize:40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'10px',
    }
}));