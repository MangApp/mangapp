import React from 'react'
import { XStack, Text, useWindowDimensions } from '@my/ui/src'
import { SolitoImage as Image } from 'solito/image'

export const NavBar: React.FC = () => {
  const { width } = useWindowDimensions()
  const isSmallScreen = width < 1280

  return (
    <XStack
      marginLeft={isSmallScreen ? 10 : 60}
      marginTop={isSmallScreen ? 10 : 30}
      alignItems="center"
      width={isSmallScreen ? '100%' : '95%'}
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap={'$5'}>
        <Image
          src={'https://i.ibb.co/q0WBpm4/logo.png'}
          alt={'sapa'}
          height={isSmallScreen ? 50 : 100}
          width={isSmallScreen ? 50 : 100}
          contentFit="fill"
          unoptimized
        />
        <XStack flexDirection="column" maxWidth={isSmallScreen ? '60%' : 'auto'}>
          <Text fontSize={isSmallScreen ? '$5' : '$9'} textAlign="center">
            HOME | SEARCH | MANGA LIST
          </Text>
        </XStack>
      </XStack>
      <Text
        fontSize={isSmallScreen ? 16 : 24}
        color={'#FF204E'}
        marginRight={isSmallScreen ? '2%' : '1%'}
      >
        Hi, Pablo Peñaranda
      </Text>
    </XStack>
  )
}
