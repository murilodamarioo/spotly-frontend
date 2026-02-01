import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

type ButtonTextProps = TouchableOpacityProps & {
  name: string
}

export function ButtonText({ name, ...rest }: ButtonTextProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  )
}