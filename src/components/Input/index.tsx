import { TextInput, TextInputProps, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '../../themes/colors'

import { styles } from './styles'

type InputProps = TextInputProps & {
  iconName?: keyof typeof MaterialIcons.glyphMap
}

export function Input({ iconName, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={18}
          color={colors.Subtext0}
        />
      )}
      <TextInput
        style={styles.input}
        {...rest}
      />
    </View>
  )
}