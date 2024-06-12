import React, { useState } from 'react';
import { NavBar } from '@my/ui/src/components/NavBar';
import { YStack, ScrollView, Text, XStack } from '@my/ui';
import { MangaCard } from '@my/ui/src/components/Card';
import  chunkArray  from '@my/ui/src/utils/functions/chunkArray';

const mangaData = [
  { id: 1, title: "Manga One", imageUrl: "https://example.com/manga1.png", description: "Description of Manga One" },
  { id: 2, title: "Manga Two", imageUrl: "https://example.com/manga2.png", description: "Description of Manga Two" },
    { id: 3, title: "Manga Three", imageUrl: "https://example.com/manga3.png", description: "Description of Manga Three" },
    { id: 4, title: "Manga Four", imageUrl: "https://example.com/manga4.png", description: "Description of Manga Four" },
    { id: 5, title: "Manga Five", imageUrl: "https://example.com/manga5.png", description: "Description of Manga Five" },
    { id: 6, title: "Manga Six", imageUrl: "https://example.com/manga6.png", description: "Description of Manga Six" },
  // Add more manga items here
];

export const MangaListScreen: React.FC = () => {
  const [mangaList, setMangaList] = useState(mangaData);
  const [filter, setFilter] = useState('');

  const filteredManga = mangaList.filter(manga => 
    manga.title.toLowerCase().includes(filter.toLowerCase())
  );
  const mangaRows = chunkArray(filteredManga, 5);

  return (
    <YStack width={'100%'} backgroundColor={"#1B1D24"} flex={1}>
      <NavBar/>
      <Text fontSize={20} alignSelf="center" padding={4}>
        MANGA FILTERS
      </Text>
      <input
        type="text"
        placeholder="Filter by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ margin: 10, padding: 5 }}
      />
      <ScrollView>
        {mangaRows.map((row, index) => (
          <XStack key={index} flexDirection="row" justifyContent="space-around">
            {row.map(manga => (
              <MangaCard
                key={manga.id}
                title={manga.title}
                paragraphText={manga.description}
                imageUrl={manga.imageUrl}
                imageWidth={250}
                imageHeight={300}
                size="$4"
                scale={0.9}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.875 }}
              />
            ))}
          </XStack>
        ))}
      </ScrollView>
    </YStack>
  );
}
