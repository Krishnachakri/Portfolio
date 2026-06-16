<#
  PowerShell helper to build the Next.js app, start it, run Lighthouse (headless),
  and then stop the server. Run this from the repository root in PowerShell.

  Usage:
    .\scripts\run-lighthouse.ps1

  Requirements:
  - Node.js and npm installed
  - Chrome or Chromium available on PATH
#>

$ErrorActionPreference = 'Stop'

Write-Host "Installing dependencies (skip if already installed)..."
# Use legacy-peer-deps to avoid peer dependency resolution conflicts during install
npm install --legacy-peer-deps

Write-Host "Starting Next dev server (background) to avoid production prerender issues..."
# Use dev server to avoid build-time prerendering errors while debugging
$proc = Start-Process -FilePath npm -ArgumentList 'run','dev' -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 12

Write-Host "Running Lighthouse (this may take a minute)..."
npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=lh-report.json --chrome-flags='--headless' --quiet

Write-Host "Lighthouse report saved to lh-report.json"

Write-Host "Stopping server..."
try { $proc | Stop-Process -Force } catch { }

Write-Host "Done."
