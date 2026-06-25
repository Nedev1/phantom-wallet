import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ChevronDown,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  ArrowLeftRight,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
} from 'lucide-react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

const TOKENS = [
  {
    id: '1',
    symbol: 'SOL',
    name: 'Solana',
    balance: '12.582',
    usd: '$1,823.43',
    price: '$144.91',
    change: '+4.21%',
    up: true,
    color: '#9945FF',
    initial: 'S',
  },
  {
    id: '2',
    symbol: 'USDC',
    name: 'USD Coin',
    balance: '340.00',
    usd: '$340.00',
    price: '$1.00',
    change: '+0.01%',
    up: true,
    color: '#2775CA',
    initial: 'U',
  },
  {
    id: '3',
    symbol: 'BONK',
    name: 'Bonk',
    balance: '1,250,000',
    usd: '$31.25',
    price: '$0.000025',
    change: '-2.14%',
    up: false,
    color: '#F7931A',
    initial: 'B',
  },
  {
    id: '4',
    symbol: 'JUP',
    name: 'Jupiter',
    balance: '52.4',
    usd: '$62.88',
    price: '$1.20',
    change: '+8.33%',
    up: true,
    color: '#16EF94',
    initial: 'J',
  },
];

const ACTIONS = [
  { icon: ArrowUpRight, label: 'Send' },
  { icon: ArrowDownLeft, label: 'Receive' },
  { icon: CreditCard, label: 'Buy' },
  { icon: ArrowLeftRight, label: 'Swap' },
];

export default function PortfolioScreen() {
  const insets = useSafeAreaInsets();
  const [hidden, setHidden] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: '#161622', paddingTop: insets.top }}>
      {/* DEMO top banner */}
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

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 14,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            backgroundColor: '#252538',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#3a3a55',
          }}
        >
          <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: '#AB9FF2' }} />
          <Text style={{ color: '#FFFFFF', fontSize: 13, fontFamily: 'Inter_500Medium' }}>
            7xKX...m3Zp
          </Text>
          <ChevronDown size={14} color="#AB9FF2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHidden((h) => !h)}
          style={{
            backgroundColor: '#252538',
            padding: 9,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#3a3a55',
          }}
        >
          {hidden ? <EyeOff size={18} color="#AB9FF2" /> : <Eye size={18} color="#AB9FF2" />}
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
      >
        {/* Balance */}
        <View style={{ alignItems: 'center', paddingVertical: 28, paddingHorizontal: 20 }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 44,
              fontFamily: 'Inter_700Bold',
              letterSpacing: -1,
            }}
          >
            {hidden ? '••••••' : '$2,257.56'}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 6 }}>
            <TrendingUp size={14} color="#14F195" />
            <Text style={{ color: '#14F195', fontSize: 14, fontFamily: 'Inter_500Medium' }}>
              +$94.12 (+4.35%)
            </Text>
            <Text style={{ color: '#444466', fontSize: 12, fontFamily: 'Inter_400Regular' }}>
              today
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
            marginBottom: 36,
          }}
        >
          {ACTIONS.map(({ icon: Icon, label }) => (
            <View key={label} style={{ alignItems: 'center', gap: 8 }}>
              <TouchableOpacity
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  backgroundColor: '#252538',
                  borderWidth: 1,
                  borderColor: '#3a3a55',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon size={22} color="#AB9FF2" />
              </TouchableOpacity>
              <Text style={{ color: '#8888AA', fontSize: 12, fontFamily: 'Inter_500Medium' }}>
                {label}
              </Text>
            </View>
          ))}
        </View>

        {/* Tokens */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              color: '#444466',
              fontSize: 11,
              fontFamily: 'Inter_600SemiBold',
              letterSpacing: 1.5,
              marginBottom: 14,
            }}
          >
            TOKENS
          </Text>
          {TOKENS.map((token, idx) => (
            <TouchableOpacity
              key={token.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 14,
                borderBottomWidth: idx < TOKENS.length - 1 ? 1 : 0,
                borderBottomColor: '#252538',
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: token.color + '22',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 14,
                  borderWidth: 1,
                  borderColor: token.color + '55',
                }}
              >
                <Text style={{ color: token.color, fontSize: 17, fontFamily: 'Inter_700Bold' }}>
                  {token.initial}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'Inter_600SemiBold' }}>
                  {token.symbol}
                </Text>
                <Text
                  style={{
                    color: '#444466',
                    fontSize: 12,
                    fontFamily: 'Inter_400Regular',
                    marginTop: 2,
                  }}
                >
                  {hidden ? '•••' : token.balance} · {token.price}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'Inter_600SemiBold' }}>
                  {hidden ? '••••' : token.usd}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, marginTop: 3 }}>
                  {token.up ? (
                    <TrendingUp size={11} color="#14F195" />
                  ) : (
                    <TrendingDown size={11} color="#FF6B6B" />
                  )}
                  <Text
                    style={{
                      color: token.up ? '#14F195' : '#FF6B6B',
                      fontSize: 12,
                      fontFamily: 'Inter_400Regular',
                    }}
                  >
                    {token.change}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* NFTs */}
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text
            style={{
              color: '#444466',
              fontSize: 11,
              fontFamily: 'Inter_600SemiBold',
              letterSpacing: 1.5,
              marginBottom: 14,
            }}
          >
            NFTs
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
            {[
              { color: '#AB9FF2', emoji: '👾', label: 'Phantom #042' },
              { color: '#14F195', emoji: '🌊', label: 'DeGod #318' },
              { color: '#9945FF', emoji: '🔮', label: 'SMB #1991' },
            ].map((nft, i) => (
              <View
                key={i}
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 14,
                  backgroundColor: nft.color + '18',
                  borderWidth: 1,
                  borderColor: nft.color + '44',
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 32 }}>{nft.emoji}</Text>
                <Text
                  style={{
                    color: '#8888AA',
                    fontSize: 10,
                    fontFamily: 'Inter_400Regular',
                    marginTop: 6,
                  }}
                >
                  {nft.label}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Footer disclaimer */}
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 32,
            padding: 14,
            backgroundColor: '#AB9FF210',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#AB9FF230',
          }}
        >
          <Text
            style={{
              color: '#AB9FF2',
              fontSize: 12,
              fontFamily: 'Inter_500Medium',
              textAlign: 'center',
              lineHeight: 18,
            }}
          >
            🛡️ DEMO app — no real funds or wallets.{'\n'}Built for educational purposes only.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
