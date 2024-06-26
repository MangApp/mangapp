import { useMemo, useState } from 'react'
import { Check, ChevronDown } from '@tamagui/lucide-icons'
import { Adapt, Select, SelectProps, Sheet } from '@my/ui'

export const MangaPageSelect: React.FC = (props: SelectProps) => {
  const [val, setVal] = useState('apple')
  return (
    <Select value={val} onValueChange={setVal} {...props}>
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value placeholder="apple" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={999_999}>
        <Select.Viewport minWidth={200} height={'60%'}>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )
                }),
              [items],
            )}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  )
}
const items = [
  { name: 'Apple' },

  { name: 'Pear' },

  { name: 'Blackberry' },

  { name: 'Peach' },

  { name: 'Apricot' },

  { name: 'Melon' },

  { name: 'Honeydew' },

  { name: 'Starfruit' },

  { name: 'Blueberry' },

  { name: 'Raspberry' },

  { name: 'Strawberry' },

  { name: 'Mango' },

  { name: 'Pineapple' },

  { name: 'Lime' },

  { name: 'Lemon' },

  { name: 'Coconut' },

  { name: 'Guava' },

  { name: 'Papaya' },

  { name: 'Orange' },

  { name: 'Grape' },

  { name: 'Jackfruit' },

  { name: 'Durian' },
]
