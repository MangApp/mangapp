import { YStack, Text, XStack } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'
import { NavBar } from '@my/ui/src/components/NavBar'
import React from 'react'

export const UserScreen: React.FC = () => {
  return (
    <YStack width={'100%'} backgroundColor={"#1B1D24"} flex={1}>

      <NavBar/>

      <XStack>
        <XStack width={'65%'} alignItems='baseline'>

          <Text margin={40}>
          Preferences  
          </Text>

      </XStack>
        <XStack alignItems='stretch'>

          <Text  width={'55%'}>
          Pablo Ramón Santiago Peñaranda Urbina
          </Text>

        </XStack>  
        <YStack height={'100%'}>

          <Image src={"https://cdn.discordapp.com/attachments/1039285672923627662/1250232173135528026/ca9ff635-7796-4b62-9e59-2be59cda2e3d.png?ex=666a30f2&is=6668df72&hm=4186db91a11630a97a90eac4ad0af30afb87cf03bc4fe6f533acb684841ed1cc&"} 
                alt={"foto de burro"} 
                width={100} 
                height={100} 
                contentFit='fill' 
                contentPosition={'center'}
                unoptimized 
                />  

          <YStack >

            <Text height={100} paddingBottom={10} alignContent='center'>
              My Favorites
            </Text>

            <Text  height={50}>
              Edit profile
            </Text>

            <Text  height={50}>
              Settings
            </Text>

            <Text  height={50}>
              Sign out
            </Text>

          </YStack>

        </YStack>
        
          
      </XStack>  
    </YStack>
  )
}
