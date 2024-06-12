import type { CardProps } from '@my/ui/src'
import { Button, Card, H2, Image, Paragraph, XStack } from '@my/ui/src'

interface AppCardProps extends CardProps {
  title?: string;
  paragraphText?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export function MangaCard(props: AppCardProps) {
  const { title, paragraphText, imageUrl, imageWidth, imageHeight, ...cardProps } = props;

  return (
    <Card {...cardProps}>
      <Card.Header padded>
        <H2>{title}</H2>
        <Paragraph theme="alt2">{paragraphText}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: imageWidth,
            height: imageHeight,
            uri: imageUrl,
          }}
        />
      </Card.Background>
    </Card>
  );
}