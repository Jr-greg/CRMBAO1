import { Metadata } from "next";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FloatingCTA } from "@/components/exchange/floating-cta";
import { BottomBar } from "@/components/exchange/bottom-bar";
import {
  Star,
  Users,
  Globe,
  Shield,
  ExternalLink,
  CheckCircle2,
  Smartphone,
  Download,
  Wallet,
  TrendingUp,
  Lock,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "OKX 注册教程与新手指南 - 入门宝",
  description: "详细的 OKX 注册、下载、KYC、交易教程，帮助新手快速上手一站式加密货币交易平台。",
};

// 平台亮点数据
const highlights = [
  { icon: Users, label: "全球用户", value: "5000万+" },
  { icon: Globe, label: "支持币种", value: "300+" },
  { icon: Wallet, label: "Web3 钱包", value: "内置" },
  { icon: Shield, label: "安全等级", value: "AAA" },
];

// 步骤数据
const steps = [
  {
    number: 1,
    title: "访问 OKX 官网",
    description: "点击右侧按钮，进入 OKX 官方网站",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    title: "选择注册方式",
    description: "支持邮箱、手机号或社交账号注册",
    icon: CheckCircle2,
    color: "from-cyan-500 to-teal-500",
  },
  {
    number: 3,
    title: "设置密码",
    description: "建议使用 12 位以上强密码",
    icon: Lock,
    color: "from-teal-500 to-green-500",
  },
  {
    number: 4,
    title: "完成认证",
    description: "上传身份证件并进行人脸识别",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
];

export default function OKXPage() {
  return (
    <>
      <FloatingCTA exchangeName="OKX" inviteCode="OKXSTART" />
      <BottomBar />

      {/* Hero 区域 */}
      <section className="relative overflow-hidden py-20 gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-float-slow-reverse animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '5s' }} />

        <div className="container mx-auto px-4 relative z-10 pb-24">
          <div className="max-w-5xl mx-auto">
            {/* 返回链接 */}
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              <span className="text-sm">返回首页</span>
            </a>

            {/* 品牌区 */}
            <div className="flex items-start gap-6 mb-8">
              {/* Logo */}
              <div className="relative">
                <div className="h-24 w-24 rounded-[24px] bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 shadow-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-white dark:text-gray-900">O</span>
                </div>
                {/* 角标 */}
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-primary text-white border-0 shadow-lg text-xs px-2">
                    推荐
                  </Badge>
                </div>
              </div>

              {/* 标题与描述 */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-3">
                  <Zap className="h-3.5 w-3.5 text-cyan-300" />
                  <span className="text-xs font-medium text-gray-200">一站式平台</span>
                </div>

                <h1 className="text-5xl font-bold text-white mb-4">
                  OKX 欧易
                </h1>

                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  综合性交易平台，支持现货、合约及 Web3 钱包，中文服务友好
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-white/30 text-white">
                    统一交易账户
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    Web3 钱包
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    低手续费
                  </Badge>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl"
                    asChild
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      立即注册
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      下载 App
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* 数据亮点 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <item.icon className="h-6 w-6 text-cyan-300 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 主内容区 */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="register" className="w-full">
              {/* Tab 导航 */}
              <div className="mb-12">
                <TabsList className="inline-flex flex-wrap gap-2 bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="register"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white rounded-full px-6 py-2.5 shadow-sm"
                  >
                    注册教程
                  </TabsTrigger>
                  <TabsTrigger
                    value="ios"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white rounded-full px-6 py-2.5 shadow-sm"
                  >
                    iOS 下载
                  </TabsTrigger>
                  <TabsTrigger
                    value="android"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white rounded-full px-6 py-2.5 shadow-sm"
                  >
                    Android 下载
                  </TabsTrigger>
                  <TabsTrigger
                    value="tutorial"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white rounded-full px-6 py-2.5 shadow-sm"
                  >
                    新手教程
                  </TabsTrigger>
                  <TabsTrigger
                    value="fees"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white rounded-full px-6 py-2.5 shadow-sm"
                  >
                    费率 & 优惠
                  </TabsTrigger>
                  <TabsTrigger
                    value="faq"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light data-[state=active]:text-white rounded-full px-6 py-2.5 shadow-sm"
                  >
                    常见问题
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* 注册教程 */}
              <TabsContent value="register">
                <div className="space-y-8">
                  {/* 标题 */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">4步快速注册</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">开始你的 OKX 之旅</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      完成注册仅需 5 分钟，通过我们的邀请码可享专属优惠
                    </p>
                  </div>

                  {/* 步骤卡片 */}
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {steps.map((step) => (
                      <div
                        key={step.number}
                        className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-2xl transition-all duration-300"
                      >
                        {/* 步骤编号 - 右上角 */}
                        <div className="absolute top-5 right-6">
                          <span className="text-3xl font-bold text-gray-200 dark:text-gray-800">
                            {step.number}
                          </span>
                        </div>

                        {/* 图标 */}
                        <div className="mb-4">
                          <div className={`inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} items-center justify-center group-hover:scale-110 transition-transform`}>
                            <step.icon className="h-7 w-7 text-white" />
                          </div>
                        </div>

                        {/* 内容 */}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 邀请码提示 */}
                  <Alert variant="default" className="bg-gradient-to-r from-primary/5 to-primary-light/5 border-primary/20" showIcon={false}>
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <AlertTitle className="text-primary mb-2">专属邀请码</AlertTitle>
                        <AlertDescription>
                          注册时填写邀请码{" "}
                          <code className="mx-1 px-2 py-1 rounded bg-primary/10 text-primary font-mono font-bold">
                            OKXSTART
                          </code>
                          可享手续费折扣等专属优惠
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>

                  {/* 截图占位 */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <span className="text-gray-500">注册流程演示图</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* iOS 下载 */}
              <TabsContent value="ios">
                <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <Download className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">iOS 下载与安装</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          适用于 iPhone 和 iPad
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <Alert variant="default" className="mb-8" showIcon={false}>
                      <AlertTitle>提示</AlertTitle>
                      <AlertDescription>
                        中国区 App Store 未上架，需使用非中国区 Apple ID 下载
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-6">
                      {[
                        {
                          title: "获取非中国区 Apple ID",
                          desc: "建议使用美区、港区或台区账号",
                        },
                        {
                          title: "切换 App Store 账号",
                          desc: "设置 → 顶部账户 → 媒体与购买项目 → 登录新账号",
                        },
                        {
                          title: "下载 OKX App",
                          desc: "在 App Store 搜索 \"OKX\"，认准开发者 \"OKX MALTA LTD\"",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4 group">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl h-64 flex items-center justify-center mt-8">
                      <span className="text-gray-500">iOS 下载截图</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Android 下载 */}
              <TabsContent value="android">
                <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                        <Download className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Android 下载与安装</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          适用于 Android 手机和平板
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <Alert variant="warning" className="mb-8" showIcon={false}>
                      <AlertTitle>安全提示</AlertTitle>
                      <AlertDescription>
                        请务必从 OKX 官网下载 APK，避免使用第三方来源
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-6">
                      {[
                        { title: "访问 OKX 官网", desc: "用手机浏览器打开官网，点击「下载 App」" },
                        { title: "下载 APK", desc: "选择 Android 版本，等待下载完成" },
                        { title: "允许安装", desc: "系统会提示「不允许安装未知应用」，点击「设置」→ 允许此来源" },
                        { title: "完成安装", desc: "点击 APK 文件，按提示安装" },
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4 group">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl h-64 flex items-center justify-center mt-8">
                      <span className="text-gray-500">Android 安装截图</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 新手教程 */}
              <TabsContent value="tutorial">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "快捷买币",
                      desc: "一键完成法币到加密货币的兑换",
                      icon: Zap,
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      title: "现货交易",
                      desc: "币币交易，支持限价单、市价单",
                      icon: TrendingUp,
                      color: "from-cyan-500 to-blue-500",
                    },
                    {
                      title: "Web3 钱包",
                      desc: "使用内置 Web3 钱包体验 DeFi、NFT",
                      icon: Wallet,
                      color: "from-green-500 to-teal-500",
                    },
                    {
                      title: "资产管理",
                      desc: "查看资产、充值、提现、划转",
                      icon: Lock,
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="group border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                    >
                      <CardHeader className={`bg-gradient-to-br ${item.color} p-6`}>
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.icon className="h-7 w-7 text-white" />
                          </div>
                          <CardTitle className="text-white text-xl">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {item.desc}
                        </p>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl h-32 flex items-center justify-center">
                          <span className="text-xs text-gray-500">教程示意图</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* 费率 & 优惠 */}
              <TabsContent value="fees">
                <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-light/10 border-b border-gray-200 dark:border-gray-800">
                    <CardTitle className="text-2xl">费率 & 专属优惠说明</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-primary/20">
                            <th className="text-left py-4 px-4 font-semibold">交易类型</th>
                            <th className="text-left py-4 px-4 font-semibold">Maker 费率</th>
                            <th className="text-left py-4 px-4 font-semibold">Taker 费率</th>
                            <th className="text-left py-4 px-4 font-semibold">优惠额度</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                            <td className="py-4 px-4">现货交易</td>
                            <td className="py-4 px-4">0.08%</td>
                            <td className="py-4 px-4">0.1%</td>
                            <td className="py-4 px-4">
                              <Badge className="bg-primary/10 text-primary border-0">
                                额外优惠
                              </Badge>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                            <td className="py-4 px-4">合约交易</td>
                            <td className="py-4 px-4">0.015%</td>
                            <td className="py-4 px-4">0.05%</td>
                            <td className="py-4 px-4">
                              <Badge className="bg-primary/10 text-primary border-0">
                                额外优惠
                              </Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <Alert variant="default" className="bg-gradient-to-r from-primary/5 to-primary-light/5 border-primary/20" showIcon={false}>
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <AlertTitle className="text-primary mb-2">优惠说明</AlertTitle>
                          <AlertDescription>
                            使用本站邀请码注册，您的手续费标准不变。
                            通过专属链接注册的用户可享受平台提供的手续费折扣优惠，详见
                            <a href="/disclosure" className="underline ml-1 font-medium">
                              《信息披露》
                            </a>
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* FAQ */}
              <TabsContent value="faq">
                <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-light/10 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg">
                        <HelpCircle className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl">常见问题</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <Accordion>
                      <AccordionItem title="OKX 和 Binance 有什么区别？">
                        OKX 在中文服务、界面友好度上更胜一筹，且集成了 Web3 钱包；
                        Binance 交易量更大、币种更全。两者都是业内头部平台，可根据个人偏好选择。
                      </AccordionItem>

                      <AccordionItem title="KYC 需要准备什么？">
                        身份证或护照，以及一部支持摄像头的设备进行人脸识别。
                        确保证件清晰、未过期，且拍摄环境光线充足。
                      </AccordionItem>

                      <AccordionItem title="如何使用快捷买币？">
                        进入 App 首页 → 点击「买币」→ 选择币种和金额 → 选择支付方式（银行卡/支付宝/微信）→ 完成付款。
                        通常 1-5 分钟到账。
                      </AccordionItem>

                      <AccordionItem title="提现到银行卡要多久？">
                        需先将加密货币卖出为法币（CNY），再申请提现到银行卡。
                        通常 1-3 个工作日到账，具体时间取决于银行处理速度。
                      </AccordionItem>

                      <AccordionItem title="如何开启双重验证（2FA）？">
                        设置 → 安全中心 → 谷歌验证器 → 下载 Google Authenticator App → 扫描二维码 → 输入验证码完成绑定。
                        建议同时备份密钥，防止手机丢失。
                      </AccordionItem>

                      <AccordionItem title="如何联系 OKX 客服？">
                        App 内右下角「我的」→「帮助与反馈」→「在线客服」；
                        网页版右下角聊天图标；支持 24/7 中文客服。
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[32px] p-12 text-center overflow-hidden shadow-2xl">
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">准备开始了吗？</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  立即注册 OKX
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  使用专属邀请码注册，享受手续费折扣等专属优惠
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-base px-8 h-12 bg-white hover:bg-gray-100 text-gray-900 border-0 shadow-xl"
                    asChild
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      立即注册
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="text-base px-8 h-12 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50"
                    asChild
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      下载 App
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
