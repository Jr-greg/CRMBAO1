"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Check } from "lucide-react";

interface FloatingCTAProps {
  exchangeName: string;
  inviteCode: string;
}

export function FloatingCTA({ exchangeName, inviteCode }: FloatingCTAProps) {
  const [copied, setCopied] = React.useState(false);

  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
      <div className="bg-white dark:bg-card-dark rounded-2xl shadow-2xl p-4 space-y-3 border border-border-light dark:border-border-dark w-48">
        <div className="text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
            专属邀请码
          </p>
          <div className="bg-primary/10 rounded-lg p-2 mb-2">
            <code className="text-sm font-mono font-bold text-primary">
              {inviteCode}
            </code>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
            onClick={copyInviteCode}
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                已复制
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                复制邀请码
              </>
            )}
          </Button>
        </div>

        <Button
          className="w-full text-xs"
          size="sm"
          asChild
        >
          <a
            href="#"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            去注册
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>

        <Button
          variant="secondary"
          className="w-full text-xs"
          size="sm"
          asChild
        >
          <a
            href="#"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            下载 App
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
}


