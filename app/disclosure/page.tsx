import { Metadata } from "next";
import { Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "信息披露与风险提示 | 入门宝",
  description: "详细的合作关系说明、风险提示、内容来源与审核说明，以及联系方式。",
};

export default function DisclosurePage() {
  return (
    <>
      {/* Hero 区域 - 简化版 */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">透明 · 合规 · 负责</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              信息披露与风险提示
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              我们致力于透明、负责地提供教育服务
            </p>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* 商业关系披露 */}
            <div id="partnership">
              <h2 className="text-3xl font-bold mb-6">商业合作关系说明</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-3 mt-8">合作伙伴关系</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  本网站与部分加密货币交易平台建立了商业合作关系。
                  我们会在相关页面提供这些平台的注册链接和邀请码。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-8">对用户的影响</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>重要声明：</strong>使用本站提供的链接和邀请码<strong>不会增加</strong>您的任何费用。
                  您支付的手续费标准与直接注册完全相同。部分平台会为通过特定链接注册的用户提供额外的手续费折扣或其他专属优惠。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-8">平台推荐标准</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  我们仅推荐符合以下标准的交易平台：
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>在行业内有良好声誉和较长运营历史</li>
                  <li>具备完善的安全措施和用户资金保护机制</li>
                  <li>提供良好的用户体验和客户服务</li>
                  <li>合规经营，接受主流地区监管</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  商业合作关系不会影响我们的客观评价。我们会在教程中如实指出各平台的优缺点，
                  帮助您根据自身需求做出最适合的选择。
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-8">网站运营支持</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  本站通过以下方式维持运营：
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>平台合作伙伴计划</li>
                  <li>广告展示（如适用）</li>
                  <li>用户自愿支持与赞助</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  所有收入用于网站维护、内容创作、工具开发和团队运营，以确保持续为用户提供高质量的免费教育内容。
                </p>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mt-8">
                  <p className="text-sm font-semibold text-primary mb-2">透明原则</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    我们承诺在涉及商业合作的页面进行适当标注，保持信息透明。
                    如您对我们的商业关系有任何疑问，欢迎通过下方联系方式与我们沟通。
                  </p>
                </div>
              </div>
            </div>

            {/* 风险提示 */}
            <div id="risk">
              <h2 className="text-3xl font-bold mb-6">风险提示</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">重要风险警示</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        加密货币市场波动极大，价格可能在短时间内大幅上涨或下跌。
                        投资加密货币存在本金全部损失的风险。请务必谨慎评估自身风险承受能力。
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">主要风险</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>市场风险：</strong>价格波动可能导致亏损</li>
                  <li><strong>技术风险：</strong>私钥丢失、黑客攻击、智能合约漏洞等</li>
                  <li><strong>政策风险：</strong>各国监管政策可能变化</li>
                  <li><strong>流动性风险：</strong>部分币种可能难以快速变现</li>
                  <li><strong>操作风险：</strong>转账错误、网络选择错误可能导致资产丢失</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-8">投资建议</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>仅投资你能承受损失的金额</li>
                  <li>不要借钱或使用杠杆投资</li>
                  <li>做好充分研究，不要盲目跟风</li>
                  <li>分散投资，不要把所有资金放在一个币种或平台</li>
                  <li>定期审视投资组合，及时止损</li>
                </ul>

                <p className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  本网站提供的所有信息仅供教育和参考，不构成投资建议、财务建议或任何形式的推荐。
                  投资决策应由你自行做出，我们不对因使用本站信息而产生的任何损失负责。
                </p>
              </div>
            </div>

            {/* 内容来源与审核 */}
            <div id="content">
              <h2 className="text-3xl font-bold mb-6">内容来源与审核</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-3 mt-8">内容来源</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  本站内容来源于：
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>各交易所官方文档与帮助中心</li>
                  <li>公开的行业研究报告与白皮书</li>
                  <li>我们团队的实际操作经验与测试</li>
                  <li>社区反馈与用户案例</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-8">内容审核</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  我们的内容制作流程：
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>资料收集与核实</li>
                  <li>实际操作测试</li>
                  <li>内容编写与多人审核</li>
                  <li>定期更新与维护</li>
                </ul>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mt-8 space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>最后更新：</strong>2024 年 10 月
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>编辑团队：</strong>加密货币从业者、技术工程师、内容创作者
                  </p>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mt-8">
                  <p className="text-sm font-semibold text-primary mb-2">免责声明</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    尽管我们努力确保信息准确，但加密货币行业变化迅速，部分内容可能过时或存在偏差。
                    请以交易所官方信息为准，并在操作前自行核实。
                  </p>
                </div>
              </div>
            </div>

            {/* 联系与投诉 */}
            <div id="contact">
              <h2 className="text-3xl font-bold mb-6">联系与投诉</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-3 mt-8">如何联系我们</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  如果你有任何问题、建议或投诉，欢迎通过以下方式与我们联系：
                </p>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">邮箱</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">support@crypto-starter-guide.com</p>
                    <p className="text-xs text-gray-500 mt-1">（示例邮箱，实际请替换）</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">工作时间</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">周一至周五 9:00-18:00（北京时间）</p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">响应时间</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">我们将在 1-3 个工作日内回复</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">投诉处理</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  如果你认为我们的内容存在错误、误导或不当之处，请通过上述邮箱联系我们，并提供：
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>你的姓名或昵称（可匿名）</li>
                  <li>具体的页面链接或内容描述</li>
                  <li>问题说明与证据（如有）</li>
                  <li>你的联系方式（用于回复）</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  我们将认真对待每一个投诉，并在核实后及时更正或补充相关内容。
                </p>
              </div>
            </div>

            {/* 页脚声明 */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>法律声明：</strong>本网站内容受版权保护。未经授权，请勿转载或用于商业用途。
                使用本站内容即表示你同意我们的服务条款与隐私政策。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


