import { StyleSheet } from 'react-native'
import { colors } from '../../themes/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: colors.Subtext0,
    borderRadius: 12,
    paddingHorizontal: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.Text,
  }
})