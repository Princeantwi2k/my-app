import {createStacknavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Online from '../Online'
import Shopping from '../Component/Shopping'
import Payment from '../Payment'

const screens = {
    Home : {
        screens : Online
    },
    Shopping :{
        screens : Shopping
    },
    Payment :{
        screens : Payment
    }
}


const Homestack = createStacknavigator(screens);

export default createAppContainer(Homestack)