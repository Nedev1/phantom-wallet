import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowUpDown, ChevronDown, Zap, Info } from 'lucide-react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

const ROUTES = [
  { dex: 'Orca Whirlpool', fee: '0.05%', impact: '< 0.01%', best: true },
  { dex: 'Raydium CLMM', fee: '0.25%', impact: '< 0.01%', best: false },
  { dex: 'Meteora', fee: '0.04%', impact: '0.02%', best: false },
];

export default function SwapScreen() {
  const insets = useSafeAreaInsets();
  const [fromToken, setFromToken] = useState('SOL');
  const [toToken, setToToken] = useState('USDC');
  const [fromAmount, setFromAmount] = useState('1.0');
  const [_flipped, setFlipped] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  const handleFlip = () => {
    setFlipped((f) => !f);
    const tmp = fromToken;
    setFromToken(toToken);
    setToToken(tmp);
  };

  const toAmount =
    fromToken === 'SOL'
      ? (parseFloat(fromAmount || '0') * 144.91).toFixed(2)
      : (parseFloat(fromAmount || '0') / 144.91).toFixed(4);

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
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontFamily: 'Inter_700Bold' }}>Swap</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              backgroundColor: '#252538',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#3a3a55',
            }}
          >
            <Zap size={13} color="#14F195" />
            <Text style={{ color: '#14F195', fontSize: 12, fontFamily: 'Inter_500Medium' }}>
              Auto Route
            </Text>
          </View>
        </View>

        {/* From Card */}
        <View
          style={{
            backgroundColor: '#252538',
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: '#3a3a55',
            marginBottom: 2,
          }}
        >
          <Text
            style={{
              color: '#444466',
              fontSize: 12,
              fontFamily: 'Inter_500Medium',
              marginBottom: 10,
            }}
          >
            You pay
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <TextInput
              value={fromAmount}
              onChangeText={setFromAmount}
              keyboardType="numeric"
              style={{ color: '#FFFFFF', fontSize: 28, fontFamily: 'Inter_700Bold', flex: 1 }}
              placeholderTextColor="#444466"
            />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: '#161622',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#3a3a55',
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>
                {fromToken}
              </Text>
              <ChevronDown size={14} color="#AB9FF2" />
            </TouchableOpacity>
          </View>
          <Text
            style={{ color: '#444466', fontSize: 12, fontFamily: 'Inter_400Regular', marginTop: 8 }}
          >
            ≈ $
            {fromToken === 'SOL' ? (parseFloat(fromAmount || '0') * 144.91).toFixed(2) : fromAmount}{' '}
            · Balance: {fromToken === 'SOL' ? '12.582' : '340.00'} {fromToken}
          </Text>
        </View>

        {/* Flip Button */}
        <View style={{ alignItems: 'center', marginVertical: -2, zIndex: 10 }}>
          <TouchableOpacity
            onPress={handleFlip}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#AB9FF2',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 3,
              borderColor: '#161622',
            }}
          >
            <ArrowUpDown size={18} color="#161622" />
          </TouchableOpacity>
        </View>

        {/* To Card */}
        <View
          style={{
            backgroundColor: '#252538',
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: '#3a3a55',
            marginTop: 2,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#444466',
              fontSize: 12,
              fontFamily: 'Inter_500Medium',
              marginBottom: 10,
            }}
          >
            You receive
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 28, fontFamily: 'Inter_700Bold', flex: 1 }}>
              {toAmount}
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: '#161622',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#3a3a55',
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>
                {toToken}
              </Text>
              <ChevronDown size={14} color="#AB9FF2" />
            </TouchableOpacity>
          </View>
          <Text
            style={{ color: '#444466', fontSize: 12, fontFamily: 'Inter_400Regular', marginTop: 8 }}
          >
            ≈ ${toToken === 'USDC' ? toAmount : (parseFloat(toAmount || '0') * 144.91).toFixed(2)} ·
            Balance: 0.00 {toToken}
          </Text>
        </View>

        {/* Best Route */}
        <Text
          style={{
            color: '#444466',
            fontSize: 11,
            fontFamily: 'Inter_600SemiBold',
            letterSpacing: 1.5,
            marginBottom: 12,
          }}
        >
          ROUTES
        </Text>
        {ROUTES.map((route, i) => (
          <TouchableOpacity
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 14,
              backgroundColor: route.best ? '#AB9FF215' : '#252538',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: route.best ? '#AB9FF244' : '#3a3a55',
              marginBottom: 8,
            }}
          >
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Inter_600SemiBold' }}>
                  {route.dex}
                </Text>
                {route.best && (
                  <View
                    style={{
                      backgroundColor: '#AB9FF2',
                      borderRadius: 6,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                    }}
                  >
                    <Text
                      style={{ color: '#161622', fontSize: 10, fontFamily: 'Inter_600SemiBold' }}
                    >
                      BEST
                    </Text>
                  </View>
                )}
              </View>
              <Text
                style={{
                  color: '#444466',
                  fontSize: 12,
                  fontFamily: 'Inter_400Regular',
                  marginTop: 3,
                }}
              >
                Fee: {route.fee} · Price impact: {route.impact}
              </Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: route.best ? '#AB9FF2' : '#444466',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {route.best && (
                <View
                  style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#AB9FF2' }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}

        {/* Info row */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            marginTop: 6,
            marginBottom: 20,
          }}
        >
          <Info size={13} color="#444466" />
          <Text style={{ color: '#444466', fontSize: 12, fontFamily: 'Inter_400Regular' }}>
            Rate: 1 SOL = 144.91 USDC · Slippage: 0.5%
          </Text>
        </View>

        {/* Swap Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#AB9FF2',
            borderRadius: 14,
            padding: 16,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#161622', fontSize: 16, fontFamily: 'Inter_700Bold' }}>
            Swap {fromToken} → {toToken}
          </Text>
        </TouchableOpacity>

        {/* Demo disclaimer */}
        <View
          style={{
            marginTop: 20,
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
            🛡️ DEMO — No real swaps are executed.{'\n'}For educational purposes only.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
