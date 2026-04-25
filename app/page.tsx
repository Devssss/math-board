'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownLink, 
  WalletDropdownDisconnect 
} from '@coinbase/onchainkit/wallet';
import { 
  Address, 
  Avatar, 
  Name, 
  Identity, 
  EthBalance 
} from '@coinbase/onchainkit/identity';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Wallet as WalletIcon, TrendingUp, Star, Search, ShieldCheck, Compass, Palette, BookOpen } from 'lucide-react';

const CATEGORIES = {
  exploration: {
    label: 'Exploration',
    icon: <Compass className="w-5 h-5" />,
    color: 'indigo',
    description: 'Discover new places and projects on the Base network.',
    bg: 'bg-indigo-50',
    text: 'text-indigo-600'
  },
  creation: {
    label: 'Creation',
    icon: <Palette className="w-5 h-5" />,
    color: 'emerald',
    description: 'Build, draw, and mint your own digital creations.',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600'
  },
  learning: {
    label: 'Learning',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'amber',
    description: 'Master new skills and solve on-chain challenges.',
    bg: 'bg-amber-50',
    text: 'text-amber-600'
  }
};

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      await sdk.actions.ready();
      setIsReady(true);
    };
    init();
  }, []);

  const quests = [
    { 
      id: 1,
      title: "Math Wizard", 
      category: 'learning',
      description: "Solve 10 multiplication problems on-chain.",
      reward: 150,
      actionText: "Start"
    },
    { 
      id: 2,
      title: "Savings Pro", 
      category: 'exploration',
      description: "Stake 100 $KID in your digital piggy bank.",
      reward: 300,
      actionText: "Stake"
    },
    { 
      id: 3,
      title: "Identity Badge", 
      category: 'exploration',
      description: "Register your unique on-chain kid name.",
      reward: 500,
      actionText: "Claim"
    },
    { 
      id: 4,
      title: "Digital Artist", 
      category: 'creation',
      description: "Draw and mint your first NFT on Base.",
      reward: 400,
      actionText: "Mint"
    },
    { 
      id: 5,
      title: "Eco Friend", 
      category: 'exploration',
      description: "Donate 50 $KID to carbon offset projects.",
      reward: 200,
      actionText: "Donate"
    },
    { 
      id: 6,
      title: "Code Learner", 
      category: 'learning',
      description: "Complete the first block-coding challenge.",
      reward: 250,
      actionText: "Solve"
    }
  ];

  const filteredQuests = activeCategory 
    ? quests.filter(q => q.category === activeCategory)
    : quests;

  if (!isReady) return null;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-10 shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-black text-2xl">
            B
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 font-kids">KidBoard Base</h1>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.2em]">Connected to Base</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs text-slate-400 font-bold uppercase">My Balance</span>
            <div className="flex items-center gap-2 text-blue-700">
              <span className="font-black text-xl italic">4,820</span>
              <span className="text-xs font-bold">$KID</span>
            </div>
          </div>
          
          <Wallet>
            <ConnectWallet className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-xl text-sm font-bold border-none">
              <Avatar className="h-6 w-6 mr-2" />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address className="text-slate-500" />
                <EthBalance />
              </Identity>
              <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
                Wallet
              </WalletDropdownLink>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto w-full">
        {/* Left Column - Quests & Welcome */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-8">
          {/* Hero Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 font-kids">Great job, Explorer! 🚀</h2>
              <p className="text-blue-100 text-lg opacity-90">You've earned 250 $KID today. Complete 2 more quests to hit your daily goal.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" /> Level 12 Explorer
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 7 Day Streak 🔥
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold font-kids text-slate-800">Choose your Path:</h3>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setActiveCategory(null)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 ${!activeCategory ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'}`}
              >
                All Quests
              </button>
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeCategory === key ? `${cat.bg} ${cat.text} shadow-md border-2 border-current` : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'}`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
            {activeCategory && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-slate-500 text-sm font-medium italic"
              >
                {CATEGORIES[activeCategory as keyof typeof CATEGORIES].description}
              </motion.p>
            )}
          </div>

          {/* Quests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredQuests.map(quest => (
              <QuestCard 
                key={quest.id}
                title={quest.title}
                description={quest.description}
                reward={quest.reward}
                category={quest.category}
                actionText={quest.actionText}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Leaderboard & Social */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex-1">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 font-kids uppercase tracking-wider">
              <Trophy className="w-5 h-5 text-amber-500" /> Leaderboard
            </h3>
            
            <div className="space-y-6">
              <LeaderboardItem rank={1} name="MiaTheBuilder" xp={12450} badge="🥇" active />
              <LeaderboardItem rank={2} name="Samwise_Web3" xp={11100} />
              <LeaderboardItem rank={3} name="Explorer_99" xp={9820} isSelf />
              <LeaderboardItem rank={4} name="CryptoKid01" xp={8500} />
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <button className="text-blue-600 font-bold text-sm uppercase tracking-widest hover:underline transition-all">
                View All Friends
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl">
            <h4 className="font-bold flex items-center gap-2 mb-2 font-kids">
              <Search className="w-4 h-4" /> Tip of the Day
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Always double-check your kid address before sending $KID! Base is fast, but safety first! 🛡️
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function QuestCard({ title, description, reward, category, actionText }: any) {
  const cat = CATEGORIES[category as keyof typeof CATEGORIES];

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
    >
      <div className={`w-14 h-14 ${cat.bg} ${cat.text} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
        {cat.icon}
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-[10px] font-black uppercase tracking-widest ${cat.text}`}>{cat.label}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 font-kids">{title}</h3>
      <p className="text-slate-500 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`font-bold ${cat.text}`}>
          +{reward} $KID
        </span>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">
          {actionText}
        </button>
      </div>
    </motion.div>
  );
}

function LeaderboardItem({ rank, name, xp, badge, active, isSelf }: any) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}>
      <span className={`font-black w-4 text-center ${rank === 1 ? 'text-blue-600' : 'text-slate-300'}`}>
        {rank}
      </span>
      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white">
        <Avatar address={isSelf ? '0x0000000000000000000000000000000000000000' : undefined} className="w-full h-full" />
      </div>
      <div className="flex-1">
        <p className={`text-sm font-bold ${isSelf ? 'text-blue-700' : 'text-slate-900'}`}>
          {name} {isSelf && '(You)'}
        </p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{xp.toLocaleString()} XP</p>
      </div>
      <div className="text-xs font-black">{badge || ''}</div>
    </div>
  );
}
