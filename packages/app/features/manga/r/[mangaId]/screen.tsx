import React, { useState } from 'react'
import { YStack, ZStack } from '@my/ui'
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
        alt={'sapa'}
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
        />
      )}
    </ZStack>
  )
}
