import { Tabs } from 'expo-router';
import { Wallet, ArrowLeftRight, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a1a2e',
          borderTopWidth: 1,
          borderTopColor: '#2a2a3e',
          elevation: 0,
        },
        tabBarActiveTintColor: '#AB9FF2',
        tabBarInactiveTintColor: '#444466',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <Wallet color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="explorer"
        options={{
          title: 'Swap',
          tabBarIcon: ({ color }) => <ArrowLeftRight color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}
