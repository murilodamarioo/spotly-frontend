import { View } from 'react-native'
import { styles } from './styles'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { colors } from '../themes/colors'


export function SignIn() {
  return (
    <View style={styles.container}>
      <Input
        placeholder='johndoe@example.com'
        placeholderTextColor={colors.Subtext0}
        inputMode='email'
        iconName='email'
      />
      <Input
        placeholder='•••••••••'
        placeholderTextColor={colors.Subtext0}
        secureTextEntry={true}
        iconName='lock'
      />
      <Button
        title='Sign In'
        onPress={() => { console.log('Sign In pressed') }}
      />
    </View>
  )
}