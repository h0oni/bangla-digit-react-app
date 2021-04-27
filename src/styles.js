import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'min(952px,100vh)',
        background: 'slategray',
        // backgroundImage: 'url(https://th.bing.com/th/id/OIP.KBslR72zDojAnucztO7NxAHaEO?pid=ImgDet&rs=1)'
    },
    canvasContainer: {
        border: '2px solid slategray',
        margin: '3vh',
        borderRadius: '15px',
        boxShadow: '0px 0px 5px 5px black',
        overflow: 'hidden',
    },
    clearButton: {
        width: 'min(200px,45vw)',
        height: '40px',
        margin:'5px',
        background:'darkgray',
        border: '2px solid black',
        borderRadius: '25px',
    },
    text:{
        fontSize:18,
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