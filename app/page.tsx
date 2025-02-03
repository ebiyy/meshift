"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
const successStories = [
  {
    name: "山田 優子",
    age: 29,
    role: "マーケティング担当",
    avatar: "/images/community/user1.jpg",
    beforeImage: "/images/community/before1.jpg",
    afterImage: "/images/community/after1.jpg",
    challenge: "仕事の忙しさで不規則な食生活",
    achievement: {
      duration: "3ヶ月",
      mainResult: "体重-5kg、体脂肪率-4%",
      subResults: ["朝食習慣の定着", "野菜摂取量2倍", "睡眠の質向上"],
    },
    story: {
      motivation:
        "30歳を前に健康的な生活習慣を確立したいと思ったことがきっかけです。",
      process: [
        "最初は写真を撮って記録するだけから始めました",
        "コミュニティで同じ目標を持つ仲間と出会い、モチベーションが上がりました",
        "栄養士さんのアドバイスで食事内容を少しずつ改善",
        "仲間との定期的なオンラインミーティングで継続できました",
      ],

      tips: [
        "無理なく続けられる小さな目標設定",
        "週1回の食事記録チェック",
        "コミュニティでの励まし合い",
      ],
    },
    testimonial:
      "同じ悩みを持つ仲間がいることで、諦めずに続けられました。今では健康的な食生活が習慣になっています。",
    communityActivities: [
      "週1回のオンラインミーティング参加",
      "毎日の食事記録シェア",
      "レシピ交換会への参加",
      "目標達成お祝い会の開催",
    ],
  },
  {
    name: "中村 健太",
    age: 32,
    role: "システムエンジニア",
    avatar: "/images/community/user2.jpg",
    beforeImage: "/images/community/before2.jpg",
    afterImage: "/images/community/after2.jpg",
    challenge: "運動不足と夜食の習慣",
    achievement: {
      duration: "6ヶ月",
      mainResult: "深夜の食事回数ゼロ、睡眠時間2時間増加",
      subResults: ["体重-7kg", "血圧の正常化", "仕事効率の向上"],
    },
    story: {
      motivation: "健康診断で警告を受け、生活習慣を見直す必要性を感じました。",
      process: [
        "22時以降の食事を控える目標を設定",
        "コミュニティの夜型改善グループに参加",
        "代替となるストレス解消法を見つけた",
        "睡眠の質が改善し、朝型の生活に",
      ],

      tips: [
        "夜食の代わりにハーブティーを飲む",
        "仲間と就寝時間を報告し合う",
        "休日の生活リズムも維持",
      ],
    },
    testimonial:
      "プログラマーは夜型が当たり前だと思っていましたが、朝型の生活に切り替えて体調が劇的に改善しました。",
    communityActivities: [
      "夜型改善チャレンジへの参加",
      "朝活グループでの情報交換",
      "週末のオンラインヨガ参加",
      "生活リズム改善記録のシェア",
    ],
  },
];

const testimonials = [
  {
    name: "田中 美咲",
    age: 29,
    title: "フリーランスデザイナー",
    before: "在宅ワークで不規則な食生活、週3回以上の外食",
    after: "規則正しい食事習慣を確立、自炊率80%に向上",
    quote:
      "3ヶ月で-4kgの減量に成功。肌の調子も良くなり、仕事のパフォーマンスも上がりました。",
    achievement: "体重: 63kg → 59kg / 体脂肪率: 32% → 27%",
    avatar: "/images/testimonials/user1.jpg",
  },
  {
    name: "鈴木 健一",
    age: 32,
    title: "ITエンジニア",
    before: "夜食が習慣化、野菜不足、慢性的な疲労感",
    after: "22時以降の食事ゼロ、1日350gの野菜摂取を達成",
    quote:
      "AIのレシピ提案で、手軽に栄養バランスの良い食事を続けられています。食費も月2万円削減。",
    achievement: "睡眠の質スコア: 65点 → 85点",
    avatar: "/images/testimonials/user2.jpg",
  },
  {
    name: "佐藤 優子",
    age: 31,
    title: "コンテンツライター",
    before: "運動不足、ストレス発散の間食が多い",
    after: "週3回のヨガ習慣、間食を果物・ナッツに変更",
    quote:
      "コミュニティで同年代の仲間と繋がり、モチベーション維持できています。便秘も改善！",
    achievement: "ウエストサイズ: 73cm → 68cm",
    avatar: "/images/testimonials/user3.jpg",
  },
];

const features = [
  {
    title: "AI栄養分析",
    description: "料理の写真を撮るだけで栄養素を自動分析",
    icon: "📸",
    details: {
      overview:
        "最新のAI技術を活用して、食事の写真から40種類以上の栄養素を瞬時に分析。",
      benefits: [
        "写真を撮るだけの簡単操作",
        "40種類以上の栄養素を分析",
        "過去の食事履歴との比較",
        "栄養バランススコアの表示",
      ],

      stats: {
        accuracy: "分析精度95%以上",
        speed: "分析時間3秒以内",
        nutrients: "40種類以上の栄養素対応",
      },
      howToUse: [
        "料理の写真を撮影",
        "AIが自動で栄養素を分析",
        "詳細な栄養レポートを確認",
        "不足栄養素のアドバイスを受け取る",
      ],
    },
  },
  {
    title: "レシピ提案",
    description: "不足栄養素を補うレシピをAIが提案",
    icon: "🍳",
    details: {
      overview:
        "あなたの食事履歴と不足栄養素を分析し、最適なレシピを提案。1000種類以上のレシピデータベースから選択。",
      benefits: [
        "不足栄養素を考慮したレシピ提案",
        "調理時間や難易度での絞り込み",
        "食材の在庫状況との連携",
        "季節や天候に応じた提案",
      ],

      stats: {
        recipes: "1000種類以上のレシピ",
        customization: "好み・アレルギー対応",
        update: "週3回のレシピ更新",
      },
      howToUse: [
        "食事履歴から不足栄養素を確認",
        "条件に合わせてレシピを検索",
        "詳細な作り方を確認",
        "買い物リストを自動作成",
      ],
    },
  },
  {
    title: "食材管理",
    description: "レシートを撮影するだけで食材を自動管理",
    icon: "📝",
    details: {
      overview:
        "レシートを撮影するだけで食材を自動管理。賞味期限の通知や使い切りレシピの提案で、食材の無駄を削減。",
      benefits: [
        "レシート読み取りで簡単登録",
        "賞味期限の自動管理",
        "使い切りレシピの提案",
        "食費の自動集計",
      ],

      stats: {
        saving: "食材廃棄率70%削減",
        accuracy: "レシート読取精度98%",
        notification: "賞味期限3日前に通知",
      },
      howToUse: [
        "レシートを撮影して食材を登録",
        "在庫状況をいつでも確認",
        "賞味期限が近い食材をチェック",
        "使い切りレシピを活用",
      ],
    },
  },
  {
    title: "コミュニティ機能",
    description: "同じ悩みを持つ仲間と繋がる",
    icon: "👥",
    details: {
      overview:
        "同じ目標を持つ仲間と繋がり、モチベーションを高め合えるコミュニティ。食事の記録や成功体験を共有。",
      benefits: [
        "同年代の仲間との交流",
        "成功体験の共有",
        "専門家からのアドバイス",
        "目標達成の仲間作り",
      ],

      stats: {
        users: "月間アクティブ10万人",
        posts: "1日平均1000件の投稿",
        engagement: "コメント率80%",
      },
      howToUse: [
        "興味のあるグループに参加",
        "日々の食事記録を共有",
        "仲間の投稿にコメント",
        "専門家に相談",
      ],
    },
  },
];

const benefits = [
  {
    title: "時間節約",
    description: "面倒な栄養計算から解放",
    icon: "⏰",
    stats: "1日あたり約20分の時間節約",
    details: [
      "写真を撮るだけで栄養価を自動計算",
      "買い物リストの自動作成",
      "献立の自動提案",
    ],

    impact: "月間約10時間の時間を有効活用できます",
  },
  {
    title: "健康管理",
    description: "バランスの取れた食生活を実現",
    icon: "🥗",
    stats: "必要栄養素充足率 平均92%",
    details: [
      "AIによる栄養バランスチェック",
      "不足栄養素の自動補完提案",
      "体調変化の可視化",
    ],

    impact: "3ヶ月で87%のユーザーが体調改善を実感",
  },
  {
    title: "コスト削減",
    description: "食材の無駄を削減",
    icon: "💰",
    stats: "月間食費 平均15%削減",
    details: ["食材の使い切り提案", "セール情報との連携", "食費の自動集計"],
    impact: "年間約72,000円の食費削減が可能に",
  },
  {
    title: "生活改善",
    description: "規則正しい食生活でパフォーマンス向上",
    icon: "📈",
    stats: "睡眠の質 平均23%向上",
    details: [
      "食事時間の最適化提案",
      "生活リズムの可視化",
      "モチベーション管理",
    ],

    impact: "92%のユーザーが仕事効率の向上を実感",
  },
];

const plans = [
  {
    name: "フリープラン",
    price: "¥0",
    period: "ずっと無料",
    description: "基本的な食事管理を始めたい方向け",
    features: [
      {
        text: "基本機能無料",
        detail: "1日3回までの食事記録と基本的な栄養分析",
      },
      {
        text: "AIによる栄養分析",
        detail: "カロリー、タンパク質、脂質、炭水化物の基本分析",
      },
      { text: "基本的なレシピ提案", detail: "100種類以上の基本レシピから提案" },
    ],

    limitations: [
      "詳細な栄養素分析は制限あり",
      "レシピのカスタマイズ機能なし",
      "コミュニティ機能の利用不可",
    ],

    buttonText: "無料で始める",
    highlight: false,
  },
  {
    name: "プレミアムプラン",
    price: "¥980",
    period: "/月（年間契約の場合）",
    description: "本気で食生活を改善したい方向け",
    features: [
      {
        text: "無制限の栄養分析",
        detail: "すべての食事を詳細に分析、40種類以上の栄養素を追跡",
      },
      {
        text: "高度なレシピ提案",
        detail: "1000種類以上のレシピから、AIがあなたに最適なものを提案",
      },
      { text: "食材管理機能", detail: "冷蔵庫の在庫管理と食材の使い切り提案" },
      {
        text: "コミュニティ機能",
        detail: "同じ目標を持つ仲間とつながり、モチベーションを維持",
      },
    ],

    benefits: [
      "初月無料トライアル",
      "解約いつでも可能",
      "カスタマーサポート優先対応",
    ],

    buttonText: "いますぐ始める",
    highlight: true,
  },
];

export default function Home() {
  return (
    <div data-oid="rk-0j4s">
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/20"
        data-oid="spvswhk"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ihl8:sn"
        >
          <div
            className="flex items-center justify-between h-16"
            data-oid="ge1egis"
          >
            <div className="flex items-center" data-oid="0:5z93j">
              <Link
                href="/"
                className="flex items-center gap-2"
                data-oid="uzoxzxz"
              >
                <span
                  className="text-2xl font-bold bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
                  data-oid="_sptrug"
                >
                  MESHIFT
                </span>
              </Link>
              <nav
                className="hidden md:ml-8 md:flex md:space-x-8"
                data-oid="9a0wqna"
              >
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#F46036] hover:text-[#F46036]/80 transition-colors"
                  data-oid="axm5ikr"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="uqalv-u"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      data-oid="p7yw0y4"
                    />
                  </svg>
                  ダッシュボード
                </Link>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-[#1B998B] px-3 py-2 text-sm font-medium transition-colors"
                  data-oid="a8h_nd6"
                >
                  機能
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-[#1B998B] px-3 py-2 text-sm font-medium transition-colors"
                  data-oid="vci-v70"
                >
                  料金プラン
                </Link>
                <Link
                  href="/community"
                  className="text-gray-600 hover:text-[#1B998B] px-3 py-2 text-sm font-medium transition-colors"
                  data-oid="9g:thv6"
                >
                  コミュニティ
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4" data-oid="a3xait7">
              <Button
                asChild
                variant="ghost"
                className="hidden md:inline-flex"
                data-oid="ccmuadr"
              >
                <Link href="/login" data-oid="xmpmavq">
                  ログイン
                </Link>
              </Button>
              <Button
                asChild
                className="bg-[#F46036] hover:bg-[#F46036]/90 text-white"
                data-oid="y4jg5de"
              >
                <Link href="/sign-up" data-oid="-mz6:uh">
                  無料で始める
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="pt-16" data-oid="ay1671j">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] bg-gradient-to-br from-[#2E294E] via-[#1B998B] to-[#2E294E]"
          data-oid="_5dwcgi"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
            data-oid="db5opib"
          ></div>
          <div className="absolute inset-0 overflow-hidden" data-oid="j-z5t_1">
            <div
              className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-gradient-to-r from-[#F46036]/20 to-transparent rounded-full blur-3xl animate-pulse"
              data-oid="401e53:"
            ></div>
            <div
              className="absolute w-[800px] h-[800px] -bottom-40 -right-40 bg-gradient-to-r from-[#FFFD98]/20 to-transparent rounded-full blur-3xl animate-pulse delay-700"
              data-oid="q5ln6j7"
            ></div>
          </div>
          {/* サイバーパンク風のグリッドアニメーション */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            data-oid="21dc58u"
          ></div>
          {/* 背景アニメーション */}
          <div className="absolute inset-0 overflow-hidden" data-oid="ygvh3pt">
            <div
              className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
              data-oid="-fpm:ik"
            />

            <div className="absolute inset-0" data-oid="qil50l5">
              {/* ノイズテクスチャ */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                data-oid=".kmumtq"
              >
                <div
                  className="absolute inset-0 bg-[url('/images/noise.png')] animate-noise"
                  data-oid=".jvv0sg"
                ></div>
              </div>
              {/* カラーオーバーレイ */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-[1px] animate-gradient"
                data-oid="shwebom"
              ></div>
            </div>
          </div>
          <div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="2sb-ycw"
          >
            <div
              className="relative z-10 pb-8 glass-morphism sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 bg-gray-900/40"
              data-oid="fcuxjwy"
            >
              <div
                className="lg:grid lg:grid-cols-12 lg:gap-8 items-center"
                data-oid="fhjcoaw"
              >
                <div className="lg:col-span-6" data-oid="igf3_dq">
                  <main
                    className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
                    data-oid="618w259"
                  >
                    <div
                      className="sm:text-center lg:text-left"
                      data-oid="m4_g928"
                    >
                      <motion.h1
                        className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        data-oid="jsufx81"
                      >
                        <span className="block" data-oid="l:dsi2r">
                          Your Food,
                        </span>
                        <span
                          className="block text-[#F46036] animate-gradient-x"
                          data-oid="1a:7kp6"
                        >
                          Your Shift
                        </span>
                        <span
                          className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal"
                          data-oid="we2dft0"
                        >
                          あなたらしい食事で、 <br data-oid="6hs2b_c" />
                          あなたらしい変化を。
                        </span>
                      </motion.h1>
                      <div className="mt-6 space-y-4" data-oid="e2acs.8">
                        <p
                          className="text-base leading-relaxed text-[#FFFD98] sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0"
                          data-oid="vus.1bm"
                        >
                          20代後半からの体の変化に寄り添う、
                          <br data-oid="7x7frdz" />
                          あなただけの食生活マネージメント
                        </p>
                        <div
                          className="flex flex-col sm:flex-row gap-4 sm:items-center"
                          data-oid="dyj:74_"
                        >
                          <div
                            className="text-white/80 text-sm sm:text-base flex items-center gap-2"
                            data-oid="agebth9"
                          >
                            <svg
                              className="w-5 h-5 text-[#FFFD98]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              data-oid="etea15h"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                                data-oid="r:.x6s5"
                              />
                            </svg>
                            <span data-oid="2cxw1ku">14日間無料トライアル</span>
                          </div>
                          <div
                            className="text-white/80 text-sm sm:text-base flex items-center gap-2"
                            data-oid="ksc4bik"
                          >
                            <svg
                              className="w-5 h-5 text-[#FFFD98]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              data-oid="q.r5q99"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                                data-oid="wjovv2s"
                              />
                            </svg>
                            <span data-oid="n45o-5a">
                              クレジットカード登録不要
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
                        data-oid="dkjhzar"
                      >
                        <Button
                          asChild
                          className="min-h-[48px] flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-[#F46036] hover:bg-[#F46036]/90 transition-all transform hover:scale-105 shadow-lg md:text-lg md:px-12 border-2 border-[#FFFD98] group"
                          data-oid="g4uf8ch"
                        >
                          <div
                            className="relative overflow-hidden"
                            data-oid=":iedy3s"
                          >
                            <Link
                              href="/sign-up"
                              className="flex items-center gap-2"
                              data-oid="l:wdwpa"
                            >
                              <span data-oid="1fi..3l">今すぐ始める</span>
                              <span className="text-sm" data-oid="s:sdtde">
                                (無料トライアル)
                              </span>
                            </Link>
                            <div
                              className="absolute inset-0 bg-[#FFFD98] opacity-0 group-hover:opacity-20 transition-opacity"
                              data-oid="3jt0.lh"
                            ></div>
                          </div>
                        </Button>
                        <Button
                          asChild
                          className="min-h-[48px] flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-[#2E294E] bg-white hover:bg-white/90 transition-all md:text-lg md:px-12 group"
                          data-oid="cz5vzym"
                        >
                          <Link
                            href="/features"
                            className="flex items-center gap-2"
                            data-oid="uo1653-"
                          >
                            <span data-oid="uskbw6v">機能詳細を見る</span>
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              data-oid="cdo275x"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                                data-oid="-thc7kp"
                              />
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </main>
                </div>
                <div
                  className="lg:col-span-6 lg:relative lg:h-full"
                  data-oid="_tq4:ws"
                >
                  <motion.div
                    className="relative mt-8 lg:mt-0 h-64 sm:h-72 md:h-96 lg:h-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    data-oid="viwt:br"
                  >
                    <div
                      className="relative h-full max-w-md mx-auto lg:max-w-none"
                      data-oid="1hzv5:g"
                    >
                      <div className="relative group" data-oid="0ima26e">
                        <div
                          className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
                          data-oid="xpg4zx:"
                        ></div>
                        <img
                          className="relative w-full h-full object-contain rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          src="/images/app-screenshot.png"
                          alt="MeShiftアプリのスクリーンショット"
                          data-oid="h:oh6d9"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 mix-blend-multiply opacity-20 rounded-lg"
                      data-oid="p15t8k0"
                    ></div>
                    <button
                      onClick={() => {
                        const dialog = document.getElementById(
                          "demo-video",
                        ) as HTMLDialogElement;
                        dialog?.showModal();
                      }}
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                      data-oid="zrxxmqk"
                    >
                      <div
                        className="bg-white bg-opacity-80 p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
                        data-oid="868r9-h"
                      >
                        <svg
                          className="w-10 h-10 sm:w-12 sm:h-12 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          data-oid="47.c379"
                        >
                          <path
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            data-oid="4l:ghug"
                          />
                        </svg>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <dialog
          id="demo-video"
          className="modal p-0 w-11/12 max-w-[90vw] md:max-w-4xl rounded-lg backdrop:bg-gray-900/50"
          data-oid="zls3sdm"
        >
          <div className="relative" data-oid="o4qq.mf">
            <button
              onClick={() => {
                const dialog = document.getElementById(
                  "demo-video",
                ) as HTMLDialogElement;
                dialog?.close();
              }}
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
              data-oid="chx2d81"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="7_pzuw9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="d6sj-5_"
                />
              </svg>
            </button>
            <video controls className="w-full rounded-lg" data-oid="70xnj5-">
              <source
                src="/videos/demo.mp4"
                type="video/mp4"
                data-oid="v-vb4g2"
              />
              お使いのブラウザは動画の再生に対応していません。
            </video>
          </div>
        </dialog>
        {/* Features Section */} {/* Age Focus Section */}
        <section
          className="py-20 bg-[#2E294E] relative overflow-hidden"
          data-oid="ltuxrj_"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"
            data-oid=":cwx89u"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="f-a9anu"
          >
            <div
              className="lg:grid lg:grid-cols-12 lg:gap-8 items-center"
              data-oid="pck-xqu"
            >
              <div className="col-span-5" data-oid="8tn:kue">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center lg:text-left"
                  data-oid="ej872b_"
                >
                  <h2
                    className="text-3xl font-bold text-white sm:text-4xl"
                    data-oid=".u:0kb."
                  >
                    <span className="text-[#FFFD98]" data-oid="w.fmdkg">
                      28歳からの変化
                    </span>
                    に
                    <br data-oid=":zmwno1" /> 気づいていますか？
                  </h2>
                  <div className="mt-8 space-y-6" data-oid="jxpt59y">
                    <div
                      className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
                      data-oid="-evj:ec"
                    >
                      <h3
                        className="text-xl font-medium text-[#F46036] mb-4"
                        data-oid="cq.m3_6"
                      >
                        体の変化
                      </h3>
                      <ul
                        className="space-y-3 text-gray-300"
                        data-oid="lwjqp:t"
                      >
                        <li className="flex items-center" data-oid="hxwa20c">
                          <span
                            className="text-[#FFFD98] mr-2"
                            data-oid="s7rcco8"
                          >
                            ●
                          </span>
                          代謝が落ちて太りやすくなった
                        </li>
                        <li className="flex items-center" data-oid="dhwm5pq">
                          <span
                            className="text-[#FFFD98] mr-2"
                            data-oid="ihoqea2"
                          >
                            ●
                          </span>
                          疲れが取れにくい
                        </li>
                        <li className="flex items-center" data-oid="ii9aizh">
                          <span
                            className="text-[#FFFD98] mr-2"
                            data-oid="mpy98pb"
                          >
                            ●
                          </span>
                          肌の調子が以前より悪い
                        </li>
                      </ul>
                    </div>
                    <div
                      className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
                      data-oid="ubgtu8l"
                    >
                      <h3
                        className="text-xl font-medium text-[#F46036] mb-4"
                        data-oid="u6uae1l"
                      >
                        生活習慣の変化
                      </h3>
                      <ul
                        className="space-y-3 text-gray-300"
                        data-oid="50pgsby"
                      >
                        <li className="flex items-center" data-oid="afsfuio">
                          <span
                            className="text-[#FFFD98] mr-2"
                            data-oid="bidhmnh"
                          >
                            ●
                          </span>
                          仕事で不規則な食事が増えた
                        </li>
                        <li className="flex items-center" data-oid="895wa6s">
                          <span
                            className="text-[#FFFD98] mr-2"
                            data-oid="tc4e5q3"
                          >
                            ●
                          </span>
                          運動する時間が取れない
                        </li>
                        <li className="flex items-center" data-oid="up0m4s5">
                          <span
                            className="text-[#FFFD98] mr-2"
                            data-oid="en2gysw"
                          >
                            ●
                          </span>
                          ストレス解消が食事に偏りがち
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-7 mt-10 lg:mt-0" data-oid="qy:y41e">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                  data-oid="5un7oza"
                >
                  <div
                    className="relative rounded-lg overflow-hidden"
                    data-oid=".r5ptpm"
                  >
                    <div className="aspect-w-16 aspect-h-9" data-oid="85ww19h">
                      <img
                        src="/images/lifestyle-change.png"
                        alt="ライフスタイルの変化"
                        className="object-cover"
                        data-oid="xqf3m:r"
                      />
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[#2E294E]/80 to-transparent"
                      data-oid="wcf1.x6"
                    >
                      <div
                        className="absolute bottom-6 left-6 text-white"
                        data-oid="m5drvye"
                      >
                        <div
                          className="text-[#FFFD98] text-lg font-medium mb-2"
                          data-oid="4qq025c"
                        >
                          今なら
                        </div>
                        <div
                          className="text-3xl font-bold mb-2"
                          data-oid="ik3qxwy"
                        >
                          1ヶ月無料トライアル
                        </div>
                        <Button
                          asChild
                          className="bg-[#F46036] hover:bg-[#F46036]/90 text-white px-6 py-2 rounded-md"
                          data-oid="qa2nhg."
                        >
                          <Link href="/sign-up" data-oid="u4kdz6y">
                            無料で始める
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Solution Stories Section */}
        <section
          className="py-24 bg-gradient-to-b from-[#2E294E] via-[#1B998B] to-[#2E294E] relative overflow-hidden"
          data-oid="2:.eylw"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"
            data-oid="0103:_i"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="701dgnz"
          >
            <div className="lg:text-center mb-16" data-oid=":8s1jgv">
              <h2
                className="text-4xl font-extrabold text-white sm:text-5xl"
                data-oid="3yg.aa9"
              >
                あなたの課題に、
                <span
                  className="block mt-2 bg-gradient-to-r from-[#FFFD98] to-[#F46036] bg-clip-text text-transparent"
                  data-oid="j6:fjpl"
                >
                  AIが寄り添う解決方法を。
                </span>
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto"
                data-oid="709pom1"
              >
                20代後半からの体の変化に合わせた、スマートな食生活改善をサポート
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              data-oid="f1y41p0"
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                data-oid="ix-6t1e"
              >
                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="sglnx.v"
                >
                  <div
                    className="w-12 h-12 bg-[#F46036] rounded-full flex items-center justify-center text-white text-xl font-bold"
                    data-oid="r2i08ng"
                  >
                    1
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    data-oid=":p8q19_"
                  >
                    時間がない人へ
                  </h3>
                </div>
                <div className="space-y-6" data-oid="ho98wjw">
                  <div className="flex items-start gap-4" data-oid="t2s-bz4">
                    <div
                      className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"
                      data-oid="2_p2h2a"
                    >
                      ⏰
                    </div>
                    <div data-oid="5q-t2o:">
                      <div
                        className="flex items-center gap-2 mb-2"
                        data-oid="946w534"
                      >
                        <p
                          className="text-[#FFFD98] font-medium"
                          data-oid=".2eyivn"
                        >
                          よくある課題
                        </p>
                        <span
                          className="text-sm text-gray-300"
                          data-oid="t.x0dck"
                        >
                          (28歳・会社員)
                        </span>
                      </div>
                      <p className="text-gray-200" data-oid="upvxrsn">
                        「仕事が忙しくて、食事の準備に時間をかけられない。外食や簡単な食事で済ませがち...」
                      </p>
                    </div>
                  </div>
                  <div className="pl-12" data-oid="1hoghgx">
                    <p
                      className="text-[#FFFD98] font-medium mb-4"
                      data-oid="7-_800e"
                    >
                      AIによる3つの解決策
                    </p>
                    <ul className="space-y-6 text-gray-200" data-oid="_m7v8ru">
                      <li className="flex items-start gap-4" data-oid="pgz-ahv">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-[#F46036] rounded-lg flex items-center justify-center text-white font-bold"
                          data-oid="bavyhkz"
                        >
                          1
                        </div>
                        <div data-oid="9c6zsr_">
                          <p
                            className="font-medium text-white"
                            data-oid="yl9zw9n"
                          >
                            スマートな食事プランニング
                          </p>
                          <p className="text-sm mt-1" data-oid="or24uxp">
                            前日の夜に翌日の食事プランを自動提案。必要な食材も一覧でチェック。
                          </p>
                          <div
                            className="mt-2 bg-white/5 rounded-lg p-3"
                            data-oid="jxr9-.u"
                          >
                            <p
                              className="text-[#FFFD98] text-sm"
                              data-oid="2bhg6r_"
                            >
                              実際の効果
                            </p>
                            <p className="text-sm" data-oid="p68p615">
                              食事準備の時間が1日平均20分短縮
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4" data-oid="_dhiugx">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-[#F46036] rounded-lg flex items-center justify-center text-white font-bold"
                          data-oid="cho519a"
                        >
                          2
                        </div>
                        <div data-oid="j1nxgzl">
                          <p
                            className="font-medium text-white"
                            data-oid="e5jpm5a"
                          >
                            クイックレシピ提案
                          </p>
                          <p className="text-sm mt-1" data-oid="v0o1vuj">
                            15分以内で作れる栄養バランスの良いレシピを、食材の在庫状況に合わせて提案。
                          </p>
                          <div
                            className="mt-2 bg-white/5 rounded-lg p-3"
                            data-oid="2j75t1d"
                          >
                            <p
                              className="text-[#FFFD98] text-sm"
                              data-oid="rwyzrjn"
                            >
                              実際の効果
                            </p>
                            <p className="text-sm" data-oid="c.jc253">
                              自炊率が平均65%向上
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4" data-oid="m7s3w9n">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-[#F46036] rounded-lg flex items-center justify-center text-white font-bold"
                          data-oid="v0fhpec"
                        >
                          3
                        </div>
                        <div data-oid="7wlp52m">
                          <p
                            className="font-medium text-white"
                            data-oid="xlr9vm7"
                          >
                            写真で簡単栄養管理
                          </p>
                          <p className="text-sm mt-1" data-oid="v_fkcov">
                            食事の写真を撮るだけで栄養バランスを自動分析。外食時も最適なメニューを提案。
                          </p>
                          <div
                            className="mt-2 bg-white/5 rounded-lg p-3"
                            data-oid=":tci3mb"
                          >
                            <p
                              className="text-[#FFFD98] text-sm"
                              data-oid="i8vj90g"
                            >
                              実際の効果
                            </p>
                            <p className="text-sm" data-oid="-iiwy3u">
                              必要栄養素の充足率が平均92%に向上
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                data-oid="bm7:3x:"
              >
                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="h7ew7lo"
                >
                  <div
                    className="w-12 h-12 bg-[#F46036] rounded-full flex items-center justify-center text-white text-xl font-bold"
                    data-oid="inlbhae"
                  >
                    2
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    data-oid="3lkqv:q"
                  >
                    体型の変化が気になる人へ
                  </h3>
                </div>
                <div className="space-y-6" data-oid="viueyx:">
                  <div className="flex items-start gap-4" data-oid="cx59_s6">
                    <div
                      className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"
                      data-oid="k0s9u4f"
                    >
                      📊
                    </div>
                    <div data-oid="6by7ox8">
                      <div
                        className="flex items-center gap-2 mb-2"
                        data-oid="o_5szmn"
                      >
                        <p
                          className="text-[#FFFD98] font-medium"
                          data-oid="hv:0y5m"
                        >
                          よくある課題
                        </p>
                        <span
                          className="text-sm text-gray-300"
                          data-oid=".:sx2x."
                        >
                          (32歳・デザイナー)
                        </span>
                      </div>
                      <p className="text-gray-200" data-oid="gz4tyn6">
                        「28歳を過ぎてから、同じ食事量でも太りやすくなった。生活リズムも乱れがち...」
                      </p>
                    </div>
                  </div>
                  <div className="pl-12" data-oid="6gtj_71">
                    <p
                      className="text-[#FFFD98] font-medium mb-4"
                      data-oid="no73dek"
                    >
                      AIによる3つの解決策
                    </p>
                    <ul className="space-y-6 text-gray-200" data-oid="dmrhj_2">
                      <li className="flex items-start gap-4" data-oid=":4_2hvb">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-[#F46036] rounded-lg flex items-center justify-center text-white font-bold"
                          data-oid="jysft57"
                        >
                          1
                        </div>
                        <div data-oid="l.ahnym">
                          <p
                            className="font-medium text-white"
                            data-oid="xf0sq0m"
                          >
                            パーソナライズド栄養管理
                          </p>
                          <p className="text-sm mt-1" data-oid="zb_uncy">
                            年齢・活動量・体質に合わせて、最適な栄養バランスと摂取カロリーを自動調整。
                          </p>
                          <div
                            className="mt-2 bg-white/5 rounded-lg p-3"
                            data-oid="kkxhbgi"
                          >
                            <p
                              className="text-[#FFFD98] text-sm"
                              data-oid="rvdu8bp"
                            >
                              実際の効果
                            </p>
                            <p className="text-sm" data-oid="_2lc_tv">
                              3ヶ月で87%のユーザーが適正体重を維持
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4" data-oid="-f:7tov">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-[#F46036] rounded-lg flex items-center justify-center text-white font-bold"
                          data-oid="4e11ov6"
                        >
                          2
                        </div>
                        <div data-oid="le86-6n">
                          <p
                            className="font-medium text-white"
                            data-oid="1827its"
                          >
                            生活リズム最適化
                          </p>
                          <p className="text-sm mt-1" data-oid="s3dl.cq">
                            体内時計に合わせた最適な食事タイミングを提案。夜遅い食事も自然と改善。
                          </p>
                          <div
                            className="mt-2 bg-white/5 rounded-lg p-3"
                            data-oid="lkde:8r"
                          >
                            <p
                              className="text-[#FFFD98] text-sm"
                              data-oid="1sdhyg9"
                            >
                              実際の効果
                            </p>
                            <p className="text-sm" data-oid="6:-2rok">
                              睡眠の質が平均23%向上
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4" data-oid="ag6zvkj">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-[#F46036] rounded-lg flex items-center justify-center text-white font-bold"
                          data-oid="sy2on9s"
                        >
                          3
                        </div>
                        <div data-oid="vxp26rx">
                          <p
                            className="font-medium text-white"
                            data-oid="g5h4l9b"
                          >
                            コミュニティサポート
                          </p>
                          <p className="text-sm mt-1" data-oid="bu:9mlg">
                            同じ目標を持つ仲間とつながり、モチベーションを維持。専門家のアドバイスも。
                          </p>
                          <div
                            className="mt-2 bg-white/5 rounded-lg p-3"
                            data-oid="rowp8oj"
                          >
                            <p
                              className="text-[#FFFD98] text-sm"
                              data-oid="8bc9hw5"
                            >
                              実際の効果
                            </p>
                            <p className="text-sm" data-oid="-fpze.j">
                              継続率が単独利用と比べて2.5倍に向上
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center" data-oid="zw:nvb_">
              <Button
                asChild
                className="bg-[#F46036] hover:bg-[#F46036]/90 text-white px-8 py-4 text-lg"
                data-oid="lt::cex"
              >
                <Link href="/sign-up" data-oid="ybkghz2">
                  無料で始める
                </Link>
              </Button>
              <p className="text-sm text-gray-300 mt-4" data-oid="hzrufb0">
                14日間の無料トライアル付き
              </p>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section
          className="py-24 bg-gradient-to-b from-[#2E294E] to-gray-900 relative overflow-hidden"
          data-oid="k403rjc"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
            data-oid="nsapib:"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="k8.-fk9"
          >
            <div className="lg:text-center" data-oid="vjg_1wu">
              <h2
                className="text-4xl font-extrabold text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                data-oid="4hnqney"
              >
                主要機能
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                data-oid=":gdi_ly"
              >
                AIを活用した最新のテクノロジーで、あなたの健康的な食生活をサポートします。
              </p>
            </div>
            <div className="mt-10" data-oid="m49r5ca">
              <div
                className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4"
                data-oid="l2:u2iw"
              >
                {features.map((feature, index) => (
                  <>
                    <motion.button
                      key={feature.title}
                      className="relative p-4 sm:p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-left w-full min-h-[180px] touch-manipulation"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        const dialog = document.getElementById(
                          `feature-modal-${index}`,
                        ) as HTMLDialogElement;
                        dialog?.showModal();
                      }}
                      data-oid="vbrz5-a"
                    >
                      <div className="text-4xl mb-4" data-oid="fremeyd">
                        {feature.icon}
                      </div>
                      <h3
                        className="text-lg font-medium text-gray-900"
                        data-oid="kewprxc"
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="mt-2 text-base text-gray-500"
                        data-oid=":wgvf3a"
                      >
                        {feature.description}
                      </p>
                    </motion.button>
                    <dialog
                      id={`feature-modal-${index}`}
                      className="modal p-0 w-11/12 max-w-[90vw] md:max-w-4xl rounded-xl backdrop:bg-gray-900/50 animate-fadeIn"
                      data-oid="7-2kjyd"
                    >
                      <div
                        className="relative bg-gradient-to-b from-[#2E294E] to-[#1B998B]"
                        data-oid="uowa1t-"
                      >
                        <div
                          className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"
                          data-oid="hhb3y2f"
                        />

                        <button
                          onClick={() => {
                            const dialog = document.getElementById(
                              `feature-modal-${index}`,
                            ) as HTMLDialogElement;
                            dialog?.close();
                          }}
                          className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg z-10 hover:scale-110 transition-transform"
                          data-oid="i_98jp2"
                        >
                          <svg
                            className="w-6 h-6 text-[#2E294E]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="nhqxw6-"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                              data-oid="cruzzd_"
                            />
                          </svg>
                        </button>
                        <div className="p-8" data-oid="y:8zeau">
                          <div
                            className="flex items-center gap-4 mb-6"
                            data-oid="0d3lr-v"
                          >
                            <div
                              className="text-4xl p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                              data-oid="jm-vrs_"
                            >
                              {feature.icon}
                            </div>
                            <div data-oid="wwyt.w:">
                              <h3
                                className="text-3xl font-bold text-white"
                                data-oid="-9pq759"
                              >
                                {feature.title}
                              </h3>
                              <p
                                className="text-gray-200 mt-1"
                                data-oid="m_w1u_m"
                              >
                                {feature.description}
                              </p>
                            </div>
                          </div>
                          <div
                            className="relative rounded-lg overflow-hidden mb-8"
                            data-oid="wxfwmt."
                          >
                            <img
                              src={`/images/features/${feature.title}.png`}
                              alt={feature.title}
                              className="w-full rounded-lg"
                              data-oid="gwn8mzs"
                            />

                            <div
                              className="absolute inset-0 bg-gradient-to-t from-[#2E294E]/50 to-transparent"
                              data-oid=".420dp:"
                            />
                          </div>
                          <div className="space-y-8" data-oid="2beedtv">
                            <div data-oid="jd1yu6d">
                              <h4
                                className="text-xl font-semibold text-[#FFFD98] mb-3"
                                data-oid="p3:z7pe"
                              >
                                概要
                              </h4>
                              <p className="text-gray-200" data-oid="89s97y9">
                                {feature.details.overview}
                              </p>
                            </div>
                            <div
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                              data-oid="f-8c8ia"
                            >
                              {Object.entries(feature.details.stats).map(
                                ([key, value]) => (
                                  <div
                                    key={key}
                                    className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                                    data-oid="xx_t_3u"
                                  >
                                    <div
                                      className="text-[#FFFD98] text-sm mb-1 capitalize"
                                      data-oid="oayi7vu"
                                    >
                                      {key}
                                    </div>
                                    <div
                                      className="text-white font-bold"
                                      data-oid="y.77j3j"
                                    >
                                      {value}
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                            <div
                              className="grid grid-cols-1 md:grid-cols-2 gap-8"
                              data-oid="he06qhl"
                            >
                              <div data-oid="ix5fv:_">
                                <h4
                                  className="text-xl font-semibold text-[#FFFD98] mb-3"
                                  data-oid=".3-.fk0"
                                >
                                  主な特徴
                                </h4>
                                <ul className="space-y-2" data-oid="saa0vk_">
                                  {feature.details.benefits.map(
                                    (benefit, i) => (
                                      <li
                                        key={i}
                                        className="flex items-center text-gray-200"
                                        data-oid="juamahq"
                                      >
                                        <span
                                          className="text-[#F46036] mr-2"
                                          data-oid="_w-fj5j"
                                        >
                                          ●
                                        </span>
                                        {benefit}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                              <div data-oid="zz:p-4x">
                                <h4
                                  className="text-xl font-semibold text-[#FFFD98] mb-3"
                                  data-oid="v-20u:6"
                                >
                                  使い方
                                </h4>
                                <ul className="space-y-4" data-oid="bdjkvn9">
                                  {feature.details.howToUse.map((step, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start text-gray-200"
                                      data-oid="5vb38xv"
                                    >
                                      <span
                                        className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#F46036] rounded-full text-white text-sm mr-3"
                                        data-oid="x-irbnu"
                                      >
                                        {i + 1}
                                      </span>
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mt-8 pt-8 border-t border-white/20"
                            data-oid="o0v6y4a"
                          >
                            <Button
                              asChild
                              className="w-full bg-[#F46036] hover:bg-[#F46036]/90 text-white"
                              data-oid="5qoywo8"
                            >
                              <Link href="/sign-up" data-oid="o6979j_">
                                無料で始める
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </dialog>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */} {/* Testimonials Section */}
        <section className="py-12 bg-gray-50" data-oid="3ham6ig">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid=":bq4zm6"
          >
            <div className="lg:text-center" data-oid="t.x5:qq">
              <h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                data-oid="xjn8t35"
              >
                ユーザーの声
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                data-oid="e0o8des"
              >
                MeShiftを実際に使用しているユーザーの声をご紹介します。
              </p>
            </div>
            <div className="mt-10" data-oid="rnh13ru">
              <div
                className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
                data-oid="4ycxr10"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    data-oid="6vhjgyg"
                  >
                    <div className="flex items-center mb-4" data-oid="n1pi::g">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        data-oid="jnafzg_"
                      />

                      <div className="ml-4" data-oid=":m86vuq">
                        <h3
                          className="text-lg font-medium text-gray-900"
                          data-oid="k1qx6z5"
                        >
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500" data-oid="a9_vq.2">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600" data-oid="km5-2wr">
                      {testimonial.quote}
                    </p>
                    <div
                      className="mt-4 flex text-yellow-400"
                      data-oid="tn6hqvq"
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          data-oid="a.agxg:"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            data-oid="t-loi9b"
                          />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-gradient-to-b from-[#2E294E] to-[#1B998B] relative overflow-hidden"
          data-oid="u19ubg5"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"
            data-oid="osx4ns1"
          />

          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
            data-oid="3jteqzt"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="uowl:7t"
          >
            <div className="lg:text-center" data-oid="3hw26ly">
              <h2
                className="text-4xl font-extrabold text-white sm:text-5xl"
                data-oid="8cd:1mv"
              >
                MESHIFTで実現する
                <span
                  className="block mt-2 bg-gradient-to-r from-[#FFFD98] to-[#F46036] bg-clip-text text-transparent"
                  data-oid="vizd2xn"
                >
                  4つのメリット
                </span>
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto"
                data-oid="g4kw1b_"
              >
                28歳からの体の変化に合わせた、効率的な食生活管理をサポートします
              </p>
            </div>
            <div className="mt-16" data-oid="sz96evg">
              <div
                className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
                data-oid="6zixx47"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    data-oid="saeafgx"
                  >
                    <div
                      className="absolute -inset-px bg-gradient-to-b from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      data-oid="6.m2_02"
                    />

                    <div className="relative" data-oid="p:wec25">
                      <div
                        className="flex items-center justify-between mb-4"
                        data-oid="c439.u."
                      >
                        <div
                          className="text-4xl p-3 bg-white/10 rounded-lg"
                          data-oid="71z-xcb"
                        >
                          {benefit.icon}
                        </div>
                        <div
                          className="text-[#FFFD98] font-medium text-sm px-3 py-1 bg-[#2E294E]/50 rounded-full"
                          data-oid="tyoc7v7"
                        >
                          {benefit.stats}
                        </div>
                      </div>
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        data-oid="vs274nn"
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 mb-4" data-oid="yi5ll17">
                        {benefit.description}
                      </p>
                      <ul className="space-y-2 mb-4" data-oid=":4bwn9-">
                        {benefit.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-300"
                            data-oid="1c6eyw8"
                          >
                            <span
                              className="text-[#F46036] mr-2"
                              data-oid="38qmsr3"
                            >
                              ●
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="pt-4 border-t border-white/10"
                        data-oid="2gokbmr"
                      >
                        <p
                          className="text-[#FFFD98] text-sm"
                          data-oid="-:6qnyg"
                        >
                          {benefit.impact}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section
          className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
          data-oid="mefefhw"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"
            data-oid="-t.dc3z"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="4bak9j8"
          >
            <div className="lg:text-center" data-oid="_t1zfa9">
              <h2
                className="text-4xl font-extrabold sm:text-5xl"
                data-oid=":z89bp7"
              >
                シンプルな
                <span
                  className="bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
                  data-oid="bx7u5mj"
                >
                  料金プラン
                </span>
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto"
                data-oid="h8uw0s."
              >
                あなたのニーズに��わせて、最適なプランをお選びください
              </p>
            </div>
            <div className="mt-16" data-oid="6gum50m">
              <div
                className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto"
                data-oid="cf80xd-"
              >
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    className={`relative p-8 rounded-xl ${plan.highlight ? "bg-gradient-to-b from-[#2E294E] to-[#1B998B] text-white" : "bg-white"} shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    data-oid="hkpj-f9"
                  >
                    {plan.highlight && (
                      <div
                        className="absolute -top-5 right-5"
                        data-oid="alc426t"
                      >
                        <span
                          className="bg-[#F46036] text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg"
                          data-oid=":.curac"
                        >
                          おすすめ
                        </span>
                      </div>
                    )}
                    <div
                      className="flex items-center justify-between"
                      data-oid="8o63m9t"
                    >
                      <div data-oid="11lx05n">
                        <h3
                          className={`text-2xl font-bold ${!plan.highlight && "text-gray-900"}`}
                          data-oid="7e7mu8w"
                        >
                          {plan.name}
                        </h3>
                        <p
                          className={`mt-2 ${plan.highlight ? "text-gray-200" : "text-gray-500"}`}
                          data-oid="lx8ci-z"
                        >
                          {plan.description}
                        </p>
                      </div>
                      <div className="text-right" data-oid="u_m:1hx">
                        <p className="text-4xl font-bold" data-oid="-80t5b6">
                          {plan.price}
                        </p>
                        <p
                          className={`text-sm ${plan.highlight ? "text-gray-200" : "text-gray-500"}`}
                          data-oid="z-.1:i2"
                        >
                          {plan.period}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8" data-oid="51cplk6">
                      <div
                        className={`space-y-6 ${plan.highlight ? "text-gray-200" : "text-gray-600"}`}
                        data-oid="ok0k8i:"
                      >
                        {plan.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start"
                            data-oid="w0i8_cs"
                          >
                            <div
                              className={`p-2 rounded-lg ${plan.highlight ? "bg-white/10" : "bg-[#2E294E]/5"} mr-4`}
                              data-oid="qef7hr8"
                            >
                              <svg
                                className="w-5 h-5 text-[#F46036]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="kk-w:t:"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                  data-oid="i_p_2_z"
                                />
                              </svg>
                            </div>
                            <div data-oid="6olv00z">
                              <p className="font-medium" data-oid="_gjnq.s">
                                {feature.text}
                              </p>
                              <p
                                className={`text-sm mt-1 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}
                                data-oid="8xr20oc"
                              >
                                {feature.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        className={`mt-8 pt-8 border-t ${plan.highlight ? "border-white/20" : "border-gray-200"}`}
                        data-oid="4q0dtnb"
                      >
                        {plan.highlight ? (
                          <div className="space-y-4" data-oid="2uztp6v">
                            <p
                              className="font-medium text-[#FFFD98]"
                              data-oid=":prkl4c"
                            >
                              プレミアム特典
                            </p>
                            <ul className="space-y-2" data-oid="9ty6:4k">
                              {plan.benefits?.map((benefit, i) => (
                                <li
                                  key={i}
                                  className="flex items-center text-sm"
                                  data-oid="j2jej7m"
                                >
                                  <span
                                    className="text-[#FFFD98] mr-2"
                                    data-oid="t:jmp5u"
                                  >
                                    ●
                                  </span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="space-y-4" data-oid="0u2rr3l">
                            <p
                              className="font-medium text-gray-900"
                              data-oid="7d0gr1h"
                            >
                              制限事項
                            </p>
                            <ul className="space-y-2" data-oid="igl.nog">
                              {plan.limitations?.map((limitation, i) => (
                                <li
                                  key={i}
                                  className="flex items-center text-sm text-gray-500"
                                  data-oid="gl1em91"
                                >
                                  <span
                                    className="text-gray-400 mr-2"
                                    data-oid="ptj.fqf"
                                  >
                                    ●
                                  </span>
                                  {limitation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="mt-8" data-oid="dp9ym6d">
                        <Button
                          asChild
                          className={`w-full min-h-[48px] text-lg font-medium ${plan.highlight ? "bg-[#F46036] hover:bg-[#F46036]/90 text-white" : "bg-[#2E294E] hover:bg-[#2E294E]/90 text-white"}`}
                          data-oid="50i5xf2"
                        >
                          <Link
                            href={`/sign-up${plan.highlight ? "?plan=premium" : ""}`}
                            data-oid="lp7klh3"
                          >
                            {plan.buttonText}
                          </Link>
                        </Button>
                        <p
                          className={`mt-3 text-center text-sm ${plan.highlight ? "text-gray-200" : "text-gray-500"}`}
                          data-oid="warndmf"
                        >
                          {plan.highlight
                            ? "14日間の無料トライアル付き"
                            : "クレジットカード登録不要"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Community Preview Section */}
        <section
          className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
          data-oid="zmp6_.k"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"
            data-oid="xqz3_bz"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="l2jlr:b"
          >
            <div className="lg:text-center mb-16" data-oid="wc_xtl7">
              <h2
                className="text-4xl font-extrabold sm:text-5xl"
                data-oid="q.t:61_"
              >
                コミュニティ
                <span
                  className="block mt-2 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
                  data-oid="awcq.2c"
                >
                  活用事例
                </span>
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto"
                data-oid="u5bmylu"
              >
                同じ目標を持つ仲間たちと一緒に、健康的な食生活を手に入れましょう。
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              data-oid="onurn:w"
            >
              {successStories.slice(0, 2).map((story, index) => (
                <motion.div
                  key={story.name}
                  className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  data-oid="i0jrd6u"
                >
                  <div
                    className="relative h-32 bg-gradient-to-r from-[#2E294E] to-[#1B998B]"
                    data-oid="emq4a.b"
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"
                      data-oid="ixc9kr2"
                    />

                    <div
                      className="absolute bottom-4 left-4 flex items-center gap-4"
                      data-oid="ap91acx"
                    >
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-16 h-16 rounded-lg border-2 border-white shadow-lg"
                        data-oid="p_s580l"
                      />

                      <div className="text-white" data-oid="wuia2d2">
                        <div
                          className="flex items-center gap-2"
                          data-oid="bl_iplf"
                        >
                          <h3 className="text-lg font-bold" data-oid="_l0-c6x">
                            {story.name}
                          </h3>
                          <span
                            className="px-2 py-0.5 bg-[#F46036] rounded-full text-xs"
                            data-oid="qi3e1eo"
                          >
                            {story.age}歳
                          </span>
                        </div>
                        <p className="text-sm text-gray-200" data-oid="kg:5b7o">
                          {story.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6" data-oid="mg7a4_n">
                    <div className="space-y-4" data-oid="g59wkio">
                      <div data-oid=":uqq714">
                        <h4
                          className="text-[#2E294E] font-medium mb-2"
                          data-oid="8hu4lxy"
                        >
                          達成した成果
                        </h4>
                        <p className="text-[#F46036]" data-oid="mf.m9li">
                          {story.achievement.mainResult}
                        </p>
                      </div>
                      <p
                        className="text-gray-600 line-clamp-2"
                        data-oid="ekou6ai"
                      >
                        {story.testimonial}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center" data-oid="80d6378">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 text-[#2E294E] hover:text-[#1B998B] transition-colors"
                data-oid="qzjps46"
              >
                <span className="text-lg font-medium" data-oid="pnt4md:">
                  もっと詳しく見る
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="0yuaep7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                    data-oid="dpvn6al"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-16 text-center" data-oid="3q2iuo:">
              <Button
                asChild
                className="bg-[#F46036] hover:bg-[#F46036]/90 text-white px-8 py-4 text-lg"
                data-oid="t-s8100"
              >
                <Link href="/sign-up" data-oid="njidyqv">
                  コミュニティに参加する
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-4" data-oid=".qm7g6j">
                14日間の無料トライアル付き
              </p>
            </div>
          </div>
        </section>
        {/* Scientific Evidence Section */}
        <section
          className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
          data-oid="5ux9o.t"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"
            data-oid="5sqxwuq"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="765u60u"
          >
            <div className="lg:text-center mb-16" data-oid="lncrqr_">
              <h2
                className="text-4xl font-extrabold sm:text-5xl"
                data-oid="zldcyf4"
              >
                科学的根拠に基づく
                <span
                  className="block mt-2 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
                  data-oid="rv4qk_m"
                >
                  アプローチ
                </span>
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto"
                data-oid="zum663i"
              >
                最新の研究結果と専門家の知見を組み合わせた、効果的な食生活改善をサポート
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-oid="dm-ob-o"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
                data-oid="otvwnjy"
              >
                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="35wr9gv"
                >
                  <div
                    className="w-12 h-12 bg-[#2E294E] rounded-full flex items-center justify-center text-white text-2xl"
                    data-oid="tskzuwg"
                  >
                    🧬
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-oid="d7ja4gz"
                  >
                    代謝と食事のタイミング
                  </h3>
                </div>
                <div className="space-y-6" data-oid="ld9t2pq">
                  <div className="bg-gray-50 rounded-lg p-4" data-oid="e.d350b">
                    <p
                      className="text-sm text-gray-500 mb-2"
                      data-oid="9l_6ejx"
                    >
                      研究機関
                    </p>
                    <p className="font-medium text-gray-900" data-oid="yqvm9gd">
                      国立健康栄養研究所
                    </p>
                    <p className="text-gray-600 mt-2" data-oid="445fr0s">
                      夜10時以降の食事は、日中の同じ食事と比べて代謝効率が約30%低下することが判明。
                    </p>
                  </div>
                  <div className="space-y-4" data-oid=".2rqon3">
                    <h4
                      className="font-medium text-gray-900"
                      data-oid="xnde:eu"
                    >
                      主な研究結果
                    </h4>
                    <ul className="space-y-3" data-oid="a3aq7ss">
                      <li className="flex items-start gap-3" data-oid="edztcmz">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="7ag00f4"
                        >
                          1
                        </span>
                        <p className="text-gray-600" data-oid="la7mf:m">
                          体内時計と代謝には密接な関係があり、食事のタイミングが重要
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="srmkqlv">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="kufd5-0"
                        >
                          2
                        </span>
                        <p className="text-gray-600" data-oid="9zmns2g">
                          朝食を摂取する習慣がある人は、BMIが平均2.5ポイント低い
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="g3xzelg">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="_mbhlxf"
                        >
                          3
                        </span>
                        <p className="text-gray-600" data-oid="r7zbozi">
                          食事間隔を一定に保つことで、インスリンの分泌が安定化
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
                data-oid="050a7i."
              >
                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="299.6hj"
                >
                  <div
                    className="w-12 h-12 bg-[#2E294E] rounded-full flex items-center justify-center text-white text-2xl"
                    data-oid="rhlw1_y"
                  >
                    🧪
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-oid="w_17j:6"
                  >
                    習慣形成の科学
                  </h3>
                </div>
                <div className="space-y-6" data-oid="ry-s.h5">
                  <div className="bg-gray-50 rounded-lg p-4" data-oid="m58.pjb">
                    <p
                      className="text-sm text-gray-500 mb-2"
                      data-oid="3-tchn9"
                    >
                      研究機関
                    </p>
                    <p className="font-medium text-gray-900" data-oid="zn5mzwr">
                      行動科学研究所
                    </p>
                    <p className="text-gray-600 mt-2" data-oid="j7m8t64">
                      新しい習慣の定着には平均66日間必要であり、環境とコミュニティのサポートが重要な要素。
                    </p>
                  </div>
                  <div className="space-y-4" data-oid="iynxj_j">
                    <h4
                      className="font-medium text-gray-900"
                      data-oid="_09c:6w"
                    >
                      習慣化のポイント
                    </h4>
                    <ul className="space-y-3" data-oid="yopqhc0">
                      <li className="flex items-start gap-3" data-oid="vah1w8x">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="mdbmxw2"
                        >
                          1
                        </span>
                        <p className="text-gray-600" data-oid="2wk117e">
                          小さな目標設定と達成の積み重ねが、長期的な習慣形成に効果的
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="1._fbqv">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="lw1wn5d"
                        >
                          2
                        </span>
                        <p className="text-gray-600" data-oid="gjrd:59">
                          同じ目標を持つコミュニティのサポートで、継続率が3倍に向上
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="b5tn:ts">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="f2k8a0n"
                        >
                          3
                        </span>
                        <p className="text-gray-600" data-oid="914lt3r">
                          視覚的な進捗管理が、モチベーション維持に重要な役割を果たす
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="f5u_ev3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#2E294E] rounded-xl p-6 text-white"
                data-oid="mqga0m1"
              >
                <div className="text-4xl mb-4" data-oid="vz96:u1">
                  📊
                </div>
                <h4 className="text-xl font-bold mb-2" data-oid="9o5okxv">
                  データに基づく改善
                </h4>
                <p className="text-gray-300" data-oid="y-3mm8r">
                  AIが40種類以上の栄養素を分析し、あなたに最適な食事プランを提案
                </p>
                <div
                  className="mt-4 pt-4 border-t border-white/20"
                  data-oid="ph7:57a"
                >
                  <p className="text-[#FFFD98]" data-oid="2-zpyo3">
                    分析精度95%以上
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#2E294E] rounded-xl p-6 text-white"
                data-oid="y2hv2np"
              >
                <div className="text-4xl mb-4" data-oid="99viuip">
                  🔬
                </div>
                <h4 className="text-xl font-bold mb-2" data-oid="ranente">
                  継続的な研究
                </h4>
                <p className="text-gray-300" data-oid="_eopf.c">
                  最新の栄養学研究と連携し、常に最新のエビデンスに基づいたサポートを提供
                </p>
                <div
                  className="mt-4 pt-4 border-t border-white/20"
                  data-oid="r49wpea"
                >
                  <p className="text-[#FFFD98]" data-oid="1yqneux">
                    月間研究レポート配信
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-[#2E294E] rounded-xl p-6 text-white"
                data-oid="ksr:pxo"
              >
                <div className="text-4xl mb-4" data-oid="2katbjq">
                  👥
                </div>
                <h4 className="text-xl font-bold mb-2" data-oid="ob:zgs1">
                  専門家監修
                </h4>
                <p className="text-gray-300" data-oid="gtlytvc">
                  管理栄養士と行動科学の専門家チームが、すべてのコンテンツを監修
                </p>
                <div
                  className="mt-4 pt-4 border-t border-white/20"
                  data-oid="k3ozq56"
                >
                  <p className="text-[#FFFD98]" data-oid="9fjsqpo">
                    専門家チーム20名以上
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Expert Knowledge Section */}
        <section
          className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
          data-oid="vum4z72"
        >
          <div
            className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"
            data-oid="yj294af"
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="itkd3ke"
          >
            <div className="lg:text-center mb-16" data-oid="7ly2np5">
              <h2
                className="text-4xl font-extrabold sm:text-5xl"
                data-oid="h7_n5ge"
              >
                AIが分析する
                <span
                  className="block mt-2 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent"
                  data-oid="sn5w1ih"
                >
                  食生活と健康の科学
                </span>
              </h2>
              <p
                className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto"
                data-oid="zj7xbab"
              >
                最新の研究データと機械学習モデルを組み合わせた、科学的アプローチ
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-oid="8i_01b7"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
                data-oid="pwthz_t"
              >
                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="o47aks:"
                >
                  <div
                    className="w-12 h-12 bg-[#2E294E] rounded-full flex items-center justify-center text-white text-2xl"
                    data-oid="3e_fxu2"
                  >
                    🧪
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-oid="h36:gfm"
                  >
                    栄養素の相互作用
                  </h3>
                </div>
                <div className="space-y-6" data-oid="cyqyo9g">
                  <div className="bg-gray-50 rounded-lg p-4" data-oid="jcwdmc6">
                    <p
                      className="text-sm text-gray-500 mb-2"
                      data-oid="1fm5moh"
                    >
                      AIモデルの分析精度
                    </p>
                    <p className="font-medium text-gray-900" data-oid="llm7h3z">
                      40種類以上の栄養素の相互関係を分析
                    </p>
                    <p className="text-gray-600 mt-2" data-oid="dyh0kd4">
                      機械学習モデルが食事記録から栄養素の組み合わせパターンを学習し、最適な摂取バランスを提案。
                    </p>
                  </div>
                  <div className="space-y-4" data-oid="k7cwr35">
                    <h4
                      className="font-medium text-gray-900"
                      data-oid="ko5rq94"
                    >
                      主な分析ポイント
                    </h4>
                    <ul className="space-y-3" data-oid="gjuc5se">
                      <li className="flex items-start gap-3" data-oid="4_j9uzg">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="13epxkh"
                        >
                          1
                        </span>
                        <p className="text-gray-600" data-oid="1dgtdnv">
                          ビタミンとミネラルの吸収率の関係性を考慮した組み合わせ提案
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="y56a2i-">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="fte.nuv"
                        >
                          2
                        </span>
                        <p className="text-gray-600" data-oid="x164w3q">
                          食材の調理方法による栄養価の変化を考慮した調理提案
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="0rxi9n6">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="rliuuvu"
                        >
                          3
                        </span>
                        <p className="text-gray-600" data-oid="pngk2k6">
                          季節や気候による体の変化に応じた栄養バランスの調整
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
                data-oid="zhvb1kh"
              >
                <div
                  className="flex items-center gap-4 mb-6"
                  data-oid="0cdlgze"
                >
                  <div
                    className="w-12 h-12 bg-[#2E294E] rounded-full flex items-center justify-center text-white text-2xl"
                    data-oid="l8rf.o8"
                  >
                    📊
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-oid=".vth9zu"
                  >
                    データに基づく改善
                  </h3>
                </div>
                <div className="space-y-6" data-oid="mdssg34">
                  <div className="bg-gray-50 rounded-lg p-4" data-oid="_dbb_aa">
                    <p
                      className="text-sm text-gray-500 mb-2"
                      data-oid="7y81g20"
                    >
                      分析データ量
                    </p>
                    <p className="font-medium text-gray-900" data-oid="1wwi6t7">
                      100万件以上の食事記録を分析
                    </p>
                    <p className="text-gray-600 mt-2" data-oid="2u7n3b9">
                      大規模なデータセットから、年齢や生活習慣に応じた最適な食事パターンを学習。
                    </p>
                  </div>
                  <div className="space-y-4" data-oid="iwp22l7">
                    <h4
                      className="font-medium text-gray-900"
                      data-oid="ik6mthc"
                    >
                      データ活用のポイント
                    </h4>
                    <ul className="space-y-3" data-oid="-:08ufx">
                      <li className="flex items-start gap-3" data-oid="fvuvr6v">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="fk-7ay_"
                        >
                          1
                        </span>
                        <p className="text-gray-600" data-oid="5aijt62">
                          年齢層ごとの代謝の特徴を考慮した食事提案
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="9jhm6i0">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="61u6nso"
                        >
                          2
                        </span>
                        <p className="text-gray-600" data-oid="pr9k_b3">
                          生活習慣と食事パターンの相関関係の分析
                        </p>
                      </li>
                      <li className="flex items-start gap-3" data-oid="6g4_74c">
                        <span
                          className="flex-shrink-0 w-6 h-6 bg-[#F46036] rounded-full flex items-center justify-center text-white text-sm"
                          data-oid="zvq-1zl"
                        >
                          3
                        </span>
                        <p className="text-gray-600" data-oid="t-av8xf">
                          個人の食習慣の変化に応じた改善提案の最適化
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
              data-oid="xfd_ajd"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#2E294E] rounded-xl p-6 text-white"
                data-oid="xcq71sf"
              >
                <div className="text-4xl mb-4" data-oid="211tdnn">
                  🔄
                </div>
                <h4 className="text-xl font-bold mb-2" data-oid="gg.j_pm">
                  継続的な学習
                </h4>
                <p className="text-gray-300" data-oid="otn9o1t">
                  ユーザーの食事記録と改善結果から、AIモデルが継続的に学習し精度を向上
                </p>
                <div
                  className="mt-4 pt-4 border-t border-white/20"
                  data-oid="nol:rwe"
                >
                  <p className="text-[#FFFD98]" data-oid="vey6noy">
                    月間学習データ 100万件以上
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#2E294E] rounded-xl p-6 text-white"
                data-oid="s:gt054"
              >
                <div className="text-4xl mb-4" data-oid="04c4qgt">
                  🎯
                </div>
                <h4 className="text-xl font-bold mb-2" data-oid="e3vbf-5">
                  パーソナライズ
                </h4>
                <p className="text-gray-300" data-oid="eo4yio2">
                  個人の食習慣、生活リズム、体調の変化を考慮した最適な提案を実現
                </p>
                <div
                  className="mt-4 pt-4 border-t border-white/20"
                  data-oid="58n7we8"
                >
                  <p className="text-[#FFFD98]" data-oid="5ex8mx_">
                    個人適応率 95%以上
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-[#2E294E] rounded-xl p-6 text-white"
                data-oid="v.im9h9"
              >
                <div className="text-4xl mb-4" data-oid="ltxpw_h">
                  📱
                </div>
                <h4 className="text-xl font-bold mb-2" data-oid="w3u8l2u">
                  簡単記録
                </h4>
                <p className="text-gray-300" data-oid="6x:_jg6">
                  写真を撮るだけで食事内容を自動認識し、詳細な栄養分析を提供
                </p>
                <div
                  className="mt-4 pt-4 border-t border-white/20"
                  data-oid="ma3k_-d"
                >
                  <p className="text-[#FFFD98]" data-oid="_b:w_lh">
                    認識精度 90%以上
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 text-center" data-oid="4m7ytax">
              <div
                className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200"
                data-oid=".4gva36"
              >
                <p className="text-gray-600 text-sm" data-oid="0:j3xwd">
                  ※
                  記載されている数値は、当社の収集データに基づく統計的な参考値です。
                  <br data-oid=":316y.8" />
                  個人の状況や条件によって結果は異なる場合があります。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
