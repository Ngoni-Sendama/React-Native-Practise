import { Image, useColorScheme } from 'react-native'

//Images
import DarkLogo from '../assets/white.png'
import LightLogo from '../assets/splash-icon.png'


const ThemeLogo = () => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
    return (
        <Image source={logo} />
    )
}

export default ThemeLogo