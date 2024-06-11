import React from 'react'
import { NavBar } from '@my/ui/src/components/NavBar'
import { YStack, XStack, Text, ZStack, Button } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'
import { X } from '@tamagui/lucide-icons'

export const HomeScreen: React.FC = () => {
  return (
    <YStack width={'100%'} backgroundColor={'#1B1D24'} flex={1}>
      
      {/* Revisar como centrar y si es con un Xstack */}
      <Text fontSize={40} width={'100%'} padding={20} color={'#FF204E'}>
        MANGAVERSE
      </Text>

      <ZStack width={'100%'} height={300} backgroundColor={'#1B1D24'}>
        <XStack>

          <Image
            src={
              'https://pbs.twimg.com/media/F7O0IBGWsAAplo1?format=jpg&name=large'
            }
            alt={'manga-cover'}
            height={256}
            width={512}
            contentFit="fill"
            unoptimized
          />

          <YStack bottom={0}  backgroundColor={'#1B1D24'} padding={20}>
            <Text fontSize={24} color={'#ffffff'}>
              Manga name
            </Text>

            <Text fontSize={18} color={'#ffffff'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua ut enim ad.
            </Text>

            <Button size="$4" backgroundColor={'#FF204E'}> 
              Read
            </Button>

          </YStack>
        </XStack>
        
        <XStack right={0} top={0} padding={20}>
          <NavBar />
          <Text fontSize={24} color={'#FF204E'}>
            Hi, Pablo Ramon Santiago Peñaranda Urbina
          </Text>

          <Image
            src={
              'https://cdna.artstation.com/p/assets/images/images/025/044/978/20200316200734/smaller_square/daniel-aguilera-img-0461.jpg?1584407255'
            }
            alt={'manga-cover'}
            height={256}
            width={256}
            contentFit="fill"
            unoptimized
          />
        
        </XStack>

      </ZStack>
    </YStack>
    
  )
}
