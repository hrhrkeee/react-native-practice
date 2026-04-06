import { AppScreen } from "@/components/screens/AppScreen";
import * as React from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { List, Searchbar } from "react-native-paper";

interface Item {
  title: string;
  description: string;
  icon: string;
  isStar: boolean;
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [items, setItems] = React.useState<Item[]>([
    {
      title: "Folder Item",
      description: "This is a folder",
      icon: "folder",
      isStar: false,
    },
    {
      title: "File Item",
      description: "This is a file",
      icon: "file",
      isStar: true,
    },
    {
      title: "Image Item",
      description: "This is an image",
      icon: "image",
      isStar: false,
    },
    {
      title: "Image Item",
      description: "This is an image",
      icon: "home",
      isStar: false,
    },
    {
      title: "Image Item",
      description: "This is an image",
      icon: "account-circle",
      isStar: false,
    },
  ]);

  const toggleStar = (index: number) => {
    const newItems = [...items];
    newItems[index].isStar = !newItems[index].isStar;
    setItems(newItems);
  };

  return (
    <AppScreen title="Search">
      <ScrollView>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        <Text style={{ paddingVertical: 30 }}>Search Query: {searchQuery}</Text>

        <List.AccordionGroup>
          <List.Accordion title="Accordion 1" id="1">
            {items.map((item, index) => (
              <List.Item
                key={index}
                title={item.title}
                description={item.description}
                left={(props) => <List.Icon {...props} icon={item.icon} />}
                right={(props) => (
                  <Pressable onPress={() => toggleStar(index)}>
                    <List.Icon
                      {...props}
                      icon={item.isStar ? "star" : "star-outline"}
                    />
                  </Pressable>
                )}
              />
            ))}
          </List.Accordion>
          <List.Accordion title="Accordion 2" id="2">
            <List.Item title="Item 2" />
          </List.Accordion>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </AppScreen>
  );
}
