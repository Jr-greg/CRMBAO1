"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Search, HelpCircle, MessageCircle, BookOpen, ArrowRight, Sparkles } from "lucide-react";

const categories = [
  { id: "all", name: "全部问题", icon: BookOpen },
  { id: "account", name: "账户注册", icon: HelpCircle },
  { id: "security", name: "安全设置", icon: HelpCircle },
  { id: "deposit", name: "入金充值", icon: HelpCircle },
  { id: "withdraw", name: "出金提现", icon: HelpCircle },
  { id: "rebate", name: "优惠折扣", icon: HelpCircle },
  { id: "compliance", name: "合规问题", icon: HelpCircle },
  { id: "technical", name: "技术支持", icon: HelpCircle },
];

const faqData = {
  account: [
    {
      q: "如何注册交易所账户？",
      a: "访问交易所官网或下载 App，点击「注册」，使用邮箱或手机号完成注册，设置强密码，验证邮箱/手机号即可。详细步骤请参考各交易所教程页面。",
    },
    {
      q: "KYC 认证需要多久？",
      a: "通常 5-30 分钟内完成，高峰期可能延长至 1-2 小时。需准备身份证或护照，并进行人脸识别。",
    },
    {
      q: "可以不做 KYC 吗？",
      a: "部分功能可用，但提现会受限。建议完成 KYC 以解锁全部功能。",
    },
    {
      q: "一个人可以注册多个账户吗？",
      a: "大多数交易所不允许一人多号，违反规则可能导致账户被冻结。",
    },
  ],
  security: [
    {
      q: "什么是双重验证（2FA）？",
      a: "2FA 是一种额外的安全层，通常使用 Google Authenticator 或短信验证码。强烈建议开启 2FA 以保护账户安全。",
    },
    {
      q: "忘记密码怎么办？",
      a: "点击登录页面的「忘记密码」，通过邮箱或手机验证码重置。若无法接收验证码，联系客服。",
    },
    {
      q: "如何设置防钓鱼码？",
      a: "在安全设置中添加防钓鱼码，之后所有官方邮件都会包含此码，帮助你识别真假邮件。",
    },
    {
      q: "账户被盗怎么办？",
      a: "立即联系客服冻结账户，修改密码，检查提现记录。开启 2FA 和白名单可有效防止被盗。",
    },
  ],
  deposit: [
    {
      q: "如何入金？",
      a: "常见方式：1) 银行卡购买；2) C2C 交易；3) 从其他钱包/交易所转入加密货币。每种方式的手续费和到账时间不同。",
    },
    {
      q: "入金需要多久到账？",
      a: "银行卡/C2C 通常 5-30 分钟；加密货币转账取决于网络确认速度（BTC 约 30-60 分钟，ETH 约 5-15 分钟）。",
    },
    {
      q: "入金有最低限额吗？",
      a: "不同交易所和支付方式有不同限额，通常最低 10-100 美元。",
    },
    {
      q: "入金失败怎么办？",
      a: "检查网络选择是否正确、地址是否填写准确、余额是否充足。若确认无误仍失败，联系客服并提供交易哈希（TxID）。",
    },
  ],
  withdraw: [
    {
      q: "如何提现到银行卡？",
      a: "先将加密货币卖出为法币（如 CNY），再申请提现到银行卡。通常 1-3 个工作日到账。",
    },
    {
      q: "提现需要手续费吗？",
      a: "是的，手续费取决于币种和网络。例如 BTC 可能 0.0005 BTC，USDT 在 TRC20 网络约 1 USDT。",
    },
    {
      q: "提现被拒绝怎么办？",
      a: "常见原因：1) 未完成 KYC；2) 未开启提现权限；3) 地址格式错误；4) 触发风控。联系客服处理。",
    },
    {
      q: "提现到钱包要注意什么？",
      a: "务必核对：1) 网络选择（如 ERC20/TRC20）；2) 地址正确性；3) 最低提现额度。转错网络或地址将导致资产丢失。",
    },
  ],
  rebate: [
    {
      q: "使用邀请码有什么好处？",
      a: "使用邀请码注册不会增加您的费用。部分交易所会为使用邀请码的用户提供手续费折扣或其他专属优惠。",
    },
    {
      q: "邀请码和直接注册有区别吗？",
      a: "手续费标准相同，但使用邀请码可能享受额外优惠。建议在注册时填写有效的邀请码。",
    },
    {
      q: "如何获得手续费折扣？",
      a: "可通过多种方式：使用邀请码注册、使用平台币支付手续费（如 BNB/OKB）、提升 VIP 等级等。",
    },
    {
      q: "邀请好友有什么优惠？",
      a: "大多数交易所都有邀请奖励计划。邀请好友注册并完成交易后，双方都可能获得手续费折扣或其他奖励。具体规则请查看各平台官方说明。",
    },
  ],
  compliance: [
    {
      q: "加密货币交易合法吗？",
      a: "各国/地区规定不同。部分地区完全合法，部分地区有限制，部分地区禁止。请遵守当地法律。",
    },
    {
      q: "需要报税吗？",
      a: "大多数国家要求申报加密货币收益。具体规则请咨询当地税务专业人士。",
    },
    {
      q: "交易所会报告我的交易吗？",
      a: "部分国家/地区的交易所需向税务机关报告用户交易数据，请了解当地规定。",
    },
  ],
  technical: [
    {
      q: "无法登录怎么办？",
      a: "1) 检查网络连接；2) 清除缓存/Cookie；3) 更换浏览器或设备；4) 联系客服。",
    },
    {
      q: "App 闪退怎么办？",
      a: "1) 更新到最新版本；2) 清理手机存储空间；3) 重启设备；4) 重新安装 App。",
    },
    {
      q: "如何联系客服？",
      a: "App 内「客服」图标、官网右下角聊天按钮、官方社交媒体。注意防范假客服。",
    },
    {
      q: "交易卡顿怎么办？",
      a: "可能是网络问题或平台高峰期。尝试切换网络、使用 App 代替网页版、避开高峰时段。",
    },
  ],
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 获取当前分类的 FAQ
  const getCurrentFAQs = () => {
    if (selectedCategory === "all") {
      // 返回所有 FAQ
      return Object.entries(faqData).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    return faqData[selectedCategory as keyof typeof faqData].map(item => ({ 
      ...item, 
      category: selectedCategory 
    }));
  };

  // 过滤 FAQ
  const filteredFAQs = getCurrentFAQs().filter(item => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
  });

  // 统计数据
  const totalQuestions = Object.values(faqData).reduce((sum, items) => sum + items.length, 0);

  return (
    <>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden py-20 gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl animate-float-slow-reverse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 小标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <HelpCircle className="h-4 w-4 text-primary-light" />
              <span className="text-sm font-medium text-gray-200">快速解答 · 即时帮助</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">常见</span>{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                问题
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl text-gray-300 opacity-85 mb-12 max-w-2xl mx-auto leading-relaxed">
              快速找到你需要的答案，涵盖账户、安全、交易等各个方面
            </p>

            {/* 搜索栏 */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="搜索问题关键词..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 transition-colors"
                />
              </div>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{totalQuestions}</div>
                <div className="text-xs text-gray-400">常见问题</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{categories.length - 1}</div>
                <div className="text-xs text-gray-400">问题分类</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-400">客服支持</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-30 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Badge
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className="cursor-pointer px-5 py-2.5 text-sm hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 列表 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 标题 */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    {categories.find((c) => c.id === selectedCategory)?.name || "全部问题"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    共 {filteredFAQs.length} 个问题
                    {searchQuery && ` · 搜索「${searchQuery}」`}
                  </p>
                </div>
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* FAQ Accordion */}
            {filteredFAQs.length > 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
                <Accordion>
                  {filteredFAQs.map((item, index) => (
                    <AccordionItem key={index} title={item.q}>
                      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.a}
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="text-center py-20">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  未找到相关问题
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-6">
                  试试其他关键词或浏览全部分类
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  清除筛选
                </Button>
              </div>
            )}

            {/* 联系客服 */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-[32px] border border-primary/20">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">没有找到答案？</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  联系我们的客服团队，24/7 为你提供专业支持
                </p>
                <div className="flex gap-3 justify-center">
                  <Button className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    联系客服
                  </Button>
                  <Link href="/learn">
                    <Button variant="outline" className="gap-2">
                      查看教程
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-[32px] p-12 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">准备好开始了吗？</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  开启你的加密之旅
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  从今天开始，跟随我们的学习路径，安全、高效地进入加密世界
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/learn">
                    <Button size="lg" className="text-base px-8 h-12 bg-white hover:bg-gray-100 text-gray-900 border-0 shadow-xl">
                      开始学习
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/binance">
                    <Button size="lg" className="text-base px-8 h-12 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50">
                      查看交易所教程
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: filteredFAQs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}


