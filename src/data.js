export const INITIAL_STATS = {
  totalInvested: 840000,
  currentAssetValue: 964250,
  monthlyIncome: 5120,
  averageRoi: 7.82,
  portfolioGrowthPct: 14.79,
  unrealizedGains: 124250,
  cashDistributions: 41960
};

export const INITIAL_PROPERTIES = [
  {
    id: 'prop-1',
    name: 'Вилла Сола Кабиати',
    city: 'Озеро Комо',
    country: 'Италия',
    type: 'Исторический павильон',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
    ownershipPercentage: 4.25,
    currentValuation: 245000,
    totalInvested: 210000,
    monthlyYield: 1450,
    roi: 8.28,
    status: 'active',
    tokenAddress: '0xAtria...7f2c',
    tokensOwned: 4250,
    tokenPrice: 50,
    completionYear: 1812
  },
  {
    id: 'prop-2',
    name: 'Киотское дзен-святилище',
    city: 'Киото',
    country: 'Япония',
    type: 'Бутик-отель',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
    ownershipPercentage: 8.50,
    currentValuation: 320000,
    totalInvested: 280000,
    monthlyYield: 1840,
    roi: 7.85,
    status: 'active',
    tokenAddress: '0xAtria...9a3f',
    tokensOwned: 8500,
    tokenPrice: 35,
    completionYear: 2021
  },
  {
    id: 'prop-3',
    name: 'Монастырь Брунеллески',
    city: 'Флоренция',
    country: 'Италия',
    type: 'Реконструированная резиденция',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    ownershipPercentage: 2.15,
    currentValuation: 165000,
    totalInvested: 150000,
    monthlyYield: 910,
    roi: 7.28,
    status: 'active',
    tokenAddress: '0xAtria...3b4e',
    tokensOwned: 2100,
    tokenPrice: 75,
    completionYear: 1540
  },
  {
    id: 'prop-4',
    name: 'Бруталистская вилла на скале',
    city: 'Майорка',
    country: 'Испания',
    type: 'Бетонный павильон',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    ownershipPercentage: 5.00,
    currentValuation: 234250,
    totalInvested: 200000,
    monthlyYield: 1320,
    roi: 7.92,
    status: 'active',
    tokenAddress: '0xAtria...1d8b',
    tokensOwned: 5000,
    tokenPrice: 40,
    completionYear: 2023
  },
  {
    id: 'prop-5',
    name: 'Коттеджи на норвежских фьордах',
    city: 'Лофотенские острова',
    country: 'Норвегия',
    type: 'Эко-коттеджный комплекс',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800',
    ownershipPercentage: 0.00,
    currentValuation: 450000,
    totalInvested: 0,
    monthlyYield: 2450,
    roi: 8.45,
    status: 'pending',
    tokenAddress: '0xAtria...8d2a',
    tokensOwned: 0,
    tokenPrice: 100,
    completionYear: 2024
  },
  {
    id: 'prop-6',
    name: 'Дом в стиле Баухаус',
    city: 'Дессау',
    country: 'Германия',
    type: 'Модернистский дуплекс',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    ownershipPercentage: 0.00,
    currentValuation: 380000,
    totalInvested: 0,
    monthlyYield: 1980,
    roi: 6.95,
    status: 'exited',
    tokenAddress: '0xAtria...4f6e',
    tokensOwned: 0,
    tokenPrice: 200,
    completionYear: 1928
  }
];

export const INITIAL_ACTIVITIES = [
  {
    id: 'act-1',
    type: 'payout',
    title: 'Получена ежемесячная выплата дохода',
    propertyName: 'Вилла Сола Кабиати',
    amount: 1450,
    date: '20 июн. 2026 г.',
    timestamp: new Date('2026-06-20T10:00:00'),
    status: 'completed',
    txHash: '0x7e4b...9a12'
  },
  {
    id: 'act-2',
    type: 'purchase',
    title: 'Приобретено 1 250 токенов (дополнительная доля 1.25%)',
    propertyName: 'Киотское дзен-святилище',
    amount: 43750,
    date: '12 июн. 2026 г.',
    timestamp: new Date('2026-06-12T15:30:00'),
    status: 'completed',
    txHash: '0x3f9c...c84d'
  },
  {
    id: 'act-3',
    type: 'valuation',
    title: 'Проведена оценка портфеля активов, данные синхронизированы',
    propertyName: 'Бруталистская вилла на скале',
    amount: 34250,
    date: '05 июн. 2026 г.',
    timestamp: new Date('2026-06-05T09:15:00'),
    status: 'completed'
  },
  {
    id: 'act-4',
    type: 'document',
    title: 'Электронная подпись подтверждена: Смарт-структурирование аренды',
    propertyName: 'Монастырь Брунеллески',
    date: '28 мая 2026 г.',
    timestamp: new Date('2026-05-28T11:45:00'),
    status: 'completed'
  },
  {
    id: 'act-5',
    type: 'payout',
    title: 'Получена ежемесячная выплата дохода',
    propertyName: 'Киотское дзен-святилище',
    amount: 1840,
    date: '20 мая 2026 г.',
    timestamp: new Date('2026-05-20T10:00:00'),
    status: 'completed',
    txHash: '0x1c8b...32fa'
  },
  {
    id: 'act-6',
    type: 'purchase',
    title: 'Первоначальная инвестиция в Виллу Сола Кабиати',
    propertyName: 'Вилла Сола Кабиати',
    amount: 210000,
    date: '15 янв. 2026 г.',
    timestamp: new Date('2026-01-15T14:00:00'),
    status: 'completed',
    txHash: '0xf8e2...ee98'
  }
];

// Historical analytics data
export const CH_MONTHLY_INCOME = [
  { label: 'Янв', value: 3800 },
  { label: 'Фев', value: 3950 },
  { label: 'Мар', value: 4100 },
  { label: 'Апр', value: 4450 },
  { label: 'Май', value: 4850 },
  { label: 'Июн', value: 5120 }
];

export const CH_PORTFOLIO_GROWTH = [
  { label: 'Янв', value: 840000 },
  { label: 'Фев', value: 852000 },
  { label: 'Мар', value: 871400 },
  { label: 'Апр', value: 894000 },
  { label: 'Май', value: 928000 },
  { label: 'Июн', value: 964250 }
];

export const CH_ASSET_ALLOCATION = [
  { name: 'Вилла Сола Кабиати', value: 245000, percentage: 25.4, color: '#c4862f' },
  { name: 'Киотское дзен-святилище', value: 320000, percentage: 33.2, color: '#e6a951' },
  { name: 'Монастырь Брунеллески', value: 165000, percentage: 17.1, color: '#a96a26' },
  { name: 'Бруталистская вилла на скале', value: 234250, percentage: 24.3, color: '#6f7d6f' }
];


