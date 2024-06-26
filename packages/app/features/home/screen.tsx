import React from 'react'
import { NavBar } from '@my/ui/src/components/NavBar'
import { YStack, XStack, Text, ZStack, Button, Stack, useWindowDimensions } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'

export const HomeScreen: React.FC = () => {
  const { width } = useWindowDimensions()
  const isSmallScreen = width < 1280

  return (
    <YStack width={'100%'} backgroundColor={'#1B1D24'} flexGrow={1} overflow="hidden">
      <Text
        fontSize={isSmallScreen ? 20 : 40}
        width={'100%'}
        padding={20}
        color={'#FF204E'}
        textAlign="center"
      >
        MANGAVERSE
      </Text>

      <ZStack width={'100%'} backgroundColor={'#1B1D24'} flex={1}>
        <XStack height={isSmallScreen ? '50%' : '60%'}>
          <Stack height={'100%'} width={isSmallScreen ? '100%' : '80%'}>
            <Image
              src={'https://pbs.twimg.com/media/F7O0IBGWsAAplo1?format=jpg'}
              alt={'manga-cover'}
              contentFit="cover"
              fill
              unoptimized
              style={{ opacity: 0.2 }}
            />
          </Stack>
        </XStack>

        <YStack width={'100%'} zIndex={999_999}>
          <NavBar />
          <YStack
            alignSelf="flex-end"
            width={isSmallScreen ? '60%' : '40%'}
            marginRight={isSmallScreen ? 10 : 30}
          >
            <Text fontSize={isSmallScreen ? 25 : 40} color={'#ffffff'} textAlign="right">
              Manga name
            </Text>
            <Text fontSize={isSmallScreen ? 15 : 20} color={'#ffffff'} textAlign="right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ut enim ad.
            </Text>
            <Button
              size={isSmallScreen ? 30 : 40}
              backgroundColor={'#FF204E'}
              width={isSmallScreen ? '15%' : '30%'}
              minWidth={60}
              alignSelf="flex-end"
              marginTop={20}
            >
              Read
            </Button>
          </YStack>
        </YStack>
      </ZStack>
    </YStack>
  )
}
