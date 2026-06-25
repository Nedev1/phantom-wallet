import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Shield,
  Bell,
  Globe,
  Lock,
  ChevronRight,
  LogOut,
  AlertTriangle,
  Key,
  Smartphone,
  LucideIcon,
} from 'lucide-react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

type SettingRowProps = {
  icon: LucideIcon;
  label: string;
  value?: string;
  danger?: boolean;
};

function SettingRow({ icon: Icon, label, value, danger }: SettingRowProps) {
  const textColor = danger ? '#FF6B6B' : '#FFFFFF';
  const iconColor = danger ? '#FF6B6B' : '#AB9FF2';
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#252538',
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: danger ? '#FF6B6B15' : '#AB9FF215',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 14,
        }}
      >
        <Icon size={18} color={iconColor} />
      </View>
      <Text style={{ color: textColor, fontSize: 15, fontFamily: 'Inter_500Medium', flex: 1 }}>
        {label}
      </Text>
      {value && (
        <Text
          style={{ color: '#444466', fontSize: 13, fontFamily: 'Inter_400Regular', marginRight: 8 }}
        >
          {value}
        </Text>
      )}
      <ChevronRight size={16} color="#333355" />
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: '#161622', paddingTop: insets.top }}>
      {/* DEMO banner */}
      <View
        style={{
          backgroundColor: '#AB9FF215',
          borderBottomWidth: 1,
          borderBottomColor: '#AB9FF230',
          paddingVertical: 5,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#AB9FF2',
            fontSize: 11,
            fontFamily: 'Inter_600SemiBold',
            letterSpacing: 1.5,
          }}
        >
          ⚠️ DEMO — NOT THE REAL PHANTOM ⚠️
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: insets.bottom + 24 }}
      >
        <Text
          style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'Inter_700Bold', marginBottom: 24 }}
        >
          Settings
        </Text>

        {/* Wallet Card */}
        <View
          style={{
            backgroundColor: '#252538',
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: '#3a3a55',
            marginBottom: 28,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              backgroundColor: '#AB9FF230',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#AB9FF244',
            }}
          >
            <Text style={{ fontSize: 22 }}>👻</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Inter_600SemiBold' }}>
              Wallet 1
            </Text>
            <Text
              style={{
                color: '#444466',
                fontSize: 12,
                fontFamily: 'Inter_400Regular',
                marginTop: 2,
              }}
            >
              7xKX...m3Zp · Solana
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#14F19520',
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderWidth: 1,
              borderColor: '#14F19544',
            }}
          >
            <Text style={{ color: '#14F195', fontSize: 12, fontFamily: 'Inter_600SemiBold' }}>
              DEMO
            </Text>
          </View>
        </View>

        {/* Security */}
        <Text
          style={{
            color: '#444466',
            fontSize: 11,
            fontFamily: 'Inter_600SemiBold',
            letterSpacing: 1.5,
            marginBottom: 8,
          }}
        >
          SECURITY
        </Text>
        <View style={{ marginBottom: 28 }}>
          <SettingRow icon={Lock} label="Auto-Lock" value="5 min" />
          <SettingRow icon={Key} label="Show Secret Phrase" />
          <SettingRow icon={Shield} label="Trusted Apps" value="3" />
        </View>

        {/* Preferences */}
        <Text
          style={{
            color: '#444466',
            fontSize: 11,
            fontFamily: 'Inter_600SemiBold',
            letterSpacing: 1.5,
            marginBottom: 8,
          }}
        >
          PREFERENCES
        </Text>
        <View style={{ marginBottom: 28 }}>
          <SettingRow icon={Globe} label="Network" value="Mainnet" />
          <SettingRow icon={Bell} label="Notifications" value="On" />
          <SettingRow icon={Smartphone} label="App Version" value="24.12.0-DEMO" />
        </View>

        {/* About Demo */}
        <View
          style={{
            backgroundColor: '#252538',
            borderRadius: 14,
            padding: 16,
            borderWidth: 1,
            borderColor: '#3a3a55',
            marginBottom: 28,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <AlertTriangle size={16} color="#F59E0B" />
            <Text style={{ color: '#F59E0B', fontSize: 13, fontFamily: 'Inter_600SemiBold' }}>
              About this Demo
            </Text>
          </View>
          <Text
            style={{
              color: '#8888AA',
              fontSize: 13,
              fontFamily: 'Inter_400Regular',
              lineHeight: 20,
            }}
          >
            This is a non-official educational demo inspired by Phantom's public interface design.
            It is <Text style={{ color: '#FF6B6B', fontFamily: 'Inter_600SemiBold' }}>NOT</Text>{' '}
            affiliated with Phantom Technologies Inc.{'\n\n'}
            No private keys, seed phrases, or real funds are stored or used.{'\n\n'}
            UI references are based on publicly available design materials and open-source SDKs.
          </Text>
        </View>

        {/* Danger Zone */}
        <Text
          style={{
            color: '#444466',
            fontSize: 11,
            fontFamily: 'Inter_600SemiBold',
            letterSpacing: 1.5,
            marginBottom: 8,
          }}
        >
          DANGER ZONE
        </Text>
        <SettingRow icon={LogOut} label="Remove Wallet" danger />
      </ScrollView>
    </View>
  );
}
