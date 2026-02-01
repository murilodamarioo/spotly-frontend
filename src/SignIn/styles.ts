import { StyleSheet } from 'react-native'
import { colors } from '../themes/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    paddingHorizontal: 32,
    backgroundColor: colors.Base
  },
  title: {
    fontSize: 24,
    color: colors.Text,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    color: colors.Subtext1,
    fontWeight: 'normal'
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: colors.Subtext1,
    marginTop: -22,
  }
})