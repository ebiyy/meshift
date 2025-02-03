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

export default function CommunityPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#2E294E] to-gray-900"
      data-oid="8k0c7xz"
    >
      {/* ヘッダーセクション */}
      <section className="relative py-20 overflow-hidden" data-oid="6ius._j">
        <div
          className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"
          data-oid="makf4c:"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
          data-oid="pp4osoj"
        />

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="2n9u9_6"
        >
          <div className="text-center" data-oid="kxax3ig">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              data-oid="hcs.55t"
            >
              コミュニティ活用事例
            </motion.h1>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="u8:uk.n"
            >
              同じ目標を持つ仲間たちが、どのようにMeShiftを活用して食生活を改善したのか。
              実際の成功事例をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 成功事例セクション */}
      <section className="py-20" data-oid="f2y8::1">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rnc-3_g"
        >
          <div className="space-y-32" data-oid="lg8j8bs">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                data-oid="vbt69p_"
              >
                {/* プロフィールヘッダー */}
                <div
                  className="relative h-48 bg-gradient-to-r from-[#2E294E] to-[#1B998B]"
                  data-oid="7b7nk7w"
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
                    data-oid="m29bdej"
                  />

                  <div
                    className="absolute bottom-8 left-8 flex items-end gap-6"
                    data-oid="-8st78l"
                  >
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-24 h-24 rounded-xl border-4 border-white shadow-xl"
                      data-oid="x9m2x.b"
                    />

                    <div className="text-white" data-oid="zu.s0_0">
                      <h2 className="text-2xl font-bold" data-oid="5_f:wry">
                        {story.name}
                      </h2>
                      <p className="text-gray-200" data-oid="vqq58g1">
                        {story.role} / {story.age}歳
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8" data-oid="n5.:9fo">
                  {/* チャレンジと成果 */}
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    data-oid="0yfg7ys"
                  >
                    <div className="space-y-6" data-oid="io9e8gs">
                      <div
                        className="bg-white/5 rounded-xl p-6"
                        data-oid="u:-bswd"
                      >
                        <h3
                          className="text-xl font-semibold text-[#FFFD98] mb-3"
                          data-oid="j05r7s8"
                        >
                          チャレンジ
                        </h3>
                        <p className="text-gray-300" data-oid="2-q97kd">
                          {story.challenge}
                        </p>
                      </div>
                      <div
                        className="bg-white/5 rounded-xl p-6"
                        data-oid="hq7rdhw"
                      >
                        <h3
                          className="text-xl font-semibold text-[#FFFD98] mb-3"
                          data-oid="i2hqfro"
                        >
                          達成した成果
                        </h3>
                        <div className="space-y-4" data-oid="i-z_d-m">
                          <p
                            className="text-[#F46036] font-bold"
                            data-oid="fztlq3u"
                          >
                            {story.achievement.duration}で実現
                          </p>
                          <p
                            className="text-white text-lg font-medium"
                            data-oid="pzx86gn"
                          >
                            {story.achievement.mainResult}
                          </p>
                          <ul className="space-y-2" data-oid="u9zhv82">
                            {story.achievement.subResults.map((result, i) => (
                              <li
                                key={i}
                                className="flex items-center text-gray-300"
                                data-oid="ur27chm"
                              >
                                <span
                                  className="text-[#F46036] mr-2"
                                  data-oid="kedihm6"
                                >
                                  ●
                                </span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="relative" data-oid="moxu9p:">
                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid="g7mmq-p"
                      >
                        <div data-oid="_ptlw7:">
                          <p
                            className="text-[#FFFD98] text-sm mb-2"
                            data-oid="nqak4il"
                          >
                            Before
                          </p>
                          <img
                            src={story.beforeImage}
                            alt="Before"
                            className="rounded-lg"
                            data-oid="o4mg8bi"
                          />
                        </div>
                        <div data-oid="o.xt.pu">
                          <p
                            className="text-[#FFFD98] text-sm mb-2"
                            data-oid="m2biztn"
                          >
                            After
                          </p>
                          <img
                            src={story.afterImage}
                            alt="After"
                            className="rounded-lg"
                            data-oid="ouasi98"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 成功までのストーリー */}
                  <div className="space-y-8" data-oid="_0kvt46">
                    <div data-oid="fabo3hi">
                      <h3
                        className="text-xl font-semibold text-[#FFFD98] mb-4"
                        data-oid="r5zr.2w"
                      >
                        きっかけ
                      </h3>
                      <p className="text-gray-300" data-oid="7c8rodo">
                        {story.story.motivation}
                      </p>
                    </div>

                    <div data-oid="kv1h48d">
                      <h3
                        className="text-xl font-semibold text-[#FFFD98] mb-4"
                        data-oid="w206ga5"
                      >
                        改善プロセス
                      </h3>
                      <div className="space-y-4" data-oid=":brfr7b">
                        {story.story.process.map((step, i) => (
                          <div
                            key={i}
                            className="flex items-start"
                            data-oid="jz:-x0a"
                          >
                            <span
                              className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#F46036] rounded-full text-white font-bold mr-4"
                              data-oid="eb5-4xd"
                            >
                              {i + 1}
                            </span>
                            <p
                              className="text-gray-300 pt-1"
                              data-oid=":71ko37"
                            >
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      data-oid=":q113ev"
                    >
                      <div data-oid="zfq08am">
                        <h3
                          className="text-xl font-semibold text-[#FFFD98] mb-4"
                          data-oid="nyuq18p"
                        >
                          成功のコツ
                        </h3>
                        <ul className="space-y-3" data-oid="4glvlw3">
                          {story.story.tips.map((tip, i) => (
                            <li
                              key={i}
                              className="flex items-center text-gray-300"
                              data-oid="qtnwiy6"
                            >
                              <span
                                className="text-[#F46036] mr-2"
                                data-oid="kn13o7j"
                              >
                                ●
                              </span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div data-oid="f64_7:2">
                        <h3
                          className="text-xl font-semibold text-[#FFFD98] mb-4"
                          data-oid="-vmo64."
                        >
                          コミュニティ活動
                        </h3>
                        <ul className="space-y-3" data-oid="_a6jh4m">
                          {story.communityActivities.map((activity, i) => (
                            <li
                              key={i}
                              className="flex items-center text-gray-300"
                              data-oid="cf7f66s"
                            >
                              <span
                                className="text-[#F46036] mr-2"
                                data-oid="k:_dv66"
                              >
                                ●
                              </span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className="bg-[#2E294E] rounded-xl p-6 mt-8"
                      data-oid="wg6.tk6"
                    >
                      <p className="text-gray-300 italic" data-oid="aub_ooo">
                        "{story.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20" data-oid="7:8wplf">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-oid="8t:n:h2"
        >
          <h2 className="text-3xl font-bold text-white mb-6" data-oid="c652dvy">
            あなたも始めてみませんか？
          </h2>
          <p className="text-gray-300 mb-8" data-oid="5erutbs">
            MeShiftコミュニティで、同じ目標を持つ仲間と一緒に
            健康的な食生活を手に入れましょう。
          </p>
          <Button
            asChild
            className="bg-[#F46036] hover:bg-[#F46036]/90 text-white px-8 py-4 text-lg"
            data-oid="s-:9fj_"
          >
            <Link href="/sign-up" data-oid="twybc2c">
              無料で始める
            </Link>
          </Button>
          <p className="text-sm text-gray-400 mt-4" data-oid="p8lehmd">
            14日間の無料トライアル付き
          </p>
        </div>
      </section>
    </div>
  );
}
