import React, { useState } from 'react'
import { Stack, XStack, YStack, ZStack, Text } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'

export const MangaReadScreen: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = useState(true)

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible)
  }

  return (
    <ZStack flex={1} onPress={toggleOverlay}>
      <Image
        src={'https://pbs.twimg.com/media/F7O0IBGWsAAplo1?format=jpg'}
        alt={'manga-page-' + 2}
        contentFit="contain"
        unoptimized
        fill
      />
      {overlayVisible && (
        <YStack
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          backgroundColor={'rgba(69,85,117,0.7)'}
        >
          <XStack flex={1} alignItems="flex-start" justifyContent="flex-start">
            {/* <Text>aslfkjasoikgjh</Text> */}
            <Stack minWidth={'10%'} minHeight={'10%'}>
              <Image
                src={'https://i.ibb.co/q0WBpm4/logo.png'}
                alt="image-logo-page"
                unoptimized
                fill
              />
            </Stack>
          </XStack>
        </YStack>
      )}
    </ZStack>
  )
}
