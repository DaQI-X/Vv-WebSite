#!/usr/bin/env bash
# Vv 官网部署：本地 generate → 直传 Cloudflare Pages（本站不走 Git 集成部署）
#
#   ./scripts/deploy.sh              部署到 dev 分支 → https://dev.vv-transcribe.pages.dev（预览）
#   ./scripts/deploy.sh main         部署到 main 分支 = 生产 https://vvscribe.com
#   ./scripts/deploy.sh main --yes   跳过交互确认（仅在已明确同意这次部署时使用）
set -euo pipefail

cd "$(dirname "$0")/.."

BRANCH="${1:-dev}"
CONFIRM="${2:-}"

if [ "$BRANCH" != "dev" ] && [ "$BRANCH" != "main" ]; then
  echo "分支只能是 dev（预览）或 main（生产），收到：$BRANCH" >&2
  exit 2
fi

if [ "$BRANCH" = "main" ]; then
  TARGET="生产 https://vvscribe.com"
else
  TARGET="预览 https://dev.vv-transcribe.pages.dev"
fi

if [ "$CONFIRM" != "--yes" ]; then
  read -r -p "即将构建并部署到 $BRANCH（$TARGET），输入 yes 继续: " REPLY
  if [ "$REPLY" != "yes" ]; then
    echo "已取消，未部署"
    exit 1
  fi
fi

echo "==> pnpm run generate"
pnpm run generate

echo "==> 上传 .output/public 到 $BRANCH（$TARGET）"
npx --yes wrangler pages deploy .output/public \
  --project-name=vv-transcribe \
  --branch="$BRANCH" \
  --commit-dirty=true
