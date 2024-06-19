import React from 'react'
import { YStack, ZStack } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'

export const MangaReadScreen: React.FC = () => {
  return (
    <ZStack flex={1}>
      <Image
        src={
          'https://cdn.discordapp.com/attachments/1219854791254081649/1247730507043705003/image.png?ex=66611716&is=665fc596&hm=5fcd694796a0ee28abcaca6ac1ed13ba4d08bf97bfdc157e265fa087c270c0f8&'
        }
        alt={'sapa'}
        height={100}
        width={100}
        contentFit="fill"
        unoptimized
      />
      <YStack
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
        backgroundColor={'rgba(69,85,117,0.7)'}
      />
    </ZStack>
  )
}
