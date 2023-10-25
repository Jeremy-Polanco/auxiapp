import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

import styled from "styled-components/native";
import { useMemo } from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
      tabBar={(props) => <TabBar {...props} />}
    ></Tabs>
  );
}

const TabBar = ({ navigation }: any) => {
  const state = navigation.getState();
  const actualRoute = state.routes[state.index].name;

  const routes = useMemo(() => {
    return [
      { id: 1, name: "index" as any },
      { id: 2, name: "home" as any },
      { id: 3, name: "vista" as any },
      { id: 4, name: "form" as any },
    ];
  }, []);

  return (
    <TabBarWrapper>
      {routes.map(({ name, id }) => {
        let iconName: string = "";

        let focused = actualRoute === name;

        const color = focused ? "#222" : "#fff";

        if (name.includes("/")) {
          focused = name.includes(actualRoute.split(" ")[0]);
        }

        switch (name) {
          case "index":
            iconName = "home";
            break;

          case "home":
            iconName = "hospital-o";
            break;

          case "vista":
            iconName = "ambulance";
            break;

          case "form":
            iconName = "wpforms";
            break;
        }

        if (iconName === "home") {
          return (
            <Link href={"/(tabs)"} asChild key={id}>
              <TabBarItem>
                <TabBarIconAndLabelWrapper>
                  <TabBarIcon name={iconName} color={color} />
                  <TabBarLabelText
                    color={color}
                    fontWeight={focused ? "500" : "normal"}
                  >
                    Inicio
                  </TabBarLabelText>
                </TabBarIconAndLabelWrapper>
              </TabBarItem>
            </Link>
          );
        } else if (iconName === "hospital-o") {
          return (
            <Link href={name} asChild key={id}>
              <TabBarItem>
                <TabBarIconAndLabelWrapper>
                  <TabBarIcon name={iconName} color={color} />
                  <TabBarLabelText
                    color={color}
                    fontWeight={focused ? "500" : "normal"}
                  >
                    Emergencia
                  </TabBarLabelText>
                </TabBarIconAndLabelWrapper>
              </TabBarItem>
            </Link>
          );
        } else if (iconName === "ambulance") {
          return (
            <Link href={name} asChild key={id}>
              <TabBarItem>
                <TabBarIconAndLabelWrapper>
                  <TabBarIcon name={iconName} color={color} />
                  <TabBarLabelText
                    color={color}
                    fontWeight={focused ? "500" : "normal"}
                  >
                    Pantalla
                  </TabBarLabelText>
                </TabBarIconAndLabelWrapper>
              </TabBarItem>
            </Link>
          );
        } else if (iconName === "wpforms") {
          return (
            <Link href={name} asChild key={id}>
              <TabBarItem>
                <TabBarIconAndLabelWrapper>
                  <TabBarIcon name={iconName} color={color} />
                  <TabBarLabelText
                    color={focused ? "#222" : "#fff"}
                    fontWeight={focused ? "500" : "normal"}
                  >
                    Formulario
                  </TabBarLabelText>
                </TabBarIconAndLabelWrapper>
              </TabBarItem>
            </Link>
          );
        }
      })}
    </TabBarWrapper>
  );
};

const TabBarWrapper = styled.SafeAreaView`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: null;
  transform: translate(0);
  background: #dcdcdc;
  height: 56px;
  border-top: 1px solid black;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  flex-direction: row;
`;

const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
`;

const TabBarIconAndLabelWrapper = styled.View`
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  min-width: 25px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const TabBarLabelText = styled.Text<{ color: string; fontWeight: string }>`
  color: ${(props) => props.color};
  font-size: 11px;
  font-weight: ${(props) => props.fontWeight};
`;
