import { ReceiptText } from 'lucide-react-native'
import { View, Text } from 'react-native'

import { Button } from '@/src/shared/components'

const AgeConfirmation = () => {
  return (
    <View className="flex w-full flex-col gap-4 p-4 px-6">
      <View className="flex flex-row items-center gap-2">
        <ReceiptText className="aspect-square h-full max-h-20 w-full max-w-20" />
        <Text className="text-3xl" style={{ fontFamily: 'Gliker-Regular' }}>
          Accept Alcendar&apos;s Terms & Review Privacy Notice
        </Text>
      </View>
      <Text className="" style={{ fontFamily: 'Gliker-Regular' }}>
        By selecting &quot;I agree&quot; below, i have reviewed and agree to the Terms of Use and
        acknowledge the Privacy Notice. I am at least 18 years of age.
      </Text>
      <Button variant="primary">I agree</Button>
    </View>
  )
}

export default AgeConfirmation
