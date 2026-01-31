import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { colors } from '../../themes/colors'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ width: '100%' }}
      {...rest}
    >
      <LinearGradient
        colors={[colors.Peach, colors.Red]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonGradient}
      >
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}