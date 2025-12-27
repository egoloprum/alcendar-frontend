import { Button } from '@/src/shared/components'
import { API_AUTH_CONFIRM_AGE } from '@/src/shared/utils'
import { ReceiptText } from 'lucide-react'
import { View, Text } from 'react-native'

const AgeConfirmation = () => {
  const handleSubmit = async () => {
    try {
      const res = await fetch(API_AUTH_CONFIRM_AGE, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Age confirmation failed')
      }

      console.log('Success:', data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View className="flex w-full flex-col gap-4 p-4 px-6">
      <View className="flex flex-row items-center gap-2">
        <ReceiptText className="aspect-square h-full max-h-20 w-full max-w-20" />
        <Text className="text-3xl" style={{ fontFamily: 'Gliker-Regular' }}>
          Accept Alcendar&apos;s Terms & Review Privacy Notice
        </Text>
      </View>
      <Text className="font-normal" style={{ fontFamily: 'Gliker-Regular' }}>
        By selecting &quot;I agree&quot; below, i have reviewed and agree to the Terms of Use and
        acknowledge the Privacy Notice. I am at least 18 years of age.
      </Text>
      <Button variant="primary" onPress={handleSubmit}>
        I agree
      </Button>
    </View>
  )
}

export default AgeConfirmation
