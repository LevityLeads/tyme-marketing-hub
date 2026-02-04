"use client";

import { useState } from "react";
import {
  Sparkles,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Send,
  Copy,
  RefreshCw,
  Image as ImageIcon,
  Hash,
  Smile,
  Clock,
  CheckCircle,
  Globe,
  ChevronDown,
} from "lucide-react";

const platforms = [
  { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-500" },
  { name: "Twitter", icon: Twitter, color: "from-blue-400 to-blue-500" },
  { name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-700" },
  { name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600" },
];

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zu", name: "isiZulu", flag: "🇿🇦" },
  { code: "af", name: "Afrikaans", flag: "🇿🇦" },
  { code: "xh", name: "isiXhosa", flag: "🇿🇦" },
  { code: "st", name: "Sesotho", flag: "🇿🇦" },
  { code: "tn", name: "Setswana", flag: "🇿🇦" },
];

const generatedPostsByLanguage: Record<string, Array<{ platform: string; content: string; hashtags: string[] }>> = {
  en: [
    {
      platform: "Instagram",
      content: "🚀 Banking made simple. Banking made Tyme.\n\nOpen your account in under 5 minutes and start saving smarter today. No queues. No paperwork. Just you and your goals.\n\n#TymeBank #DigitalBanking #SouthAfrica #FinTech #GoalSaves",
      hashtags: ["#TymeBank", "#DigitalBanking", "#SouthAfrica"],
    },
    {
      platform: "Instagram",
      content: "💰 Your money, your rules.\n\nWith GoalSave, watch your savings grow while you sleep. Set it and forget it - we'll handle the rest.\n\nTap the link in bio to get started 👆\n\n#TymeBank #Savings #MoneyGoals #FinancialFreedom",
      hashtags: ["#TymeBank", "#Savings", "#MoneyGoals"],
    },
  ],
  zu: [
    {
      platform: "Instagram",
      content: "🚀 Ukubhanga kwenziwe kwalula. Ukubhanga kwenziwe kwa-Tyme.\n\nVula i-akhawunti yakho ngaphansi kwemizuzu emi-5 uqale ukonge kahle namuhla. Ayikho imigqa. Ayikho iphepha. Nguwe nje nezinhloso zakho.\n\n#TymeBank #DigitalBanking #SouthAfrica",
      hashtags: ["#TymeBank", "#DigitalBanking", "#Ukonge"],
    },
    {
      platform: "Instagram",
      content: "💰 Imali yakho, imithetho yakho.\n\nNge-GoalSave, bukela imali yakho ikhula ngenkathi ulele. Imise bese ukhohlwa - sizokulawula konke.\n\nThepha isixhumanisi ku-bio ukuze uqale 👆\n\n#TymeBank #Ukonge #Izinhloso",
      hashtags: ["#TymeBank", "#Ukonge", "#Izinhloso"],
    },
  ],
  af: [
    {
      platform: "Instagram",
      content: "🚀 Bankwese eenvoudig gemaak. Bankwese Tyme gemaak.\n\nMaak jou rekening oop in minder as 5 minute en begin vandag slimmer spaar. Geen toue nie. Geen papierwerk nie. Net jy en jou doelwitte.\n\n#TymeBank #DigitaleBankwese #SuidAfrika",
      hashtags: ["#TymeBank", "#DigitaleBankwese", "#Spaar"],
    },
    {
      platform: "Instagram",
      content: "💰 Jou geld, jou reëls.\n\nMet GoalSave, kyk hoe jou spaargeld groei terwyl jy slaap. Stel dit en vergeet dit - ons hanteer die res.\n\nTik op die skakel in bio om te begin 👆\n\n#TymeBank #Spaar #GeldDoelwitte",
      hashtags: ["#TymeBank", "#Spaar", "#GeldDoelwitte"],
    },
  ],
  xh: [
    {
      platform: "Instagram",
      content: "🚀 Ukubhanka kwenziwe lula. Ukubhanka kwenziwe yi-Tyme.\n\nVula iakhawunti yakho ngaphantsi kwemizuzu emi-5 uze uqalise ukonga ngokukrelekrele namhlanje. Akukho migca. Akukho maphepha. Nguwe nje kunye neenjongo zakho.\n\n#TymeBank #DigitalBanking #MzantsiAfrika",
      hashtags: ["#TymeBank", "#DigitalBanking", "#Ukonga"],
    },
    {
      platform: "Instagram",
      content: "💰 Imali yakho, imithetho yakho.\n\nNge-GoalSave, bukela imali yakho ikhula ngelixa ulele. Yimisele uze ulibale - siza kulawula konke.\n\nCofa ikhonkco kwi-bio ukuze uqalise 👆\n\n#TymeBank #Ukonga #Iinjongo",
      hashtags: ["#TymeBank", "#Ukonga", "#Iinjongo"],
    },
  ],
  st: [
    {
      platform: "Instagram",
      content: "🚀 Ho etsa banka ho entsoe bonolo. Ho etsa banka ho entsoe Tyme.\n\nBula ak'haonte ea hau ka metsotso e ka tlase ho 5 'me u qale ho boloka ka bohlale kajeno. Ha ho mela. Ha ho lipampiri. Ke uena feela le lipakane tsa hau.\n\n#TymeBank #DigitalBanking #SouthAfrica",
      hashtags: ["#TymeBank", "#DigitalBanking", "#HoBoloka"],
    },
    {
      platform: "Instagram",
      content: "💰 Chelete ea hau, melao ea hau.\n\nKa GoalSave, sheba polokelo ea hau e hola ha u robetse. E beha 'me u e lebale - re tla sebetsana le tse ling.\n\nTobetsa sehokelo ho bio ho qala 👆\n\n#TymeBank #HoBoloka #Lipakane",
      hashtags: ["#TymeBank", "#HoBoloka", "#Lipakane"],
    },
  ],
  tn: [
    {
      platform: "Instagram",
      content: "🚀 Go dira banka go dirilwe bonolo. Go dira banka go dirilwe Tyme.\n\nBula akhaonte ya gago ka metsotso e e ka fa tlase ga 5 mme o simolole go boloka botlhale gompieno. Ga go na mela. Ga go na dipampiri. Ke wena fela le maikemisetso a gago.\n\n#TymeBank #DigitalBanking #SouthAfrica",
      hashtags: ["#TymeBank", "#DigitalBanking", "#GoBoloka"],
    },
    {
      platform: "Instagram",
      content: "💰 Madi a gago, melao ya gago.\n\nKa GoalSave, lebelela dipolokelo tsa gago di gola fa o robetse. E beye mme o e lebale - re tla samagana le tse dingwe.\n\nTobetsa kgolagano mo go bio go simolola 👆\n\n#TymeBank #GoBoloka #Maikemisetso",
      hashtags: ["#TymeBank", "#GoBoloka", "#Maikemisetso"],
    },
  ],
};

export default function SocialStudio() {
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGenerated, setShowGenerated] = useState(false);

  const currentLanguage = languages.find((l) => l.code === selectedLanguage);
  const generatedPosts = generatedPostsByLanguage[selectedLanguage] || generatedPostsByLanguage.en;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowGenerated(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Social Studio</h1>
          </div>
          <p className="text-gray-400">
            Create engaging social media content with AI assistance
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            {/* Platform & Language Selector */}
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Select Platform</h3>
                {/* Language Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center gap-2 px-3 py-2 bg-tyme-bg border border-tyme-border rounded-lg hover:border-tyme-cyan/50 transition-all"
                  >
                    <Globe className="w-4 h-4 text-tyme-cyan" />
                    <span className="text-sm text-white">{currentLanguage?.flag} {currentLanguage?.name}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showLanguageDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-tyme-card border border-tyme-border rounded-lg shadow-xl z-50 overflow-hidden">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code);
                            setShowLanguageDropdown(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-tyme-bg transition-colors ${
                            selectedLanguage === lang.code ? 'bg-tyme-cyan/10 text-tyme-cyan' : 'text-white'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => setSelectedPlatform(platform.name)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                      selectedPlatform === platform.name
                        ? "border-tyme-cyan bg-tyme-cyan/10"
                        : "border-tyme-border hover:border-tyme-cyan/50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}
                    >
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-white">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Input */}
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">
                What would you like to post about?
              </h3>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Promote our new GoalSave feature with an engaging post..."
                className="w-full h-32 bg-tyme-bg border border-tyme-border rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-tyme-cyan resize-none"
              />
              
              {/* Quick prompts */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Product launch", "Engagement", "Educational", "Behind the scenes"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setPrompt(tag)}
                      className="px-3 py-1.5 text-sm bg-tyme-bg border border-tyme-border rounded-full text-gray-400 hover:text-white hover:border-tyme-cyan/50 transition-all"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Options */}
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Options</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-tyme-border bg-tyme-bg text-tyme-cyan focus:ring-tyme-cyan"
                  />
                  <Hash className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">Include hashtags</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-tyme-border bg-tyme-bg text-tyme-cyan focus:ring-tyme-cyan"
                  />
                  <Smile className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">Use emojis</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-tyme-border bg-tyme-bg text-tyme-cyan focus:ring-tyme-cyan"
                  />
                  <ImageIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">Suggest image ideas</span>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Content
                </>
              )}
            </button>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Generated Content</h3>
                {showGenerated && (
                  <div className="flex items-center gap-2 text-tyme-cyan text-sm">
                    <CheckCircle className="w-4 h-4" />
                    2 variants generated
                  </div>
                )}
              </div>

              {!showGenerated ? (
                <div className="h-96 flex items-center justify-center border border-dashed border-tyme-border rounded-xl">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-500">
                      Generated content will appear here
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedPosts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-tyme-bg border border-tyme-border rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Instagram className="w-4 h-4 text-pink-500" />
                          <span className="text-sm text-gray-400">
                            Variant {index + 1}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-tyme-card rounded-lg transition-colors">
                            <Copy className="w-4 h-4 text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-tyme-card rounded-lg transition-colors">
                            <RefreshCw className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <p className="text-white whitespace-pre-line text-sm leading-relaxed">
                        {post.content}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-tyme-cyan/10 text-tyme-cyan rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {showGenerated && (
              <div className="flex gap-3">
                <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Schedule
                </button>
                <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Post Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
