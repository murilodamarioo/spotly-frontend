import { Text, TextInput, TextInputProps, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '../../themes/colors'

import { styles } from './styles'

type InputProps = TextInputProps & {
  label?: string
  iconName?: keyof typeof MaterialIcons.glyphMap
}

export function Input({ iconName, label, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
      <View style={styles.inputWrapper}>
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
    </View>
  )
}