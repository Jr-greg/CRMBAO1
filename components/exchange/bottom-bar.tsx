import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-blue-50 dark:bg-blue-950/90 border-t border-blue-200 dark:border-blue-900 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-blue-900 dark:text-blue-300 flex-1">
            <strong>友情提示：</strong>
            本页面链接由合作平台提供。使用这些链接注册不会增加您的任何费用，且可能享受专属优惠。
          </p>
          <Link href="/disclosure">
            <Button variant="outline" size="sm" className="text-xs shrink-0">
              了解更多
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


