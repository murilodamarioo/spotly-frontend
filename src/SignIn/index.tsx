import { View } from 'react-native'
import { styles } from './styles'
import { Button } from '../components/Button'


export function SignIn() {
  return (
    <View style={styles.container}>
      <Button
        title='Sign In'
        onPress={() => { console.log('Sign In pressed') }}
      />
    </View>
  )
}